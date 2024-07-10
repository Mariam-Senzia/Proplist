import React from 'react';
import { Card, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Text, Image, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import '../App.css'; 

const SellCard = ({ children }) => {
    return (
        <div className="sell-card-container">
            <Card maxW='sm' borderWidth="1px" borderRadius="lg" boxShadow="lg" mt={{base:'3rem',md:'',lg:'',xl:'1rem'}} borderColor={'#EAEBEB'} width={{base:'20rem',md:'21rem',lg:'30rem',xl:'30rem'}} marginLeft={{base:'-1rem',md:'',lg:'2rem',xl:'3rem'}}
            sx={{
                transition: 'transform 0.3s ease-in-out',
                ':hover': {
                    transform: 'scale(1.1)',
                },
            }}
            >
                <CardBody>
                    <Image
                        src='https://homebay.com/wp-content/uploads/2023/03/05576c60-fe35-11ec-80af-7b759f730b93-shutterstock1756356731-1024x1024.jpg'  
                        alt='Real estate listing'
                        borderRadius='lg'
                        height={{base:'20vh',md:'30vh',lg:'',xl:'35vh'}}
                        width={{base:'100vw',md:'',lg:'',xl:'25vw'}}
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' textAlign="center">Sell Your Property</Heading>
                        <Text textAlign="center">
                            Ready to sell your property? List it now and find the perfect buyer quickly and easily!
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2' justifyContent="center" width="100%">
                        <Link to="/ForSale">
                            <Button variant='solid' backgroundColor='#EE4266' colorScheme='#EE4266' color="white">
                                Sell Now
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SellCard;