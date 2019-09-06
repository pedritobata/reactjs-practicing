import React from 'react';
import Person from './Person2/Person2';

class Persons extends React.Component{


    render(){


        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={index}
                    name={person.name}
                    apellido={person.apellido}
                    alias={person.alias}
                    borrar={() => this.props.borrar(index)}
                    changed={(e)=>this.props.changed(e, person.id)}
                >
                </Person>
            );
        });

       

    }


}

export default Persons;