import React, { useState } from "react";
// import { Navbar, Container, NavDropdown } from "react-bootstrap";
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


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

        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>

      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
