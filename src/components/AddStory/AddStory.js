import React, {Component} from 'react';

class AddStory extends Component {
    constructor() {
        super();
        this.state = {
            persons: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            persons: [
                {
                    name: event.target.value,
                    content: event.target.value,                    
                }
            ]
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.persons);
    }
    render() {
        return (
            <div>
                <h2>Post your story</h2>
                <form>
                    Name: <input onChange={this.handleChange} /><br /><br />
                    Content: <input onChange={this.handleChange} /><br /><br />
                    <input type="submit" value="Post" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export default AddStory;