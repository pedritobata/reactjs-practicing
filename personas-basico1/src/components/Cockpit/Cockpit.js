import React, {useContext, useRef, useEffect} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

   
    /***  CONSTANTS  ***/
    const authContext = useContext(AuthContext);
    
    const yeahRef = useRef(null);
    





    /***  STATE  ***/








    /***  LIFECYCLE  ***/
    //useEffect es una mezcla de componentDidUpdate, componentDidMount y componentWillUnmount
    //cada efecto que se define en el callback del argumento de useEffect se crea uno nuevo con cada render
    useEffect(()=>{
        //Esto se ejecutará cada vez que se haya renderizado el componente , por
        //primera vez o en las actualizaciones (componentDidUpdate  o componentDidMount )
        console.log('[Cockpit.js] useEffect 1 creado');
        fillYeahMessage();
        //cuando retorno una funcion, esta se ejecutará cuando el componente se desmonte (similar componentWillUnmount)
        // y cada vez antes de ejecutar un nuevo efecto, es decir sanea los efectos anteriores
        return () => {
            console.log('[Cockpit.js] useEffect 1 saneado');
        }
    });


    //se puede crear tantos efectos como se requiera, con esto podemos ordenar nuestra logica para
    //cada casuistica por separado.
    //los efectos seran ejecutados por React segun el orden en que fueron definidos

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect 2 creado');
        return () =>{
            console.log('[Cockpit.js] useEffect 2 saneado');
        }
    });


    //uso el segundo argumento de useEffect para decirle a react qué props y/o state debe evaluar si cambiaron para
    //ejecutar el efecto. Basta que un solo elemento(prop o state) del array cambie para que React ejecute el efecto
    //si mando el array vacío [] entonces React NO ejecutará el efecto en cada actualizacion, solo en el
    //primer render y en el desmontaje

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect 3 cambió el length:', props.personsLength);
        return () =>{
            console.log('[Cockpit.js] useEffect 3 saneado');
        }
    }, [props.personsLength]);
 

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect 4 creado');
        return () =>{
            console.log('[Cockpit.js] useEffect 4 saneado');
        }
    }, []);









    /***  LOGIC  ***/
    const fillYeahMessage = () => {
        yeahRef.current.textContent = 'Yeahh !!!';
        yeahRef.current.style.color = 'blue';
    }









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
          <p ref={yeahRef}></p>
        
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

