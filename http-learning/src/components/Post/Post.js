import React from 'react';
import "./Post.css";

const Post = props => {
    //compruebo si llegan los props generales del router que invocó inicialmente
    //si quiero que lleguen los props de un router que no es el que invoca inmediatamente
    //tengo que usar  export default withRouter(Post);
    //pero en este componente creo que no necesito esos props extras
    //console.log('Props pasados a Post.js:', props);

    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Author">
                {props.author}
            </div>
        </article>
    );
}

export default Post;