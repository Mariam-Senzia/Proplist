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
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{base:'rem', md:'47rem',lg:'53rem',xl:'17rem'}} mt='5rem' className='about-us'>
                {AboutCards.map((service, index) => (
                    <Box key={index} p={{base:'5', md:'10',lg:'10',xl:'10'}} borderWidth="1px" borderRadius="lg" width={{base:'20rem', md:'45rem',lg:'51rem',xl:"34.5rem"}} mb="5rem" marginLeft={{base:'-1rem', md:'9rem',lg:'9.5rem',xl:'9.3rem'}}  marginRight={"8rem"}>
                        <Flex align="center" mb={4}>
                            <Icon as={service.icon} boxSize={{base:'5', md:'8',lg:'8',xl:'6'}} mr={4} color="#EE4266"/>
                            <Heading as="h3" size={{base:'md', md:'lg',lg:'lg',xl:'md'}}>
                                {service.title}
                            </Heading>
                        </Flex>
                        <Text fontSize={{base:'0.8rem', md:'2rem',lg:'',xl:'md'}}>{service.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>

        {/* buy and sell flow */}
        <Box backgroundColor="#EBE9E9" padding="5rem" marginLeft="-3.2rem" marginRight="-3.2rem" width={{base:'214vw', md:'234.5vw',lg:'199.9vw',xl:'99.2vw'}} > 
        <Flex >
            <Image src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={{base:'100px', md:'600px',lg:'752px',xl:'450px'}}
            height={{base:'10rem', md:'400px',lg:'550px',xl:'300px'}} marginLeft={{base:'-2.5rem', md:'7.5rem',lg:'7.5rem',xl:'7.5rem'}} border borderRadius="10px"/>
            <Text marginLeft="1rem" maxWidth={{base:'200', md:'820',lg:'',xl:'500'}} fontSize={{base:'0.8rem', md:'2rem',lg:'',xl:'md'}} marginTop={{base:'-0.8rem', md:'5rem',lg:'5rem',xl:'5rem'}}>Effortlessly navigate through a wide array of properties available for purchase. Browse through properties and upon selecting a property,you'll be presented with detailed information, including images and descriptions facilitating informed decisions. Request to apply to start the purchasing process.</Text>
        </Flex>
        <Flex marginTop="6rem" flexDirection="row-reverse">
            <Image src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=" style={{order : 1}} width={{base:'100px', md:'600px',lg:'752px',xl:'35%'}}
            height={{base:'10rem', md:'400px',lg:'550px',xl:'300px'}} borderRadius="10px" marginRight={{base:'25rem', md:'8.5rem',lg:'8rem',xl:'9rem'}} marginLeft={{base:'2rem', md:'4rem',lg:'4rem',xl:'4rem'}}/>
            <Text style={{order : 2}} maxWidth={{base:'800', md:'760',lg:'',xl:'500'}} marginTop={{base:'-0.5rem', md:'8rem',lg:'8rem',xl:'8rem'}} marginRight={{base:'rem', md:'3rem',lg:'3rem',xl:'3rem'}} fontSize={{base:'0.8rem', md:'2rem',lg:'',xl:'md'}}>Sellers can efficiently list their properties by providing essential details and high-quality images. The platform offers tools for managing listings, updating information, and responding to inquiries. </Text>
        </Flex>
        <Flex marginTop="6rem" >
            <Image src="https://www.mashvisor.com/blog/wp-content/uploads/2019/09/The-Best-Online-Property-Search-Tool-for-2019.jpg"  width={{base:'100px', md:'600px',lg:'752px',xl:'35%'}} height={{base:'10rem', md:'400px',lg:'550px',xl:'300px'}}  border borderRadius="10px" marginLeft={{base:'-2.5rem', md:'7.5rem',lg:'',xl:'8rem'}}/>
            <Text marginLeft="1rem" maxWidth={{base:'200', md:'820',lg:'',xl:'510'}} marginTop={{base:'', md:'6rem',lg:'6rem',xl:'6rem'}} fontSize={{base:'0.8rem', md:'2rem',lg:'',xl:'md'}}>The search functionality is designed to be comprehensive, allowing users to specify their requirements through interactive filters. The search results are displayed in an organized grid, showcasing key details of each property.</Text>
        </Flex>
        </Box>

        {/* properties display */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)' }} gap={{base:'3rem', md:'',lg:'',xl:'5'}} marginLeft={{base:'-1rem', md:'8rem',lg:'9.5rem',xl:'10rem'}} className='prop-card' marginBottom="4rem" marginTop="4rem" width={{base:'', md:'',lg:'60rem',xl:'69rem'}}>
            {properties.slice(8,12).map((prop) => {
                return <GridItem key={prop.id}>
                    <Card width={{base:'19.7rem', md:'30rem',lg:'38rem',xl:'22rem'}} height={{base:'24rem', md:'49rem',lg:'',xl:'28rem'}} className='all-cards' borderWidth={'1px'} borderColor={'#EAEBEB'} textAlign={'center'} >
                    <CardBody>
                      <Link to={`/PropertyDetails/${prop.title}`}>
                        <Image
                        src={prop.image_url}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        width={{base:'520px', md:'',lg:'',xl:'300px'}}
                        height={{base:'150px', md:'360px',lg:'',xl:'200px'}}
                        objectFit='cover'
                        />
                      </Link>
                        <Stack mt='6' spacing='3'>
                        <Heading size={{base:'md', md:'xl',lg:'xl',xl:'md'}}>{prop.title}</Heading>
                        <Text fontSize={{base:'1rem', md:'2rem',lg:'2.1rem',xl:'md'}}>
                            {prop.description}
                        </Text>
                        <Text fontSize={{base:'1rem', md:'2rem',lg:'',xl:'md'}}>
                            <span><strong>Location:</strong> </span>{prop.location}
                        </Text>
                        <Text color='#EE4266' fontSize={{base:'1.5rem', md:'3rem',lg:'',xl:'2xl'}}>
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
        <Box backgroundColor="#EBE9E9" padding="1rem" marginLeft="-3.2rem" marginRight="-3.2rem" width={{base:'52rem', md:'235vw',lg:'200vw',xl:'99.2vw'}}> 
        <SimpleGrid columns={{ base: 1, md: 4}} spacing={{base:'', md:'15rem',lg:'rem',xl:'8rem'}} mt='4rem' className='reviews' >
                {reviews.map((review, index) => (
                    <Box key={index} p={10} borderWidth="" borderRadius="lg" width={{base:'21rem', md:'33rem',lg:'',xl:'22rem'}} mb="1rem" marginLeft={{base:'1rem', md:'9rem',lg:'12rem',xl:'11rem'}}  marginRight={""}>
                        <Image src={review.image} height="80px" width="80px" objectFit="cover" borderRadius="50px" marginLeft={{base:'6rem', md:'10rem',lg:'',xl:'5.5rem'}} mb={3}/>
                        <Heading as="h3" size={{base:'md', md:'xl',lg:'lg',xl:'md'}} mb={3} textAlign={"center"}>
                            {review.name}
                        </Heading>
                        <Text textAlign={"center"} fontSize={{base:'1rem', md:'1.8rem',lg:'1.4rem',xl:'md'}}>{review.review}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>

        </>
    );
};

export default AboutUs;
