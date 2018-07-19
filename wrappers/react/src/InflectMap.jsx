// @flow
import * as React from 'react';
// flow-disable-next-line
import InflectMap from '@inflect/map';

class InflectReactMap extends React.Component<*> {
  componentDidMount() {
    this._map = new InflectMap();
    this._map.init(this.props);
  }

  componentDidUpdate() {
    this._map.set(this.props);
  }

  _map: Object;

  render() {
    return (
      <div id={this.props.id} />
    );
  }
}

// flow-disable-next-line
InflectReactMap.defaultProps = {
  id: 'inflect-map',
};

export default InflectReactMap;
