import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { Provider } from "react-redux";
import store from "./store";

// <Provider>을 넣어주는 것은 subscribe 하는 과정과 유사함
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("root")
);
