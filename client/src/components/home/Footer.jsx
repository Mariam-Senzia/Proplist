import React from 'react';
import { Box, Text, Flex, Link, Icon } from '@chakra-ui/react';
import { FaEnvelope, FaPhone , FaLinkedin, FaTwitter,FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <Box className='footer' as="footer" bg="#282A3E" color="white" height='25vh'  w={{base:'30rem', md:'120.9rem',lg:'201vw',xl:'109.3%'}} marginBottom="-3.3rem" marginRight="" marginLeft={{base:'-5.5rem', md:'',lg:'rem',xl:'-5rem'}}>
            <Flex
                justify="space-between"
                maxW="12rem"
                mx="auto"
                p={'1rem'}
            >
                {/* Social links */}
                <Icon as={FaLinkedin} boxSize={7} />

                <Icon as={FaTwitter} boxSize={7} />

                <Icon as={FaInstagram} boxSize={7} />
            </Flex>

            {/* Contact */}
            <Flex align="center" justify="space-between"
                maxW="27rem"
                mx="auto"
                p={'1rem'}
                >
                <Link href="tel:+254718643206" ml={'7'} fontSize="lg" color="white" textDecoration="none">
                    <Icon as={FaPhone} mr={'0.5rem'} />
                        +254718643206
                </Link>    
                <Link href="mailto:proplist@gmail.com" ml={''} fontSize="lg" color="white" textDecoration="none">
                    <Icon as={FaEnvelope} mr={'0.5rem'} />
                        proplist@gmail.com 
                </Link>

                </Flex>

                <Text ml={{base:'12rem', md:'55rem',lg:'59rem',xl:'45rem'}} fontSize={{base:'0.9rem', md:'1.8rem',lg:'1.5rem',xl:''}}>Nairobi, Kenya</Text>

                <Box>
                {/* Footer text*/}
                        <Text textAlign="center" mt={{base:'1rem', md:'3rem',lg:'-0.3rem',xl:'2rem'}} bg='black' p='1rem' fontSize={{base:'0.9rem', md:'1.8rem',lg:'1.5rem',xl:'sm'}}>
                            &copy; {new Date().getFullYear()} Proplist Real Estate Platform. All rights reserved.
                        </Text> 
                </Box>

        </Box>
    </>
    );
};

export default Footer;
