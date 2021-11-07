import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import "./Row.css";

function App() {
  return (
    <div className="App">
      <h1>Hey let's build Netflix</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
