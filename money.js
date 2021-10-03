import {Box,Text, Image} from '@chakra-ui/react';
function Money(){
    return(
        <Box
        margin='auto'
        w='1318px'
        h='1200px'
        
        marginTop='80px'>
            <Text
            as='h2'
            textAlign='center'
            fontWeight='normal'
            fontSize='small'
            color='gray.500'>
                Personalized deals for your medical treatments
            </Text>
            <Text
            as='h1'
            textAlign='center'
            fontWeight='bold'
            fontSize='xx-large'>
                Save money with Livlong care-program
            </Text>
            <br/>
            <Text
            as='h2'
            textAlign='center'
            fontWeight='normal'
            fontSize='medium'
            w='800px'
            m='auto'>
                Doctors,hospitals, diagnostic centers is a confusing world for most. There are lots of hidden discounts, that we help you uncover and take benefits of.<br/>
                <br/>
                Our Care-buddy will be your friend, family & Guide through those testing times
            </Text>
            <br/>
            <br/>
            
           <Image
           src='/care3601.jpg' alt='2ndpic'
           w='800px'
           m='auto' />
           <br/>
           <br/>
           <br/>
           <Text
           as='h1'
           fontSize='xx-large'
           margin='auto'
           textAlign='center'
           fontWeight='bold'>Don't worry this service is absolutely free !</Text>
           <br/>
           <Text
           as='h1'
           fontSize='xl'
           margin='auto'
           textAlign='center'
           fontWeight='normal'>Please keep the medical records handy, while reaching out our care-buddy<br/>
           Happy healing !</Text>
           <br/>
           <Box
           as
           ='button'
           w='300px'
           h='50px'
           bgColor='blue.700'
           color='white'
           fontWeight='bold'
           fontSize='xl'
           margin='auto'
           padding='10px'
           borderRadius='30px'
           marginLeft='515px'>Free Second Opinion</Box>
                
           
            
        </Box>
    )
}
export default Money;