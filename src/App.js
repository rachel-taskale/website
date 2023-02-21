import logo from './logo.svg';
import './App.css';
import {Box, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack, 
  VStack, 
  Text, 
  SimpleGrid, 
  Flex, 
  Icon,
  Divider, 
  Spacer, 
  Button,  ButtonGroup, Link, Center, Stack} from '@chakra-ui/react';
import {AiOutlineStock, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import {BiPlusMedical} from 'react-icons/bi'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {HiArrowNarrowDown} from 'react-icons/hi'



function App() {
  const projects = [{
    title:'Women Investors Capstone',
    subject:'Product Development',
    icon: AiOutlineStock,
    description:'ssssssssssssss'
  },
  {
    title:'Digital Ledger Repository',
    subject:'Software Development',
    icon: AiFillGithub,
    description:'ddddddddddddddddddd'
  },
  {
    title:'Digital Ledger Repository',
    subject:'Software Development',
    icon:AiFillInstagram,
    description:'fffffffffffffffffffff'
  },
]
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className="App">
      <Center>
     <Box className='header' maxW={['95%', '95%', '95%', '75vw']} pt={100}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet"/>
        <SimpleGrid columns={[1,1,1,2,2]} py={10} gap={10} >
          <Box>
            <VStack maxW={480} >
              <div >
                <Box className='title' >
                  Hi! I'm Rachel Taskale
                </Box>
                <Text className='body-text' lineHeight={1.7}>
                  Currently working at Broadridge Financial Solutions as a Software Engineer. In my free time, I enjoy working on creative projects and freelance graphic design. You can find some of my work <span fontWeight={900}>here.</span>
                </Text>
                <Divider mt={2} colorScheme="red" orientation='vertical' h={10} size={2}/>
                <Text>
                  

                </Text>
              </div>
            </VStack>
            
          </Box>

          <Box w='fit-content' maxW='400px' ml={20}  minW='300px' minH="200px" className='border' border='3px solid black'  bgColor='#ffffff' borderRadius={5}>
            <Box className='right-box' h='fit-content'  border='3px solid black' borderRadius={5}>
              <VStack py='15px' spacing={5} h='full'>
                <Link target="_blank" href='https://www.linkedin.com/in/racheltaskale/' color='black'><BsLinkedin className='icon' size='20px' /></Link>
                <Link target='_blank' href='' color='black'><AiFillInstagram className='icon' size='29px' href=''/></Link>
                <Link target='_blank' href='' color='black'><BsGithub className='icon' size='25px' href=''/></Link>
              </VStack>
            </Box>
            <Box className='bottom-box'  border='3px solid black' borderRadius={5}>
              <Center fontWeight='700' letterSpacing={3} fontSize={12} mt='1vw'>racheltaskale@gmail.com</Center>
            </Box>
          </Box>

        </SimpleGrid>

      <HStack mt='5vh'>
        <Text className='title'  fontSize='calc(10px + 1.5vmin)'>Projects</Text>
        <Spacer/>
        <Button variant='ghost' fontWeight='bold' href='' color='black' backgroundColor='ffffff00' border='0px'>More<HiArrowNarrowDown/></Button>
      </HStack>
      
      <SimpleGrid minChildWidth={250} spacing='60px'>
        {projects.map(function(item, i){
          return(
            <Box className="card" minH={170}  border='3px solid black' borderRadius={5} backgroundColor='white'>
              <Center>
                <Stack pl='30px' direction={['column', 'row']}>
                  <Box maxW='200px' mt={5}  justifyContent='center'>
                  <Icon as={item.icon} className='subject-icon'/>
                    <Text className='title'  lineHeight={1.5} fontSize='calc(10px + 0.6vmin)' >
                      {item.title}
                    </Text>
                    <Text fontSize='calc(10px + 0.3vmin)'>
                      {item.subject}
                    </Text>
                  </Box>
              </Stack>
              </Center>
              <BiPlusMedical onClick={onOpen} className= "plus-icon" position='fixed' size={20}/> 
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
        );})}
      </SimpleGrid>

     </Box>
     </Center>
    </div>
  );
}

export default App;
