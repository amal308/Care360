import {Box,Text,UnorderedList,ListItem,List} from '@chakra-ui/react';
function Operation(){
    return(
        <Box
        w='1318px'
        h='auto'
        m='auto'>
            <Box
        display='flex'
        bgColor='pink.100'
        w='1318px'
        h='600px'
        margin='auto'>
            <Box
            w='40%'
            h='500px'
            
            paddingLeft='80px'
            
            marginTop='100px'
           >
                <Text
                as='h1'
                fontSize='4xl'
                fontWeight='bold'
                w='60%'>Your doctor has recommended an operation</Text>
                <br/>
                <Text
                as='h1'
                fontWeight='normal'
                fontSize='20px'>Get a second opinion<br/>
                Get heavy discounts in hospitals<br/>
                Get medical loan, in few weeks</Text>
                <br/>
                <Box
                as='button'
                
                w='350px'
                h='50px'
                bgColor='blue.700'
                padding='10px'
                marginLeft='15px'
                fontSize='xl'
                fontWeight='bold'
                borderRadius='30px'
                color='white'
                textAlign='center'>Consult for free</Box>
            </Box>
            <Box
            w='600px'
            h='400px'
            
            marginTop='100px'>
                <img src='/care3601.jpg' alt='1st pic'
                w='100px'
                h='100px' />


            </Box>
        </Box>
    
        

        </Box>
        
          
    )
}
export default Operation;