import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import BuyHomeCard from '../components/services/BuyHomeCard';
import SellCard from '../components/services/SellCard';

const Services = () => {

    return (
        <Box py={10} className='services'>

            <Heading as="h2" size="xl" textAlign="center" mb={8} color={'#EE4266'} >
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
