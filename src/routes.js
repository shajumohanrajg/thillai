import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Search from './search';
// import About from './About';
// import Contact from './Contact';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      {/* <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route> */}
    </Switch>
  );
}

export default Routes;
