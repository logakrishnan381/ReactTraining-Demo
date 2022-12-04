import React from "react";

class Eventbind extends React.Component{

    constructor(){
        super()
        this.state={
           msg:"welcome"
        }
    }
    clickEvent =()=>{
        this.setState({
            msg:"thank you"

        })

        
    }
    render()
    {
         return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.clickEvent}>Click</button>

            </div>
         );

           

        
    }
}   
export default Eventbind 