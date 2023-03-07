import { Navbar, Container } from 'react-bootstrap';

export default function NavBar(){
  return(
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href='#home'> <img src='' alt='Logo'/> </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'> <span className='navbar-toggler-icon'></span> </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'> 
          <Nav className='me-auto'>
            <Nav.Link id='#home'> Home </Nav.Link>
            <Nav.Link id='#skills'> Skills </Nav.Link>
            <Nav.Link id='#projects'> Projects </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'> <img src='' alt='img'/></a>
              <a href='#'> <img src='' alt='img'/></a>
              <a href='#'> <img src='' alt='img'/></a>
            </div>
            <button className='vvd' onClick={() => console.log("clicked!")}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}