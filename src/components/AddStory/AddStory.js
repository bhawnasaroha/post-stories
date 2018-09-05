import React from 'react';

class AddStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        };
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
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
    // handleSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.persons);
    // }
    render() {
        let props = this.props;
        return (
            <div>
                <h2>Post your story</h2>
                <form>
                    Name: <input name="name" onChange={this.handleChange} /><br /><br />
                    Content: <input name="content" onChange={this.handleChange} /><br /><br />
                    <button type="submit" onClick={props.click}>Post</button>
                </form>
            </div>
        );
    }
}

export default AddStory;