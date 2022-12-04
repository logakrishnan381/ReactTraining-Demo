import React from "react";

function Employee(props){

   return(
       <div >
        <h1> hello {props.name}</h1>
        <h2> your employeeid is:{props.employeeid}</h2>
        <Department></Department>
       </div>


   )
}

class Department extends React.Component{

    render(){
        return(
            <div>
                <h1> your designation: {this.props.designation}</h1>
                <h1>your department: {this.props.deapartment}</h1>
            </div>
        ) 
    } 
}



  export default Employee




