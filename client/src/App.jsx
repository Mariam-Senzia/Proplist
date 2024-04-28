import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ForSale from './components/ForSale';
import PropertyList from './components/PropertyList';
import Services from './components/Services';
import theme from './components/Theme';

function App() {
  const [sellProperties, setSellProperties] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/properties')
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

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
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            <Route path="/ForSale" element={<ForSale onNewProperty={handleNewProperty} />} />

            <Route path="/PropertyList" element={<PropertyList properties={properties} />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
