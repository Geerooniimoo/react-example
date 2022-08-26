import { useState } from 'react';
import Nav from './components/Nav';
import Work from './components/Work';
import About from './components/About';

const App = () => {
  const [page, setPage] = useState('about');

  return (
    <>
      <Nav currentPage={setPage} />
      { page == 'about' ? <About /> : <Work /> }
    </>
  )
};

export default App;