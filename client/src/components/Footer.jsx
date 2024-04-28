import React from 'react';
import { Box, Text, Flex, Link, Icon, Spacer } from '@chakra-ui/react';
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box className='footer' as="footer" bg="teal.600" color="white" py={10} px="" w="78.5%" marginBottom="-3.3rem" marginRight="" marginLeft="9.5rem">
            <Flex
                justify="space-between"
                align="center"
                maxW="container.lg"
                mx="auto"
                px={8}
                height="100%"
            >
                {/* Logo or icon */}
                <Icon as={FaHome} boxSize={8} />

                {/* Footer text */}
                <Text fontSize="sm" textAlign="center" flex="1" mt={{ base: 4, md: 0 }}>
                    &copy; {new Date().getFullYear()} Proplist Real Estate Platform. All rights reserved.
                </Text>

                {/* Navigation links */}
                <Flex align="center">
                    {/* Social links */}
                    <Link href="mailto:info@example.com" mx={2} fontSize="lg" color="white" textDecoration="none">
                        <Icon as={FaEnvelope} mr={1.5} />
                        Email
                    </Link>
                    <Link href="tel:+1234567890" mx={2} fontSize="lg" color="white" textDecoration="none">
                        <Icon as={FaPhone} mr={1.5} />
                        Call Us
                    </Link>

                    {/* Additional links */}
                    <Link href="/about" mx={2} color="white" textDecoration="none">
                        About Us
                    </Link>
                    <Link href="/services" mx={2} color="white" textDecoration="none">
                        Services
                    </Link>
                    <Link href="/contact" mx={2} color="white" textDecoration="none">
                        Contact Us
                    </Link>

                    {/* Spacer to push content to the left */}
                    <Spacer />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
