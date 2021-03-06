import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import AllFiles from './components/AllFiles.jsx';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto', 'Montserrat', 'Open Sans']
  }
});

import './styles/global.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Router>
          <React.Fragment>
            <div className="header">
              <Header/>
            </div>
            <div className="content container">
              <Route exact={true} path="/" component={Login}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/home" component={AllFiles}/>
              <Route path="/login" component={Login}/>
              <Route path="/folder/:folderId" component={AllFiles}/>
            </div>
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

const AppWithRouter = withRouter(App);
ReactDOM.render(<App pathname={location.pathname}/>, document.getElementById('app'));
