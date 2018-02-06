import React from 'react';
import PropTypes from 'prop-types';
import * as KeyCodes from '../constants/KeyCodes';

const propTypes = {
  actions: PropTypes.shape({}),
};

const defaultProps = {
  actions: {},
};

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.searchIPLocation = this.searchIPLocation.bind(this);
  }

  searchIPLocation(event) {
    if (KeyCodes.RETURN === event.which) {
      const ip = this.keyword.value;
      this.props.actions.SearchIPLocation(ip);
    }
  }

  render() {
    return (
      <div>
        <input
          onKeyDown={this.searchIPLocation}
          type="text"
          ref={(ref) => {
            this.keyword = ref;
          }}
          defaultValue="114.247.50.2"
        />
      </div>
    );
  }
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
