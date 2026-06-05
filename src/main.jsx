import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" />
  </Provider>,
);
