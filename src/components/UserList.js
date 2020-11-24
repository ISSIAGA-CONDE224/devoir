import React from 'react';
import {Link} from 'react-router-dom';
import{
    ListGroup, ListGroupItem,Button
}from 'reactstrap';

export const UserList = () => {
    return (
        <ListGroup className = "mt-4" >
            <ListGroupItem className = "d-flex" >
                <strong>Utilisateur 1</strong>
            <div className = "ml-auto">
                <Link className = "btn btn-warning mr-2" to = "/edit/1">Modifier</Link>
                <Button color = "danger">Supprimer</Button>
            </div>
            </ListGroupItem> 

            <ListGroupItem className = "d-flex" >
                <strong>Utilisateur 1</strong>
            <div className = "ml-auto">
                <Link className = "btn btn-warning mr-2" to = "/edit/1">Modifier</Link>
                <Button color = "danger">Supprimer</Button>
            </div>
            </ListGroupItem>
        </ListGroup>

    )
}
