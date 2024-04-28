import React from 'react';
import { Box, Flex, Heading, Button, IconButton, Spacer, useColorMode, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import "./navbar.css"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg="" color="black" py={2} px={10} w="100%" position="fixed" zIndex="100" top="0" left="0" right="0">
            <Flex justify="space-between" align="center">
                {/* Logo and Title */}
                <Flex align="center" marginLeft="10rem">
                    <img
                        src="https://i.pinimg.com/564x/bf/a7/fa/bfa7facf2e2401401f19b17824fc17c0.jpg"
                        style={{
                            height: '50px',
                            width: '50px',
                            marginRight: '4px',
                            borderRadius: '50%',
                        }}
                    />
                    <Heading as="h1" size="lg" fontWeight="bold" color="#48ADA9">
                        Proplist
                    </Heading>
                </Flex>

                {/* Navigation Links and Buttons */}
                <Flex align="center" className='home' marginRight="10rem">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Text variant="ghost" color="#333333" fontWeight="500" _hover={{ color: 'teal' }} marginRight="4.5rem">
                            Home
                        </Text>
                    </Link>
                    <Link to="/services" style={{ textDecoration: 'none' }}>
                        <Text variant="ghost" color="#333333" fontWeight="500" _hover={{ color: 'teal' }} marginRight="3.5rem">
                            Services
                        </Text>
                    </Link>
                    <Link to="/signin" style={{ textDecoration: 'none' }}>
                        <Text variant="ghost" color="#333333" fontWeight="500" ml={4} className='sign-in' _hover={{ color: 'teal' }} marginRight="3.5rem">
                            Sign In
                        </Text>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <Text variant="ghost" color="#333333" fontWeight="500" ml={4} className='sign-up' _hover={{ color: 'teal' }} marginRight="3.8rem">
                            Sign Up
                        </Text>
                    </Link>

                    {/* Spacer to add space between links and buttons */}
                    <Spacer />

                    {/* Dark Mode Toggle Button */}
                    <IconButton
                        aria-label="Toggle dark mode"
                        icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
                        variant="ghost"
                        color="#333333"
                        fontSize="20px"
                        onClick={toggleColorMode}
                        _hover={{ color : "teal" }}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
