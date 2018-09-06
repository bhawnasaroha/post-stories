import React from 'react';

class AddStory extends React.Component {    
    render() {
        let props = this.props;
        return (
            <div>
                <h2>Post your story</h2>
                <form onSubmit={props.handleSubmit}>
                    Name: <input name="name" onChange={props.handleChange} /><br /><br />
                    Content: <input name="content" onChange={props.handleChange} /><br /><br />
                    <button type="submit">Post</button>
                </form>
            </div>
        );
    }
}

export default AddStory;