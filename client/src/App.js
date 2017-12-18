import React, { Component, setState } from 'react';
import './App.css';
import { addUrl, getUrl } from './actions/index'
import {connect} from 'react-redux'
import Enkripsi from './components/Enkripsi'
import Parameter from './components/Parameter'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" render={(props) => ( <Enkripsi/> )}/>
        <Route exact path="/:parameter" render={(props) => ( <Parameter/> )}/>
      </div>
      </Router>
    );
  }
}

const mapState = state => {
  return {
    // sorturl: state.url.sorturl,
    // originurl: state.url.originurl,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // addUrl: (data) => dispatch(addUrl(data)),
    // getUrl: (data) => dispatch(getUrl(data)),
  }
}

const app = connect(
  mapState,
  mapDispatchToProps
)(App)

export default app;
