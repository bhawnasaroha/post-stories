import React from 'react';

class ViewStory extends React.Component {
    render() {
        let props = this.props,
            likes = props.likes;
        return (
            <div className="viewComp">
                <h4><span>Posted By: </span>{props.name}</h4>
                <p>{props.content}</p>
                {/* <button className="likes-counter" >+</button> */}
                <span className="text-right">{(likes) ? `Likes: ${likes}` : ''}</span>
                {/* <button className="likes-counter" >-</button> */}
            </div>
        );
    }
}

export default ViewStory;