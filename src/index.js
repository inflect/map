// @flow
import mapboxgl from 'mapbox-gl';
import fetch from 'unfetch';

// utils
import { type Config, type PassedConfig, mergeWithDefaultConfig } from './utils/config';
import { getElement, renderBacklinks } from './utils/dom';
import {
  getMapStyle,
  getGeoJson,
  genLayer,
  getBounds,
  showPopup,
  getMinZoomToPreventWorldRepeat,
  removeSource,
} from './utils/map';
import { checkStatus, printError } from './utils/error';
import { insertMapboxCSS, setElementStyle, insertInflectLogo } from './utils/style';
import { coerce } from './utils/type';
import ResetZoomControl from './zoom';

// auto-polyfill promises for older browsers
require('es6-promise/auto');

class InflectMap {
  _clickLayer: string;

  _config: Config;

  _hasWebGL: boolean;

  _hoverLayers: string[];

  _pops: Object[];

  mapbox: Object;
  
  constructor() {
    this._hasWebGL = mapboxgl && mapboxgl.supported();
    this._hoverLayers = [];
  }

  init(passedConfig: PassedConfig) {
    const config = coerce(mergeWithDefaultConfig(passedConfig));
    this._config = config;
    if (!getElement(config.id).id) {
      console.error(`Container element "#${config.id}" cannot be found.`);
      return;
    }

    if (!config.pops) {
      this.fetchPops(config.apiBase, config.token);
    } else {
      this._pops = config.pops;
    }

    setElementStyle(config.id, `width: ${config.width}; height: ${config.height}; overflow: auto`);
    if (this._hasWebGL) {
      insertMapboxCSS();
      this.startMapbox();
      insertInflectLogo(config.id);
    }
  }

  fetchPops(apiBase: string, token: string, callback: Function = () => {}) {
    // eslint-disable-next-line compat/compat
    const promise = fetch(`${apiBase}/api/v1/search/map/${token}`, {
      headers: {
        Referer: document.location.href,
        // flow-disable-next-line
        'X-Version': __VERSION__,
      },
    })
      .then(checkStatus)
      .then(r => r.json())
      .then(datacenters => {
        this._pops = datacenters;
        if (!Array.isArray(this._pops)) {
          console.error(`No data points associated with map token ${token}, hiding Inflect Map.`);
          getElement(this._config.id).style.display = 'none';
        }
        // console.log(this._pops);
        if (!this._hasWebGL) {
          renderBacklinks(this._config.id, datacenters);
        }
        callback();
      });
    // workaround for IE9
    // eslint-disable-next-line
    promise['catch'](errorCode => {
      printError(errorCode, token);
      getElement(this._config.id).style.display = 'none';
    });
  }

  startMapbox() {
    const config = this._config;
    mapboxgl.accessToken = 'pk.eyJ1IjoianVlbGplciIsImEiOiJjamlubTI3OTEwZ2VvM3FwOGk2emo0cmpmIn0.o510POcax_vTxKo3JLxcsA';
    this.mapbox = new mapboxgl.Map({
      attributionControl: false,
      center: [config.lng, config.lat],
      container: config.id,
      dragRotate: false,
      interactive: !config.static,
      maxZoom: config.maxZoom,
      minZoom: config.minZoom || getMinZoomToPreventWorldRepeat(config.id),
      scrollZoom: config.scrollZoom,
      style: getMapStyle(config.theme),
      touchZoomRotate: false,
      zoom: config.zoom,
    });

    this.mapbox.on('load', event => {
      const interval = setInterval(() => {
        if (this._pops) {
          clearInterval(interval);
          this.renderPopsOnMap();
        }
      }, 20);

      // controls
      this.mapbox.addControl(new mapboxgl.AttributionControl({ compact: true }));
      if (!config.static) {
        this.mapbox.addControl(new mapboxgl.NavigationControl({ showCompass: false }));
        this.mapbox.addControl(new ResetZoomControl(() => this.rebound()));
        // some dom manipulation to move the reset zoom control to the navigation control grouping
        const container = getElement(this._config.id);
        const resetZoomControl = container.getElementsByClassName('inflect-map-zoom-reset')[0];
        container.getElementsByClassName('mapboxgl-ctrl-group')[0].appendChild(resetZoomControl);
      }
      if (config.scale) {
        this.mapbox.addControl(new mapboxgl.ScaleControl({ maxWidth: 100, unit: config.unit }), 'bottom-right');
      }

      this.mapbox.on('mousemove', e => {
        const features = this.mapbox.queryRenderedFeatures(e.point, { layers: ['main'] });
        this.mapbox.getCanvas().style.cursor = features.length ? 'pointer' : '';
        this.dot('hover', features);

        this._config.onHover(features);
      });

      this.mapbox.on('click', e => {
        const features = this.mapbox.queryRenderedFeatures(e.point, { layers: ['main'] });
        this.dot('click', features);
        showPopup(features, this.mapbox, this._config.token, this._config.popup);

        this._config.onClick(features);
      });

      this.mapbox.on('moveend', e => {
        this._config.onMoveEnd(e);
      });

      if (this._config.autoCamera) {
        this.rebound();
      }

      this._config.onLoad(event);
    });
  }

