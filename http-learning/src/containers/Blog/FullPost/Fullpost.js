import React from 'react';
import './FullPost.css';
import axios from '../../../services/axios';


class FullPost extends React.Component{

    state = {
        loadedPost: null
    }

    componentDidMount(){
        console.log('Props pasados a Fullpost.js:', this.props);
        this.loadData();
    }

    componentDidUpdate(){
        this.loadData();
    }


    loadData(){
        if(!this.state.loadedPost || 
            (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id)){
                axios.get('/posts/' + this.props.match.params.id)
                .then(response => {
                    this.setState({
                        loadedPost: response.data
                    })
                });
        }
    }


    render(){

        let post = <p>Seleccione un Post!</p>;
        if(this.props.match.params.id){
            post = <p>Loading...</p>;
        }

        if(this.state.loadedPost){
            post = 
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.title}</p>
            </div>
        }

        return post;
    }

}

export default FullPost;