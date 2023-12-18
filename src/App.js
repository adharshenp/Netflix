import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
        
       <Row isPoster={true} title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals} />

       <Row title='Trending Movie' fetchUrl={requests.fetchTrending} />

       <Row title='Top Rated Movie' fetchUrl={requests.fetchTopRated} />

       <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />

       <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />

       <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />

       <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />

       <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
