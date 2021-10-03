import {Box,Text, Image,OrderedList,ListItem,} from '@chakra-ui/react';
function Preoperative(){
    return(
        
            <Box
        display='flex'
        w='1318px'
        h='700px'
        margin='auto'>
            <Box
            w='50%'
            h='600px'
            marginTop='100px'
            marginLeft='50px'
            >
                <Text
                    as='h2'
                    textAlign='center'
                    fontWeight='normal'
                    fontSize='small'
                    color='gray.500'>PRE OPERATIVE SYSTEM</Text>
                <br/>
                <Text
                 as='h1'
                 textAlign='center'
                 fontWeight='bold'
                 fontSize='xx-large'>While you bear the "physical pain",we help you with the rest</Text>
                <br/>
                <Text
                 as='h2'
                 textAlign='center'
                 fontWeight='normal'
                 fontSize='medium'>Our care-buddy will speak with you and understand details of your case.</Text>
                <br/>
                <Text
                 as='h2'
                 textAlign='center'
                 fontWeight='normal'
                 fontSize='medium'>If required, he can suggest you:</Text>
                <br/>
                <OrderedList
                marginLeft='250px'>
                    <ListItem>Alternate options (along with cost)</ListItem>
                    <ListItem>Medical Loans</ListItem>
                    <ListItem>Free* second opinion</ListItem>
                    <ListItem>Consultation on existing insurance (if any)</ListItem>
                </OrderedList>
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
                   marginLeft='200px'
                   padding='10px'
                   borderRadius='30px'>Speak now</Box>
            </Box>
            <Box
            w='50%'
            h='600px'
            >
            
                
                <Image w='250px'
                h='400px' src='/pre.jpg' alt='preoperative' 
                margin='auto'
                marginTop='100px'
                boxShadow='dark-lg'
                
                rounded='md'
                bg='black'/>

                
                
                
                   
            
            </Box>
        </Box>
    

        

    )
}
export default Preoperative;