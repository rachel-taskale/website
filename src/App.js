import logo from "./logo.svg";
import "./App.css";

import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  SimpleGrid,
  Grid,
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
  Input,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardBodyProps,
  CardFooter,
  Heading,
  Textarea,
  Highlight,
  LinkOverlay,
  Avatar,
} from "@chakra-ui/react";

const CustomCard = (props) => {
  return (
    <Card
      maxW={["xl", "lg"]}
      minH={["xl", "lg"]}
      variant="outline"
      border="2px solid black"
      borderRadius="xl"
    >
      <CardBody>
        <Image
          width="500px"
          height="344px"
          alt={props.title}
          src={props.img}
          borderRadius="lg"
        />
        <Stack spacing="3">
          <Heading>
            <Text className="header" fontWeight="extrabold" fontSize="2xl">
              {props.title}
            </Text>
            <Text className="subtitle" color="#A259FF" fontSize="sm">
              {props.subtitle}
            </Text>
          </Heading>
        </Stack>
      </CardBody>

      <CardFooter>
        <HStack width="full">
          <Spacer />
          <Link href={props.github} target="_blank">
            <Button
              className="subtitle"
              variant="outline"
              right={0}
              border="2px solid black"
              bgColor="#03D18290"
              color="black"
              _hover={{ bgColor: "#03D182" }}
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
      img: "https://drive.google.com/uc?id=185x1ykc6KPolb-tKm5L6nVYi-E2fI67f",
      description:
        "Research and development of features centered around making the world of finance more equitable for women investors",
      tech: "postgres + nodejs + react",
      github:
        "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/logos/metaworld-1000x1000.svg",
      buttonName: "Read Case Study",
    },
    {
      title: "Metaworld",
      subtitle: "Design",
      // https://drive.google.com/file/d/1s2LDGXSoHpx0z8SsouJvbQiolJ9jCvNj/view?usp=sharing
      img: "https://drive.google.com/uc?id=1s2LDGXSoHpx0z8SsouJvbQiolJ9jCvNj",
      description: "Logo designed for Farama Foundation.",
      tech: "postgres + nodejs + react",
      github:
        "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/logos/metaworld-1000x1000.svg",
      buttonName: "Read Case Study",
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
      buttonName: "Read Case Study",
    },
    {
      title: "Kestrel",
      subtitle: "Design",
      // https://drive.google.com/file/d/1qvSAU6rF6F5pau1QoAJoL8EUv_YA99fg/view?usp=sharing
      img: "https://drive.google.com/uc?id=1qvSAU6rF6F5pau1QoAJoL8EUv_YA99fg",
      description:
        "Rebranding logo design for an agricultural startup seeking to easy the process of loans for small farmers",
      tech: "postgres + nodejs + react",
      github:
        "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/logos/Kestrel%20Final.svg",
      buttonName: "Read Case Study",
    },
    {
      title: "High on Self Esteem",
      subtitle: "Art",
      // https://drive.google.com/file/d/1zZe-q6GmuoQbeDoklFxRijoo800XaDRW/view?usp=sharing
      img: "https://drive.google.com/uc?id=1zZe-q6GmuoQbeDoklFxRijoo800XaDRW",
      description: "",
      tech: "postgres + nodejs + react",
      github:
        "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/art/Vicious%20Summer%20faces.png",
      buttonName: "View Drawing",
    },
    {
      title: "Broken Record Love",
      subtitle: "Art",
      img: "https://drive.google.com/uc?id=1mq55T5MfOGa_-AboDu2YEunn49-k39M5",
      description: "",
      tech: "postgres + nodejs + react",
      github:
        "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/art/Vicious%20Summer%20skull.png",
      buttonName: "View Drawing",
    },
  ];

  return (
    <Box className="App">
      <Button
        className="subtitle"
        position="absolute"
        right="10"
        top="10"
        width="fit-content"
        px="2"
        border="2px solid black"
        bgColor="#03D18290"
        _hover={{ bgColor: "#03D182" }}
        fontSize={{ 'sm':"lg", 'xl': "sm"}}
      >
        View Resume
      </Button>
      <Box mx="7.5%" pt="30%" my={{'sm':'45%', 'lg':"7.5%"}}>
        <Box textAlign="left">
          <Text
            fontSize={{ sm: "4xl", xl: "2xl" }}
            className="header"
            py="1"
            fontWeight="extrabold"
          >
            <Highlight
              query="Rachel Taskale"
              styles={{
                px: "1",
                py: ".5",
                bg: "orange.200",
                color: "black",
                borderRadius: "md",
                border: "2px solid black",
              }}
            >
              Rachel Taskale, developer + designer based out of New York.
            </Highlight>
          </Text>
          <Text className="subtitle">
            I build accessible, inclusive products and experiences for the web
          </Text>
        </Box>
        <Spacer minHeight="200px" />
        {/* <HStack mb="100px">
          <Text className="header-2"> Work</Text>
          <Divider orientation="horizontal" colorScheme="#000000" wei />
        </HStack> */}
        <Wrap spacingX="20px" spacingY="70px" display="flex" justify="center">
          {projects.map((item) => (
            <CustomCard
              title={item.title}
              subtitle={item.subtitle}
              img={item.img}
              description={item.description}
              tech={item.tech}
              github={item.github}
              buttonName={item.buttonName}
            />
          ))}
        </Wrap >
        <Box>
          <Divider width="full" />
          <Spacer h="200px" />
          <Wrap
            justify="center"
            alignItems="left"
            textAlign="left"
            spacing="20px"
          >
            <Box
              minW={["xl", "lg"]}
              h="fit-content"
              textAlign="left"
              display="flex"
            >
              <Avatar size='fit-content' />
              
            </Box>
            <VStack
              display="flex"
              alightContent="left"
              maxW={["xl", "lg"]}
              h="fit-content"
              width="full"
              // border="1px solid black"
            >
              <Box>
                <Text
                  className="header-2"
                  fontWeight="extrabold"
                  fontSize="lg"
                  mt="50px"
                >
                  About Me
                </Text>
                <Text className="body-text" mt="10px">
                  I work as a Software Engineer at Broadridge Financial
                  Solutions.

                  When I'm not at my computer, I'm usually drawing, hanging out
                  with friends in the city, or planning my next trip.
                  <Spacer h="10px"></Spacer>
                  <VStack>
                  <Button>
                    Instagram
                  </Button>
                  <Button>

                  </Button>
                  </VStack>
                  Hope you enjoyed my portfolio :)
                </Text>
              </Box>
            </VStack>
          </Wrap>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
