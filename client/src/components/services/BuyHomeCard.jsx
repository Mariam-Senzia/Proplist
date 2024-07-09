import React from "react";
import { Card,CardBody, CardFooter,Stack, Divider , ButtonGroup, Button ,Text , Image, Heading, Flex} from '@chakra-ui/react'
import {Link} from "react-router-dom"

function BuyHomeCard(){
    return(
        <div>
            <Card maxW='sm' marginLeft={{base:'1rem',md:'rem',lg:'10rem',xl:'20rem'}} marginTop={{base:'rem',md:'',lg:'',xl:'1rem'}} borderWidth="1px" borderColor={'#EAEBEB'} width={{base:'20rem',md:'21rem',lg:'30rem',xl:'30rem'}}
            sx={{
                transition: 'transform 0.3s ease-in-out', // Smooth transition
                ':hover': {
                    transform: 'scale(1.1)', // Zoom out to 90% of the original size on hover
                },
            }}
            >
                <CardBody>
                    <Image
                    src='https://img.freepik.com/free-vector/real-estate-searching-concept_23-2148657458.jpg?t=st=1713188242~exp=1713191842~hmac=31a3f5fadd4783b6e146795014ecbe6549a02a665de21d9e11f4174b88a04074&w=1380'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    height={{base:'20vh',md:'30vh',lg:'',xl:'35vh'}}
                    width={{base:'100vw',md:'vw',lg:'',xl:''}}
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md' textAlign={'center'}>Browse Properties</Heading>
                    <Text textAlign={'center'}>
                    Embark on your quest for the perfect home right here.Seamlessly browse and effortlessly apply.
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2' justifyContent={'center'} width="100%">
                        <Flex as={Link} to="/PropertyList">
                        <Button variant='solid' backgroundColor='#EE4266' colorScheme='#EE4266' color="white" >
                            Browse properties
                        </Button>
                        </Flex>
                    </ButtonGroup>
                </CardFooter>
                </Card>
        </div>
    )
}

export default BuyHomeCard