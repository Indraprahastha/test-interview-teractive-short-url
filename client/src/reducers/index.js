import { combineReducers } from 'redux';

const url = {
  originurl: [],
  sorturl: [],
}

const newsReducers = (state = url, action) => {
  switch (action.type) {
    case 'GET_SHORT_URL':
      return {...state, sorturl:action.data.shorturl}
    default:
      return state;
  }
};

export default combineReducers({
  sorturl: newsReducers,
  // newsone: newsReducers
});
