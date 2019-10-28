import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {getHousesConfig} from "./actions/cityBuilderActions";

const store = configureStore({});

store.dispatch(getHousesConfig());

store.subscribe(() => {
  localStorage.setItem('housesList', JSON.stringify(store.getState().housesList));
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
);
