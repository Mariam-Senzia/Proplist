import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import AboutUs from './AboutUs';
import Footer from './Footer';

const Home = () => {
  
  return (
    <>
    {/* image */}
    <Box
      textAlign="center"
      mt={4}
      mr="-3.25rem"
      ml="-4rem"
      backgroundImage="url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      backgroundSize='cover'
      backgroundPosition='center'
      minHeight='70vh'
      filter="brightness(50%)"
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
       <Box p={8} className='about-us' ml="33rem" mt="1rem" mb="3rem" textAlign={'center'} color='white' width='35%' >
          <Heading as="h2" size="xl" mt='8rem'>
              Welcome to PropList!
          </Heading>
          <Text fontSize="lg" mb={4}>
              We are your premier destination for all things related to real estate.
              Whether you're buying, selling, or looking for information, we've got you covered.
          </Text>
          <Button colorScheme="teal" size="md">
              Learn More
          </Button>
        </Box>
    </Box>

    {/* About us */}
    <AboutUs />

    {/* footer */}
    <Footer />
    </>
  );
};

export default Home;