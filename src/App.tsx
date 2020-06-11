import React from "react";
import "./App.css";
import { HomePage, ProductsPage, AboutUsPage, CollectionsPage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:type" component={ProductsPage} />
          <Route path="/collections" component={CollectionsPage} />
          <Route exact path="/about-us" component={AboutUsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
