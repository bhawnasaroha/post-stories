import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ViewStory extends React.Component {
    render() {
        let props = this.props;
        return (
            <div className="viewComp" onClick={props.id}>
                <h4><span>Posted By: </span>{props.name}</h4>
                <p>{props.content}</p>
                <div className="likes-wrapper">
                    <button className="likes-counter like" onClick={props.increaseLikes}>
                        <FontAwesomeIcon
                            icon="thumbs-up"
                        />
                    </button>                    
                    <button className="likes-counter dislike" onClick={props.decreaseLikes}>
                        <FontAwesomeIcon
                            icon="thumbs-down"
                        />
                    </button>
                    <span> {props.likes} </span>
                </div>
            </div>
        );
    }
}

export default ViewStory;