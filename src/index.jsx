import React from "react";
import ReactDOM from "react-dom";


import { DataFetcher } from "./data/dataFetcher";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

async function initApp(dataFetcher) {
  const advertisementsList = await dataFetcher.fetchSource();

  ReactDOM.render(
    <React.StrictMode>
      <App advertisements={advertisementsList.advertisements} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

const DATA_SOURCE = "../data/sample-data.json";
const dataFetcher = new DataFetcher(DATA_SOURCE);

initApp(dataFetcher);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
