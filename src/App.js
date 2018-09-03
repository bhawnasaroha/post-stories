import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ViewStory from './components/ViewStory/ViewStory';
import AddStory from './components/AddStory/AddStory';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons:[
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
      ]
    };
}
  componentDitMount() {    
    // const ax = axios.create({
    //   baseURL: 'http://localhost:3000/data'
    // })
    axios.get('http://localhost:3000/data')
      .then(res => {
        console.log(res.data);
        const persons = res.data;
        this.setState({
          persons: persons
        });
      })
    // const data = axios.get('/data/db.json');
    //console.log(data);
  }
  render() {
    return (
      <div className="App">
        <AddStory />
        <hr />
        {this.state.persons.map( person => {
          return(
            <ViewStory             
            key={person.id}
            name={person.name}
            content={person.content}
            likes={person.likes}
          />)
        })}
        {/* <ViewStory 
          name={this.state.persons.map( person => {person.name})} 
          content={this.state.persons.map( person => {person.content})} 
          likes={this.state.persons.map( person => {person.likes})} 
        /> */}
        {/*<ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
          </ul> 
        */}        
      </div>
    );
  }
}

export default App;
