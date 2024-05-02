import React from "react";
import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup} from "@chakra-ui/react";
import InitialFocus from "./RequestModal";
import { useParams } from "react-router-dom";

function PropertyDetails({properties}){
    const {title} = useParams()
    const filteredProperties = properties.filter((prop) => prop.title === title);


    return (
        <>
            {filteredProperties.map((property) => {
                return <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'key={property.id} 
                    marginTop='3rem'
                    padding='1rem'
                    borderWidth='2px'
                    // height='60vh'
                    >
                    <Image
                        src={property.image_url}
                        alt={property.title}
                        borderRadius='lg'
                        // maxW={{ base: '100%', sm: '200px' }}
                        width='500px'
                        // height='500px'
                        objectFit='cover'
                    />
                    <CardBody>
                        <Stack>
                        <Heading size='md' color='#21A0A0'>{property.title}</Heading>
                        <Text>
                            {property.description}
                        </Text>
                        <Text>
                            <span><strong>Location:</strong> </span>{property.location}
                        </Text>

                        {(property.property_type === 'house' || property.property_type === 'apartment') && (
                          <>
                            <Text>
                            <span><strong>Beds:</strong> </span>{property.bedrooms}
                            </Text>
                            <Text>
                            <span><strong>Baths:</strong> </span>{property.bathrooms}
                            </Text>
                            <Text>
                            <span><strong>Total Interior:</strong> </span>{property.total_interior}
                            </Text>
                            <Text>
                            <span><strong>Lot Size:</strong> </span>{property.lot_size}
                            </Text>
                            <Text>
                            <span><strong>Parking:</strong> </span>{property.parking}
                            </Text>
                            <Text>
                            <span><strong>Type & Style:</strong> </span>{property.type_style}
                            </Text>
                            <Text>
                            <span><strong>Year Built:</strong> </span>{property.year_built}
                            </Text>
                            <Text>
                            <span><strong>Property Condition:</strong> </span>{property.property_condition}
                            </Text>
                            <Text>
                            <span><strong>Security:</strong> </span>{property.security}
                            </Text>
                            <Text>
                            <span><strong>Flooring:</strong> </span>{property.flooring}
                            </Text>
                            <Text>
                            <span><strong>What's Special:</strong> </span>{property.whats_special}
                            </Text>
                            </>
                        )}
                        {(property.property_type === 'land') && (
                          <>
                            <Text>
                            <span><strong>Lot Size:</strong> </span>{property.lot_size}
                            </Text>
                            <Text>
                            <span><strong>Topography:</strong> </span>{property.topography}
                            </Text>
                            <Text>
                            <span><strong>Accesibility:</strong> </span>{property.accessibility}
                            </Text>
                            <Text>
                            <span><strong>Zoning:</strong> </span>{property.zoning}
                            </Text>
                            <Text>
                            <span><strong>Utilities:</strong> </span>{property.utilities}
                            </Text>
                            <Text>
                            <span><strong>Investment Potential:</strong> </span>{property.investment_potential}
                            </Text>
                          </>  
                        )}
                        {(property.title === 'The Cube') && (
                          <>
                            <Text>
                            <span><strong>Office Space:</strong> </span>{property.office_space}
                            </Text>
                            <Text>
                            <span><strong>Parking:</strong> </span>{property.parking}
                            </Text>
                            <Text>
                            <span><strong>Accesibility:</strong> </span>{property.accessibility}
                            </Text>
                            <Text>
                            <span><strong>Amenities:</strong> </span>{property.amenities}
                            </Text>
                            <Text>
                            <span><strong>Investment Potential:</strong> </span>{property.investment_potential}
                            </Text>
                          </>  
                        )}
                        {(property.title === 'Coral warehouse') && (
                          <>
                            <Text>
                            <span><strong>Warehouse Size:</strong> </span>{property.warehouse_size}
                            </Text>
                            <Text>
                            <span><strong>Lot Size:</strong> </span>{property.lot_size}
                            </Text>
                            <Text>
                            <span><strong>Accesibility:</strong> </span>{property.accessibility}
                            </Text>
                            <Text>
                            <span><strong>Loading Docks:</strong> </span>{property.loading_docks}
                            </Text>
                            <Text>
                            <span><strong>Security:</strong> </span>{property.security}
                            </Text>
                            <Text>
                            <span><strong>Investment Potential:</strong> </span>{property.investment_potential}
                            </Text>
                          </>  
                        )}
                        <Text color='#00A39E' fontSize='2xl'>
                            {property.price}
                        </Text>
                        </Stack>
                        <ButtonGroup mt='1rem' spacing=''  width="">
                        <InitialFocus />
                        </ButtonGroup>
                    </CardBody>
                </Card>
            })}
        </>
    )
}

export default PropertyDetails;