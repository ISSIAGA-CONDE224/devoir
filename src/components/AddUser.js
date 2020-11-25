import React,{useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Link, useHistory} from 'react-router-dom';
import {v4 as uuid} from 'uuid'
import {Form, Label, Button, FormGroup, Input } from 'reactstrap';

//fonction d'ajout de tâche
export const AddUser = () => {

    const {addUser} = useContext(GlobalContext);
    const [name, setName] = useState('');
    const history =  useHistory();
    const onSubmit = () =>{
        const newUser = {
            id : uuid(),
            name
        }
       
        if(newUser.name !== ''){
            addUser(newUser)
            history.push('/')
        }else{
           
            alert('Veuillez remplir le champs !');
        }
        
    }
    const onChange = (e) =>{
        setName(e.target.value)
    }
    return (
       <Form onSubmit = {onSubmit} >
           <FormGroup>
              <Label>Nom de tâche : </Label> 
              <Input type = "text" value = {name} onChange = {onChange} placeholder = "Entrez la tâche " ></Input>
           </FormGroup>
           <Button type = "submit">Ajouter</Button>
           <Link to = "/" className = "btn btn-danger ml-2" >Annuler</Link>
       </Form>
    )
}
