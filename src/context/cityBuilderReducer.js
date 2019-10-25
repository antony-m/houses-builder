import {
  GET_CONFIG,
  ADD_CONFIG,
  REMOVE_CONFIG,
  UPDATE_CONFIG
} from './actionTypes';

export default (state, action) => {
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
        housesList: state.housesList.filter(house => house.id !== action.payload)
      };
    case UPDATE_CONFIG:
      return {
        ...state,
        housesList: state.housesList.map(house => {
          if (house.id !== action.payload.id) {
            return house;
          }
          return {
            ...house,
            [action.payload.name]: action.payload.targetValue
          }
        })
      };
    default:
      return state;
  }
};
