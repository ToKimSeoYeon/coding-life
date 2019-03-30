import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './movie';


class App extends Component {

  state = {
    greeting: 'Hello!',
    
  }

  componentDidMount() {
    setTimeout(() => {
      //infinite scroll(페이스북 형식)의 힌트
      this.setState({ 
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
      })
    }, 2000)
  }

  // 영화리스트를 불러오는 function
  // _ 를 쓰는 이유는 자체기능과 자체기능이 아닌것을 구분하기위해, 나의 기능은 _ 로 시작함
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title ={movie.title} poster={movie.poster} key={index} />
    })
    // 영화리스트들은 movies라는 한곳에 저장함
    return movies
  }

  render() {

    return (
      <div className="App">
      {this.state.movies ? this._renderMovies() : 'Loading '}
      </div>
    );
  }
}

export default App;
