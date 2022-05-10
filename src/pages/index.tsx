import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { NextHead } from "../components/NextHead";
import { Separator } from "../components/Separator";
import { Slider } from "../components/Slider";

import { Travels } from "../components/Travels";

import image from '../utils/image'


export default function Home() {
  return (
    <>
    <NextHead title="Home" />

    <Flex
      as="main"
      direction="column" 
      h="100vh" maxWidth={["375px", "1440px"]} 
      m="0 auto" 
      >
        <Banner />
        <Travels />
        <Separator />
        
            <Text
              mt={["24px", "3.25rem"]}
              color="dark.htext"
              fontSize={["20px", "36"]}
              fontWeight="500"
              textAlign="center"
            >
                  Vamos nessa?<br />
                  Então escolha seu continente
            </Text>
          <Box mb="5">
            <Center
            id="slider"
            mx="auto"
            mt={['5', '20']}
            mb={['5', '7']}
            w="100%"
            maxW="1240px"
            h={['250px', '450px']}
          >
            <Slider content={image.slider} />
          </Center>
        </Box>
    </Flex>
    </>
  )
}
