# @inflect/map

Put a map of your PoPs on your website in 5 minutes, courtesy of [Inflect](https://inflect.com).

✨ [Interactive demo and code examples](https://inflectinc.github.io/map/)

⚛️ Use React? We do too! Check out our [React wrapper](https://github.com/InflectInc/map/tree/master/wrappers/react) for this package.

Under the hood, @inflect/map uses [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js), and is compatible with [browsers that support WebGL](https://www.caniuse.com/#feat=webgl).

## Installation

    yarn add @inflect/map
    
or right before the closing `</body>` tag:

    <script src="https://unpkg.com/@inflect/map@1/dist/main.js"></script>


## Usage

Once you've installed this package, create an instance of `InflectMap` and initialize it with your `token` and an existing HTML element's `id`. Make sure that your script or bundle has loaded first so that `InflectMap` is in scope.

```JS
var map = new InflectMap();
map.init({
  id: 'inflect-map', // The id of an HTML element
  token: 'a1B2c3D4e5F6g7H8i9J0', // Obtained on your team page at inflect.com
});
```

### Required properties

Property | Description
--------- | -----------
`id` | *String. Required. Default value: `inflect-map`.*<br />The `id` of the HTML container the map should be inserted into.
`token` | *String. Required. No default value.*<br />Your map token obtained at inflect.com. See [Creating a map token](#token) for more information.

### Basic properties

Like the required properties, these optional properties can be passed into the `init` instance method.

Property | Description
--------- | -----------
`autoCamera` | *Boolean. Optional. Default value: `true`.*<br />When `true`, the map viewport will automatically move to fit the bounds of the source data.
`cameraDuration` | *Number. Optional. Default value: `1000`.*<br />The number of milliseconds it takes to move the map viewport automatically. When `autoCamera` is `false`, this property has no effect.
`dotBorderColor` | *String. Optional. Default value: `#fff`.*<br />The border color of the circular map markers. The value can be represented by any valid CSS color representation (hex value, rgb, rgba, named color, etc).
`dotBorderWidth` | *Number. Optional. Default value: `1`.*<br />The stroke width of the map markers' border, in pixels.
`dotColor` | *String. Optional. Default value: `#6a7685`.*<br />The main color of the circular map markers. The value can be represented by any valid CSS color representation (hex value, rgb, rgba, named color, etc).
`dotRadius` | *Number. Optional. Default value: `6`.*<br />The radius of the map markers, in pixels.
`hash` | *Boolean. Optional. Default value: `false`.*<br />If `true`, coordinates and zoom will be appended as the document location's hash, so when navigating through history (or refreshing the page), the map viewport will be retained. This is most useful when `autoCamera` is set to `false`, and when there is only one instance of the map on the page.
`height` | *String. Optional. Default value: `inherit`.*<br />The CSS value of the HTML container's height. By default, it takes up the same height as its container. If specifying a pixel height, be sure to include the suffix, e.g. `500px`.
`lat` | *Number. Optional. Default value: `16.875`.*<br />The latitude of the center coordinate of the map. By default, the map is oriented to be aesthetically centered.
`lng` | *Number. Optional. Default value: `28.30438`.*<br />The longitude of the center coordinate of the map. By default, the map is oriented to be aesthetically centered.
`maxZoom` | *Number. Optional. Default value: `24`.*<br />A number within the range of 0 (zoomed out) to 24 (zoomed in) that sets the maximum allowed level a user can zoom in.
`minZoom` | *Number. Optional. Default value: `0`.*<br />A number within the range of 0 (zoomed out) to 24 (zoomed in) that sets the minimum allowed level a user can zoom out.
`scrollZoom` | *Boolean. Optional. Default value: `true`.*<br />When `true`, allows the mousewheel to zoom in and out of the map. Disabling this can be useful to prevent the map from hijacking a page's scroll behavior. 
`static` | *Boolean. Optional. Default value: `false`.*<br />When `true`, prevents pan and zoom events.
`theme` | *String. Optional. Default value: `light`.*<br />The map theme. The value can be one of the following: `dark`, `day`, `light`, `night`, `satellite`. See [Themes](#themes) for examples.
`width` | *String. Optional. Default value: `inherit`.*<br />The CSS value of the HTML container's width. By default, it takes up the 100% of its container. If specifying a pixel width, be sure to include the suffix, e.g. `500px`.
`zoom` | *Number. Optional. Default value: `0`.*<br />A number within the range of 0 (zoomed out) to 24 (zoomed in) that sets the current zoom level.

### Advanced properties

Property | Description
--------- | -----------
`onClick` | *Function. Optional. Default value: none.*<br />An event handler that fires when the map is clicked. If any dots are underneath the mouse cursor on click, they will be passed into this function. This function should take an array of GeoJSON [features](https://tools.ietf.org/html/rfc7946#section-3.2) as a parameter.
`onHover` | *Function. Optional. Default value: none.*<br />An event handler that fires when the mouse cursor moves over the map. If any dots are underneath the mouse cursor on click, they will be passed into this function. This function should take an array of GeoJSON [features](https://tools.ietf.org/html/rfc7946#section-3.2) as a parameter.
`onLoad` | *Function. Optional. Default value: none.*<br />An event handler that fires when the map has finished loading.
`onMoveEnd` | *Function. Optional. Default value: none.*<br />An event handler that fires when the map finishes a pan or a zoom. The map event object will be passed into this function.

<a name="token"></a>
## Creating a map token

1. Create an account on [inflect.com](https://inflect.com), or log in if you already have an account.
2. On your team page, click the "Team maps" tab.
3. Click "Create a new map".
4. Select the data point(s) you'd like to embed on your site, and click "Create map".
5. Use the resulting 24-character alphanumeric string as your `token` when you init the map.

## Styling

<a name="themes"></a>
### Themes

Below are values you can pass to the `theme` property.

##### `light` (default)
![Light theme](https://raw.githubusercontent.com/InflectInc/map/master/docs/img/light.png)

##### `dark` 
![Dark theme](https://raw.githubusercontent.com/InflectInc/map/master/docs/img/dark.png)

##### `day` 
![Day theme](https://raw.githubusercontent.com/InflectInc/map/master/docs/img/day.png)

##### `night` 
![Night theme](https://raw.githubusercontent.com/InflectInc/map/master/docs/img/night.png)

##### `satellite` 
![Satellite theme](https://raw.githubusercontent.com/InflectInc/map/master/docs/img/satellite.png)

### Popup

You can override the default styling of the map popup by targeting the `.inflect-map-popup` class in CSS.

## Updating values

Calling `map.set()` with any properties will update the map.

This is useful if you want to cycle between a couple map tokens &mdash; calling `map.set({ token: newMapToken })` will load the new set of data and animate to its bounding box automatically.

## iframe

We also host a page that you can embed via iframe. While we highly recommend installing the package instead, you can choose to embed an iframe version on your website if you so please. Just be aware of the following caveats of using an iframe: 

- You cannot dynamically set properties without reloading the entire iframe
- You cannot specify custom CSS for the map popup
- Advanced properties are not supported

Required and basic properties listed in [Usage](#usage) are available to the iframe as query parameters. Since the values are read from the URL path, you must URL-encode special characters (for example, when passing in a hex color value, you must convert `#` into its URL-encoded representation `%23`, in order to avoid the value being interpreted as a document fragment).

```HTML
<iframe src="https://embed.inflect.com/map/1/?token=YOUR_TOKEN_HERE" width="100%" height="500" frameborder="0"></iframe>
```

## A note when rendering server-side

The dependencies of this package prevent it from being rendered server-side in node environments. As a workaround, import the package dynamically, or prevent the importing of the package in your build phase. If you have any troubles, please open an issue. 

