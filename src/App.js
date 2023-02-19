import logo from './logo.svg';
import './App.css';
import {Box, HStack, VStack, Text, SimpleGrid, Flex, Divider, Spacer, Button,  ButtonGroup, Link, Center, GridItem, interactivity} from '@chakra-ui/react';
import {AiOutlineStock} from 'react-icons/ai'
import {BiPlusMedical} from 'react-icons/bi'

function App() {
  const projects = [{
    title:'Women Investors Capstone',
    subject:'Product Development',
    icon:AiOutlineStock
  },
  {
    title:'Digital Ledger Repository',
    subject:'Software Development',
    icon:'',
  },
  {
    title:'Digital Ledger Repository',
    subject:'Software Development',
    icon:'',
  },

]
  return (
    <div className="App">
     <Box className='header' pt={100} mx='20%'>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet"/>
      <Flex py={10} gap={50}>
        <VStack alignItems='left' maxW={500}>
          <Box className='title'>
            Hi! I'm Rachel Taskale
          </Box>
          <div class='body-text'>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </Text>
            <Text >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </Text>
          </div>
          
        </VStack>
        {/* <Divider className='vertical-line' orientation='vertical' h='10px' w={2}/> */}

        <Box w={600} className='border' border='3px solid black' borderRadius={5}>
          <Box className='right-box'  border='3px solid black' borderRadius={5}></Box>
          <Box className='bottom-box'  border='3px solid black' borderRadius={5}></Box>
          
        </Box>
      </Flex>

      <HStack mt='5vh'>
        <Text className='title'  fontSize='calc(10px + 1.5vmin)'>Projects</Text>
        <Spacer/>
        <Button variant='ghost' fontWeight='bold' href='' color='black' bg='ffffff'>More</Button>
      </HStack>
      
      <SimpleGrid minChildWidth='120px' spacing='40px'>
        {projects.map(function(item, i){
          return(
            <Box className="card" minH={170} minW={210}  border='3px solid black' borderRadius={5} backgroundColor='white'>
              <Center>
                <VStack pl='30px' >
                  <Box maxW='200px' mt={5} alignItems='center' justifyContent='center'>
                  <AiOutlineStock className='subject-icon' alignItems='left' size='50px'/>
                    <Text className='title'  lineHeight={1.5} fontSize='calc(10px + 0.6vmin)' >
                      {item.title}
                    </Text>
                    <Text  fontSize='calc(10px + 0.3vmin)' mt='-10px'>
                      {item.subject}
                    </Text>
                  </Box>
              </VStack>
              </Center>
              <BiPlusMedical className= "plus-icon" position='fixed' size={20}/>    
                    
            </Box>
          
        );})}
        {/* <Box className="card" minH={170} minW={210}  border='3px solid black' borderRadius={5} backgroundColor='white'>
          
          <Center>
            <VStack>
              <AiOutlineStock className='subject-icon' size='50px'/>
              <Box maxW='200px' alignItems='center' pl='30px' justifyContent='center'>
                <Text className='title' mt='70px' lineHeight={1.5} fontSize='calc(10px + 0.6vmin)' >
                  Women Investors Capstone
                </Text>
                <Text  fontSize='calc(10px + 0.3vmin)' mt='-10px'>
                  Product Development
                </Text>
              </Box>
          </VStack>
          </Center>
          <BiPlusMedical className= "plus-icon" position='fixed' size={20}/>    
                
        </Box> */}

      </SimpleGrid>

     </Box>
    </div>
  );
}

export default App;
