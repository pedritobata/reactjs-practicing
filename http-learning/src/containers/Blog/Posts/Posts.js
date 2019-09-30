import React from 'react';
import './Posts.css';
import { Link , Route } from 'react-router-dom';
import axios from '../../../services/axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends React.Component{

    state = {
        posts: [],
        error: false
    }




    componentDidMount(){
        console.log("props pasados a Posts.js:",this.props);

        axios.get('/posts')
        .then(response =>{
            console.log(response);
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(item => {
                return {
                    ...item,
                    author: 'Pedrito'
                }
            });
            this.setState({posts:updatedPosts});
        })
        .catch(err=>{
            this.setState({
                error: true
            });
        })
    }


    postSelectedHandler(id){
      // this.props.history.push({pathname:'/posts/' + id}) ;
       this.props.history.push('/posts/' + id);
    }


    render(){
        let posts = <p style={{textAlign: 'center'}}>Ocurrió un terrible error!!<br/>
                   No se pudo cargar los posts</p> ;
        if(!this.state.error){
            posts = this.state.posts.map(item=>{
                return (
                    //<Link to={this.props.match.url + '/' + item.id} key={item.id}>
                        <Post 
                          key={item.id}
                          title={item.title}
                          author={item.author}
                          clicked={()=> this.postSelectedHandler(item.id) }
                        />
                   // </Link>
                );
            });
        }
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
    
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>

        );
    }

}
export default Posts;