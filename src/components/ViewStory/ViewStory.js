import React from 'react';

class ViewStory extends React.Component {    
    render() {
        let props = this.props;
        return (
            <div className="viewComp">                
                <h4><span>Posted By: </span>{props.name}</h4>
                <p>{props.content}</p>
                <p>Number of likes: {props.likes}</p>
            </div>
        );
    }
}

export default ViewStory;