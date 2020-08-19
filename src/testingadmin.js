import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Testingadmin extends Component {
   
    render() {
         return (
            <div>
                <h1>This is Admin page.Only Authorized people can see this</h1>
                <Link to="/logout">Logout</Link>
                 
            </div>
        )
    }
}
