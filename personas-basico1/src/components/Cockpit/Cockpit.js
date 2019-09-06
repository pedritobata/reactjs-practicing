import React, {useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

   
    /***  CONSTANTS  ***/
    const authContext = useContext(AuthContext);





    /***  STATE  ***/








    /***  LIFECYCLE  ***/










    /***  LOGIC  ***/










    /***  STYLES  ***/
    let messageStyle = [];
    if(props.personsLength <= 2){
        messageStyle.push(classes.red);
    }
    if(props.personsLength <= 1){
        messageStyle.push(classes.bold);
    }


    let toggleColor = '';
    if(!props.showPersons){
        toggleColor = classes['button-warning'];
    }






    /***  RENDERING  ***/

    return (
      <div className={classes.Cockpit}>
          <p className={messageStyle.join(' ')}>This App is really working!!</p>
        
          <button 
             onClick={props.changeAliases} 
          >Switch Aliases</button>

          <button 
             className={toggleColor}   
             onClick={props.change}
          >Toggle Persons</button>


      {/*     <AuthContext.Consumer>
              { context=>  <button
                            style={btnStyle}
                            onClick={context.login}
                             >Log in</button>}
          </AuthContext.Consumer>   */}

          {/* Usando hooks para el contexto */}

          <button
             onClick={authContext.login}
          >Log in</button>
         

      </div>  
    );

};


export default Cockpit;

