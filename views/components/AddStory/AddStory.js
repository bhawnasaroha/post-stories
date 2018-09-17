import React from 'react';

class AddStory extends React.Component {    
    render() {
        let props = this.props;
        return (
            <div>
                <h2 className="text-primary">Post your story</h2>
                <form onSubmit={props.handleSubmit}>
                    <input name="name" onChange={props.handleChange} placeholder="Enter your name"/><br /><br />
                    <textarea rows="7" cols="20" name="content" onChange={props.handleChange} placeholder="Post your story..." /><br /><br />
                    <button className="submit-button" type="submit">Post</button>
                </form>
            </div>
        );
    }
}

export default AddStory;