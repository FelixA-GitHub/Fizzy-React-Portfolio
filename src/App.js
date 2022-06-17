import React, { useState } from "react";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';



function App() {
  const [pages] = useState([
    {
      name: 'about'
    },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <div>
      <Header>
        <Navbar bg="danger" expand="lg" className="text-white">
          <Container>
            <Navbar.Brand href="#home" className="text-white">Felix Acevedo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
