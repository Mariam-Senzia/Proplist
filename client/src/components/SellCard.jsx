import React from 'react';
import { Card, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Text, Image, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const SellCard = ({ children }) => {
    return (
        <div className="sell-card-container">
            <Card maxW='sm' borderWidth="1px" borderRadius="lg" boxShadow="lg" marginLeft={'5rem'} mt='1rem' borderColor={'#EAEBEB'}
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
                        height='35vh'
                        width='25vw'
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
                            <Button variant='solid' colorScheme='teal'>
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