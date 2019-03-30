import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './movie';


class App extends Component {

  state = {
    greeting: 'Hello!',
    movies: [
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
  }

  componentDidMount() {
    setTimeout(() => {
      //infinite scroll(페이스북 형식)의 힌트
      this.setState({ 
        movies: [
          ...this.state.movies, // 이전 영화리스트
          {
            title: "Trainspotting",
            poster: "https://g7w3q9i5.stackpathcdn.com/wp-content/uploads/2018/11/Trainspotting-NEW.jpg"
          }
        ]
      })
    }, 1000)
  }

  render() {

    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
