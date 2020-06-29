import React from "react";
import "./App.css";
import {
  HomePage,
  ProductsPage,
  AboutUsPage,
  CollectionsPage,
  CartSummary,
} from "./pages";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products/:type" component={ProductsPage} />
          <Route exact path="/collections" component={CollectionsPage} />
          <Route exact path="/cart" component={CartSummary} />
          <Route exact path="/about-us" component={AboutUsPage} />
        </Switch>
      </>
    </div>
  );
};

export default App;
