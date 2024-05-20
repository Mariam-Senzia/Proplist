import React, { useRef, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Select, Heading } from '@chakra-ui/react';
import Footer from '../home/Footer';
import { useNavigate } from 'react-router-dom';

function ForSale({ onNewProperty }){
    const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    property_type: '',
    location: '',
    image: null,
    beds:'',
    baths:'',
    amenities:'',
    whats_special:'',
    additional_images: [],
})

    // Create a reference to the file input
    const fileInputRef = useRef(null);

    // navigate
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData)

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('property_type', formData.property_type);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('image', formData.image);
        formDataToSend.append('beds', formData.beds);
        formDataToSend.append('baths', formData.baths);
        formDataToSend.append('amenities', formData.amenities);
        formDataToSend.append('whats_special', formData.whats_special);
        formData.additional_images.forEach((file) => {
            formDataToSend.append('additional_images', file);
        })
        

        // console.log("s,dfjvnskjfv", formDataToSend)

        fetch('http://127.0.0.1:5555/properties',{
            method: 'POST',
            body: formDataToSend,
            headers: {
                // 'Content-Type': 'multipart/form-data'
            },
        })
        .then(resp => {
            if(!resp.ok){
                throw new Error('Network response was not ok');
            }
            navigate("/SubmitFormMessage")
            
        })
        .then((data) => {
            console.log(data);
            // onNewProperty(data)
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

    // multiple images
    const handleAdditionalImagesChange = (e) => {
        setFormData({
            ...formData,
            additional_images: Array.from(e.target.files),
        });
    }
    

    return (
        <>
        <Box
            // width="100%"
            height="150vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundImage='url("https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
            backgroundPosition='center'
            backgroundSize='cover'
            marginTop = '0.9rem'
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
                <Heading as="h2" size="lg" color="#EE4266" textAlign="center" >
                     Sell Your Property
                </Heading>
                <form onSubmit={handleSubmit} >
                    <FormControl id="title" mb="10px" marginTop="1rem">
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
                            name="property_type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option value="">Select type</option>
                            <option value="apartment">Apartment</option>
                            <option value="beach house">Beach House</option>
                            <option value="bungalow">Bungalow</option>
                            <option value="cottage">Cottage</option>
                            <option value="mansion">Mansion</option>
                            <option value="town house">Town House</option>
                            <option value="villa">Villa</option>
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

                    <FormControl id="more_images" mb="10px" >
                        <FormLabel>More Images</FormLabel>
                        <Input padding={'0.3rem'}
                            type="file"
                            name="additional_images"
                            multiple
                            onChange={handleAdditionalImagesChange}
                        />  
                    </FormControl>

                    <FormControl id="beds" mb="10px" >
                        <FormLabel>Beds</FormLabel>
                        <Input padding={'0.3rem'}
                            type="text"
                            name="beds"
                            value={formData.beds}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl id="baths" mb="10px" >
                        <FormLabel>Baths</FormLabel>
                        <Input padding={'0.3rem'}
                            type="text"
                            name="baths"
                            value={formData.baths}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl id="amenities" mb="10px" >
                        <FormLabel>Amenities</FormLabel>
                        <Input padding={'0.3rem'}
                            type="text"
                            name="amenities"
                            value={formData.amenities}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl id="whats_special" mb="10px" >
                        <FormLabel>What's Special</FormLabel>
                        <Input padding={'0.3rem'}
                            type="text"
                            name="whats_special"
                            value={formData.whats_special}
                            onChange={handleChange}
                        />  
                    </FormControl>


                    <Button type="submit" backgroundColor="#EE4266" color="white" mt="10px">
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>

        <Footer />
        </>
    );
};

export default ForSale;
