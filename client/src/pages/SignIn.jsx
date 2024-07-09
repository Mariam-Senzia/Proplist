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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [alertStatus, setAlertStaus] = useState(false);
  const [alertMessage, setalertMessage] = useState('')

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
    
    fetch("https://proplist-8.onrender.com/login",{
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
        setAlertStaus(true);
        setalertMessage("Welcome Back!")
        setTimeout(() => {
          navigate("/Services")
        },2500)
        // alert(Login Successful!");
      } else {
        throw new Error("Failed to submit form.");
      }
    })
    // .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    };

  return (
    <>
    <Box height="5vh" ml="-3.3rem" mr="-3.2rem" mb="-1rem">
      <Box width="30%"   ml="38rem">
      {alertStatus && (
          <Alert status="success" mt="0.9rem" p="1rem">
          <AlertIcon />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      )}
    </Box>
   </Box>

   <Flex>
   <Box display={{base:'none',md:'flex',lg:'flex',xl:'flex'}} bgColor="#1B998B" mt={{base:'2rem',md:'',lg:'2rem',xl:"5rem"}} width={{base:'85vw',md:'80vw',lg:'40vw',xl:"39vw"}} ml={{base:'-1.5rem',md:'2rem',lg:'',xl:"10rem"}}  height={{base:'18vh',md:'20vh',lg:'83.5vh',xl:"70vh"}}>
            <Link to='/'>
                    {/* <Flex align="center" marginLeft={{base:'2rem',md:'11rem',lg:'4rem',xl:"7rem"}} p="3.5rem" mt={{base:'-3rem',md:'0rem',lg:'1.5rem',xl:"2rem"}} >
                        <img
                            src="https://i.pinimg.com/736x/b5/b5/8c/b5b58c0abbd7c03eec7d3c4798ef247a.jpg"
                            style={{
                                height: "50px",
                                width: "50px",
                                marginRight: '4px',
                                borderRadius: '50%',
                            }}
                            className='logo'
                        />
                        <Heading as="h1" size={{base:'md',md:'lg',lg:'lg',xl:"lg"}} fontWeight="bold" color="#" className='header'>
                            Proplist
                        </Heading>
                    </Flex> */}
                </Link>

                {/* <Divider/> */}

                <Text p={{base:'1.5rem',md:'2rem',lg:'3rem',xl:"5rem"}} mt={{base:'0.5rem',md:'',lg:'-4.5rem',xl:"6rem"}} color="" fontSize={{base:'',md:'xl',lg:'',xl:"lg"}}>
                    Sign in and continue exploring our wide range of property listings! 
                </Text>
        </Box>

    <Box height={{base:'80vh',md:'54vh',lg:'83.5vh',xl:"70vh"}} mt={{base:'3rem',md:'19.5rem',lg:'2rem',xl:"5rem"}} ml={{base:'-1.4rem',md:'-41rem',lg:'0rem',xl:"-3.3rem"}} mr="-3.2rem" width={{base:'115.6%',md:'80vw',lg:'45vw',xl:"40%"}} bgColor="#EBE9E9" display={'flex'}>

    <Box maxW={{base:'',md:'',lg:'',xl:"md"}} mx="auto" p={6}  borderWidth={'px'}  width={{base:'',md:'75vw',lg:'40vw',xl:"100%"}} ml={{base:'',md:'',lg:'',xl:"11%"}} mt={{base:'2rem',md:'4rem',lg:'2rem',xl:"3.5rem"}} mb="10rem" borderRadius={'10px'} bgColor={'white'} height={{base:'60vh',md:'42vh',lg:'70vh',xl:"53vh"}}>
      <Heading as="h2" size="lg" color="" textAlign="center" marginTop="1rem">
        Sign In
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel
              htmlFor="email"
              color="grey.600"
              fontSize={{base:'',md:'lg',lg:'',xl:"sm"}}
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
              fontSize={{base:'',md:'lg',lg:'',xl:"sm"}}
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

          <Button type="submit" colorScheme="#EF5778" width={{base:'',md:'',lg:'',xl:"25.7vw"  }} mt="1rem" bgColor={'#1B998B'} fontSize={{base:'',md:'lg',lg:'',xl:"sm"}}>
            Sign In
          </Button>

          {/* Prompt to sign up */}
          <Text fontSize={{base:'',md:'lg',lg:'',xl:"sm"}} color="gray.600" textAlign="center" mt={{base:'5rem', md:'2',lg:'2',xl:'2'}}>
            Don't have an account?{' '}
            <Link to="/signup" textDecoration={'none'}>
              <Button color="#1B998B" variant="link" fontSize={{base:'',md:'lg',lg:'',xl:"sm"}}>
                Sign Up
              </Button>
            </Link>
          </Text>
        </Stack>
      </form>
    </Box>

    </Box>
    </Flex>
    </>
  );
};

export default SignIn;
