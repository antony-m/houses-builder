import {createStore, applyMiddleware} from 'redux';
import cityBuilderReducer from '../reducers/cityBuilderReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default (initialState) => {
  return createStore(
    cityBuilderReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  )
}
