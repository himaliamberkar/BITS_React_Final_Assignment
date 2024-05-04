import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NavBar = () => { 
  const navigate = useNavigate()
  const handleLogout =()=>{
    localStorage.removeItem("isAuthenticated");
    navigate('/')
  }
    return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/"  as={NavLink} >Home</Nav.Link>
            <Nav.Link to="/Login" as={NavLink}>Login</Nav.Link>
            {/* <Nav.Link to="/DashBoard" as={NavLink}>Dashboard</Nav.Link> */}
          </Nav>
          <Button onClick= {handleLogout}>Logout</Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
