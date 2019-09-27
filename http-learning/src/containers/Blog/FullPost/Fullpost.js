import React from 'react';

class FullPost extends React.Component{

    state = {
        loadedPost: null
    }

    componentDidMount(){
        console.log('Props pasados a Fullpost.js:', this.props);

    }


    render(){

        let post = <p>Seleccione un Post!</p>;
        /* if(){

        } */

        return post;
    }

}

export default FullPost;