  removeOldLayers(type: 'click' | 'hover') {
    if (type === 'hover') {
      this._hoverLayers.filter(name => name !== this._clickLayer).forEach(name => {
        if (this.mapbox.getLayer(name)) {
          this.mapbox.setPaintProperty(name, 'circle-radius', this._config.dotRadius);
        }
        setTimeout(() => {
          removeSource(name, this.mapbox);
          this._hoverLayers = this._hoverLayers.filter(layer => layer !== name);
        }, 150);
      });
    } else if (this._clickLayer) {
      this.mapbox.setPaintProperty(this._clickLayer, 'circle-radius', this._config.dotRadius);
      setTimeout(() => {
        removeSource(this._clickLayer, this.mapbox);
        this._clickLayer = '';
      }, 150);
    }
  }

  dot(type: 'click' | 'hover', features: Object[]) {
    if (features.length) {
      const name = `dot-${features[0].properties.id}`;
      if (type === 'hover' && this._hoverLayers.indexOf(name) === -1) {
        this.removeOldLayers(type);
        this.renderPopsOnMap(name, this._pops.filter(({ uuid }) => uuid === features[0].properties.id));
        this.mapbox.setPaintProperty(name, 'circle-radius', this._config.dotRadius * 1.3);
        this._hoverLayers.push(name);
      } else if (type === 'click' && this._hoverLayers.indexOf(name) !== -1) {
        if (this._clickLayer) {
          this.mapbox.setPaintProperty(this._clickLayer, 'circle-radius', this._config.dotRadius);
        }
        this.mapbox.setPaintProperty(name, 'circle-radius', this._config.dotRadius * 2);
        this._clickLayer = name;
      }
    } else if (this._hoverLayers.length > 0) {
      this.removeOldLayers(type);
    }
  }

  renderPopsOnMap(layerName?: string, pops?: Object[]) {
    const name = layerName || 'main';
    const layer = genLayer(name, this._config);
    const data = getGeoJson(pops || this._pops);
    const mapSource = this.mapbox.getSource(name);
    if (!mapSource) {
      this.mapbox.addSource(name, { type: 'geojson', data });
      this.mapbox.addLayer(layer, this._clickLayer);
    } else {
      mapSource.setData(data);
    }
  }

  rebound() {
    if (Array.isArray(this._pops) && this._pops.length > 0) {
      this.mapbox.fitBounds(getBounds(this._pops), {
        padding: 60,
        duration: this._config.cameraDuration,
      });
    }
  }

  set(options: Config) {
    const opts = coerce(options);
    const opt = (key: string): boolean => opts[key] !== undefined && opts[key] !== this._config[key];
    const applyPops = () => {
      this.renderPopsOnMap();
      if (this._config.autoCamera) {
        this.rebound();
      }
    };

    // token change
    if (opt('token')) {
      this.fetchPops(this._config.apiBase, opts.token, () => applyPops());
    }

    // pops change
    if (opt('pops')) {
      // flow-disable-next-line
      this._pops = opts.pops;
      applyPops();
    }

    // coordinate / zoom changes
    if (opt('lat') || opt('lng') || opt('zoom')) {
      const center = { 
        lat: opts.lat || this._config.lat,
        lng: opts.lng || this._config.lng,
      };
      this.mapbox.flyTo({
        center,
        zoom: opts.zoom || this._config.zoom,
      });
    }
    if (opt('minZoom')) {
      this.mapbox.setMinZoom(opts.minZoom);
    }
    if (opt('maxZoom')) {
      this.mapbox.setMaxZoom(opts.maxZoom);
    }

    // paint layer changes
    if (opt('dotColor')) {
      this.mapbox.setPaintProperty('main', 'circle-color', opts.dotColor);
    }
    if (opt('dotRadius')) {
      this.mapbox.setPaintProperty('main', 'circle-radius', opts.dotRadius);
    }
    if (opt('dotBorderColor')) {
      this.mapbox.setPaintProperty('main', 'circle-stroke-color', opts.dotBorderColor);
    }
    if (opt('dotBorderWidth')) {
      this.mapbox.setPaintProperty('main', 'circle-stroke-width', opts.dotBorderWidth);
    }

    // map interactivity
    if (opt('scrollZoom')) {
      if (opts.scrollZoom) {
        this.mapbox.scrollZoom.enable();
      } else {
        this.mapbox.scrollZoom.disable();
      }
    }

    // save as current config
    this._config = {
      ...this._config,
      ...opts,
    };
  }
}

module.exports = InflectMap;
