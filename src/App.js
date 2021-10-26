import React from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
  Redirect
} from 'react-router-dom';



//pages
import { main } from './pages/main';
import { home } from './pages/home';
import { dashBoard } from './pages/dashBoard';
import { options } from './pages/options';
import { profile } from './pages/profile';


function App() {
  return (
    <Router>
    <div className ="App">
      <Switch>
        <Route exact path = "/">
        <main />
        </Route>
          <Route path = "home">
            <home />
          </Route>
            <Route path = "dashBoard">
              <dashBoard />
            </Route>
          <Route path = "options">
            <options />
          </Route>
        <Route path = "profile">
          <profile/>
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}
export default App;


