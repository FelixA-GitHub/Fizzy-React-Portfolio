import React, { useState } from "react";
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';



function App() {
  const [pages] = useState([
    {
      name: 'about',
      description: 'I am a Full Stack Web Developer leveraging a Physical Therapy background to build intuitive and responsive web experiences for all users.'
    },
    { name: 'portfolio', description: 'Links to my latest work' },
    { name: 'contact', description: 'Contact me anytime with questions, constructive criticism, or inquiries of collaboration' },
    { name: 'resume', description: 'Downloadable resume and list of proficiencies. References available upon request' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header>
        <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        >
        </Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
