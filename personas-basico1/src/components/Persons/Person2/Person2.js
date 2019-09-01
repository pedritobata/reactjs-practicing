import React, {useState} from 'react';
import classes from '../Person1/Person.module.css';
import WithClass from '../../../hoc/WithClass';

class Person extends React.Component{


    /***  STYLES  ***/

    styleDelete = {
        color:'red',
        cursor: 'pointer'
    }



    /***  RENDERIZADO  ***/

    render(){

        return (
            <div>
                <p style={this.styleDelete} onClick={this.props.borrar}>Eliminar</p>
                <p>Hello I'm {this.props.name} and they call me {'"' + this.props.alias + '"'}</p>
                <p>{this.props.children}</p>
                <input type="text" 
                   onChange={this.props.changed}
                   defaultValue={this.props.name}
                />
            </div>
        );

    }


}

export default WithClass(Person,classes.Person);