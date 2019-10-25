import React from 'react';
import './App.css';
import Layout from './components/Layout';
import CityBuilderState from './context/CityBuilderState'

const App = () => (
  <div className="App">
    <CityBuilderState>
      <Layout/>
    </CityBuilderState>
  </div>
);

export default App;
