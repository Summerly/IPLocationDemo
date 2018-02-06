import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IPLocation from './components/IPLocation';

class App extends React.Component {
  render() {
    return (
      <div>
        <IPLocation
          province="北京市"
          city="北京市"
          adCode="110000"
          rectangle="116.0119343,39.66127144;116.7829835,40.2164962"
        />
      </div>
    );
  }
}

export default App;
