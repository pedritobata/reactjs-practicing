import React from 'react';
import './Blog.css';

import { NavLink, Route , Switch, Redirect} from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';


class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state.auth = true;
        
    }

    state = {
        auth: false
    }

    render() {

        //console.log("Ruta relativa: ",this.props.match.url);

        return (
           
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                  to={"/"} exact
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                   /*  activeClassName="algo"   para definir al nombre de la clase
                                    cuando el link esté activo*/
                                    activeStyle={{
                                        textDecoration: 'underline'
                                    }}
                                   
                                    to="/posts" exact
                                >Posts</NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: "/new-post",
                                        hash: "#",
                                        search: "?param=guarda"
                                    }}
                                >New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                

                {/* Rutas */}

                <Switch>
                    {}
                    <Route path="/" exact render={()=><h1>Welcome to my Home Page</h1>}/>
                   {/*  NO PONER exact a esta ruta posts, porque como tiene hijos
                    el exact hace que el request ya no explore a los hijos !! */}
                    <Route path="/posts"  component={Posts} />
    
                    {/* <Redirect from="/redirect" to="/posts"  /> */}
                    <Route render={()=><h1 style={{textAlign:'center'}}>Not found!!</h1>} />
                    
                </Switch>


            </div>
        );
    }


}

export default Blog;