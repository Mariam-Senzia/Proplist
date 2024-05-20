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
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate()

  // input change
  const handleInputChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
      })
  }

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("http://127.0.0.1:5555/login",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      if (res.ok){
        setFormData({
          email: "",
          password: "",
        });
        navigate("/SignInMessage")
        // alert(Login Successful!");
      } else {
        throw new Error("Failed to submit form.");
      }
    })
    // .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    };

  return (
    <Box height="91.5vh"  mt='0.9rem' ml="-3.3rem" mr="-3.2rem"  backgroundImage="url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54588.jpg?w=826&t=st=1713896404~exp=1713897004~hmac=3428eb2f7f6ee3518a92bc0398e6cf50801bfd960e4e510fb7c86429b2394b16')" backgroundSize={'cover'} display={'flex'}>

    <Box maxW="" mx="" p='2rem' mt="8rem" borderWidth={'px'}  width="30%" ml="38%" mb="10rem" borderRadius={'10px'} bgColor={'white'}>
      <Heading as="h2" size="lg" color="#00B8B1" textAlign="center" marginTop="1rem">
        Sign In
      </Heading>
      <form onSubmit={handleSubmit}>
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
              name="email"
              value={formData.email}
              onChange={handleInputChange}
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
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" width="25.7vw" mt="1rem">
            Sign In
          </Button>

          {/* Prompt to sign up */}
          <Text fontSize="sm" color="gray.600" textAlign="center" mt={2}>
            Don't have an account?{' '}
            <Link to="/signup" textDecoration={'none'}>
              <Button color="teal" variant="link" >
                Sign Up
              </Button>
            </Link>
          </Text>
        </Stack>
      </form>
    </Box>

    </Box>
  );
};

export default SignIn;
