import React from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliar';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

class Person extends React.Component{

    static contextType = AuthContext;

    render(){

        const fullName = this.props.name + ' ' + this.props.lastName;

      /*   
        return (
           <div className={classes.Person}>
               <p>Name: {fullName}</p>
               <p>Age: {this.props.age}</p>
               <p>Ocupation: {this.props.ocupation}</p>
           </div> 
        ); 
      */

       /* 
       return [
            <p key="wqwqw">Name: {fullName}</p>,
            <p key="rtttr">Age: {this.props.age}</p>,
            <p key="nvbnv">Ocupation: {this.props.ocupation}</p>
        ];
       */


       /*  
       return (
            <React.Fragment>
                <p>Name: {fullName}</p>
                <p>Age: {this.props.age}</p>
                <p>Ocupation: {this.props.ocupation}</p>
            </React.Fragment>
        ); */

        return (
            <Aux>
               {/*  <AuthContext.Consumer>
                   {context => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>} 
                </AuthContext.Consumer> */}
                 {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
                <p>Name: {fullName}</p>
                <p>Age: {this.props.age}</p>
                <p>Ocupation: {this.props.ocupation}</p>
            </Aux>
        );


    }


}

export default withClass(Person, classes.Person);