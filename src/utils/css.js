// @flow
export const mapboxCSS = `
  .mapboxgl-map {
    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
    overflow: hidden;
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .mapboxgl-map:-webkit-full-screen {
    width: 100%;
    height: 100%;
  }
  .mapboxgl-canary {
    background-color: salmon;
  }
  .mapboxgl-canvas-container.mapboxgl-interactive {
    cursor: -webkit-grab;
    cursor: -moz-grab;
    cursor: grab;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .mapboxgl-canvas-container.mapboxgl-interactive:active {
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: grabbing;
  }
  .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate,
  .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate .mapboxgl-canvas {
    touch-action: pan-x pan-y;
  }
  .mapboxgl-canvas-container.mapboxgl-touch-drag-pan,
  .mapboxgl-canvas-container.mapboxgl-touch-drag-pan .mapboxgl-canvas {
    touch-action: pinch-zoom;
  }
  .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan,
  .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan .mapboxgl-canvas {
    touch-action: none;
  }
  .mapboxgl-ctrl-top-left,
  .mapboxgl-ctrl-top-right,
  .mapboxgl-ctrl-bottom-left,
  .mapboxgl-ctrl-bottom-right { position: absolute; pointer-events: none; z-index: 2; }
  .mapboxgl-ctrl-top-left    { top: 0; left: 0; }
  .mapboxgl-ctrl-top-right   { top: 0; right: 0; }
  .mapboxgl-ctrl-bottom-left  { bottom: 0; left: 0; }
  .mapboxgl-ctrl-bottom-right { right: 0; bottom: 0; }
  .mapboxgl-ctrl { clear: both; pointer-events: auto; }
  .mapboxgl-ctrl-top-left .mapboxgl-ctrl    { margin: 10px 0 0 10px; float: left; }
  .mapboxgl-ctrl-top-right .mapboxgl-ctrl   { margin: 10px 10px 0 0; float: right; }
  .mapboxgl-ctrl-bottom-left .mapboxgl-ctrl  { margin: 0 0 10px 10px; float: left; }
  .mapboxgl-ctrl-bottom-right .mapboxgl-ctrl { margin: 0 10px 10px 0; float: right; }
  .mapboxgl-ctrl-group {
    border-radius: 4px;
    -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background: #fff;
  }
  .mapboxgl-ctrl-group > button {
    width: 30px;
    height: 30px;
    display: block;
    padding: 0;
    outline: none;
    border: 0;
    box-sizing: border-box;
    background-color: transparent;
    cursor: pointer;
  }
  .mapboxgl-ctrl-group > button + button {
    border-top: 1px solid #ddd;
  }
  .mapboxgl-ctrl > button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  .mapboxgl-ctrl > button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .mapboxgl-ctrl-icon,
  .mapboxgl-ctrl-icon > .mapboxgl-ctrl-compass-arrow {
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .mapboxgl-ctrl-icon {
    padding: 5px;
  }
  .mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-out {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath style='fill:%23333333;' d='m 7,9 c -0.554,0 -1,0.446 -1,1 0,0.554 0.446,1 1,1 l 6,0 c 0.554,0 1,-0.446 1,-1 0,-0.554 -0.446,-1 -1,-1 z'/%3E %3C/svg%3E");
  }
  .mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-in {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath style='fill:%23333333;' d='M 10 6 C 9.446 6 9 6.4459904 9 7 L 9 9 L 7 9 C 6.446 9 6 9.446 6 10 C 6 10.554 6.446 11 7 11 L 9 11 L 9 13 C 9 13.55401 9.446 14 10 14 C 10.554 14 11 13.55401 11 13 L 11 11 L 13 11 C 13.554 11 14 10.554 14 10 C 14 9.446 13.554 9 13 9 L 11 9 L 11 7 C 11 6.4459904 10.554 6 10 6 z'/%3E %3C/svg%3E");
  }
  a.mapboxgl-ctrl-logo {
    width: 85px;
    height: 21px;
    margin: 0 0 -3px -3px;
    display: block;
    background-repeat: no-repeat;
    cursor: pointer;
    background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 84.49 21' style='enable-background:new 0 0 84.49 21;' xml:space='preserve'%3E%3Cg%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M83.25,14.26c0,0.12-0.09,0.21-0.21,0.21h-1.61c-0.13,0-0.24-0.06-0.3-0.17l-1.44-2.39l-1.44,2.39 c-0.06,0.11-0.18,0.17-0.3,0.17h-1.61c-0.04,0-0.08-0.01-0.12-0.03c-0.09-0.06-0.13-0.19-0.06-0.28l0,0l2.43-3.68L76.2,6.84 c-0.02-0.03-0.03-0.07-0.03-0.12c0-0.12,0.09-0.21,0.21-0.21h1.61c0.13,0,0.24,0.06,0.3,0.17l1.41,2.36l1.4-2.35 c0.06-0.11,0.18-0.17,0.3-0.17H83c0.04,0,0.08,0.01,0.12,0.03c0.09,0.06,0.13,0.19,0.06,0.28l0,0l-2.37,3.63l2.43,3.67 C83.24,14.18,83.25,14.22,83.25,14.26z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M66.24,9.59c-0.39-1.88-1.96-3.28-3.84-3.28c-1.03,0-2.03,0.42-2.73,1.18V3.51c0-0.13-0.1-0.23-0.23-0.23h-1.4 c-0.13,0-0.23,0.11-0.23,0.23v10.72c0,0.13,0.1,0.23,0.23,0.23h1.4c0.13,0,0.23-0.11,0.23-0.23V13.5c0.71,0.75,1.7,1.18,2.73,1.18 c1.88,0,3.45-1.41,3.84-3.29C66.37,10.79,66.37,10.18,66.24,9.59L66.24,9.59z M62.08,13c-1.32,0-2.39-1.11-2.41-2.48v-0.06 c0.02-1.38,1.09-2.48,2.41-2.48s2.42,1.12,2.42,2.51S63.41,13,62.08,13z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M71.67,6.32c-1.98-0.01-3.72,1.35-4.16,3.29c-0.13,0.59-0.13,1.19,0,1.77c0.44,1.94,2.17,3.32,4.17,3.3 c2.35,0,4.26-1.87,4.26-4.19S74.04,6.32,71.67,6.32z M71.65,13.01c-1.33,0-2.42-1.12-2.42-2.51s1.08-2.52,2.42-2.52 c1.33,0,2.42,1.12,2.42,2.51S72.99,13,71.65,13.01L71.65,13.01z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M62.08,7.98c-1.32,0-2.39,1.11-2.41,2.48v0.06C59.68,11.9,60.75,13,62.08,13s2.42-1.12,2.42-2.51 S63.41,7.98,62.08,7.98z M62.08,11.76c-0.63,0-1.14-0.56-1.17-1.25v-0.04c0.01-0.69,0.54-1.25,1.17-1.25 c0.63,0,1.17,0.57,1.17,1.27C63.24,11.2,62.73,11.76,62.08,11.76z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M71.65,7.98c-1.33,0-2.42,1.12-2.42,2.51S70.32,13,71.65,13s2.42-1.12,2.42-2.51S72.99,7.98,71.65,7.98z M71.65,11.76c-0.64,0-1.17-0.57-1.17-1.27c0-0.7,0.53-1.26,1.17-1.26s1.17,0.57,1.17,1.27C72.82,11.21,72.29,11.76,71.65,11.76z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M45.74,6.53h-1.4c-0.13,0-0.23,0.11-0.23,0.23v0.73c-0.71-0.75-1.7-1.18-2.73-1.18 c-2.17,0-3.94,1.87-3.94,4.19s1.77,4.19,3.94,4.19c1.04,0,2.03-0.43,2.73-1.19v0.73c0,0.13,0.1,0.23,0.23,0.23h1.4 c0.13,0,0.23-0.11,0.23-0.23V6.74c0-0.12-0.09-0.22-0.22-0.22C45.75,6.53,45.75,6.53,45.74,6.53z M44.12,10.53 C44.11,11.9,43.03,13,41.71,13s-2.42-1.12-2.42-2.51s1.08-2.52,2.4-2.52c1.33,0,2.39,1.11,2.41,2.48L44.12,10.53z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M41.71,7.98c-1.33,0-2.42,1.12-2.42,2.51S40.37,13,41.71,13s2.39-1.11,2.41-2.48v-0.06 C44.1,9.09,43.03,7.98,41.71,7.98z M40.55,10.49c0-0.7,0.52-1.27,1.17-1.27c0.64,0,1.14,0.56,1.17,1.25v0.04 c-0.01,0.68-0.53,1.24-1.17,1.24C41.08,11.75,40.55,11.19,40.55,10.49z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M52.41,6.32c-1.03,0-2.03,0.42-2.73,1.18V6.75c0-0.13-0.1-0.23-0.23-0.23h-1.4c-0.13,0-0.23,0.11-0.23,0.23 v10.72c0,0.13,0.1,0.23,0.23,0.23h1.4c0.13,0,0.23-0.1,0.23-0.23V13.5c0.71,0.75,1.7,1.18,2.74,1.18c2.17,0,3.94-1.87,3.94-4.19 S54.58,6.32,52.41,6.32z M52.08,13.01c-1.32,0-2.39-1.11-2.42-2.48v-0.07c0.02-1.38,1.09-2.49,2.4-2.49c1.32,0,2.41,1.12,2.41,2.51 S53.4,13,52.08,13.01L52.08,13.01z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M52.08,7.98c-1.32,0-2.39,1.11-2.42,2.48v0.06c0.03,1.38,1.1,2.48,2.42,2.48s2.41-1.12,2.41-2.51 S53.4,7.98,52.08,7.98z M52.08,11.76c-0.63,0-1.14-0.56-1.17-1.25v-0.04c0.01-0.69,0.54-1.25,1.17-1.25c0.63,0,1.17,0.58,1.17,1.27 S52.72,11.76,52.08,11.76z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M36.08,14.24c0,0.13-0.1,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68c0-0.98-0.74-1.71-1.62-1.71 c-0.8,0-1.46,0.7-1.59,1.62l0.01,4.66c0,0.13-0.11,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68 c0-0.98-0.74-1.71-1.62-1.71c-0.85,0-1.54,0.79-1.6,1.8v4.48c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V6.74 c0.01-0.13,0.1-0.22,0.23-0.22h1.4c0.13,0,0.22,0.11,0.23,0.22V7.4c0.5-0.68,1.3-1.09,2.16-1.1h0.03c1.09,0,2.09,0.6,2.6,1.55 c0.45-0.95,1.4-1.55,2.44-1.56c1.62,0,2.93,1.25,2.9,2.78L36.08,14.24z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M84.34,13.59l-0.07-0.13l-1.96-2.99l1.94-2.95c0.44-0.67,0.26-1.56-0.41-2.02c-0.02,0-0.03,0-0.04-0.01 c-0.23-0.15-0.5-0.22-0.78-0.22h-1.61c-0.56,0-1.08,0.29-1.37,0.78L79.72,6.6l-0.34-0.56C79.09,5.56,78.57,5.27,78,5.27h-1.6 c-0.6,0-1.13,0.37-1.35,0.92c-2.19-1.66-5.28-1.47-7.26,0.45c-0.35,0.34-0.65,0.72-0.89,1.14c-0.9-1.62-2.58-2.72-4.5-2.72 c-0.5,0-1.01,0.07-1.48,0.23V3.51c0-0.82-0.66-1.48-1.47-1.48h-1.4c-0.81,0-1.47,0.66-1.47,1.47v3.75 c-0.95-1.36-2.5-2.18-4.17-2.19c-0.74,0-1.46,0.16-2.12,0.47c-0.24-0.17-0.54-0.26-0.84-0.26h-1.4c-0.45,0-0.87,0.21-1.15,0.56 c-0.02-0.03-0.04-0.05-0.07-0.08c-0.28-0.3-0.68-0.47-1.09-0.47h-1.39c-0.3,0-0.6,0.09-0.84,0.26c-0.67-0.3-1.39-0.46-2.12-0.46 c-1.83,0-3.43,1-4.37,2.5c-0.2-0.46-0.48-0.89-0.83-1.25c-0.8-0.81-1.89-1.25-3.02-1.25h-0.01c-0.89,0.01-1.75,0.33-2.46,0.88 c-0.74-0.57-1.64-0.88-2.57-0.88H28.1c-0.29,0-0.58,0.03-0.86,0.11c-0.28,0.06-0.56,0.16-0.82,0.28c-0.21-0.12-0.45-0.18-0.7-0.18 h-1.4c-0.82,0-1.47,0.66-1.47,1.47v7.5c0,0.82,0.66,1.47,1.47,1.47h1.4c0.82,0,1.48-0.66,1.48-1.48l0,0V9.79 c0.03-0.36,0.23-0.59,0.36-0.59c0.18,0,0.38,0.18,0.38,0.47v4.57c0,0.82,0.66,1.47,1.47,1.47h1.41c0.82,0,1.47-0.66,1.47-1.47 l-0.01-4.57c0.06-0.32,0.25-0.47,0.35-0.47c0.18,0,0.38,0.18,0.38,0.47v4.57c0,0.82,0.66,1.47,1.47,1.47h1.41 c0.82,0,1.47-0.66,1.47-1.47v-0.38c0.96,1.29,2.46,2.06,4.06,2.06c0.74,0,1.46-0.16,2.12-0.47c0.24,0.17,0.54,0.26,0.84,0.26h1.39 c0.3,0,0.6-0.09,0.84-0.26v2.01c0,0.82,0.66,1.47,1.47,1.47h1.4c0.82,0,1.47-0.66,1.47-1.47v-1.77c0.48,0.15,0.99,0.23,1.49,0.22 c1.7,0,3.22-0.87,4.17-2.2v0.52c0,0.82,0.66,1.47,1.47,1.47h1.4c0.3,0,0.6-0.09,0.84-0.26c0.66,0.31,1.39,0.47,2.12,0.47 c1.92,0,3.6-1.1,4.49-2.73c1.54,2.65,4.95,3.53,7.58,1.98c0.18-0.11,0.36-0.22,0.53-0.36c0.22,0.55,0.76,0.91,1.35,0.9H78 c0.56,0,1.08-0.29,1.37-0.78l0.37-0.61l0.37,0.61c0.29,0.48,0.81,0.78,1.38,0.78h1.6c0.81,0,1.46-0.66,1.45-1.46 C84.49,14.02,84.44,13.8,84.34,13.59L84.34,13.59z M35.86,14.47h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68 c0-0.98-0.74-1.71-1.62-1.71c-0.8,0-1.46,0.7-1.59,1.62l0.01,4.66c0,0.13-0.1,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23 V9.68c0-0.98-0.74-1.71-1.62-1.71c-0.85,0-1.54,0.79-1.6,1.8v4.48c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23 V6.74c0.01-0.13,0.11-0.22,0.23-0.22h1.4c0.13,0,0.22,0.11,0.23,0.22V7.4c0.5-0.68,1.3-1.09,2.16-1.1h0.03 c1.09,0,2.09,0.6,2.6,1.55c0.45-0.95,1.4-1.55,2.44-1.56c1.62,0,2.93,1.25,2.9,2.78l0.01,5.16C36.09,14.36,35.98,14.46,35.86,14.47 L35.86,14.47z M45.97,14.24c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V13.5c-0.7,0.76-1.69,1.18-2.72,1.18 c-2.17,0-3.94-1.87-3.94-4.19s1.77-4.19,3.94-4.19c1.03,0,2.02,0.43,2.73,1.18V6.74c0-0.13,0.1-0.23,0.23-0.23h1.4 c0.12-0.01,0.22,0.08,0.23,0.21c0,0.01,0,0.01,0,0.02v7.51h-0.01V14.24z M52.41,14.67c-1.03,0-2.02-0.43-2.73-1.18v3.97 c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.1-0.23-0.23V6.75c0-0.13,0.1-0.22,0.23-0.22h1.4c0.13,0,0.23,0.11,0.23,0.23v0.73 c0.71-0.76,1.7-1.18,2.73-1.18c2.17,0,3.94,1.86,3.94,4.18S54.58,14.67,52.41,14.67z M66.24,11.39c-0.39,1.87-1.96,3.29-3.84,3.29 c-1.03,0-2.02-0.43-2.73-1.18v0.73c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V3.51c0-0.13,0.1-0.23,0.23-0.23 h1.4c0.13,0,0.23,0.11,0.23,0.23v3.97c0.71-0.75,1.7-1.18,2.73-1.17c1.88,0,3.45,1.4,3.84,3.28C66.37,10.19,66.37,10.8,66.24,11.39 L66.24,11.39L66.24,11.39z M71.67,14.68c-2,0.01-3.73-1.35-4.17-3.3c-0.13-0.59-0.13-1.19,0-1.77c0.44-1.94,2.17-3.31,4.17-3.3 c2.36,0,4.26,1.87,4.26,4.19S74.03,14.68,71.67,14.68L71.67,14.68z M83.04,14.47h-1.61c-0.13,0-0.24-0.06-0.3-0.17l-1.44-2.39 l-1.44,2.39c-0.06,0.11-0.18,0.17-0.3,0.17h-1.61c-0.04,0-0.08-0.01-0.12-0.03c-0.09-0.06-0.13-0.19-0.06-0.28l0,0l2.43-3.68 L76.2,6.84c-0.02-0.03-0.03-0.07-0.03-0.12c0-0.12,0.09-0.21,0.21-0.21h1.61c0.13,0,0.24,0.06,0.3,0.17l1.41,2.36l1.41-2.36 c0.06-0.11,0.18-0.17,0.3-0.17h1.61c0.04,0,0.08,0.01,0.12,0.03c0.09,0.06,0.13,0.19,0.06,0.28l0,0l-2.38,3.64l2.43,3.67 c0.02,0.03,0.03,0.07,0.03,0.12C83.25,14.38,83.16,14.47,83.04,14.47L83.04,14.47L83.04,14.47z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M10.5,1.24c-5.11,0-9.25,4.15-9.25,9.25s4.15,9.25,9.25,9.25s9.25-4.15,9.25-9.25 C19.75,5.38,15.61,1.24,10.5,1.24z M14.89,12.77c-1.93,1.93-4.78,2.31-6.7,2.31c-0.7,0-1.41-0.05-2.1-0.16c0,0-1.02-5.64,2.14-8.81 c0.83-0.83,1.95-1.28,3.13-1.28c1.27,0,2.49,0.51,3.39,1.42C16.59,8.09,16.64,11,14.89,12.77z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M10.5-0.01C4.7-0.01,0,4.7,0,10.49s4.7,10.5,10.5,10.5S21,16.29,21,10.49C20.99,4.7,16.3-0.01,10.5-0.01z M10.5,19.74c-5.11,0-9.25-4.15-9.25-9.25s4.14-9.26,9.25-9.26s9.25,4.15,9.25,9.25C19.75,15.61,15.61,19.74,10.5,19.74z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M14.74,6.25C12.9,4.41,9.98,4.35,8.23,6.1c-3.16,3.17-2.14,8.81-2.14,8.81s5.64,1.02,8.81-2.14 C16.64,11,16.59,8.09,14.74,6.25z M12.47,10.34l-0.91,1.87l-0.9-1.87L8.8,9.43l1.86-0.9l0.9-1.87l0.91,1.87l1.86,0.9L12.47,10.34z'/%3E %3Cpolygon class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' points='14.33,9.43 12.47,10.34 11.56,12.21 10.66,10.34 8.8,9.43 10.66,8.53 11.56,6.66 12.47,8.53 '/%3E%3C/g%3E%3C/svg%3E");
  }
  a.mapboxgl-ctrl-logo.mapboxgl-compact {
    width: 21px;
    height: 21px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 21 21' style='enable-background:new 0 0 21 21;' xml:space='preserve'%3E%3Cg transform='translate(0,0.01)'%3E%3Cpath d='m 10.5,1.24 c -5.11,0 -9.25,4.15 -9.25,9.25 0,5.1 4.15,9.25 9.25,9.25 5.1,0 9.25,-4.15 9.25,-9.25 0,-5.11 -4.14,-9.25 -9.25,-9.25 z m 4.39,11.53 c -1.93,1.93 -4.78,2.31 -6.7,2.31 -0.7,0 -1.41,-0.05 -2.1,-0.16 0,0 -1.02,-5.64 2.14,-8.81 0.83,-0.83 1.95,-1.28 3.13,-1.28 1.27,0 2.49,0.51 3.39,1.42 1.84,1.84 1.89,4.75 0.14,6.52 z' style='opacity:0.9;fill:%23ffffff;enable-background:new' class='st0'/%3E%3Cpath d='M 10.5,-0.01 C 4.7,-0.01 0,4.7 0,10.49 c 0,5.79 4.7,10.5 10.5,10.5 5.8,0 10.5,-4.7 10.5,-10.5 C 20.99,4.7 16.3,-0.01 10.5,-0.01 Z m 0,19.75 c -5.11,0 -9.25,-4.15 -9.25,-9.25 0,-5.1 4.14,-9.26 9.25,-9.26 5.11,0 9.25,4.15 9.25,9.25 0,5.13 -4.14,9.26 -9.25,9.26 z' style='opacity:0.35;enable-background:new' class='st1'/%3E%3Cpath d='M 14.74,6.25 C 12.9,4.41 9.98,4.35 8.23,6.1 5.07,9.27 6.09,14.91 6.09,14.91 c 0,0 5.64,1.02 8.81,-2.14 C 16.64,11 16.59,8.09 14.74,6.25 Z m -2.27,4.09 -0.91,1.87 -0.9,-1.87 -1.86,-0.91 1.86,-0.9 0.9,-1.87 0.91,1.87 1.86,0.9 z' style='opacity:0.35;enable-background:new' class='st1'/%3E%3Cpolygon points='11.56,12.21 10.66,10.34 8.8,9.43 10.66,8.53 11.56,6.66 12.47,8.53 14.33,9.43 12.47,10.34 ' style='opacity:0.9;fill:%23ffffff;enable-background:new' class='st0'/%3E%3C/g%3E%3C/svg%3E");
  }
  .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
    padding: 0 5px;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }
  @media screen {
    .mapboxgl-ctrl-attrib.mapboxgl-compact {
       padding-top: 2px;
       padding-bottom: 2px;
       margin: 0 10px 10px;
       position: relative;
       padding-right: 24px;
       background-color: #fff;
       border-radius: 3px 12px 12px 3px;
       visibility: hidden;
    }
    .mapboxgl-ctrl-attrib.mapboxgl-compact:hover {
       visibility: visible;
    }
    .mapboxgl-ctrl-attrib.mapboxgl-compact::after {
       content: '';
       cursor: pointer;
       position: absolute;
       bottom: 0;
       right: 0;
       background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill='%23333333' fill-rule='evenodd' d='M4,10a6,6 0 1,0 12,0a6,6 0 1,0 -12,0 M9,7a1,1 0 1,0 2,0a1,1 0 1,0 -2,0 M9,10a1,1 0 1,1 2,0l0,3a1,1 0 1,1 -2,0'/%3E %3C/svg%3E");
       background-color: rgba(255, 255, 255, 0.5);
       width: 24px;
       height: 24px;
       box-sizing: border-box;
       visibility: visible;
       border-radius: 12px;
    }
  }
  .mapboxgl-ctrl-attrib a {
    color: rgba(0, 0, 0, 0.75);
    text-decoration: none;
  }
  .mapboxgl-ctrl-attrib a:hover {
    color: inherit;
    text-decoration: underline;
  }
  .mapboxgl-ctrl-attrib .mapbox-improve-map {
    font-weight: bold;
    margin-left: 2px;
  }
  .mapboxgl-attrib-empty {
    display: none;
  }
  .mapboxgl-ctrl-scale {
    background-color: rgba(255, 255, 255, 0.75);
    font-size: 10px;
    border-width: medium 2px 2px;
    border-style: none solid solid;
    border-color: #333;
    padding: 0 5px;
    color: #333;
    box-sizing: border-box;
  }
  .mapboxgl-popup {
    position: absolute;
    top: 0;
    left: 0;
    display: -webkit-flex;
    display: flex;
    will-change: transform;
    pointer-events: none;
  }
  .mapboxgl-popup-anchor-top,
  .mapboxgl-popup-anchor-top-left,
  .mapboxgl-popup-anchor-top-right {
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  .mapboxgl-popup-anchor-bottom,
  .mapboxgl-popup-anchor-bottom-left,
  .mapboxgl-popup-anchor-bottom-right {
    -webkit-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }
  .mapboxgl-popup-anchor-left {
    -webkit-flex-direction: row;
    flex-direction: row;
  }
  .mapboxgl-popup-anchor-right {
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .mapboxgl-popup-tip {
    width: 0;
    height: 0;
    border: 10px solid transparent;
    z-index: 1;
  }
  .mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
    -webkit-align-self: center;
    align-self: center;
    border-top: none;
    border-bottom-color: #fff;
  }
  .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {
    -webkit-align-self: flex-start;
    align-self: flex-start;
    border-top: none;
    border-left: none;
    border-bottom-color: #fff;
  }
  .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
    -webkit-align-self: flex-end;
    align-self: flex-end;
    border-top: none;
    border-right: none;
    border-bottom-color: #fff;
  }
  .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
    -webkit-align-self: center;
    align-self: center;
    border-bottom: none;
    border-top-color: #fff;
  }
  .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {
    -webkit-align-self: flex-start;
    align-self: flex-start;
    border-bottom: none;
    border-left: none;
    border-top-color: #fff;
  }
  .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
    -webkit-align-self: flex-end;
    align-self: flex-end;
    border-bottom: none;
    border-right: none;
    border-top-color: #fff;
  }
  .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
    -webkit-align-self: center;
    align-self: center;
    border-left: none;
    border-right-color: #fff;
  }
  .mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
    -webkit-align-self: center;
    align-self: center;
    border-right: none;
    border-left-color: #fff;
  }
  .mapboxgl-popup-content {
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 10px;
    pointer-events: auto;
    position: relative;
  }
  .mapboxgl-popup-anchor-top-left .mapboxgl-popup-content {
    border-top-left-radius: 0;
  }
  .mapboxgl-popup-anchor-top-right .mapboxgl-popup-content {
    border-top-right-radius: 0;
  }
  .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-content {
    border-bottom-left-radius: 0;
  }
  .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-content {
    border-bottom-right-radius: 0;
  }
  .mapboxgl-marker {
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
  }
  .mapboxgl-crosshair,
  .mapboxgl-crosshair .mapboxgl-interactive,
  .mapboxgl-crosshair .mapboxgl-interactive:active {
    cursor: crosshair;
  }
  .mapboxgl-boxzoom {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    background: #fff;
    border: 2px dotted #202020;
    opacity: 0.5;
  }
`;
export const inflectCSS = `
  .mapboxgl-ctrl-bottom-left {
    bottom: -2px;
    left: 108px;
  }
  .mapboxgl-ctrl-logo {
    opacity: 0.5;
    transition:
    opacity 0.3s ease;
  }
  .mapboxgl-ctrl-logo:hover {
    opacity: 1;
  }
  .mapboxgl-ctrl-attrib.mapboxgl-compact::after {
    opacity: 0.5;
  }
  .inflect-map-popup {
    font-family: -apple-system, 'Helvetica Neue', Arial, Helvetica, sans-serif; 
    min-width: 200px;
    max-width: 300px;
  }
  .inflect-map-zoom-reset svg {
    position: relative;
    top: 1px;
  }
  .inflect-map-logo {
    left: 0;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    transition: opacity 0.3s ease;
    height: 32px;
  }
  .inflect-map-logo:hover {
    opacity: 1;
  }
  .inflect-map-popup a {
    color: #3b8ef5;
    font-size: 15px;
    text-decoration: none;
  }
  .inflect-map-popup a:hover {
    text-decoration: underline;
  }
  .inflect-map-popup p {
    font-size: 12px;
    margin: 0 !important;
  }
  .inflect-map-popup-row {
    border-bottom: 1px solid #eee;
    margin-bottom: 8px;
    padding: 0 0 8px;
  }
`;
