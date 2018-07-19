// @flow
import { mapboxCSS, inflectCSS } from './css';
import { getElement, appendChild } from './dom';
import { logo } from './image';

export const insertMapboxCSS = () => {
  const id = 'inflect-map-stylesheet';
  if (!getElement(id).id) {
    // inflect extended style
    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = mapboxCSS + inflectCSS;
    appendChild(style, document.head);
  }
};

export const setElementStyle = (id: string, style: string) => {
  getElement(id).style.cssText = style;
};

export const insertInflectLogo = (id: string) => {
  // image
  const img = document.createElement('img');
  img.src = logo;
  img.alt = 'Inflect Global Marketplace';
  img.width = 106;
  img.height = 32;

  // link
  const anchor = document.createElement('a');
  anchor.href = 'https://inflect.com';
  anchor.title = 'Powered by the Inflect Global Marketplace';
  anchor.className = 'inflect-map-logo';
  anchor.target = '_blank';

  anchor.appendChild(img);
  appendChild(anchor, getElement(id));
};
