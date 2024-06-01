import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import BuyHomeCard from '../components/services/BuyHomeCard';
import SellCard from '../components/services/SellCard';

const Services = () => {

    return (
        <Box mt={{base:'5.5rem',md:'8rem',lg:'5rem',xl:'10'}} className='services'>

            <Heading as="h2" size="xl" textAlign="center" mb={8} color={'#EE4266'} ml={{base:'4rem',md:'13rem',lg:'20rem',xl:'36rem'}} width={{base:'15rem',md:'20rem',lg:'',xl:''}}>
                Our Services
            </Heading>

            <Box display={{base:'',md:'flex',lg:'flex',xl:'flex'}}>
                <BuyHomeCard />
                <SellCard />
            </Box>

        </Box>
    );
};

export default Services;
