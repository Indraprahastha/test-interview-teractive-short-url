import React, { Component, setState } from 'react';
import '../App.css';
import { addUrl, getUrl } from '../actions/index'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Enkripsi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      originalurl: '',
      shortenurl: '',
      pembukaan: false,
    }
  }

  changeoriginurl (change) {
    let originalurl = change.target.value
    this.setState({originalurl})
  }

  changeshorturl (change) {
    let shortenurl = change.target.value
    this.setState({shortenurl})
  }

  inputurl () {
    if (this.state.originalurl == '') {

    } else {
      // alert('jalan')
      this.props.addUrl(this.state.originalurl)
      this.setState({originalurl: ''})
    }
  }

  inputurlshort () {
    if (this.state.shortenurl == '') {

    } else {
      let splitObject = this.state.shortenurl.split('/')
      let getObject = splitObject[splitObject.length-1]
      this.props.getUrl(getObject)
      this.setState({shortenurl: ''})
    }
  }

  goto (data) {
    window.location = data
  }

  render() {
    let conditionShortUrl = null
    if (JSON.stringify(this.props.sorturl) == '[]') {
      conditionShortUrl = null
    } else {
      let base = 'localhost:3000/'
      let sort = this.props.sorturl
      let gabung = base+sort
      conditionShortUrl = <div><div className="col-md-2">
      <h5><b>Your Sort Url Is:</b></h5></div><div className="col-md-10"><h5><a href={'http://'+gabung}><b>{gabung}</b></a></h5></div></div>
    }

    let conditionLongUrl = null
    if (JSON.stringify(this.props.originurl) == '[]') {
      conditionLongUrl = null
    } else if (this.props.originurl == "Data Not Found") {
      conditionLongUrl = <div><div className="col-md-2">
      <h5><b>Your Sort Url Is:</b></h5></div><div className="col-md-10"><h5><b>{this.props.originurl}</b></h5></div></div>
    } else {
      conditionLongUrl = <div><div className="col-md-2">
      <h5><b>Your Sort Url Is:</b></h5></div><div className="col-md-10"><h5><a href={'http://'+this.props.originurl}><b>{this.props.originurl}</b></a></h5></div></div>
    }

    let deskripEnkrip = null
    if (this.state.pembukaan == false) {
      deskripEnkrip = <div className="border">
      <div className="container">
        <div className="col-md-12">
        <h5 className="instructionLongUrl"><b>Input your Long Url:</b></h5>
        </div>
        <div className="col-md-8">
          <input className="form-control" type="text" value={ this.state.originalurl} onChange={(originalurl) => this.changeoriginurl(originalurl) } />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary btn-primary btn-block" onClick={() => this.inputurl()}>Get Short Link</button>
        </div>
        <div className="col-md-2">
          <button onClick={() => { this.setState({pembukaan: !this.state.pembukaan})}} className="btn btn-primary btn-primary btn-block">Decrypt</button>
        </div>
      </div>
        <div className="container instructionLongUrl">
        {conditionShortUrl}
        </div>
      </div>
    } else {
      deskripEnkrip = <div className="border">
      <div className="container">
        <div className="col-md-12">
        <h5 className="instructionLongUrl"><b>Input your Short Url:</b></h5>
        </div>
        <div className="col-md-8">
          <input className="form-control" type="text" value={ this.state.shortenurl} onChange={(shortenurl) => this.changeshorturl(shortenurl) } />
        </div>
        <div className="col-md-2">
          <button className="btn btn-warning btn-primary btn-block" onClick={() => this.inputurlshort()}>Get Original Link</button>
        </div>
        <div className="col-md-2">
          <button onClick={() => {this.setState({pembukaan: !this.state.pembukaan})}} className="btn btn-primary btn-primary btn-block">Encrypt</button>
        </div>
      </div>
        <div className="container instructionLongUrl">
        {conditionLongUrl}
        </div>
      </div>
    }

    return (
      <div className="App">
        {deskripEnkrip}
      </div>
    );
  }
}

const mapState = state => {
  return {
    originurl: state.url.originurl,
    sorturl: state.url.sorturl,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUrl: (data) => dispatch(addUrl(data)),
    getUrl: (data) => dispatch(getUrl(data)),
  }
}

const enkripsi = connect(
  mapState,
  mapDispatchToProps
)(Enkripsi)

export default enkripsi;
