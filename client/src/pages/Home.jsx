import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import AboutUs from '../components/home/AboutUs';
import Footer from '../components/home/Footer';
import { Link } from 'react-router-dom';
import "./home.css"

const Home = ({properties}) => {
  
  return (
    <>
    {/* image */}
    <Box
      display='flex'
      textAlign="center"
      mt={3.5}
      mr="-3.25rem"
      ml="-4rem"
      backgroundImage="url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      backgroundSize='cover'
      backgroundPosition='center'
      minHeight='70vh'
      className='home-image'
      // filter="brightness(50%)"
      
    >

      {/* Background image layer */}
      {/* <Box
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        backgroundImage="url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        backgroundSize="cover"
        backgroundPosition="center"
        filter="brightness(20%)"
      /> */}

       {/* Welcome message */}
       <Box p={3} className='welcome-text' ml="35rem" mt="10rem" mb="8rem" textAlign={'center'} color='' width='30%' bgColor='white' borderRadius='10px' >
          <Heading as="h2" size="xl" mt='1rem' mb='0.5rem' className='welcome'>
              Welcome to PropList!
          </Heading>
          <Text fontSize="lg" mb={5}>
              We are your premier destination for all things related to real estate.
              Whether you're buying, selling, or looking for information, we've got you covered.
          </Text>
          <Link to='/services'>
          <Button backgroundColor="#EE4266" color="white" size="md" className='explore-button'>
              Explore Services
          </Button>
          </Link>
        </Box>
    </Box>

    {/* About us */}
    <AboutUs properties = {properties}/>

    {/* footer */}
    <Footer />
    </>
  );
};

export default Home;
