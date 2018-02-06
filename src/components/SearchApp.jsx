import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../actions/SearchAction';
import SearchInput from '../components/SearchInput';
import IPLocation from '../components/IPLocation';

const propTypes = {
  status: PropTypes.string,
  ipLocation: PropTypes.shape,
  dispatch: PropTypes.func.isRequired,
};

const defaultProps = {
  status: '',
  ipLocation: {},
};

class SearchApp extends React.PureComponent {
  render() {
    const actions = bindActionCreators(action, this.props.dispatch);

    return (
      <div>
        <SearchInput actions={actions} status={this.props.status} />
        <IPLocation actions={actions} ipLocation={this.props.ipLocation} status={this.props.status} />
      </div>
    );
  }
}

SearchApp.propTypes = propTypes;
SearchApp.defaultProps = defaultProps;

const mapStateToProps = state => ({
  status: state.status,
  ipLocation: state.ipLocation,
});


export default connect(mapStateToProps)(SearchApp);
