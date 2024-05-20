import React from 'react'
import { Box,Heading,Card, CardBody, Stack, Image, ButtonGroup, Divider, CardFooter,Text,Grid, GridItem } from "@chakra-ui/react";
import InitialFocus from './RequestModal';
import SearchBar from './SearchBar';
import "./property.css"
import { Link } from 'react-router-dom';
import Footer from '../home/Footer';


function PropertyList({properties}){

    return(
        <div>
            <Box display={'flex'} justifyContent={'flex-end'} marginRight={'-5rem'}>
                <SearchBar properties={properties}/>
            </Box>


            <Grid templateColumns={'repeat(3, minmax(100px , 1fr))'} gap={5} marginLeft={'10rem'} className='prop-card' maxWidth={'1114'} marginBottom="4rem" >
            {properties.map((prop) => {
                return <GridItem key={prop.id}>
                    <Card maxW='sm' className='all-cards' borderWidth={'1px'} borderColor={'#EAEBEB'} textAlign={'center'} >
                    <CardBody>
                      <Link to={`/PropertyDetails/${prop.title}`}>
                        <Image
                        src={prop.image_url}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        width='300px'
                        height='200px'
                        objectFit='cover'
                        />
                      </Link>
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{prop.title}</Heading>
                        <Text>
                            {prop.description}
                        </Text>
                        <Text>
                            <span><strong>Location:</strong> </span>{prop.location}
                        </Text>
                        <Text color='#EE4266' fontSize='2xl'>
                            {prop.price}
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2' justifyContent={'center'} width="100%">
                        <InitialFocus />
                        </ButtonGroup>
                        
                    </CardFooter>
                    </Card>
                </GridItem>
            })}
            </Grid>

           <Footer />
            
        </div>
    )
}

export default PropertyList