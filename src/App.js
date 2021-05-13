import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetail from './components/TeamDetail/TeamDetail';
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  return (
    <div className="App">

      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/team/:idTeam">
              <TeamDetail></TeamDetail>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
