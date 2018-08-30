import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ViewStory from './components/ViewStory/ViewStory';
import AddStory from './components/AddStory/AddStory';

class App extends Component {
  constructor() {
    super();
    this.state = [
        {
            id: 2,
            name: 'John',
            content: 'this is the story content',
            likes: 12
        },
        {
            id: 4,
            name: 'Smith',
            content: 'this is the story content',
            likes: 14
        }
    ];
}
  render() {
    const ax = axios.create({
      baseURL: 'http://localhost:3000/data'
    })
    const data = ax.get('db.json');
    console.log(data);
    
    // const data = axios.get('/data/db.json');
    //console.log(data);

    return (
      <div className="App">
        <AddStory />
        <hr />
        <ViewStory name={this.state[0].name} content={this.state[0].content} likes={this.state[0].likes} />
        <ViewStory name={this.state[1].name} content={this.state[1].content} likes={this.state[1].likes} />
      </div>
    );
  }
}

export default App;
