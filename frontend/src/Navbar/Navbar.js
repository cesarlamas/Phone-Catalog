import React from 'react'
import { Button, Navbar, Nav,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavbarApp() {
    return (
    <Navbar className="fixed-top" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Phones</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/addPhones">Add Phone</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    )
}

export default NavbarApp
