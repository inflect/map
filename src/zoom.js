// @flow
import { refresh } from './utils/image';

export default class ResetZoomControl {
  _map: ?Object;

  _resetFn: Function;

  _button: Element;

  constructor(resetFn: Function) {
    this._resetFn = resetFn;
  }

  zoomOut(e: Event) {
    e.preventDefault();
    if (this._map) {
      this._resetFn();
    }
  }

  onAdd(map: Object) {
    this._map = map;
    // eslint-disable-next-line react/button-has-type
    this._button = document.createElement('button');
    this._button.type = 'button';
    this._button.className = 'mapboxgl-ctrl-icon inflect-map-zoom-reset';
    this._button.innerHTML = refresh;
    this._button.onclick = e => this.zoomOut(e);

    return this._button;
  }

  onRemove() {
    // flow-disable-next-line
    this._button.parentNode.removeChild(this._button);
    this._map = undefined;
  }
}
