import logo from "./logo.svg";
import "./App.css";

import React from "react";
import {
  Box,

  HStack,
  VStack,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Divider,
  Wrap,
  WrapItem,
  Spacer,
  Button,
  ButtonGroup,
  Link,
  Center,
  Stack,
  Image,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardBodyProps,
  CardFooter,
  Heading,

  Highlight,
  LinkOverlay,
} from "@chakra-ui/react";

const CustomCard = (props) => {
  return (
    <Card
      maxW={["xl", "lg"]}
      minH={['xl', 'lg']}
      variant="outline"
      border="2px solid black"
      borderRadius="xl"
    >
      <CardBody>
        <Image
          width='500px'
          height='344px'
          src=''
          alt={props.title}
          src={props.img}
          // objectFit='cover'
          // border='1px solid black'
          borderRadius="lg"
          
        />
        <Stack  spacing="3" >
          <Heading>
            <Text className="title"  fontSize="2xl">
              {props.title}
            </Text>
            <Text className="subtitle" fontWeight='500' color="#A259FF" fontSize="sm">
              {props.subtitle}
            </Text>
          </Heading>
         
        </Stack>
      </CardBody>

      <CardFooter>
        <HStack width='full'>
          <Spacer />
          <Link href={props.github} target="_blank">
            <Button
              className="title"
              fontWeight="bold"
              variant="outline"
              right={0}
              border="2px solid black"
              bgColor='#03D18290'
              color="black"
              _hover={{bgColor:'#03D182'}}
            >
              {props.buttonName}
            </Button>
          </Link>
        </HStack>
      </CardFooter>
    </Card>
  );
};

function App() {
  const projects = [
    {
      title: "Women Investors Project",
      subtitle: "Product Development",
      //https://drive.google.com/file/d/185x1ykc6KPolb-tKm5L6nVYi-E2fI67f/view?usp=sharing
      img: 'https://drive.google.com/uc?id=185x1ykc6KPolb-tKm5L6nVYi-E2fI67f',
      description:
        "Research and development of features centered around making the world of finance more equitable for women investors",
      tech: "postgres + nodejs + react",
      github:
        "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/logos/metaworld-1000x1000.svg",
        buttonName:'Read Case Study'
    },
    {
      title: "Metaworld",
      subtitle: "Design",
      // https://drive.google.com/file/d/1s2LDGXSoHpx0z8SsouJvbQiolJ9jCvNj/view?usp=sharing
      img: 'https://drive.google.com/uc?id=1s2LDGXSoHpx0z8SsouJvbQiolJ9jCvNj',
      description: "Logo designed for Farama Foundation.",
      tech: "postgres + nodejs + react",
      github:
        "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/logos/metaworld-1000x1000.svg",
        buttonName:'Read Case Study'
    },
    {
      title: "Staffing Dashboard",
      subtitle: "UI + Dev",
      // https://drive.google.com/file/d/190XaY8JkGCcUQFSVE40Pkty_JKW0ZUiX/view?usp=sharing
      img: "https://drive.google.com/uc?id=190XaY8JkGCcUQFSVE40Pkty_JKW0ZUiX",
      description:
        "Dashboard developed to allow the user to manage clients & staff to fulfill private events",
      tech: "postgres + nodejs + react",
      github: "https://github.com/rachel-taskale/staffing",
      buttonName:'Read Case Study'
    },
    {
      title: "Kestrel",
      subtitle: "Design",
      // https://drive.google.com/file/d/1qvSAU6rF6F5pau1QoAJoL8EUv_YA99fg/view?usp=sharing
      img: 'https://drive.google.com/uc?id=1qvSAU6rF6F5pau1QoAJoL8EUv_YA99fg',
      description:
        "Rebranding logo design for an agricultural startup seeking to easy the process of loans for small farmers",
      tech: "postgres + nodejs + react",
      github:
        "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/logos/Kestrel%20Final.svg",
        buttonName:'Read Case Study'
        
    },
    {
      title: "High on Self Esteem",
      subtitle: "Art",
      // https://drive.google.com/file/d/1zZe-q6GmuoQbeDoklFxRijoo800XaDRW/view?usp=sharing
      img: 'https://drive.google.com/uc?id=1zZe-q6GmuoQbeDoklFxRijoo800XaDRW',
      description: "",
      tech: "postgres + nodejs + react",
      github: "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/art/Vicious%20Summer%20faces.png",
      buttonName:'View Drawing'
    },
    {
      title: "Broken Record Love",
      subtitle: "Art",
      img: 'https://drive.google.com/uc?id=1mq55T5MfOGa_-AboDu2YEunn49-k39M5',
      description: "",
      tech: "postgres + nodejs + react",
      github: "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/art/Vicious%20Summer%20skull.png",
      buttonName:'View Drawing'
    },
  ];

  return (
    <Box className="App">
      <Button className='title' position='absolute' right='10' top='10' width='fit-content' px='2' border='2px solid black' bgColor='#1CBCFF90'>View Resume</Button>
      <Box mx="7.5%" pt= '30%' my="7.5%">
        <Box textAlign='center'>
   
           <Text fontSize={["4xl","2xl"]} className="title"  >
            <Highlight
              query="Rachel Taskale"
              styles={{
                px: "1",
                py: "1",
                bg: "orange.200",
                color: "black",
                borderRadius: "md",
                // border: "2px solid black",
              }}
            >
              Rachel Taskale is a developer + designer based out of New York.
            </Highlight>
            </Text>
            <Text>In her free time, you can find her traveling, drawing,</Text>

            </Box>          
        <Spacer minHeight="200px" />
          <Wrap spacing="50px" display="flex" justify='center'>
            {projects.map((item) => (
              <CustomCard
                title={item.title}
                subtitle={item.subtitle}
                img={item.img}
                description={item.description}
                tech={item.tech}
                github={item.github}
                buttonName = {item.buttonName}
              />
            ))}
          </Wrap>
          <Box>
            <Divider width='full'/>
              <Text className="title" fontSize='2xl' mt='100px'>About Rachel</Text>
              <Text className="subtitle">ssss</Text>
          </Box>
      
      </Box>
      
    </Box>
  );
}

export default App;
