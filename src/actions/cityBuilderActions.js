import {
  GET_CONFIG,
  ADD_CONFIG,
  REMOVE_CONFIG,
  UPDATE_CONFIG
} from './actionTypes';

// Get Config from localStorage
export const getHousesConfig = () => {
  const housesList = JSON.parse(localStorage.getItem('housesList')) || [];
  return {
    type: GET_CONFIG,
    payload: housesList
  };
};

//add new config
export const addHouseConfig = (defaultConfig) => {
  return {
    type: ADD_CONFIG,
    payload: defaultConfig
  };
};

//remove config
export const removeHouseConfig = (id) => {
  return {
    type: REMOVE_CONFIG,
    id
  };
};

//update config
export const updateHouseConfigAction = (configPart) => {
  return {
    type: UPDATE_CONFIG,
    configPart
  };
};
