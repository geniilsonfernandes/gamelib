import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Hooks/User.js";
import { SearchProvider } from "./Hooks/Search.js";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
