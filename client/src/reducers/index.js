import { combineReducers } from 'redux';

const url = {
  originurl: [],
  sorturl: [],
}

const newsReducers = (state = url, action) => {
  switch (action.type) {
    case 'GET_SHORT_URL':
      return {...state, sorturl:action.data.shorturl}
    case 'GET_LONG_URL':
      return {...state, originurl:action.data.originurl}
    default:
      return state;
  }
};

export default combineReducers({
  url: newsReducers
  // newsone: newsReducers
});
