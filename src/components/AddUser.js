import React from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export const AddUser = () => {
    return (
       <Form>
           <FormGroup>
               <Label>Entrer une tâche : </Label>
               <Input type = "text" placeholder =" Entrer une tâche "></Input>
           </FormGroup>
           <Button type = "submit">Ajouter</Button>
           <Link to = "/" className ="btn btn-danger ml-2" >Annuler</Link>
       </Form>
    )
}
export default AddUser;