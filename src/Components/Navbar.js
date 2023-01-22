import React from 'react'
import logo from '../Images/logo.png';
import menu from '../Images/menu.svg';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';

export default function navbar() {
  return (
    <Navbar expand="lg" className='px-5 fixed-top border-bottom border-dark background-1 navigation' >
        <Navbar.Brand className='background-1'>
          <Link className="navbar-brand" to="">
            <img src={logo} alt="logo" width="150px" className='background-1'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <img src={menu} alt="menu" width="30px"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className='background-1'>
          <Nav className="me-auto">
            <Link className="nav-link text-light text-center navlink background-1" to="/">Top News</Link>
            <Link className="nav-link text-light text-center navlink background-1" to="/Technology">Technology</Link>
            <Link className="nav-link text-light text-center navlink background-1" to="/Sports">Sports</Link>
            <Link className="nav-link text-light text-center navlink background-1" to="/Science">Science</Link>
            <Link className="nav-link text-light text-center navlink background-1" to="/Startup">Startup</Link>
            <Link className="nav-link text-light text-center navlink background-1" to="/Entertainment">Entertainment</Link>
            <Link className="nav-link text-light text-center navlink background-1" to="/National">National</Link>
            <Link className="nav-link text-light text-center navlink background-1" to="/Business">Business</Link>
            <Link className="nav-link text-light text-center navlink background-1" to="/World">World</Link>
            <Link className="nav-link text-light text-center navlink background-1" to="/Politics">Politics</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
