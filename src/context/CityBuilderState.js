import React, { useReducer, useEffect} from 'react';
import CityBuilderContext from './cityBuilderContext';
import CityBuilderReducer from './cityBuilderReducer';
import {
  GET_CONFIG,
  ADD_CONFIG,
  REMOVE_CONFIG,
  UPDATE_CONFIG
} from './actionTypes';

const CityBuilderState = props => {
  const initialState = {
    housesList: [],
  };

  const [state, dispatch] = useReducer(CityBuilderReducer, initialState);

  useEffect(() => {
    getHousesConfig();
  }, []);

  useEffect(() => {
    localStorage.setItem('housesList', JSON.stringify(state.housesList));
  }, [state]);

  // Get Config from localStorage
  const getHousesConfig = () => {
    const housesList = JSON.parse(localStorage.getItem('housesList')) || [];
    dispatch({
      type: GET_CONFIG,
      payload: housesList
    });
  };

  //add new config
  const addHouseConfig = () => {
    const defaultConfig = {
      id: new Date().getTime(),
      name: '',
      color: 'DarkGrey',
      floorsNumber: 2
    };
    dispatch({
      type: ADD_CONFIG,
      payload: defaultConfig
    });
  };

  //remove config
  const removeHouseConfig = (id) => {
    dispatch({
      type: REMOVE_CONFIG,
      payload: id
    });
  };

  //update config
  const updateHouseConfig = (configPart) => {
    dispatch({
      type: UPDATE_CONFIG,
      payload: configPart
    });
  };

  return (
    <CityBuilderContext.Provider
      value={{
        housesList: state.housesList,
        addHouseConfig,
        removeHouseConfig,
        updateHouseConfig
      }}
    >
      {props.children}
    </CityBuilderContext.Provider>
  );
};

export default CityBuilderState;
