import React from 'react';
import "../PersonSwitcher1/PersonSwitcher1.css";
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit';
import AuthContext from '../../context/auth-context';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

class PersonSwitcher3 extends React.Component{


    /***  CONSTRUCTOR  ***/
    constructor(props){
        super(props);
        //enlazo la funcion que necesito enviar a otro componente y que usa this en su interior
        //Ojo que si no invoqué antes a super, el objeto no se habrá creado y por lo tanto
        //ninguna propiedad o funcion o referencia this existirían en este momento!!
        this.deletePersonHandler = this.deletePersonHandler.bind(this);
        this.nameChangedHandler = this.nameChangedHandler.bind(this);
        this.togglePersonsHandler = this.togglePersonsHandler.bind(this);
        this.changeAliasesHandler = this.changeAliasesHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }



    /***  STATE  ***/
    state = {
        persons: [
            {id: 112233 ,name:'Ernesto', apellido: 'Tello', alias:'Chato'},
            {id: 223344 ,name:'Manuel' , apellido: 'Lopez' , alias:'Huevo'},
            {id: 334455, name:'Joel', apellido:'García', alias:'Mini mini'},
            {id: 445566, name:'Raul',apellido:'Lopez', alias: 'Calato'}
        ],
        showPersons : true,
        isAuthenticated: false
    }



    /***  LYFECYCLE  ***/






    /***  LOGIC  ***/

    renderPersonsConditional(){
       let personsConditional = null;
       if(this.state.showPersons) {
           personsConditional = (
            <Persons 
            persons={this.state.persons}
            borrar={this.deletePersonHandler}
            changed={this.nameChangedHandler}
             />
           );
       }
       return personsConditional;
    }

    togglePersonsHandler(){
        this.setState((prevState, newProps)=>{
            return {
                showPersons: !prevState.showPersons
            }
        });
    }


    deletePersonHandler(index){
        const tmpPersons = [...this.state.persons];
        tmpPersons.splice(index,1);
        this.setState({persons: tmpPersons});
    }

    nameChangedHandler(e, id){
        const tmpPersons = [...this.state.persons];
        const foundedPerson = tmpPersons.find(p => {
           return p.id === id;
        });//find()  devuelve la primera ocurrencia que cumpla la condición dada!!
        
        foundedPerson.name = e.target.value;
        this.setState({persons: tmpPersons});

    }


    changeAliasesHandler(){
        this.setState({
            persons: [
                {id: 112233 ,name:'Ernesto', apellido: 'Tello', alias:'Zianni'},
                {id: 223344 ,name:'Manuel' , apellido: 'Lopez' , alias:'Pin plan'},
                {id: 334455, name:'Joel', apellido:'García', alias:'Feo de mierda'},
                {id: 445566, name:'Raul',apellido:'Lopez', alias: 'Calatimbi'}
            ]
        })
    }

    loginHandler(){
        this.setState({isAuthenticated : true});
    }



    /***  STYLES  ***/






   /***  RENDERING  ***/

    render(){

        return(
           <ErrorBoundary>
               <AuthContext.Provider value={ {authenticated:this.state.isAuthenticated, login: this.loginHandler} }>
                   <div>
                       <header className="App-header">
                           <h1>Personas Switch básico 3</h1>
                       </header>
        
                        <Cockpit 
                            showPersons={this.state.showPersons}
                            personsLength={this.state.persons.length}
                            change={this.togglePersonsHandler}
                            changeAliases={this.changeAliasesHandler}
                        />
        
                       {this.renderPersonsConditional()}
                   </div> 
               </AuthContext.Provider>
           </ErrorBoundary>
        );

    }


}

export default PersonSwitcher3;