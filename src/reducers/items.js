import * as types from '../actions/actionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;
    default:
      return state;
  }
};

export default items;
