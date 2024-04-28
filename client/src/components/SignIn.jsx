import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';

const SignIn = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
   
    setEmail('');
    setPassword('');
    };

  return (
    <Box height="91.3vh"  mt='1rem' ml="-3.3rem" mr="-3.2rem"  backgroundImage="url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54588.jpg?w=826&t=st=1713896404~exp=1713897004~hmac=3428eb2f7f6ee3518a92bc0398e6cf50801bfd960e4e510fb7c86429b2394b16')" backgroundSize={'cover'} >
    <Box maxW="" mx="" p='7rem' mt="rem" borderWidth={'px'}  width="40%" ml="32%" mb="1remm" borderRadius={'10px'}>
      <Heading as="h2" size="lg" color="#00B8B1" textAlign="center" marginTop="4.5rem">
        Sign In
      </Heading>
      <form onSubmit={handleSignIn}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel
              htmlFor="email"
              color="grey.600"
              fontSize="sm"
              fontWeight=""
              textAlign=""
              marginBottom="2"
              marginTop="2rem"
            >
              Email
            </FormLabel>
            <Input
              type="email"
              id="email"
              value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel
              htmlFor="password"
              color="grey.600"
              fontSize="sm"
              fontWeight=""
              textAlign="left"
              marginBottom="2"
            >
              Password
            </FormLabel>
            <Input
              type="password"
              id="password"
              value={password}
            //   onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Sign In
          </Button>

          {/* Prompt to sign up */}
          <Text fontSize="sm" color="gray.600" textAlign="center" mt={2}>
            Don't have an account?{' '}
            {/* <Link to="/signup" textDecoration={'none'}> */}
              <Button color="teal" variant="link" >
                Sign Up
              </Button>
            {/* </Link> */}
          </Text>
        </Stack>
      </form>
    </Box>

    </Box>
  );
};

export default SignIn;
