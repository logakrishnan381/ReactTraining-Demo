import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class FormDemo extends React.Component {
    constructor(){
        super();
        this.state = {
            fname: "",
            lname: "",
            gender: "",
            dob: ""
        }
    }

    handleChange = (event) => {
        this.setState({
        [event.target.name] : event.target.value
    })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('F Name:',this.state.fname);
        console.log('L Name:',this.state.lname);
        console.log('DOB:',this.state.dob);
        console.log('Gender:',this.state.gender);
    }

    render(){

        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };


        return (
            <div className="form-container">
            <form onSubmit={this.handleSubmit} >
            <div >
            <label for='fname'>First Name </label>
            <input type='text' className="name-input" name='fname' id='name' value={this.state.fname} required pattern='[a-zA-Z]+' onChange={this.handleChange}/> 
            </div>
            
            <div>
            <label for='lname' >Last Name </label>
            <input type='text' className="name-input" name='lname' id='lname' value={this.state.lname} required pattern='[a-zA-Z]+' onChange={this.handleChange} />          
            </div>

            <div>
            <label for='gender' >Gender </label>    
            <input type='radio' name='gender' id='gender' value={this.state.gender = "Male"} required onChange={this.handleChange}/> <label>Male</label>
            <input type='radio' name='gender' id='gender' value={this.state.gender= "FeMale"}  required onChange={this.handleChange}/> <label>Female</label> 
            </div>

            <div>
            <label for='dob'>DOB </label>
            <input type='date' name='dob' id='dob' value={this.state.dob} required onChange={this.handleChange}/> 
            </div>

            <div>
            <button className="submit-button" type="submit">Submit</button>
            </div>
            </form>
            </div>

        );

    }
}

export default FormDemo;