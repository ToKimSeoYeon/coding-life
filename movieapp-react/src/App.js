import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './movie';


class App extends Component {

  state = {
    
  }

  componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    // .then(response => console.log(response))
    .then(potato => potato.json()) // json으로 바꿔주기
    .then(json => console.log(json))
    .catch(err => console.log(err))
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
