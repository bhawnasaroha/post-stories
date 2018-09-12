import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import './App.css';
import ViewStory from './components/ViewStory/ViewStory';
import AddStory from './components/AddStory/AddStory';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faThumbsDown);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.increaseLikes = this.increaseLikes.bind(this);
    this.decreaseLikes = this.decreaseLikes.bind(this);
  }

  // handle change method
  handleChange(event) {
    let target = event.target,
      value = target.value,
      name = target.name;
    this.setState({
      [name]: value
    });
  }

  // handle submit method
  handleSubmit(event) {
    event.preventDefault();
    let length = this.state.persons.length,
      persons = [...this.state.persons],
      id = persons[length - 1].id + 1;
    persons.push({
      id: id,
      name: this.state.name,
      content: this.state.content,
      likes: 0
    });
    this.setState({ persons: persons });
    console.log(this.state.persons);
  }

  // increase likes method
  increaseLikes(id) {
    let uId = id;
    console.log(id);
    let persons = [...this.state.persons];
    let users = this.state.persons;
    let person = _.find(users, function (person) {
      if (person.id === uId) {
        return person;
      }
    });
    let newPerson = {
      id: person.id,
      name: person.name,
      content: person.content,
      likes: person.likes++
    };
    persons.push(newPerson);
    persons.pop(person);
    this.setState({ persons: persons });
  }

  // decrease likes method
  decreaseLikes(id) {
    let uId = id;
    console.log(id);
    let persons = [...this.state.persons];
    let users = this.state.persons;
    let person = _.find(users, function (person) {
      if (person.id === uId) {
        return person;
      }
    });
    let newPerson = {
      id: person.id,
      name: person.name,
      content: person.content,
      likes: (person.likes > 0 ? person.likes-- : person.likes)
    };
    persons.push(newPerson);
    persons.pop(person);
    this.setState({ persons: persons });
  }

  // to get json data 
  componentDidMount() {
    const ax = axios.create({
      baseURL: 'http://127.0.0.1:4000/'
    });
    ax.get('http://127.0.0.1:4000/')
      .then(res => {
        console.log(res.data);
        const persons = res.data;
        this.setState({
          persons: persons
        });
      });    
    axios({
      method: 'post',
      url: 'http://127.0.0.1:4000/',
      data: this.state.persons,
      header: {
        'Accept': 'application/json'        
      },
    });
  }

  // render starts
  render() {
    return (
      <div className="App">
        <AddStory
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <hr />
        <h1 className="text-primary">Stories</h1>
        {this.state.persons.map(person => {
          return (
            <ViewStory
              key={person.id}
              name={person.name}
              content={person.content}
              likes={person.likes}
              increaseLikes={() => this.increaseLikes(person.id)}
              decreaseLikes={() => this.decreaseLikes(person.id)}
            />);
        })}
      </div>
    );
  }
}

export default App;
