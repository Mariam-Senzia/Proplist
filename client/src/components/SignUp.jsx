import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Alert,
  AlertIcon,
  Progress,
  Heading
} from '@chakra-ui/react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      // Calculate password strength based on length
      const strengthPercentage = (value.length / 10) * 100; // Assuming max length of 10 for simplicity
      setPasswordStrength(strengthPercentage);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Clear error if passwords match
    setPasswordMatchError(false);

    // Handle form submission (e.g., API call, authentication)
    console.log('Form submitted:', formData);

    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setPasswordStrength(0); // Reset password strength indicator
  };

  return (
    <Box height="91.3vh"  mt='1rem' ml="-3.3rem" mr="-3.2rem"  backgroundImage="url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54588.jpg?w=826&t=st=1713896404~exp=1713897004~hmac=3428eb2f7f6ee3518a92bc0398e6cf50801bfd960e4e510fb7c86429b2394b16')" backgroundSize={'cover'} display='flex'> 
    <Box maxW="md" mx="auto" p={5} bgColor='white' width='100%' mt='3rem' mb='3rem' ml='35rem' borderRadius='10px'>
      <Heading as="h2" size="lg" color="teal" textAlign="center" marginTop="1rem">
      Sign Up
    </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
            <Text fontSize="sm" color="gray.500" mt={1}>
              Password Strength
            </Text>
            <Progress
              value={passwordStrength}
              size="sm"
              color={
                passwordStrength < 50
                  ? 'red'
                  : passwordStrength < 80
                  ? 'yellow'
                  : 'green'
              }
              bg="gray.200"
              borderRadius="md"
              mb={2}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              variant="filled"
              bg="gray.100"
            />
          </FormControl>

          {passwordMatchError && (
            <Alert status="error">
              <AlertIcon />
              Passwords do not match. Please try again.
            </Alert>
          )}

          <Button type="submit" colorScheme="teal" variant="solid">
            Sign Up
          </Button>
        </Stack>
      </form>
      </Box>
      
    </Box>
  );
};

export default SignUp;
