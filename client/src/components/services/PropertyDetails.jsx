import React, { useEffect,useState } from "react";
import { Grid,GridItem,Flex,Box,Card, CardBody, Image, Stack, Heading, Text, ButtonGroup, CardHeader, Icon, UnorderedList, ListItem,Divider, CardFooter} from "@chakra-ui/react";
import InitialFocus from "./RequestModal";
import { useParams,Link } from "react-router-dom";
import { FaArrowLeft, FaLocationPin, FaBed, FaBath } from "react-icons/fa6";

function PropertyDetails({properties}){
    const {title} = useParams()
    const filteredProperties = properties.filter((prop) => prop.title === title);
    const [images, setImages] = useState([]);


    useEffect(() => {
      fetch("http://127.0.0.1:5555/images")
      .then((res) => res.json())
      .then((data) => {
        const filteredImages = data.filter(image => {
          return filteredProperties.some(prop => prop.id === image.property_id)
        })
        setImages(filteredImages)  
    })
      .catch((error) => alert("Error fetching property data:", error))
    },[])

    // console.log(images)

    return (
        <>
        <Link to="/PropertyList">
        <Icon as={FaArrowLeft} mt="2rem" ml="10rem" boxSize="6" color="#EE4266"/>
        </Link>
        <Flex>
         <Box marginTop="1rem">
        {/* main image */}
        {filteredProperties.map(prop => (
          <Image 
          src={prop.image_url}
          alt={prop.title}
          marginLeft="10rem"
          width="81.5%"
          height="40vh"
          borderRadius="10px"
          objectFit="cover"
          />
        ))}

         {/* images */}
         <Grid templateColumns={'repeat(2, minmax(100px , 1fr))'} gap={''} marginLeft={'10rem'} className='image details' maxWidth={'830'} marginTop={'1rem'}>
            {images.map((img) => {
                return <GridItem key={img.product_id}>
                  <Image 
                    src={img.url}
                    alt={img.product_id}
                    marginTop="1rem"
                    borderRadius="10px"
                    width="95%"
                    height="38vh"
                    objectFit="cover"
                  />
                    
                </GridItem>
            })}
            </Grid>
            </Box> 

            <Box width="19.5%" mt="-2rem">
            {filteredProperties.map((property) => {
                return <Card
                    // variant='outline'key={property.id} 
                    marginTop='3rem'
                    padding='1rem'
                    borderWidth='1px'
                    borderColor=""
                    height='82vh'
                    width="17.5vw"
                    position="fixed"
                    >
                     <CardHeader>
                      <Heading size='md' color="#EE4266">{property.title}</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack>
                        <Text mt="-1.5rem" >
                            {property.description}
                        </Text>
                        <Text mt="2rem">
                          <Icon as={FaLocationPin} marginRight="0.5rem" color="#0092CC"/>
                            {property.location}
                        </Text>
                        <Text>
                          <Icon as={FaBed} marginRight="0.5rem" color="#0092CC"/>
                            {property.bedrooms} Beds
                        </Text>
                        <Text>
                          <Icon as={FaBath} marginRight="0.5rem" color="#0092CC"/>
                            {property.bathrooms} Baths
                        </Text>
                        <Text mt="3.5rem">
                            Amenities
                        </Text>
                        <UnorderedList>
                          <ListItem>
                              {property.amenities}
                            </ListItem>
                            <ListItem>
                              {property.whats_special}
                            </ListItem>
                        </UnorderedList>
                        

                        <Text color='#EE4266' fontSize='2xl' mt="1.5rem">
                            {property.price}
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider/>
                      <CardFooter>
                    <ButtonGroup mt='1em' ml="1rem"  height="" >
                      <InitialFocus />
                      </ButtonGroup>
                      </CardFooter>
                  
                </Card>
            })}

              {/* <ButtonGroup mt='1em' ml="3rem"  height="" >
              <InitialFocus />
              </ButtonGroup> */}
            </Box>
          </Flex>
        </>
    )
}

export default PropertyDetails;