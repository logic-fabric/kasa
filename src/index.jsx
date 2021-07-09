import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { DataFetcher } from "./data/dataFetcher";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

async function initApp(dataFetcher) {
  const advertisementsList = await dataFetcher.fetchSource();

  ReactDOM.render(
    <React.StrictMode>
      <div className="app-wrapper">
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <Home advertisements={advertisementsList.advertisements} />
              </Route>
              <Route path="/a-propos">
                <About />
              </Route>
              <Route>
                <Error404 />
              </Route>
            </Switch>
          </main>

          <Footer />
        </Router>
      </div>
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