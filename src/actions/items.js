import * as types from './actionTypes';
import itemApi from '../api/itemApi';

export function loadItems() {
  return function(dispatch) {
    return itemApi.getAll().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items };
}
