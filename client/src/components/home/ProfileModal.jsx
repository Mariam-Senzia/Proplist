import React from "react";
import {Modal,ModalOverlay,ModalContent,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Avatar,Button,Text,Divider,Flex} from '@chakra-ui/react'
import { FiLogOut } from "react-icons/fi";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProfileModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const handleProfile = () => {
        onClose();
        navigate('/UserProfile')
    }

    return (
        <>
        <Avatar onClick={onOpen} mr='0.5rem' size='md'/>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mr='-59rem' mt='5rem' width='11vw' height='18vh'>

            <Flex mt='1.5rem' ml='1rem' mb='1rem' onClick={handleProfile}>
                <Avatar size='sm' bgColor="#F52F57"/>
                <Text ml='0.5rem' fontSize={'1.2rem'}>Profile</Text>
            </Flex>

            <Divider borderWidth='1px' width={''}/>

            <Flex mt='1rem' mb='-1.5rem' ml='1.2rem'>
                <FiLogOut size='1.5rem' color="#F52F57"/>
                <Text ml='0.5rem'  fontSize={'1.2rem'}>Sign Out</Text>
            </Flex>
            

        </ModalContent>
        </Modal>

        </>
    )
}
export default ProfileModal;