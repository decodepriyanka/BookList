import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import BooksProvider from "./context/BooksProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BooksProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </BooksProvider>
  </BrowserRouter>
);
