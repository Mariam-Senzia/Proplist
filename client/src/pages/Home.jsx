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
      minHeight={{base:'70vh', sm:'', md:'120vh',lg:'130vh', xl:'70vh'}}
      className='home-image'
      // filter="brightness(50%)"
      width={{base:'105vw', sm:'', md:'237vw',lg:'202vw', xl:'100vw'}}  
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
       <Box p={{base:'1.5', md:'7',lg:'4',xl:'2'}} className='welcome-text' mt={{base:'7rem', md:'28rem',lg:'14rem',xl:'10rem'}} mb="8rem" textAlign={'center'} color='' bgColor='white' borderRadius='10px' ml={{base:'5.5rem', md:'40rem',lg:'47rem',xl:'35rem'}} width={{base:'60vw', md:'80vw',lg:'30%',xl:'30vw'}} height={{base:'30vh', md:'38vh',lg:'30vh',xl:'30vh'}}>
          <Heading as="h2" size={{base:'md', md:'xl',lg:'xl',xl:'xl'}} mt='1rem' mb='0.5rem' className='welcome'>
              Welcome to PropList!
          </Heading>
          <Text fontSize={{base:'0.7rem', md:'2rem',lg:'1.5rem',xl:'lg'}} mb={5}>
              We are your premier destination for all things related to real estate.
              Whether you're buying, selling, or looking for information, we've got you covered.
          </Text>
          <Link to='/services'>
          <Button backgroundColor="#EE4266" colorScheme='#EE4266' color="white" size={{base:'sm', md:'lg',lg:'lg',xl:'md'}} className='explore-button'>
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
