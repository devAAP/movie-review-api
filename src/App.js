import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [searchText, setSearchText]= useState('');
  const [movies, setMovies] = useState([]);

const getReview = async()=> {
  try {
    const response =  await axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + searchText + "&api-key=Is4Klltt8UL4XCNoOMBrXlYLKSR5x8BW");
  setMovies(response.data.results);
  }catch (err) {
    console.log(err);
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    getReview();
  };
  return (
    <>
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input placeholder="Search for any movie"
      type="text"
      value={searchText}
      onChange={(e)=>setSearchText(e.target.value)}/>
      <input type="submit"/>
      </form>
      {movies.map((movie)=> {
          return <div>
            <h1>{movie.headline}</h1>
            <h3>{movie.display_title}</h3>
          <img src = {movie.multimedia 
            ? movie.multimedia.src 
            : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"} alt=""/>
          </div>;
      })}    
    </div>
    
    </>
    
  );
}

export default App;
