import React from 'react';
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap'
import Styles from '../css/Header.module.css'
import logo from '../Images/logo.jpg'
function Header() {
  return (
    <div>
        <Navbar bg="info" expand="lg">
  <Container>
    <img src={logo} alt="logo" width={140} height={70}/>
    {/* <Navbar.Brand href="#home"><h4>UMA MEDICALS</h4></Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
      <Nav>
        <Nav.Link href="#home"><div className={Styles.linktext}><h5>Home</h5></div></Nav.Link>
        <Nav.Link href="#link"><div className={Styles.linktext}><h5>About Us</h5></div></Nav.Link>
        <Nav.Link href="#link"><div className={Styles.linktext}><h5>Contact Us</h5></div></Nav.Link>
        <Nav.Link href="#link"><div className={Styles.linktext}><h5>Offers</h5></div></Nav.Link>
        <Nav.Link href="#link"><div className={Styles.linktext}><h5>Add To Cart</h5></div></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header