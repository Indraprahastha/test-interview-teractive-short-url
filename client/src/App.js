import React, { Component, setState } from 'react';
import './App.css';
import { addUrl } from './actions/index'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      originalurl: '',
      shortenurl: '',
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
    // alert('jalan')
    this.props.addUrl(this.state.originalurl)
  }

  inputurlshort () {
    let splitObject = this.state.shortenurl.split('/')
    let getObject = splitObject[splitObject.length-1]
    alert(getObject)
    // alert('jalan')
    // this.props.addUrl(this.state.originalurl)
  }

  render() {
    // alert(JSON.stringify(this.props.sorturl));
    let condition = null
    if (JSON.stringify(this.props.sorturl) == '[]') {
      condition = null
    } else {
      condition = <p>www.prahastha.com/{this.props.sorturl}</p>
    }
    return (
      <div className="App">

        <div className="container">
          <div className="col-md-8">
            <input className="form-control" type="text" value={ this.state.originalurl} onChange={(originalurl) => this.changeoriginurl(originalurl) } />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary btn-primary btn-block" onClick={() => this.inputurl()}>Short Link</button>
          </div>
        </div>
        <div className="container">
          {condition}
        </div>

        <div className="container">
          <div className="col-md-8">
            <input className="form-control" type="text" value={ this.state.shortenurl} onChange={(shortenurl) => this.changeshorturl(shortenurl) } />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary btn-primary btn-block" onClick={() => this.inputurlshort()}>Decode Link</button>
          </div>
        </div>
        <div className="container">
          {condition}
        </div>

      </div>
    );
  }
}

const mapState = state => {
  return {
    sorturl: state.sorturl.sorturl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUrl: (data) => dispatch(addUrl(data)),
  }
}

const app = connect(
  mapState,
  mapDispatchToProps
)(App)

export default app;
