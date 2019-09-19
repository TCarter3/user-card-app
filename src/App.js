import React from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import UserView from "./components/UserView";
import { Switch, Route, } from "react-router-dom";
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
  <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" render={() => <UserView />} />
      </Switch>
    </Container>
  </>
);
 

export default App;
