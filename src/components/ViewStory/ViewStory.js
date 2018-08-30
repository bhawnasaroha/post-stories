import React, {Component} from 'react';

class ViewStory extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let props = this.props;
        return (
            <div>                
                <h4><span>Posted By: </span>{props.name}</h4>
                <p>{props.content}</p>
                <p>Number of likes: {props.likes}</p>
            </div>
        );
    }
}

export default ViewStory;