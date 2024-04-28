import React, { useRef, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Select } from '@chakra-ui/react';

function ForSale({ onNewProperty }){
    const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    property_type: '',
    location: '',
    image: null,})

    // Create a reference to the file input
    const fileInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('property_type', formData.property_type);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('image', formData.image);

        fetch('http://127.0.0.1:5555/properties',{
            method: 'POST',
            body: formDataToSend,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then(resp => {
            // if(!resp.ok){
            //     throw new Error('Network response was not ok');
            // }
            return resp.json();
        })
        .then((data) => {
            onNewProperty(data);
            alert('Property submitted successsfully!');
            setFormData({
                title: '',
                description: '',
                price: '',
                property_type: '',
                location: '',
                image: null,
            });
            fileInputRef.current.value = ''; // Clear file input
        })
        .catch((err) => {
            console.log('Error:',err)
        })
    }

    // Change
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
     };

    // image change 
    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };
    

    return (
        <Box
            // width="100%"
            height="91.5vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundImage='url("https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
            backgroundPosition='center'
            backgroundSize='cover'
            marginTop = '1rem'
            marginLeft='-3.5rem'
            marginRight='-3.2rem'
        >
            <Box
                width="100%"
                maxWidth="600px"
                mx="auto" // Auto margin to center the form horizontally
                p="20px"
                boxShadow="md"
                borderRadius="md"
                borderWidth='1px'
                backgroundColor={'white'}
            >
                <form onSubmit={handleSubmit}>
                    <FormControl id="title" mb="10px">
                        <FormLabel>Title</FormLabel>
                        <Input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl id="description" mb="10px">
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl id="price" mb="10px">
                        <FormLabel>Price</FormLabel>
                        <Input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl id="location" mb="10px">
                        <FormLabel>Location</FormLabel>
                        <Input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl id="type" mb="10px">
                        <FormLabel>Property Type</FormLabel>
                        <Select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option value="">Select type</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="land">Land</option>
                            <option value="commercial">Commercial</option>
                        </Select>
                    </FormControl>

                    <FormControl id="image" mb="10px" >
                        <FormLabel>Image</FormLabel>
                        <Input padding={'0.3rem'}
                            ref={fileInputRef}
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                        />
                       
                    </FormControl>

                    <Button type="submit" colorScheme="teal" mt="10px">
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default ForSale;
