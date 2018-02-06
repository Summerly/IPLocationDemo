import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  province: PropTypes.string,
  city: PropTypes.string,
  adCode: PropTypes.string,
  rectangle: PropTypes.string,
};

const defaultProps = {
  province: '',
  city: '',
  adCode: '',
  rectangle: '',
};

class IPLocation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Province: {this.props.province}</li>
          <li>City: {this.props.city}</li>
          <li>AdCode: {this.props.adCode}</li>
          <li>Rectangle: {this.props.rectangle}</li>
        </ul>
      </div>
    );
  }
}

IPLocation.propTypes = propTypes;
IPLocation.defaultProps = defaultProps;

export default IPLocation;
