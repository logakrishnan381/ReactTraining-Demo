import React from "react";
//import { ReactDOM } from "react-dom";

class State extends React.Component{

    constructor(){
     super();
     this.state={initialvalue:'welcome logeah',name:'chennai'}

      
    }
    changevalue= ()=>
    {
        this.setState({initialvalue:'this is my name'});
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.initialvalue} {this.state.name}</h1>
                <br>
                </br>
                <button type="button" onClick={this.changevalue}> Exit</button>
                <br>
                </br>
                
            </div>
            ); 
            

        
    }
}
 //ReactDOM.render(<State/>,document.getElementById('root'));
 export default State 