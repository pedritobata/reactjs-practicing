import React from 'react';
import { Redirect } from 'react-router-dom';
import './NewPost.css';
import axios from '../../../services/axios';

class NewPost extends React.Component{

    constructor(props){
        super(props);
        this.postDataHandler = this.postDataHandler.bind(this);
    }

    state = {
        title: '',
        content: '',
        author: 'Perico',
        submited : false
    }


    postDataHandler(){
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };
        axios.post('/posts' , data)
        .then(response => {
            console.log('respuesta a la peticion POST:', response);
        });
    }


    render(){

        let redirect = null;
        if(this.state.submited){
            redirect = <Redirect to="/posts" />
        }

        return(
            <div className="NewPost">
                {redirect}
                <h1>Add a new Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} 
                onChange={e=>{this.setState({title:e.target.value})}}></input>
                <label>Content</label>
                <textarea rows='4' value={this.state.content}
                 onChange={e=>{this.setState({content: e.target.value})}}></textarea>
                <label>Author</label>
                <select value={this.state.author} onChange={e=>{this.setState({author:e.target.value})}}>
                    <option value="Pedro">Pedrito</option>
                    <option value="Fernando">Fernandillo</option>
                </select>
                <button onClick={this.postDataHandler}>Enviar</button>
            </div>
        );
    }

}


export default NewPost;