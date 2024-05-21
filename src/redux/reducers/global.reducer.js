import {GLOBAL_TOGGLE_LOADING} from '../actions/global.actions';
const initialState = {
    status: false,
    collapsed: false,
  };
  const globalReducer = (state = initialState, action) => {
    switch (action.type) {
      case GLOBAL_TOGGLE_LOADING:
        state = {
          status: action.status,
        };
        return state;
  
      default:
        return state;
    }
  };
  export default globalReducer;