import {Box,Text, Image} from '@chakra-ui/react';
function Casestudies(){
    return(
        <Box
        margin='auto'
        marginTop='100px'
        w='1318px'
        h='600px'
        >    
        <Text
            as='h1'
            textAlign='center'
            fontWeight='bold'
            fontSize='xx-large'
            margin='auto'
            >Case Studies</Text>
            <br/>
            <Text
            as='h2'
            textAlign='center'
            fontWeight='normal'
            fontSize='medium'>A growing collection of case studies, featuring customers we've helped. Learn how you can use our software to effectively solve your startup challenges.</Text>
            <br/>
            <Box display='flex'
            gridGap='40px'
          
            
            w='70%'
            h='400px'
            
            
            
            
            margin='auto'>
                <Box
                w='33.33%'
                h='420px'
                boxShadow='dark-lg'
                p='4'
                rounded='md'
                bg='black'
              
                padding='20px'
                bgColor='blue.50'
               
                
                >
                    <Image
                     src='cs1.jpg' alt='casestudy1'
                     w='100%'
                     h='200px'/>
                    <br/>
                    <Text
                    as='h2'
            textAlign='center'
            fontWeight='black'
            fontSize='bold'
                    >Case Study</Text>
                    <br/>
                    <Text>jnew fwenf kefwenff fn2 efnff fno2ifno fflfmdpoef fkmoefmf if2oef lfm2ifm2 ekfepodpwe</Text>
                    <br/>
                    <Image 
                    w='35px'
                    h='8px'
                    src='logocare.jpg' alt='logo'
                    marginLeft='10px'/>
                </Box>
                
                <Box
               w='33.33%'
               h='420px'
               boxShadow='dark-lg'
               p='4'
               rounded='md'
               bg='black'
             
               padding='20px'
               bgColor='blue.50'>
                <Image
                 src='cs2.jpg' alt='casestudy2'
                 w='100%'
                 h='200px'/>
                    <br/>
                    <Text
                     as='h2'
                     textAlign='center'
                     fontWeight='black'
                     fontSize='bold'>Case Study</Text>
                    <br/>
                    <Text>jnew fwenf kefwenff fn2 efnff fno2ifno fflfmdpoef fkmoefmf if2oef lfm2ifm2 ekfepodpwe</Text>
                    <br/>
                    <Image
                    w='35px'
                    h='8px'
                    src='logocare.jpg' alt='logo'
                    marginLeft='10px'/>
                </Box>
                <Box
                w='33.33%'
                h='420px'
                boxShadow='dark-lg'
                p='4'
                rounded='md'
                bg='black'
              
                padding='20px'
                bgColor='blue.50'
                >
                <Image
                 src='cs3.jpg' alt='casestudy3'
                 w='100%'
                 h='200px'/>
                    <br/>
                    <Text
                     as='h2'
                     textAlign='center'
                     fontWeight='black'
                     fontSize='bold'>Case Study</Text>
                    <br/>
                    <Text>jnew fwenf kefwenff fn2 efnff fno2ifno fflfmdpoef fkmoefmf if2oef lfm2ifm2 ekfepodpwe</Text>
                    <br/>
                    <Image
                    w='35px'
                    h='8px'
                    src='logocare.jpg' alt='logo'
                    marginLeft='10px'/>
                </Box>
            </Box>
        </Box>
    )
}
export default Casestudies;