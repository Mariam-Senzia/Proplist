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
            <Box marginLeft={'10rem'} width={{base:'', md:'100rem',lg:'',xl:'100rem'}} >
                <SearchBar properties={properties}/>
            </Box>


            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)',lg:'repeat(3, 1fr)', xl: 'repeat(3, 1fr)' }} gap={{base:'2rem', md:'2rem',lg:'',xl:'5'}} className='prop-card' width={{base:'', md:'70rem',lg:'60rem',xl:'69rem'}} marginBottom="4rem" marginLeft={{base:'11rem', md:'9.5rem',lg:'9.5rem',xl:'10rem'}}>
            {properties.map((prop) => {
                return <GridItem key={prop.id}>
                    <Card maxW='sm' className='all-cards' borderWidth={'1px'} borderColor={'#EAEBEB'} textAlign={'center'} width={{base:'20rem', md:'110rem',lg:'32.2rem',xl:'22rem'}} height={{base:'30rem', md:'53rem',lg:'',xl:'32rem'}}>
                    <CardBody>
                      <Link to={`/PropertyDetails/${prop.title}`}>
                        <Image
                        src={prop.image_url}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        width={{base:'300px', md:'',lg:'',xl:'300px'}}
                        height={{base:'150px', md:'360px',lg:'',xl:'200px'}}
                        objectFit='cover'
                        />
                      </Link>
                        <Stack mt='6' spacing='3'>
                        <Heading size={{base:'', md:'lg',lg:'lg',xl:'md'}}>{prop.title}</Heading>
                        <Text fontSize={{base:'', md:'1.8rem',lg:'rem',xl:'md'}}>
                            {prop.description}
                        </Text>
                        <Text fontSize={{base:'', md:'1.8rem',lg:'',xl:'md'}}>
                            <span><strong>Location:</strong> </span>{prop.location}
                        </Text>
                        <Text color='#EE4266' fontSize={{base:'', md:'2rem',lg:'',xl:'2xl'}}>
                            {prop.price}
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2' justifyContent={'center'} width="100%" size={{base:'md', md:'lg',lg:'lg',xl:'md'}} >
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