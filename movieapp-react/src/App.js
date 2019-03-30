import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQItr6vlitIx6I23CbA6PlfQh1h7nFrCvVNRRfeZhJUVHKLHvDA"
  }
  

]
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster}/>
        })}
      </div>
    );
  }
}

export default App;
