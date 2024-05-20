import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading
} from '@chakra-ui/react';
import { Link,useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(false)
  const [userName, setUserName] = useState('')
  const navigate = useNavigate();


  // input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5555/register",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      if (!res.ok){
        throw new Error("Failed to submit form.");
      }

      setFormData({
        name: "",
        email: "",
        password: "",
        });

        setUserName(formData.name);
        navigate('/SignUpMessage')
        // setSubmissionStatus(true);
        // alert("Form submitted successfully!");
    })
    // .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <Box height="91.5vh"  mt='0.9rem' ml="-3.3rem" mr="-3.2rem"  backgroundImage="url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54588.jpg?w=826&t=st=1713896404~exp=1713897004~hmac=3428eb2f7f6ee3518a92bc0398e6cf50801bfd960e4e510fb7c86429b2394b16')" backgroundSize={'cover'} display='flex'> 

    {/* <Box textAlign="center" marginTop="3rem" marginLeft="39.5rem" >
    {submissionStatus && (
        <Heading as="h2" size="lg" color="white"> 
          Welcome, {userName}!
        </Heading>
    )}
    </Box> */}

    <Box maxW="md" mx="auto" p={5} bgColor='white' width='100%' mt='8rem' mb='8.5rem' ml='38%' borderRadius='10px'>
      <Link to="/SignUpMessage">
        <Heading as="h2" size="lg" color="teal" textAlign="center" marginTop="1rem">
        Sign Up
        </Heading>
      </Link>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel >Full Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

          <FormControl>
            <FormLabel >Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

          <FormControl>
            <FormLabel >Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

        
          <Button type="submit" colorScheme="teal" variant="solid" mt='1rem' width="26.6vw">
            Sign Up
          </Button>
          
        </Stack>
      </form>
      </Box>
      
    </Box>
  );
};

export default SignUp;
