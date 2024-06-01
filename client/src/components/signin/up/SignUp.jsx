import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Text,
} from '@chakra-ui/react';
import { Link,useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [alertStatus, setAlertStatus] = useState(false)
  const [alertMessage, setalertMessage] = useState('');
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

      // setUserName(formData.name);
      setalertMessage(`Welcome to Proplist, ${formData.name}`)
      setAlertStatus(true);
      setTimeout(() => {
        navigate('/SignIn');
      }, 2400);
    })
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
   <Box bgColor="#1B998B" mt={{base:'5rem',md:'',lg:'3rem',xl:"5rem"}} width={{base:'75.4vw',md:'80vw',lg:'80vh',xl:"35vw"}} ml={{base:'-0.5rem',md:'2rem',lg:'1rem',xl:"10rem"}}  height={{base:'22vh',md:'20vh',lg:'80vh',xl:"70vh"}}>
            <Link to='/'>
                    <Flex align="center" marginLeft={{base:'6rem',md:'10rem',lg:'5rem',xl:"6rem"}} p="3.5rem" mt={{base:'-3rem',md:'0rem',lg:'',xl:"1rem"}} >
                        <img
                            src="https://i.pinimg.com/736x/b5/b5/8c/b5b58c0abbd7c03eec7d3c4798ef247a.jpg"
                            style={{
                                height: '50px',
                                width: '50px',
                                marginRight: '4px',
                                borderRadius: '50%',
                            }}
                            className='logo'
                        />
                        <Heading as="h1" size={{base:'md',md:'lg',lg:'lg',xl:"lg"}} fontWeight="bold" color="#" className='header'>
                            Proplist
                        </Heading>
                    </Flex>
                </Link>
 
                {/* <Divider/> */}

                <Text p={{base:'0.8rem',md:'2rem',lg:'3rem',xl:"3rem"}} mt={{base:'-3.5rem',md:'-5rem',lg:'',xl:"-2rem"}} width={{base:'80vw',md:'',lg:'35vw',xl:"32vw"}} color="" fontSize={{base:'',md:'xl',lg:'',xl:"lg"}} ml={{base:'',md:'',lg:'3rem',xl:""}}>
                    Sign up and join our property listings community! 🏡 Let's find your dream home together!
                </Text>
        </Box>

    <Box  height={{base:'59vh',md:'52vh',lg:'80vh',xl:"70vh"}} mt={{base:'16.7rem',md:'19.7rem',lg:'3rem',xl:"5rem"}} ml={{base:'-18.5rem',md:'-41rem',lg:'0rem',xl:"-3.3rem"}} width={{base:'75.2vw',md:'80vw',lg:'46vw',xl:"40%"}} bgColor="#EBE9E9" display='flex'> 

      <Box maxW={{base:'',md:'',lg:'',xl:"md"}} mx="auto" p={6} bgColor='white' width={{base:'90%',md:'75vw',lg:'40vw',xl:"100%"}} mt={{base:'3rem',md:'',lg:'2rem',xl:"3.5rem"}} mb='8.5rem' ml={{base:'',md:'',lg:'',xl:"-11%"}} borderRadius='10px' height={{base:'48vh',md:'40vh',lg:'70vh',xl:"53vh"}}>
          <Heading as="h2" size="lg" color="" textAlign="center" marginTop="rem">
          Sign Up
          </Heading>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel fontSize={{base:'',md:'lg',lg:'',xl:"sm"}}>Full Name</FormLabel>
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
              <FormLabel fontSize={{base:'',md:'lg',lg:'',xl:"sm"}}>Email</FormLabel>
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
              <FormLabel fontSize={{base:'',md:'lg',lg:'',xl:"sm"}}>Password</FormLabel>
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

          
            <Button type="submit" colorScheme="#FF859B" variant="solid" mt='1rem' width={{base:'',md:'',lg:'',xl:"26.6vw"}} bgColor="#1B998B" fontSize={{base:'',md:'lg',lg:'',xl:"sm"}} >
              Sign Up
            </Button>
            
          </Stack>
        </form>
        </Box>
      </Box>
    </Flex>
    </>
  );
};

export default SignUp;
