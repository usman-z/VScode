import { Navbar, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function NavBar(){

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>{
      if(window.scrollY > 50)
        setScrolled(true);
      else
        setScrolled(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }  

  return(
    <Navbar expand="lg" className={scrolled? "scrolled": ""}>
      <Container>
        <Navbar.Brand href='#home'> <img src='' alt='Logo'/> </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'> <span className='navbar-toggler-icon'></span> </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'> 
          <Nav className='me-auto'>
            <Nav.Link id='#home' className={activeLink === "home" ? "active nbar-link": "navabr-link"} onClick={()=> onUpdateActiveLink("home")}> Home </Nav.Link>
            <Nav.Link id='#skills' className={activeLink === "skills" ? "active nbar-link": "navabr-link"} onClick={()=> onUpdateActiveLink("skills")}> Skills </Nav.Link>
            <Nav.Link id='#projects' className={activeLink === "projects" ? "active nbar-link": "navabr-link"} onClick={()=> onUpdateActiveLink("projects")}> Projects </Nav.Link>
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