import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import {EditUser} from './components/EditUser';
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <div style = {{maxWidth : '30rem' , margin : '4rem auto'}}>
        <h1 className = "text-center">Ajouter Tâches </h1>
        <GlobalProvider>
            <Router>
              <Switch>

                  <Route exact path = "/" component = {Home}/>
                  <Route path = "/add" component =  {AddUser}/>
                  <Route path = "/edit/:id" component =  {EditUser}/>

              </Switch>
            </Router>
        </GlobalProvider>
      
       
       
        
    </div>
  );
}

export default App;
