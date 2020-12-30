import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './globalStyle';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData, InfoDataThree, InfoDataTwo } from './data/InfoData';
import InfoSectionTwo from './components/InfoSectionTwo';
import InteriorSection from './components/InteriorSection';
import InfoSectionReverse from './components/InfoSectionReverse';
import Footer from './components/Footer';


function App() {

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <InfoSection {...InfoData} />
      <InfoSectionTwo {...InfoDataTwo} />
      <InteriorSection {...InfoDataTwo} />
      <InfoSectionReverse {...InfoDataThree} />
      <Footer />
    </>
  );
}

export default App;
