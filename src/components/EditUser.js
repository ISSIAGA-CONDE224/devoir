import React from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export const EditUser = () => {
    return (
        <Form>
        <FormGroup>
            <Label>Entrer une tâche : </Label>
            <Input type = "text" placeholder =" Entrer une tâche "></Input>
        </FormGroup>
        <Button type = "submit">Modifier</Button>
        <Link to = "/" className ="btn btn-danger ml-2" >Annuler</Link>
    </Form>
    )
}
export default EditUser;