import React from "react";
import "./App.css";
import Banner from "./Banner";
import requests from "./requests";
import Row from "./Row";
import "./Row.css";
import "./Banner.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Anime" fetchUrl={requests.fetchAnime} />
      <Row title="Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      <Row title="Horror" fetchUrl={requests.fetchHorror} />
    </div>
  );
}

export default App;
