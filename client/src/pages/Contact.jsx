import React, {useState} from "react";
import { FormControl, Input,Button, Textarea , Box, Heading, Grid,GridItem, Card, CardBody, Text, Stack, Icon} from "@chakra-ui/react";
import { FaLocationPin, FaPhone, FaEnvelope,FaRegKeyboard } from "react-icons/fa6";
import Footer from "../components/home/Footer";
import { useNavigate } from "react-router-dom";

function Contact(){
    // contacts array
    const contacts = [
        {
            title: 'PHONE ',
            icon: FaPhone,
            description: '+254718643206',
        },
        {
            title: 'EMAIL',
            icon: FaEnvelope,
            description: 'proplist@gmail.com',
        },
        {
            title: 'LOCATION',
            icon: FaLocationPin,
            description: 'Nairobi,kenya',
        },
        {
            title: 'FAX',
            icon: FaRegKeyboard,
            description: '+254-456-7890.',
        },
    ];

    // handle form data change and submission
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        message: "",
     });

    const initialRef = React.useRef(null)

    // usenavigate
    const navigate = useNavigate()

    
    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
     };
    
     const handleSubmit = (e) => {
      e.preventDefault();
    
      fetch("http://127.0.0.1:5555/submit_form", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
      .then(response => {
        if (response.ok) {
          setFormData({
            fullName: "",
            phone: "",
            message: "",
          });
          navigate("/SubmitFormMessage")
        //   alert("Form submitted successfully!");
        } else {
          throw new Error("Failed to submit form.");
        }
      })
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
     };

    return (
        <>
            <Box display='flex' justifyContent='' mb="">
            <Grid templateColumns={'repeat(2, minmax(100px , 1fr))'} gap={5} marginLeft={'18rem'} className='contact-card' maxWidth={'25rem'} marginTop={'11rem'}>
            {contacts.map((cont) => {
                return <GridItem key={cont.title}>
                    <Card maxW='sm' className='all-cards' borderWidth={'1px'} borderColor={'#EAEBEB'} textAlign={'center'} >
                    <CardBody>
                        <Icon
                        as={cont.icon}
                        borderRadius='lg'
                        boxSize={8} mr={4} color="#8AD9E5"
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{cont.title}</Heading>
                        <Text>
                            {cont.description}
                        </Text>
                        </Stack>
                    </CardBody>
                    </Card>
                </GridItem>
            })}
            </Grid>
            </Box>

            {/* form */}
            <Box
                width="35%"
                // maxWidth="600px"
                mx="auto" // Auto margin to center the form horizontally
                p="20px"
                boxShadow="md"
                borderRadius="md"
                borderWidth='1px'
                backgroundColor={'#8AD9E5'}
                mt='-26.5rem'
                ml='40rem'
                padding='5rem'
            >    
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Heading textAlign={'center'} marginTop={'rem'} marginBottom='1rem'>Contact Us</Heading>
                    <FormControl>
                    {/* <FormLabel>Full name</FormLabel> */}
                    <Input
                        ref={initialRef}
                        placeholder="Full name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        _placeholder={{ color: 'inherit' }} focusBorderColor='teal.400'
                        color='grey'
                        bgColor='white'
                        />
                    </FormControl>

                    <FormControl mt={4}>
                    {/* <FormLabel>Phone</FormLabel> */}
                    <Input
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        _placeholder={{ color: 'inherit' }} focusBorderColor='teal.400'
                        color='grey'
                        bgColor='white'
                        />
                    </FormControl>

                    <FormControl mt={4}>
                    {/* <FormLabel>Message</FormLabel> */}
                    <Textarea
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        _placeholder={{ color: 'inherit' }} focusBorderColor='teal.400'
                        color='grey'
                        bgColor='white'
                        />
                    </FormControl>
                    <Button type="submit" color='#145C9E' colorScheme='#8AD9E5' borderColor='white' borderWidth={'1px'} mr={''} marginTop={"2rem"} marginLeft={'8.5rem'}>
                    Submit
                    </Button>
                </form>
          </Box>
        
          <Box  mt="5rem">
          <Footer/>
          </Box>
        </>
    )
}
export default Contact;