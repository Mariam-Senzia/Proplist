import React from "react";
import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const SubmitFormMessage = (() => {
    return (
        <>
            <Box bgColor="#FF859B" mt="11rem" width="40vw" ml="25rem" borderRadius="10px" p="2rem" height="40vh" bgImage="https://slidebazaar.com/wp-content/uploads/2022/09/welcome-images-for-ppt.jpg">
                <Box p="2rem" textAlign="center" bgColor="#A9D2D5" width="40vw" height="30vh" borderRadius="10px">
                    <Icon as={FaCheck} bgColor="white" mt="1rem" boxSize="7" borderRadius="50px" p="0.3rem" color="#A9D2D5"/>
                    <Heading mt='1rem'>Thankyou</Heading>
                    <Text mt="1rem">The form was submitted successfully.</Text>
                </Box>
            </Box>
        </>
    )
})

export default SubmitFormMessage