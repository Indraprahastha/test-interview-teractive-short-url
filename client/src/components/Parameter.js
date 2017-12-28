import React, { Component, setState } from 'react';
import '../App.css';
import { getUrl } from '../actions/index'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Parameter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // google: 'www.google.com'
    }
  }

  componentWillMount () {
    let cekheader = window.location.pathname.split('/').join('')
    this.props.getUrl(cekheader).then(() => {
      window.location = this.props.originurl
    })
    // window.location = "http://"+this.props.originurl
    // this.setState(google: this.props.originurl, () => {
    // })
    // let splitObject = this.state.shortenurl.split('/')
    // let getObject = splitObject[splitObject.length-1]
    // this.props.getUrl(getObject)
  }

  render() {

    return (
      <div className="App">
        <img className="load" src={"https://m.popkey.co/fe4ba7/DYALX.gif"} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    originurl: state.url.originurl,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUrl: (data) => dispatch(getUrl(data)),
  }
}

const parameter = connect(
  mapState,
  mapDispatchToProps
)(Parameter)

export default parameter;
