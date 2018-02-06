import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  ipLocation: PropTypes.shape({
    province: PropTypes.string,
    city: PropTypes.string,
    adCode: PropTypes.string,
    rectangle: PropTypes.string,
  }),
};

const defaultProps = {
  ipLocation: {
    province: '',
    city: '',
    adCode: '',
    rectangle: '',
  },
};

class IPLocation extends React.Component {
  render() {
    const { ipLocation } = this.props;

    return (
      <div>
        <ul>
          <li>Province: {ipLocation.province}</li>
          <li>City: {ipLocation.city}</li>
          <li>AdCode: {ipLocation.adCode}</li>
          <li>Rectangle: {ipLocation.rectangle}</li>
        </ul>
      </div>
    );
  }
}

IPLocation.propTypes = propTypes;
IPLocation.defaultProps = defaultProps;

export default IPLocation;
