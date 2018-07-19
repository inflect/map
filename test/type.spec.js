import { coerce, parseBoolean } from '../src/utils/type';

describe('coerce', () => {
  it('converts types properly', () => {
    const stringyObject = {
      dotRadius: '2.34',
      id: 'boognish',
      lat: '4.24',
      lng: '-29.34',
      scrollZoom: 'true',
      static: 'false',
      theme: 'dark', 
    };
    const correctObject = {
      dotRadius: 2.34,
      id: 'boognish',
      lat: 4.24,
      lng: -29.34,
      scrollZoom: true,
      static: false,
      theme: 'dark', 
    };
    expect(coerce(stringyObject)).toEqual(correctObject);
  });
});

describe('parseBoolean', () => {
  it('returns true for truthy values', () => {
    expect(parseBoolean(true)).toBe(true);
    expect(parseBoolean('true')).toBe(true);
    expect(parseBoolean(1)).toBe(true);
    expect(parseBoolean('1')).toBe(true);
    expect(parseBoolean(false)).toBe(false);
    expect(parseBoolean('false')).toBe(false);
    expect(parseBoolean(0)).toBe(false);
    expect(parseBoolean('0')).toBe(false);
    expect(parseBoolean(undefined)).toBe(false);
    expect(parseBoolean(null)).toBe(false);
    expect(parseBoolean('')).toBe(false);
  });
});
