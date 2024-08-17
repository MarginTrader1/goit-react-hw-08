import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { store } from "./redux/store.js";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "modern-normalize"; // импорт библиотеки модерн нормалайз
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
);
