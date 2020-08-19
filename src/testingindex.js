import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
import Testinglogin from './testinglogin';
import Testingadmin from './testingadmin';
import Testinglogout from './testinglogout';
import Testingerror from './testingerror';
const PrivateRoute = (x)=>
{
  console.log(x);
  console.log(x.path);
  console.log(x.age);
  console.log(x.component);

  const {component:Component,...rest}=x;
  const token=localStorage.getItem("token")
  console.log(token);
        let loggedIn=true
        if(token==null)
        {
            loggedIn=false
        }
  return(<Route {...rest} render={(props) => (
    loggedIn=== true ? <Component {...props} />: <Redirect to='/' />
  )} />)
}


export default class Testingindex extends Component 
 {
    render() 
    {

        return (
            <Router>
            <Switch>
                <Route exact path="/">
                    <Testinglogin />
               </Route>
         
          <PrivateRoute exact path="/admin" age={30} component={Testingadmin}/>
          
           
           
          <Route exact path="/logout">
            <Testinglogout/>
          </Route>
            
          <Route>
            <Testingerror/>
          </Route>
            
          </Switch>
          </Router>
            
            
        );
    }
}
