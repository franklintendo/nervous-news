import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bulletin from "./pages/Bulletin";
import { StoreProvider } from "../src/utils/GlobalState";
import "./App.sass";

function App() {
  return (
    
    <Router>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news-bulletin" component={Bulletin} />
          <Route exact path='*' component={Home} />
        </Switch>
      </StoreProvider>
    </Router>
  );
}


export default App;
