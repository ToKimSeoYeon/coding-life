import React, { Component } from 'react';
import './App.css';
import FlashcardComponent from './Flashcard';


class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     traditional: "明明",
  //     simplified: "明明",
  //     eWriting_toneNum: "ming2ming2",
  //     pronounce: ""
  //   };
  // }

  state = {
    traditional: "明",
    simplified: "明",
    eWriting_toneNum: "ming2",
    pronounce: ""
  };


  componentDidMount() {

  }


  render() {
    return (
      <div className="App">
        <FlashcardComponent trandi={this.state.traditional} simplified={this.state.simplified} eWriting_toneNum={this.state.eWriting_toneNum}/>
      </div>
    );
  }
}


export default App;
