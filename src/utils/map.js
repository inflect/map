// @flow
import mapboxgl from 'mapbox-gl';
import { point, featureCollection } from '@turf/helpers';
import { getElement } from './dom';
import { type Config } from './config';

export const getMapStyle = (theme: string): string => {
  let style;
  switch (theme) {
    case 'dark':
      style = 'dark-v9';
      break;
    case 'day':
      style = 'streets-v10';
      break;
    case 'light':
      style = 'light-v9';
      break;
    case 'night':
      style = 'navigation-guidance-night-v2';
      break;
    case 'satellite':
      style = 'satellite-v9';
      break;
    default:
      style = 'light-v9';
      break;
  }
  return `mapbox://styles/mapbox/${style}?optimize=true`;
};

export const getGeoJson = (pops: Object[]) => {
  const points = pops.filter(pop => pop.building.lng && pop.building.lat).map(pop => {
    const properties = {
      address: pop.building.address || '',
      city: pop.building.city || '',
      country_name: pop.building.country_name || '',
      name: pop.name || '',
      slug: pop.slug || '',
      id: pop.uuid || '',
      permalink: pop.permalink || '',
      url: pop.url || '',
      state: pop.building.state || '',
      suite: pop.building_location || '',
      zip_code: pop.building.zip_code || '',
    };

    if (pop.additionalProperties) {
      Object.assign(properties, pop.additionalProperties);
    }

    return point([pop.building.lng, pop.building.lat], properties);
  });
  return featureCollection(points);
};

export const genLayer = (name: string, config: Config): Object => ({
  id: name,
  type: 'circle',
  source: name,
  paint: {
    'circle-radius': config.dotRadius,
    'circle-radius-transition': {
      duration: 150,
    },
    'circle-color': config.dotColor,
    'circle-color-transition': {
      duration: 150,
    },
    'circle-stroke-width': config.dotBorderWidth,
    'circle-stroke-width-transition': {
      duration: 150,
    },
    'circle-stroke-color': config.dotBorderColor,
    'circle-stroke-color-transition': {
      duration: 150,
    },
  },
});

export const getBounds = (pops: Object[]) => {
  const bounds = new mapboxgl.LngLatBounds();
  if (pops.length === 0) return bounds.extend([0, 0]);
  pops.forEach(pop => bounds.extend([pop.building.lng, pop.building.lat]));
  return bounds;
};

export const removeSource = (name: string, map: Object) => {
  if (map.getLayer(name)) {
    map.removeLayer(name);
    map.removeSource(name);
  }
};

export const getPopupMarkup = (features: Object[], token: string) => {
  const p = features[0].properties;
  const div = document.createElement('div');
  div.className = 'inflect-map-popup';
  div.innerHTML = `
    <div class="inflect-map-popup">
      <a href="${p.url}?mapToken=${token}" target="_blank">${p.name}</a>
      <p>${p.address}</p>
      <p>${p.suite}</p>
      <p>${p.city}, ${p.state} ${p.zip_code}</p>
      <p>${p.country_name}</p>
    </div>
  `;

  return div;
};

export const showPopup = (features: Object[], map: Object, token: string, popup?: Object[] => string | HTMLElement) => {
  if (features.length) {
    const popupMarkup = popup ? popup(features) : getPopupMarkup(features, token);
    new mapboxgl.Popup({ offset: 16, closeButton: false })
      .setLngLat(features[0].geometry.coordinates)
      .setDOMContent(popupMarkup)
      .addTo(map);
  }
};

// map viewport width / magic coefficient = minzoom level to prevent world x-repeats
export const getMinZoomToPreventWorldRepeat = (id: string): number => {
  const containerWidth = getElement(id).clientWidth;
  // this coefficient was found by manually testing optimal zoom levels at different browser widths
  const MAGIC_MINZOOM_COEFFICIENT = 1000;
  return containerWidth / MAGIC_MINZOOM_COEFFICIENT;
};
