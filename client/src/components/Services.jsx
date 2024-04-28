import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import BuyHomeCard from './BuyHomeCard';
import SellCard from './SellCard';

const Services = () => {

    return (
        <Box py={10} className='services'>

            <Heading as="h2" size="xl" textAlign="center" mb={8} color={'teal'} >
                Our Services
            </Heading>

            <Box display={"flex"} >
                <BuyHomeCard />
                <SellCard />
            </Box>

        </Box>
    );
};

export default Services;
