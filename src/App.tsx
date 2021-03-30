import {Component, useState, useContext, useEffect} from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import HostView from './components/HostView';
import AdminView from './components/AdminView';
import {IEvent, login_status} from './models/models';
import {StatusContext} from './controller/contexts/statusContext';
import {HostProvider} from './controller/contexts/hostContext';
import {AuthContext} from './controller/contexts/authContext';

// import dotenv from 'dotenv';
// dotenv.config();

function PrivateRoute() {
  return (
    <div>
      <Route path='/host/:HostName/:PassCode'>
        <HostView />
      </Route>
      <Route exact path='/admin'>
        <AdminView />
      </Route>
    </div>
  );
}
function App() {
  const {auth, setAuth} = useContext(AuthContext);
  let display;
  console.log(auth);
  console.log(process.env);
  useEffect(() => {
    window.FB.getLoginStatus((res) => {
      const {status} = res;
      if (status === 'connected') {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <HostProvider>
            <Route exact path='/login'>
              <Landing />
            </Route>
            {auth == null ? (
              <div
                style={{
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'yellow',
                }}
              >
                {' '}
                still waiting
              </div>
            ) : auth == false ? (
              <Redirect to='/login' />
            ) : (
              <PrivateRoute />
            )}
          </HostProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
