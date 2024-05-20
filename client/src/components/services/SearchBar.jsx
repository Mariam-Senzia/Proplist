import React,{useState} from "react";
import { SearchIcon} from "@chakra-ui/icons";
import {Button,Input,InputGroup,InputLeftElement, Card, CardBody, CardFooter,Stack,Heading,Divider,ButtonGroup, Text,Image,Grid,GridItem} from "@chakra-ui/react"
import InitialFocus from "./RequestModal";
import { Link } from "react-router-dom";

function SearchBar({properties}) {
    const [search,setSearch] = useState('');
    const [filteredProperties, setFilteredProperties] = useState([]);



    const displayChange = (e) => {
        setSearch(e.target.value)
        const filtered = properties.filter((prop) => {
            return prop.property_type.toLowerCase().includes(search.toLowerCase()) 
        })
        setFilteredProperties(filtered)  
    }
    
    return (
        <div>
            <InputGroup marginTop={"1rem"} >
                <InputLeftElement pointerEvents="none"  mt="1rem">
                    <SearchIcon className="searchIcon" color='#EE4266' _placeholder={{ color: 'inherit' }}/>
                </InputLeftElement>
                <Input variant='flushed' placeholder="Search by property type" onChange={displayChange} width={'15vw'} marginRight={'69.5rem'} mt="1rem" color='grey' _placeholder={{ color: 'inherit' }} focusBorderColor='#EE4266' />
            </InputGroup> 


            <Grid templateColumns={'repeat(3, minmax(100px , 1fr))'} gap={'5'} marginLeft={'rem'} marginTop={'2rem'} className='search-card' maxWidth={'1107'}>
            {filteredProperties.map((prop) => {
                return <GridItem key={prop.id}>
                    <Card maxW='sm' borderColor={'#EAEBEB'} textAlign={'center'} mb="2rem">
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
                            <span><strong>Location:</strong></span>{prop.location}
                        </Text>
                        {/* <Text>
                            <span><strong>Property Type:</strong></span>{prop.property_type}
                        </Text> */}
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

            
        </div>
    );
}
export default SearchBar;