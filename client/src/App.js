import React from "react";
import Home from "./pages/Home";
import { StoreProvider } from "../src/utils/GlobalState";
import "./App.sass";

function App() {
  return (
    <div>
      <StoreProvider>
        <Home />
      </StoreProvider>
    </div>
  );
}


export default App;
