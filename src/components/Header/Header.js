import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="">
            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Jersey Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="p-3" to="/home">Home</Link>
                            <Link className="p-3" to="/orders">Orders</Link>
                            <Link className="p-3" to="/addJersey">Admin</Link>
                            <Nav.Link className="p-3" eventKey="disabled" disabled>Deals</Nav.Link>
                            <Link className="p-2" to="/login"><button className="btn btn-success">Login</button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;