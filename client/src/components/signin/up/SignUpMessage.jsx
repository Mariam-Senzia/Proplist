import React, {useContext} from "react";
import { Box, Heading, Text , Divider , Flex, Image, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SignUpMessage = (() => {
    return (
        <>
        <Box bgColor="#FF859B" mt="4rem" width="50vw" ml="21rem" borderRadius="10px"  height="45vh">
            <Link to='/'>
                    <Flex align="center" marginLeft="17rem" p="2rem" >
                        <img
                            src="https://i.pinimg.com/736x/b5/b5/8c/b5b58c0abbd7c03eec7d3c4798ef247a.jpg"
                            style={{
                                height: '30px',
                                width: '30px',
                                marginRight: '4px',
                                borderRadius: '50%',
                            }}
                            className='logo'
                        />
                        <Heading as="h1" size="lg" fontWeight="bold" color="#EF5778" className='header'>
                            Proplist
                        </Heading>
                    </Flex>
                </Link>

                <Divider/>

                <Heading as="h1" size="lg" fontWeight="bold" color="#503F46" className='header' p="3rem" ml="11rem">
                    Welcome to Proplist!
                </Heading>

                <Text p="2rem" mt="-3rem" color="#503F46">
                    Welcome to our property listings community! 🏡 We're thrilled to have you join us on this journey of discovering beautiful bungalows, luxurious mansions, cozy apartments, stunning villas, serene beach houses, and more. Let's find your dream home together!
                </Text>

                <Flex bgColor="#EBE9E9" mt="0rem" width="50vw" ml="rem" borderRadius="10px"  height="40vh" p="1rem" justifyContent="space-between">
                     <Image src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" borderRadius="10px" ml="4rem" height="250px" mt="1rem"/>

                    <Link to="/PropertyList">
                    <Button bgColor="#EE4266" _hover={{color: "#"}} color="white" mr="4rem" mt="7rem">Explore Services</Button>
                    </Link>
                </Flex>
        </Box>
        </>
    )
})

export default SignUpMessage;
