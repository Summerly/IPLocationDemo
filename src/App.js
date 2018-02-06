/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';
import IPLocationReducer from './reducers/IPLocationReducer';
import SearchApp from './components/SearchApp';

const store = createStore(IPLocationReducer, {}, applyMiddleware(thunk));

const App = () => (
  <div>
    <Provider store={store}>
      <SearchApp />
    </Provider>
  </div>
);

export default App;
