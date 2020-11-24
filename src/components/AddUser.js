import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Label, Button, FormGroup, Input } from 'reactstrap';

export const AddUser = () => {
    return (
       <Form>
           <FormGroup>
              <Label>Nom de tâche : </Label> 
              <Input type = "text" placeholder = "Entrez la tâche " ></Input>
           </FormGroup>
           <Button type = "submit">Ajouter</Button>
           <Link to = "/" className = "btn btn-danger ml-2" >Annuler</Link>
       </Form>
    )
}
