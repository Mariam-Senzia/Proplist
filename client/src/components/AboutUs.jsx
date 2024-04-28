import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, Icon} from '@chakra-ui/react';
import { FaHome,FaPeopleArrows } from 'react-icons/fa';

const AboutUs = () => {

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

    return (
        <>
        {/* Why us */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"17rem"} mt='4rem' >
                {AboutCards.map((service, index) => (
                    <Box key={index} p={10} borderWidth="1px" borderRadius="lg" width="34.5rem" mb="5rem" marginLeft={"9.3rem"}  marginRight={"8rem"}>
                        <Flex align="center" mb={4}>
                            <Icon as={service.icon} boxSize={6} mr={4} color="teal"/>
                            <Heading as="h3" size="md">
                                {service.title}
                            </Heading>
                        </Flex>
                        <Text>{service.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </>
    );
};

export default AboutUs;
