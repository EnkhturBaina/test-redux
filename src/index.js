import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import testReducer from "./redux/reducers/testReducer";
import App from "./App";

const rootElement = document.getElementById("root");
const store = createStore(testReducer);
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
