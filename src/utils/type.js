// @flow
import type { Config } from './config';

export const parseBoolean = (val: any): boolean => val === true || val === 'true' || val === 1 || val === '1';

export const coerce = (config: Config): Config => {
  const floats = [
    'cameraDuration',
    'dotBorderWidth',
    'dotRadius',
    'lat',
    'lng',
    'maxZoom',
    'minZoom',
    'zoom',
  ];
  const bools = [
    'autoCamera',
    'scale',
    'scrollZoom',
    'static',
  ];

  const obj = {};
  Object.keys(config).forEach(key => {
    if (floats.indexOf(key) > -1) {
      obj[key] = parseFloat(config[key]);
    } else if (bools.indexOf(key) > -1) {
      obj[key] = parseBoolean(config[key]);
    } else {
      obj[key] = config[key];
    }
  });

  // flow-disable-next-line
  return obj;
};
