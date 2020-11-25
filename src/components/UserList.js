import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Link} from 'react-router-dom';
import{
    ListGroup, ListGroupItem,Button
}from 'reactstrap';

export const UserList = () => {
    const {users,removeUser} = useContext(GlobalContext);
    return (
        
        <ListGroup className = "mt-4" >
            {users.length > 0 ? (
                <>
                  {users.map((user,index) =>(
                    <ListGroupItem className = "d-flex"  key = {users.id}>
                    <strong >{  user.name }</strong>
                <div className = "ml-auto">
                    <Link className = "btn btn-warning mr-2" to = {`/edit/${user.id}`}>Modifier</Link>
                    <Button onClick = {() => removeUser(user.id)} color = "danger">Supprimer</Button>
                </div>
                </ListGroupItem> 
           ))}
           </>
            ) : (<h1 className = "text-center">Ajouter une tâche </h1>)}
          
 
        </ListGroup>

    )
}
