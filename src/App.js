import React from 'react';
import './App.css';
import Row from './components/Rows'
import TopBanner from './components/TopBanner'
import Navigation from './components/NavBar'
import requests from './requests'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navigation />
      {/* Banner */}
      <TopBanner />
      <Row
        title="NETFLIX Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div >
  );
}

export default App;
