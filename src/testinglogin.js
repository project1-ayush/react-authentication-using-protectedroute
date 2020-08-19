import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap';

import {Form} from 'react-bootstrap';


export default class Testinglogin extends Component {
    constructor()
    {
        super()
        let loggedIn
               
        this.state={
            username:'',
            password:''
        
        }
         
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
                       }
    submitForm=(e)=>
    {
        e.preventDefault();
        const{username,password}=this.state

        if((username==="A")&&(password ==="B"))
            {
                localStorage.setItem("token","sdjkbdfjbadfadbfkadbfbdk")
                this.setState({
                    loggedIn:true
                })
            }
        
    }
    render()
    {
       if(this.state.loggedIn)
        {
           return <Redirect to="/admin"/>
        }
   
        return (
            <div>
                                <p class="h1">Login</p>
                                 
                                  <Form onSubmit={this.submitForm} >
  <Form.Group controlId="formBasicEmail" >
    <Form.Label>UserName</Form.Label>
    <Form.Control type="text" name="username" onChange={this.onChange} placeholder="Enter username" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" onChange={this.onChange} placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div> 
        )
    }

}
