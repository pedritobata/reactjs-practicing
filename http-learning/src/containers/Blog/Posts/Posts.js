import React from 'react';
import './Posts.css';
import axios from '../../../services/axios';
import Post from '../../../components/Post/Post';

class Posts extends React.Component{

    state = {
        posts: [],
        error: false
    }

    componentDidMount(){
        console.log("props:",this.props);

        axios.get('/posts')
        .then(response =>{
            console.log(response);
            const posts = response.data;
            this.setState({
                posts
            })
        })
        .catch(err=>{
            this.setState({
                error: true
            });
        })
    }


    render(){
        let posts = <p>Ocurrió un terrible error!!</p> ;
        if(!this.state.error){
            posts = this.state.posts.map(item=>{
                return (
                    <Post 
                      key={item.id}
                      title={item.title}
                    />
                );
            });
        }
        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }

}
export default Posts;