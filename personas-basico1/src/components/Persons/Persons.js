import React from 'react';
import Person from './Person2/Person2';

class Persons extends React.PureComponent{

    state = {
        nuevoRenderizado: ''
    }

    constructor(props){
        super(props);
        this.state.nuevoRenderizado = 'No renderizado nuevo';
        console.log('[Persons.js] constructor()');
    }


    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps()');

        return state;
    }

    /*
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate()');
        if(nextProps.persons !== this.props.persons){
            return true;
        }else{
            return false;
        }

    }
    */

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate()');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        // OJO OJO invocar setState en este metodo causa un bucle infinito!!
        //usar una condicion para que se invoque setState
        if(this.state.nuevoRenderizado !== prevState.nuevoRenderizado){
            this.setState({nuevoRenderizado : 'renderizar nuevamente'});
        }
        
        console.log('[Persons.js] componentDidUpdate()');
        console.log(snapshot);
    }




    render(){

        console.log('[Persons.js] render()');

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