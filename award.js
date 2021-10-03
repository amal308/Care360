import {Box,Text, Image} from '@chakra-ui/react';
function Award(){
    return(
        <Box
        w='1318px'
        h='800px'
        bgColor='blue.800'
        margin='auto'>
            <Text
            as='h2'
            textAlign='center'
            fontWeight='normal'
            fontSize='small'
            color='gray.200'
            margin='auto'
            >Award winning features</Text>
            
            <Text
            w='400px'
            h='70px'
            margin='auto'
            as='h1'
            textAlign='center'
            fontWeight='bold'
            fontSize='xx-large'
            color='gray.200'>Experience the best !</Text>
            
            <Text
            as='h2'
            textAlign='center'
            fontWeight='normal'
            fontSize='medium'
            color='gray.200'>In this text block, you get a chance to convert website visitors. Say something they can't resist!</Text>
            <br/>
            <Box
             as
             ='button'
             w='300px'
             h='50px'
             bgColor='white'
             color='blue.800'
             fontWeight='bold'
             fontSize='xl'
             margin='auto'
             marginLeft='520px'
             
             borderRadius='30px'>Sign up for free</Box>
            <br/>
            <br/>
            <Box>
                <Image
                src='/care3601.jpg'
                w='800px'
                h='auto'
                margin='auto'
                />
            </Box>

        </Box>
       
    )
}
export default Award;