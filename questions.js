import {Box,Text, Image,OrderedList,ListItem,} from '@chakra-ui/react';
function Questions(){
    return(
        <Box
        w='1318px'
        h='700px'
        margin='auto'
        
        marginTop='50px'>
            <Text
            margin='auto'
            fontSize='xx-large'
            fontWeight='bold'
            textAlign='center'>Frequently Asked Questions</Text>
            <br/>
            <Text
            margin='auto'
            fontSize='medium'
            fontWeight='medium'
            textAlign='center'>Get the answer to our frequently asked questions in this section.</Text>
            <br/>
            <br/>
            <Box display='flex'
            >
                <Box
                w='80%'
                h='auto'
                padding='20px'>
                    <Text
                     margin='auto'
                     fontSize='large'
                     fontWeight='bold'
                     textAlign='center'>Question numero 1</Text>
                    <br/>
                    <Text
                    fontWeight='medium'
                    fontSize='medium'
                    w='300px'
                    h='auto'
                    margin='auto'
                    >In this block, you can briefly answer the question. Write something meaningful and concise. We recommend using uo 4 lines to answer.</Text>
                    <br/>
                    <br/>
                    <Text
                    margin='auto'
                    fontSize='large'
                    fontWeight='bold'
                    textAlign='center'>Question numero 3</Text>
                    <br/>
                    <Text
                    fontWeight='medium'
                    fontSize='medium'
                    w='300px'
                    h='auto'
                    margin='auto'>In this block, you can briefly answer the question. Write something meaningful and concise. We recommend using uo 4 lines to answer.</Text>
                </Box>
                <Box
                w='80%'
                h='auto'
                padding='20px'
                >
                <Text
                margin='auto'
                fontSize='large'
                fontWeight='bold'
                textAlign='center'>Question numero 2</Text>
                    <br/>
                    <Text
                    fontWeight='medium'
                    fontSize='medium'
                    w='300px'
                    h='auto'
                    margin='auto'>In this block, you can briefly answer the question. Write something meaningful and concise. We recommend using uo 4 lines to answer.</Text>
                    <br/>
                    <br/>
                    <Text
                    margin='auto'
                    fontSize='large'
                    fontWeight='bold'
                    textAlign='center'>Question numero 4</Text>
                    <br/>
                    <Text
                    fontWeight='medium'
                    fontSize='medium'
                    w='300px'
                    h='auto'
                    margin='auto'>In this block, you can briefly answer the question. Write something meaningful and concise. We recommend using uo 4 lines to answer.</Text>
                </Box>
            </Box>

        </Box>
    )
}
export default Questions;