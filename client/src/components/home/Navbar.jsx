import React from 'react';
import { Box, Flex, Heading, Button, IconButton, Spacer, useColorMode, Text, useDisclosure,Drawer, DrawerOverlay,DrawerHeader, DrawerContent, DrawerBody, DrawerCloseButton} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiMenu } from 'react-icons/fi';
import "./navbar.css"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Box bg="black" color="white" py={2} px={10} w="100%" position="fixed" zIndex="100" top="0" left="0" right="0">
            <Flex justify="space-between" align="center">
                {/* Logo and Title */}
              <Link to='/'>
                <Flex align="center" marginLeft={{base:'7rem',md:'10rem',lg:'10rem',xl:'10rem'}} p={{base:'1rem',md:'1.5rem',lg:'rem',xl:'0rem'}} >
                    <img
                        src="https://i.pinimg.com/736x/b5/b5/8c/b5b58c0abbd7c03eec7d3c4798ef247a.jpg"
                        style={{
                            height:'50px',
                            width: '50px',
                            marginRight: '4px',
                            borderRadius: '50%',
                        }}
                        className='logo'
                    />
                    <Heading as="h1" size={{base:'xl',md:'3xl',lg:'3xl',xl:'lg'}} fontWeight="bold" color="#EF5778" className='header'>
                        Proplist
                    </Heading>
                </Flex>
              </Link>

                {/* Navigation Links and Buttons for larger screens*/}
                <Flex display={{base:'none',md:'flex',lg:'flex',xl:'flex'}} align="center" className='nav' marginRight={{base:'', md:'15rem',lg:'10rem',xl:'10rem'}} >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Text variant="ghost" color="white" fontWeight="500" _hover={{ color: '#EF5778' }} className="home" marginRight="4.5rem" fontSize={{base:'',md:'2rem',lg:'',xl:'1rem'}}>
                            Home
                        </Text>
                    </Link>
                    <Link to="/services" style={{ textDecoration: 'none' }}>
                        <Text variant="ghost" color="white" fontWeight="500" _hover={{ color: '#EF5778' }} className="services" marginRight="3.5rem" fontSize={{base:'',md:'2rem',lg:'',xl:'1rem'}}>
                            Services
                        </Text>
                    </Link>
                    <Link to="/signin" style={{ textDecoration: 'none' }}>
                        <Text variant="ghost" color="#white" fontWeight="500" ml={4} className='sign-in' _hover={{ color: '#EF5778' }} marginRight="3.5rem" fontSize={{base:'',md:'2rem',lg:'',xl:'1rem'}}>
                            Sign In
                        </Text>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <Text variant="ghost" color="#white" fontWeight="500" ml={4} className='contact' _hover={{ color: '#EF5778' }} marginRight="3.8rem" fontSize={{base:'',md:'2rem',lg:'',xl:'1rem'}}>
                            Contact
                        </Text>
                    </Link>

                    {/* Spacer to add space between links and buttons */}
                    <Spacer />

                    {/* Dark Mode Toggle Button */}
                    <IconButton
                        aria-label="Toggle dark mode"
                        icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
                        variant="ghost"
                        color="white"
                        fontSize={{base:'20px',md:'2rem',lg:'33px',xl:'18px'}}
                        onClick={toggleColorMode}
                        _hover={{ color : "#EF5778" }}
                        className='toggle'
                    />
                </Flex>

                    {/* Hamburger menu for smaller screens */}
                    <IconButton 
                        icon={<FiMenu />}
                        aria-label='Display menu'
                        mr='3rem'
                        fontSize='24px'
                        onClick={onOpen}
                        display={{base:'flex',md:'none',lg:'none',xl:'none'}} 
                        className='hamburger'
                    />
            </Flex>

             {/* Drawer for mobile navigation */}
             <Drawer placement="right" onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay>
                    <DrawerContent bg="black" height='45vh'>
                        <DrawerCloseButton color="white" size='10px' mr='1rem'mt='1rem'/>
                        <DrawerHeader borderBottomWidth="1px" borderColor="white" color={'#EF5778'}  ml='1rem' fontSize='1.5rem' >Menu</DrawerHeader>
                        <DrawerBody>
                            <Link to="/" style={{ textDecoration: 'none' }} onClick={onClose}>
                                <Text variant="ghost" color="white" fontWeight="500" _hover={{ color: '#EF5778' }} className="home" mb={'-3.5rem'} mt='2rem' ml='1rem' fontSize='1.5rem'>
                                    Home
                                </Text>
                            </Link>
                            <Link to="/services" style={{ textDecoration: 'none' }} onClick={onClose}>
                                <Text variant="ghost" color="white" fontWeight="500" _hover={{ color: '#EF5778' }} className="services" mb={6}  ml='1rem' fontSize='1.5rem'>
                                    Services
                                </Text>
                            </Link>
                            <Link to="/signin" style={{ textDecoration: 'none' }} onClick={onClose}>
                                <Text variant="ghost" color="white" fontWeight="500" className='sign-in' _hover={{ color: '#EF5778' }} mb={6}  ml='1rem' fontSize='1.5rem'>
                                    Sign In
                                </Text>
                            </Link>
                            <Link to="/contact" style={{ textDecoration: 'none' }} onClick={onClose}>
                                <Text variant="ghost" color="white" fontWeight="500" className='contact' _hover={{ color: '#EF5778'}}  ml='1rem' fontSize='1.5rem'>
                                    Contact
                                </Text>
                            </Link>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
};

export default Navbar;