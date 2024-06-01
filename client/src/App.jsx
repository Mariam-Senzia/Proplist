import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, Box } from '@chakra-ui/react';
import Navbar from './components/home/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './components/signin/up/SignUp';
import Home from './pages/Home';
import ForSale from './components/services/ForSale';
import PropertyList from './components/services/PropertyList';
import PropertyDetails from './components/services/PropertyDetails';
import Services from './pages/Services';
import theme from './components/home/Theme';
import Contact from './pages/Contact';
import SubmitFormMessage from './components/submitform/SubmitFormMessage';


function App() {
  const [sellProperties, setSellProperties] = useState([]);
  const [properties, setProperties] = useState([]);
  // global username
  const [userName, SetUserName] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5555/properties')
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  // console.log(properties)
  const handleNewProperty = (newProperty) => {
    setSellProperties([...sellProperties, newProperty]);
  };

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Navbar />
        
        <Box padding="20px">
          <Routes>
            <Route path="/" element={<Home properties={properties} />} />

            <Route path="/services" element={<Services />} />

            
            <Route path="/signup" element={<SignUp />} />
      
            <Route path="/signin" element={<SignIn />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/ForSale" element={<ForSale onNewProperty={handleNewProperty} />} />

            <Route path="/PropertyList" element={<PropertyList properties={properties} />} />

            <Route path="/PropertyDetails/:title" element={<PropertyDetails properties={properties}/>} />

            <Route path="/SubmitFormMessage" element={<SubmitFormMessage />}/>

          </Routes>
        </Box>

      </Router>
    </ChakraProvider>
  );
}

export default App;
