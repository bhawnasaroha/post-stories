import React from 'react';
// import axios from 'axios';
import './App.css';
import ViewStory from './components/ViewStory/ViewStory';
import AddStory from './components/AddStory/AddStory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          name: 'John',
          content: 'this is the story content',
          likes: 12
        }, {
          id: 2,
          name: 'Smith',
          content: 'this is the story content',
          likes: 14
        }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let target = event.target,
      value = target.value,
      name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    let length = this.state.persons.length,
      persons = this.state.persons,
      id = persons[length - 1].id + 1;
    this.setState(data => ({
      persons: [...this.state.persons, data]
    })
    );
    console.log(this.state.persons);
  }
  // increaseLikes(key) {
  //   // let likes = this.state.persons.likes;
  //   this.setState({
  //     persons: [
  //       likes: likes++
  //     ]
  //   });
  // }
  // decreaseLikes() {
  //   let likes = this.state.persons.likes;
  //   likes = likes--;
  // }
  render() {
    return (
      <div className="App">
        <AddStory
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <hr />
        {this.state.persons.map(person => {
          return (
            <ViewStory
              key={person.id}
              name={person.name}
              content={person.content}
              likes={person.likes}
            />);
        })}
      </div>
    );
  }
}

export default App;
//componentDidMount() {
  //   // const ax = axios.create({
  //   //   baseURL: 'http://localhost:3000/data'
  //   // })
  //   axios.get('http://localhost:3000/data/db.json')
  //     .then(res => {
  //       console.log(res.data);
  //       const persons = res.data;
  //       this.setState({
  //         persons: persons
  //       });
  //     });
  //   const data = axios.get('/data/db.json');
  //   console.log(data);
  // }