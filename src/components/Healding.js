import React from 'react'
import {Link} from 'react-router-dom';
import {
    Navbar, NavItem, NavbarBrand, Container, Nav
} from 'reactstrap';

export const Healding = () => {
    return (
        <Navbar color = "dark" dark>
            <Container>
                <NavbarBrand href = "/" >Mes Tâches</NavbarBrand>
                <Nav> 
                    <NavItem>
                        <Link className = "btn btn-primary" to = "/add" >Ajouter Tâche</Link>
                    </NavItem>
                </Nav>
            </Container>

        </Navbar>
    )
}