import {Box,Text, Image,OrderedList,ListItem,} from '@chakra-ui/react';
function Postoperative(){
    return(

        <Box
        display='flex'
        w='1318px'
        h='700px'
        margin='auto'
        >
             <Box
              w='50%'
              h='600px'
            >
            <Image
            w='250px'
            h='400px' src='/pre.jpg' alt='preoperative' 
            margin='auto'
            marginTop='100px'
            src='/post.jpg'
            alt='postoperative'
            boxShadow='dark-lg'
               
                rounded='md'
                bg='black'
            />
           

            </Box>
      
            <Box
                w='50%'
                h='600px'
                marginTop='100px'
                marginLeft='0px'>
            <Text
              as='h2'
              textAlign='center'
              fontWeight='normal'
              fontSize='small'
              color='gray.500'
              marginLeft='50px'>POST OPERATIVE CARE</Text>
            <br/>
            <Text
            as='h1'
            textAlign='center'
            fontWeight='bold'
            fontSize='xx-large'>Our relation does not end with the operation :)</Text>
            <br/>
            <OrderedList
            marginLeft='250px'>
                <ListItem>Discounted Medicines delivered to hospital/home</ListItem>
                <ListItem>Post operation periodic health checks</ListItem>
                <ListItem>Nurse / Ayath / care-giver services for bed-ridden</ListItem>
               
            </OrderedList>
            <br/>
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
            marginLeft='0px'
            padding='10px'
            borderRadius='30px'
            marginLeft='200px'
            padding='10px'>Speak now</Box>
            </Box>
           

         

        </Box>
    )
}
export default Postoperative;