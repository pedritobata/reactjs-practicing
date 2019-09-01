import React, {Component} from 'react';
import './PersonSwitcher1.css';
import Person from '../../components/Persons/Person1/Person';
import AuthContext from '../../context/auth-context';


class PersonSwitcher1 extends Component{

    state = {
        persons : [
            {name: 'Tato', lastName:'Martinez', age:44, ocupation:'Programmer'},
            {name: 'Fernando', lastName:'Ferreyra', age:33, ocupation:'Functional Analist'},
            {name: 'Raphael', lastName:'Castañeda', age:54, ocupation:'Manager'},
            {name: 'Luis', lastName:'Moreyra', age:32, ocupation:'Programmer'},
            {name: 'Manuel', lastName:'Castañeda', age:34, ocupation:'Scrum Master'}
        ]
    }


    switchStateHandler = () => {
        this.setState({
            persons : [
                {name: 'Tato', lastName:'Goyoneche', age:44, ocupation:'Programmer'},
                {name: 'Fernando', lastName:'Zapata', age:33, ocupation:'Functional Analist'},
                {name: 'Raphael', lastName:'Jaramillo', age:54, ocupation:'Manager'},
                {name: 'Luis', lastName:'Moreyra', age:32, ocupation:'Programmer'},
                {name: 'Manuel', lastName:'Castañeda', age:34, ocupation:'Scrum Master'}
            ]
        });
    }


   


    render(){
        const authorStyle = {
                fontSize: '13px', 
                color: '#fff' ,
              /*   justifyContents: 'left' */
            }

        const author = React.createElement('p',{style:authorStyle},'by Pedrito');

        return (
                <div>
                    <header className="App-header">
                      <h1>Personas switch básico</h1>
                      {author}
                    </header>

                    <button onClick={this.switchStateHandler}>Change Persons state</button>

                    <AuthContext.Provider value={{authenticated: true}}>
                        <Person  name={this.state.persons[0].name} 
                                 lastName={this.state.persons[0].lastName}
                                 age={this.state.persons[0].age}
                                 ocupation={this.state.persons[0].ocupation} />
                        <Person  name={this.state.persons[1].name} 
                                 lastName={this.state.persons[1].lastName}
                                 age={this.state.persons[1].age}
                                 ocupation={this.state.persons[1].ocupation} />
                        <Person  name={this.state.persons[2].name} 
                                 lastName={this.state.persons[2].lastName}
                                 age={this.state.persons[2].age}
                                 ocupation={this.state.persons[2].ocupation} />
                        <Person  name={this.state.persons[3].name} 
                                 lastName={this.state.persons[3].lastName}
                                 age={this.state.persons[3].age}
                                 ocupation={this.state.persons[3].ocupation} />
                        <Person  name={this.state.persons[4].name} 
                                 lastName={this.state.persons[4].lastName}
                                 age={this.state.persons[4].age}
                                 ocupation={this.state.persons[4].ocupation} />
                    </AuthContext.Provider>
                </div>
        )

    }



}

export default PersonSwitcher1;

