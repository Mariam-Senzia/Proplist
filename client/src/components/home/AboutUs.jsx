import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, Icon, Image,Card, CardBody, Stack, ButtonGroup, Divider, CardFooter,Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import InitialFocus from '../services/RequestModal';
import { FaHome,FaPeopleArrows, FaStar } from 'react-icons/fa';

const AboutUs = ({properties}) => {

    const AboutCards = [
        {
            title: 'Trusted by Thousands',
            icon: FaPeopleArrows,
            description: 'Trusted for its reliability, efficiency, and user-friendly experience. Join our community today and discover why so many rely on us for their prop needs!',
        },
        {
            title: 'Wide range of Properties',
            icon: FaHome,
            description: 'From cozy apartments to spacious estates, our prop listing app offers a diverse range of properties. Start your search now!"',
        },
    ];

    const reviews = [
        {
            image: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Alexandra Mariee',
            review: 'I found my dream apartment through this platform. The listings are comprehensive, and the community support is unparalleled. Highly recommended for anyone looking for a new place.',
            icon: FaStar,FaStar,
        },
        {
            image: 'https://t3.ftcdn.net/jpg/06/78/09/78/360_F_678097876_9kJnFlRYGAeibsVxspqtCL9UR8giLAvF.jpg',
            name: 'Johnathan Carlos',
            review: 'This platform has revolutionized the way I view property listings. The diversity of options and the ease of navigation make finding the perfect property a breeze.',
            icon: FaStar,
        },
        {
            image: 'https://thenationonlineng.net/wp-content/uploads/2021/05/Seun-Jimoh.jpg',
            name: 'Michael Richie',
            review: 'I was skeptical at first, but this platform has exceeded my expectations. The quality of listings and the user-friendly interface have made my property search effortless.',
            icon: FaStar,
        },
    ];

    return (
        <>
        {/* Why us */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"17rem"} mt='5rem' className='about-us'>
                {AboutCards.map((service, index) => (
                    <Box key={index} p={10} borderWidth="1px" borderRadius="lg" width="34.5rem" mb="5rem" marginLeft={"9.3rem"}  marginRight={"8rem"}>
                        <Flex align="center" mb={4}>
                            <Icon as={service.icon} boxSize={6} mr={4} color="#EE4266"/>
                            <Heading as="h3" size="md">
                                {service.title}
                            </Heading>
                        </Flex>
                        <Text>{service.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>

        {/* buy and sell flow */}
        <Box backgroundColor="#EBE9E9" padding="5rem" marginLeft="-3.2rem" marginRight="-3.2rem"> 
        <Flex >
            <Image src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="35%" marginLeft="7.8rem" border borderRadius="10px"/>
            <Text marginLeft="6rem" maxWidth="500" marginTop="5rem">Effortlessly navigate through a wide array of properties available for purchase. Browse through properties and upon selecting a property,you'll be presented with detailed information, including images and descriptions facilitating informed decisions. Request to apply to start the purchasing process.</Text>
        </Flex>
        <Flex marginTop="6rem" flexDirection="row-reverse">
            <Image src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=" style={{order : 1}} width="35%" borderRadius="10px" marginRight="9rem" marginLeft="4rem"/>
            <Text style={{order : 2}} maxWidth="500" marginTop="8rem" marginRight="3rem">Sellers can efficiently list their properties by providing essential details and high-quality images. The platform offers tools for managing listings, updating information, and responding to inquiries. </Text>
        </Flex>
        <Flex marginTop="6rem" >
            <Image src="https://www.mashvisor.com/blog/wp-content/uploads/2019/09/The-Best-Online-Property-Search-Tool-for-2019.jpg" width="35%" marginLeft="8rem" border borderRadius="10px"/>
            <Text marginLeft="6rem" maxWidth="510" marginTop="6rem">The search functionality is designed to be comprehensive, allowing users to specify their requirements through interactive filters. The search results are displayed in an organized grid, showcasing key details of each property.</Text>
        </Flex>
        </Box>

        {/* properties display */}
        <Grid templateColumns={'repeat(3, minmax(100px , 1fr))'} gap={5} marginLeft={'10rem'} className='prop-card' maxWidth={'1114'} marginBottom="4rem" marginTop="4rem">
            {properties.slice(9,12).map((prop) => {
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
                    {/* <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2' justifyContent={'center'} width="100%">
                        <InitialFocus />
                        </ButtonGroup>
                        
                    </CardFooter> */}
                    </Card>
                </GridItem>
            })}
            </Grid>



        {/* reviews */}
        <Box backgroundColor="#EBE9E9" padding="1rem" marginLeft="-3.2rem" marginRight="-3.2rem"> 
        <SimpleGrid columns={{ base: 1, md: 4}} spacing={"8rem"} mt='4rem' className='reviews' >
                {reviews.map((review, index) => (
                    <Box key={index} p={10} borderWidth="" borderRadius="lg" width="22rem" mb="1rem" marginLeft={"11rem"}  marginRight={""} >
                        <Image src={review.image} height="100px" width="100px" objectFit="cover" borderRadius="50px" marginLeft="5.5rem" mb={3}/>
                        <Heading as="h3" size="md" mb={3} textAlign={"center"}>
                            {review.name}
                        </Heading>
                        <Text textAlign={"center"}>{review.review}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>

        </>
    );
};

export default AboutUs;
