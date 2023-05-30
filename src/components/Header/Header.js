import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='navbar-body' expand="lg">
            <Container>
                <Link className=' text-decoration-none' to='/'>
                    <Navbar.Brand className=' d-flex align-items-center flex-column justify-content-center'>
                        <img src={logo} className='w-50' alt="" />
                        <h6>CreativeBD</h6>
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0 text-center"
                    >
                        <Link className=' mx-3 text-dark text-decoration-none fw-bolder' to='/home'>Home</Link>
                        <Link className=' mx-3 text-dark text-decoration-none fw-bolder' to='/topics'>Topics</Link>
                        <Link className=' mx-3 text-dark text-decoration-none fw-bolder' to='/statistic'>Statistic</Link>
                        <Link className=' mx-3 text-dark text-decoration-none fw-bolder' to='/blog'>Blog</Link>
                    </Nav>
                    <div className='text-center'>
                        <button className='btn btn-bg text-white '>Contact Us</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;