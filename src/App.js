import React from 'react';
import axios from 'axios';
import './App.css';
import ViewStory from './components/ViewStory/ViewStory';
import AddStory from './components/AddStory/AddStory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 2,
          name: 'John',
          content: 'this is the story content',
          likes: 12
        }, {
          id: 4,
          name: 'Smith',
          content: 'this is the story content',
          likes: 14
        }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDitMount() {
    // const ax = axios.create({
    //   baseURL: 'http://localhost:3000/data'
    // })
    axios.get('http://localhost:3000/data/db.json')
      .then(res => {
        //console.log(res.data);
        const persons = res.data;
        this.setState({
          persons: persons
        });
      });
    // const data = axios.get('/data/db.json');
    //console.log(data);
  }
  handleChange(event) {
    let target = event.target,
    value = target.value,
    name = target.name;    
    this.setState({
        persons: [
            {
                [name]: value                    
            }
        ]
    });
    console.log(this.state.persons);
}
  handleSubmit(event, data) {
    event.preventDefault();    
    this.setState({
      persons: this.state.persons.concat([{data}])
    });
  }
  render() {
    return (
      <div className="App">
        <AddStory handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
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
