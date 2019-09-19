import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError:false};
    }

    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error,info){
        console.log('Error:', info.componentStack);
    }


    render(){

            if(this.state.hasError){
                return <h1>Ocurrió un Error</h1>;
            }else{
                return this.props.children;
            }
    }   

}

export default ErrorBoundary;