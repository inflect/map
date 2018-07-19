import { getMapStyle } from '../src/utils/map';

describe('getMapStyle', () => {
  it('gets the style URL from a given theme', () => {
    const dark = getMapStyle('dark');
    const day = getMapStyle('day');
    const light = getMapStyle('light');
    const night = getMapStyle('night');
    const satellite = getMapStyle('satellite');

    expect(dark).toBe('mapbox://styles/mapbox/dark-v9?optimize=true');
    expect(day).toBe('mapbox://styles/mapbox/streets-v10?optimize=true');
    expect(light).toBe('mapbox://styles/mapbox/light-v9?optimize=true');
    expect(night).toBe('mapbox://styles/mapbox/navigation-guidance-night-v2?optimize=true');
    expect(satellite).toBe('mapbox://styles/mapbox/satellite-v9?optimize=true');
  });
});
