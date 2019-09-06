import React, {useState} from 'react';
import classes from '../Person1/Person.module.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends React.Component{

    /***  CONSTRUCTOR  ***/
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    
    /***  CONSTANTS  ***/

    static contextType = AuthContext;



    /***  STYLES  ***/

    styleDelete = {
        color:'red',
        cursor: 'pointer'
    }



    /***  LIFECYCLE  ***/

    componentDidMount(){
        //this.inputEL.focus();
        this.inputRef.current.focus();
    }







    /***  RENDERIZADO  ***/

    render(){

        return (
            <div>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
                <p style={this.styleDelete} onClick={this.props.borrar}>Eliminar</p>
                <p>Hello I'm {this.props.name} {this.props.apellido} and they call me {'"' + this.props.alias + '"'}</p>
                <p>{this.props.children}</p>
                <input type="text" 
                   /* ref={element => this.inputEL = element} */
                   ref={this.inputRef}
                   onChange={this.props.changed}
                   defaultValue={this.props.name}
                />
            </div>
        );

    }


}

//Usando PropTypes
Person.propTypes = {
    borrar: PropTypes.func,
    name: PropTypes.string,
    alias: PropTypes.string,
    changed: PropTypes.func,
    //key: PropTypes.number
};


export default WithClass(Person,classes.Person);