import Axios from 'axios';
const apiUrl = 'http://35.198.253.186:3000/short_url/'

export const addUrlSuccess = (data) => {
  return {
    type: 'GET_SHORT_URL',
    data
  }
}

export const getUrlSuccess = (data) => {
  return {
    type: 'GET_LONG_URL',
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

export const getUrl = (url) => {
  return (dispatch) => {
    return Axios.get(apiUrl, {
      headers: {
        shorturl: url
      }
    })
    .then((resp) => {
      // alert(JSON.stringify(resp.data[0]))
      dispatch(getUrlSuccess(resp.data[0]))
    })
    .catch(() => {
      let object = {
        originurl: "Data Not Found"
      }
      dispatch(getUrlSuccess(object))
    })
  }
}
