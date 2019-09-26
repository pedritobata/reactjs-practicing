import React from 'react';
import "./Post.css";

const Post = props => {
    return (
        <article className="Post">
            <h1>{props.title}</h1>
            <div className="Author">
                {props.author}
            </div>
        </article>
    );
}

export default Post;