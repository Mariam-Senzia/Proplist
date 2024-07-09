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
    
      fetch("https://proplist-8.onrender.com/submit_form", {
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
            <Box display={{base:'', md:'flex',lg:'flex',xl:'flex'}} justifyContent='' mt={{base:'-3rem', md:'7rem',lg:'25rem',xl:'rem'}} >
            <Grid templateColumns={'repeat(2, minmax(100px , 1fr))'} gap={{base:'3.5rem', md:'6rem',lg:'',xl:'6rem'}} marginLeft={{base:'19rem', md:'19rem',lg:'24rem',xl:'38rem'}} className='contact-card' maxWidth={'25rem'} marginTop={{base:'7rem', md:'16rem',lg:'-10rem',xl:'-16rem'}}>
            {contacts.map((cont) => {
                return <GridItem key={cont.title}>
                    <Card maxW={{base:'', md:'',lg:'',xl:'sm'}} className='all-cards' borderWidth={'1px'} borderColor={'#EAEBEB'} textAlign={'center'} width={{base:'37vw', md:'16vh',lg:'18vw',xl:'12vw'}} ml={{base:'-19.5rem', md:'',lg:'',xl:''}} height={{base:'23vh', md:'20vh',lg:'26vh',xl:'22vh'}} mt={{base:'0rem', md:'',lg:'',xl:''}} >
                    <CardBody>
                        <Icon
                        as={cont.icon}
                        borderRadius='lg'
                        boxSize={8} mr={4} color="#8AD9E5"
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size={{base:'sm', md:'',lg:'',xl:'md'}}>{cont.title}</Heading>
                        <Text fontSize={{base:'sm', md:'',lg:'',xl:''}}>
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
                width={{base:'76vw', md:'75vw',lg:'50vw',xl:'33vw'}}
                // maxWidth="600px"
                mx="auto" // Auto margin to center the form horizontally
                p="20px"
                boxShadow="md"
                borderRadius="md"
                borderWidth='1px'
                backgroundColor={'#8AD9E5'}
                mt={{base:'3rem', md:'-45rem',lg:'-33rem',xl:'-31rem'}}
                ml={{base:'-0.5rem', md:'18rem',lg:'25rem',xl:'40rem'}} 
                padding='5rem'
                height={{base:'52vh', md:'72vh',lg:'104vh',xl:'70vh'}} 
            >    
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Heading textAlign={'center'} marginTop={{base:'-2.5rem', md:'5rem',lg:'-2rem',xl:'-2rem'}} 
                        ml={{base:'rem', md:'',lg:'',xl:''}} marginBottom='1rem' fontSize={{base:'1.5rem', md:'4rem',lg:'2.5rem',xl:'2rem'}} >Contact Us</Heading>
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
                        width={{base:'65vw', md:'50vw',lg:'35vw',xl:'25vw'}} 
                        ml={{base:'-3.8rem', md:'4rem',lg:'1rem',xl:'0rem'}} 
                        mb={{base:'', md:'2rem',lg:'',xl:''}} 
                        mt={{base:'', md:'2rem',lg:'',xl:''}} 
                        fontSize={{base:'sm', md:'1.3rem',lg:'',xl:'lg'}}
                        p={{base:'', md:'1.5rem',lg:'',xl:'0.5rem'}}
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
                        width={{base:'65vw', md:'50vw',lg:'35vw',xl:'25vw'}} 
                        ml={{base:'-3.8rem', md:'4rem',lg:'1rem',xl:'0rem'}}
                        mb={{base:'', md:'2rem',lg:'',xl:''}}  
                        fontSize={{base:'sm', md:'1.3rem',lg:'',xl:'lg'}}
                        p={{base:'', md:'1.5rem',lg:'',xl:'0.5rem'}}
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
                        width={{base:'65vw', md:'50vw',lg:'35vw',xl:'25vw'}} 
                        ml={{base:'-3.8rem', md:'4rem',lg:'1rem',xl:'0rem'}} 
                        fontSize={{base:'sm', md:'1.3rem',lg:'',xl:'lg'}}
                        height={{base:'', md:'10vh',lg:'',xl:''}}
                        p={{base:'', md:'',lg:'',xl:'0.5rem'}}
                        />
                    </FormControl>
                    <Button type="submit" color='#145C9E' colorScheme='#8AD9E5' borderColor='white' borderWidth={'1px'} ml={{base:'1.5rem', md:'13rem',lg:'8.5rem',xl:'8.5rem'}}  marginTop={{base:'1.5rem', md:'3.5rem',lg:'',xl:'2rem'}} fontSize={{base:'', md:'1.3rem',lg:'',xl:''}}>
                    Submit
                    </Button>
                </form>
          </Box>
        
          <Box  mt={{base:'5rem', md:'47.5rem',lg:'30rem',xl:'5rem'}} ml={{base:'-1.5rem', md:'',lg:'',xl:'0rem'}} >
          <Footer/>
          </Box>
        </>
    )
}
export default Contact;