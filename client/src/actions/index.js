import Axios from 'axios';
const apiUrl = 'http://localhost:3000/short_url/'

export const addUrlSuccess = (data) => {
  return {
    type: 'GET_SHORT_URL',
    data
  }
}

export const addUrl = (url) => {
  return (dispatch) => {
    return Axios.post(apiUrl, {
      originurl: url
    })
    .then((resp) => {
      dispatch(addUrlSuccess(resp.data[0]))
    })
    .catch(error => {
      throw(error);
    });
  }
}
