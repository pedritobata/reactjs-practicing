import React, {useState} from 'react';
import '../PersonSwitcher1/PersonSwitcher1.css';
import Person from '../../components/Persons/Person2/Person2';
import Persons from '../../components/Persons/Persons';

const PersonSwitcher2 = props => {

    /***  STATE  ***/
    const [personsState, setPersonsState] = useState({
        persons : [
            {id: 112233 ,name: 'Pedro', alias: 'El bravo'},
            {id: 223344 ,name: 'Raphael', alias: 'Coquero'},
            {id: 334455 ,name: 'William', alias: 'Wiwi'}
        ]
    });

    const [togglePersonsState, setTogglePersonsState] = useState({
        showPersons: false
    });




    /***   HANDLERS  ***/

    function switchAliasHandler(newAliases){
        setPersonsState({
            persons : [
                {id: 112233 ,name: 'Pedro', alias: newAliases.alias1},
                {id: 223344 ,name: 'Raphael', alias: newAliases.alias2},
                {id: 334455 ,name: 'William', alias: newAliases.alias3}
            ]
        })
    } 

    const togglePersonsHandler = () => {
        const doesShow = togglePersonsState.showPersons;
        setTogglePersonsState({ showPersons: !doesShow });
    }

    const deletePersonHandler = (index) => {
        //slice devuelve un arreglo con copias a las referencias de cada objeto
        //lo cual haría que se modifique el estado al modificar el nuevo arreglo
        //const clonPersons = personsState.persons.slice();
        //clonPersons[0].name = "Juanito";//si hago esto estoy modificando el valor original
        //ya que he clonado la referencia y apunto al mismo objeto!!

        //clono el arreglo con todo y objetos y sus propias referencias
        const clonPersons = [...personsState.persons];

        clonPersons.splice(index,1);
        setPersonsState({ persons: clonPersons });
    }

    const nameChangedHandler = (e, id) => {
        const personIndex = personsState.persons.findIndex(p => {
            return p.id === id;
        });
        const persons = [...personsState.persons];
        persons[personIndex].name = e.target.value;
        setPersonsState({persons});
    }








    /***  LOGICA PARA RENDER CONDICIONAL  ***/

    let personsConditional = null;
    if(!togglePersonsState.showPersons){
       /*  personsConditional = (
          <div>
              <Person 
                name = {personsState.persons[0].name}
                alias = {personsState.persons[0].alias}
              >
                  Tengo cuerpo!
              </Person>
              <Person 
                name={personsState.persons[1].name}
                alias={personsState.persons[1].alias}  
              />
              <Person 
                name={personsState.persons[2].name}
                alias={personsState.persons[2].alias}
              />
          </div>

        ); */

        
        personsConditional = (
            <Persons 
               persons={personsState.persons}
               borrar={deletePersonHandler}
               changed={nameChangedHandler}
            ></Persons>

        );


    }





    /*** STYLES ***/
    //Estilo del boton Switch Aliases
    const styleAliases = {
        backgroundColor : "white",
        font : 'inherit',
        border: '1px solid #255cca',
        padding: '8px',
        cursor: 'pointer',
        marginTop: '10px',
        marginRight: '10px'
      };






    /***  RENDERIZADO   ***/

    return (
        <div>
            <header className="App-header">
                <h1>Personas Switch básico 2</h1>
            </header>

            <button
            style={styleAliases}
              onClick={()=>switchAliasHandler({alias1:'super bravo',alias2:'Trafael', alias3:'Hellboy'})}
            >Switch Aliases</button>

            <button
               style={styleAliases}
               onClick={togglePersonsHandler}
            >Toggle Persons</button>

           { personsConditional }

        </div>
    );

}

export default PersonSwitcher2;