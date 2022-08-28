import { useState } from 'react';
import Nav from './components/Nav';
import Work from './components/Work';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  const [page, setPage] = useState('about');

  return (
    <>
      <Nav currentPage={setPage} />
      { page == 'about' ? <About /> : page == 'resume' ? <Resume /> : page == 'contact' ? <Contact /> : <Work /> }
    </>
  )
};

export default App;