import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="row bg-light text-info align-items-center">
        <div className="col-6 d-flex justify-content-center align-items-center ">
            <h1>Jersey Shop</h1>
        </div>
        <div className="col-6 justify-content-end ">
            <Navbar className="justify-content-end  " expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto " activeKey="/home">
                        <Link className="p-2" to="/home">Home</Link>
                        <Link className="p-2" to="/orders">Orders</Link>
                        <Link className="p-2" to="/admin">Admin</Link>
                        <Nav.Link eventKey="disabled" disabled>Deals</Nav.Link>
                        <Link className="p-2" to="/login"><button className="btn btn-success">Login</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    </div>
    );
};

export default Header;