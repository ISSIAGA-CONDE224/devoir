import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Link} from 'react-router-dom';
import{ListGroupItem}from 'reactstrap';
import {Button} from '@material-ui/core';
import Container from '@material-ui/core/Container';

export const UserList = () => {
    const {users,removeUser} = useContext(GlobalContext);
    return (
        
       // <ListGroup className = "mt-4" >
       <Container maxWidth = "sm">
            {users.length > 0 ? (
                <>
                  {users.map((user,index) =>(
                    <ListGroupItem className = "d-flex"  key = {users.id}>
                    <strong >{  user.name }</strong>
                <div className = "ml-auto">
                    <Link className = "btn btn-warning mr-2" to = {`/edit/${user.id}`}>Modifier</Link>
                    <Button variant = "contained" onClick = {() => removeUser(user.id)} color = "secondary">Supprimer</Button>
                </div>
                </ListGroupItem> 
           ))}
           </>
            ) : (<h1 className = "text-center">Aucune tâche dans votre planning ! </h1>)}
          
    </Container>
       // </ListGroup>

    )
}
