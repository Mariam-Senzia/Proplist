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
  InputGroup,
  InputRightElement,
  Avatar,
  IconButton
} from '@chakra-ui/react';
import { Link,useNavigate } from 'react-router-dom';
import { ViewIcon,ViewOffIcon, EditIcon } from '@chakra-ui/icons';


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [alertStatus, setAlertStatus] = useState(false)
  const [alertMessage, setalertMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false)
  const navigate = useNavigate();


  // Password Visibility
  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }
  
  // input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://proplist-8.onrender.com/register",{
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
   <Box display={{base:'none',md:'flex',lg:'flex',xl:'flex'}} bgColor="#1B998B" mt={{base:'5rem',md:'',lg:'3rem',xl:"5rem"}} width={{base:'75.4vw',md:'80vw',lg:'80vh',xl:"35vw"}} ml={{base:'rem',md:'2rem',lg:'1rem',xl:"10rem"}}  height={{base:'22vh',md:'20vh',lg:'80vh',xl:"73vh"}}>
            <Link to='/'>
                    {/* <Flex align="center" marginLeft={{base:'6rem',md:'10rem',lg:'5rem',xl:"6rem"}} p="3.5rem" mt={{base:'-3rem',md:'0rem',lg:'',xl:"1rem"}} >
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
                    </Flex> */}
                </Link>
 
                {/* <Divider/> */}

                <Text p={{base:'0.8rem',md:'2rem',lg:'3rem',xl:"3rem"}} mt={{base:'1.5rem',md:'-5rem',lg:'',xl:"9rem"}} width={{base:'80vw',md:'',lg:'35vw',xl:"32vw"}} color="" fontSize={{base:'',md:'xl',lg:'',xl:"lg"}} ml={{base:'',md:'',lg:'3rem',xl:"0.5rem"}}>
                    Sign up and join our property listings community! 🏡 Let's find your dream home together!
                </Text>
        </Box>

    <Box  height={{base:'75vh',md:'52vh',lg:'80vh',xl:"73vh"}} mt={{base:'4rem',md:'19.7rem',lg:'3rem',xl:"5rem"}} ml={{base:'rem',md:'-41rem',lg:'0rem',xl:"-3.3rem"}} width={{base:'90vw',md:'80vw',lg:'46vw',xl:"40%"}} bgColor="#EBE9E9" display='flex'> 

      <Box maxW={{base:'',md:'',lg:'',xl:"md"}} mx="auto" p={6} bgColor='white' width={{base:'90%',md:'75vw',lg:'40vw',xl:"100%"}} mt={{base:'3rem',md:'',lg:'2rem',xl:"rem"}} mb='8.5rem' ml={{base:'',md:'',lg:'',xl:""}} borderRadius='10px' height={{base:'60vh',md:'40vh',lg:'70vh',xl:"65vh"}}>
          <Heading as="h2" size="lg" color="" textAlign="center" marginTop="-1rem">
          Sign Up
          </Heading>

          <Flex>
            <Avatar size='xl' ml='9.5rem' mt='1rem' name={formData.name}/>
            <IconButton icon={<EditIcon color='#F52F57'/>} borderRadius='50px' mt='5rem' ml='-1.6rem' zIndex='1' size='sm'/>
          </Flex>

        <form onSubmit={handleSubmit} autoComplete='off'>
          <Stack spacing={4}>
            <FormControl mt='1rem'>
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
              <InputGroup>

                <Input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  variant="filled"
                  bg="gray.100"
                />
                <InputRightElement onClick={handlePassword}>
                  {passwordVisible ? <ViewIcon /> : <ViewOffIcon />}
                </InputRightElement>
              </InputGroup>
            </FormControl>

          
            <Button type="submit" colorScheme="#FF859B" variant="solid" mt='1rem' maxwidth={{base:'',md:'',lg:'20rem',xl:"26.6vw"}} bgColor="#1B998B" fontSize={{base:'',md:'lg',lg:'',xl:"sm"}} >
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
