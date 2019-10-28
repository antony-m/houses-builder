import {
  GET_CONFIG,
  ADD_CONFIG,
  REMOVE_CONFIG,
  UPDATE_CONFIG
} from '../actions/actionTypes';

const cityBuilderReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CONFIG:
      return {
        ...state,
        housesList: action.payload
      };
    case ADD_CONFIG:
      return {
        ...state,
        housesList: state.housesList.concat(action.payload)
      };
    case REMOVE_CONFIG:
      return {
        ...state,
        housesList: state.housesList.filter(house => house.id !== action.id)
      };
    case UPDATE_CONFIG:
      return {
        ...state,
        housesList: state.housesList.map(house => {
          if (house.id !== action.configPart.id) {
            return house;
          }
          return {
            ...house,
            [action.configPart.name]: action.configPart.targetValue
          }
        })
      };
    default:
      return {housesList: []};
  }
};

export default cityBuilderReducer;
