import React from 'react';

class ErrorButton extends React.Component{
   state = {
       renderError: false
   }
   render() {
       if(this.state.renderError){
           this.foo.bar = 0
       }
       return (
           <button className={'btn btn-danger'} onClick={() => this.setState({renderError: true})}>
               Throw Error
           </button>
       );
   }

};

export default ErrorButton;
