import { Box, Flex, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner(){

    const isLargeScreen = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true
      })

    return (

        
        <Flex
        m="0 auto"
        maxWidth={[375, 1440]}
        >
            <Image boxSize={[375, 1440]} height={[163, 335]} objectFit='cover' src="/images/background.jpg"></Image>
            <Text 
                position="absolute"
                ml={["16px", "140px"]}
                mt={["28px", "20"]}
                fontSize={["20px", "36px"]}
                w="26.625rem"
                color="light.htext"
            >5 Continentes, <br />infinitas possibilidades.</Text>
            <Text
                position="absolute"
                ml={["16px", "140px"]}
                mt={["94px", "52"]}
                w={["20.81rem", "32.75rem"]}
                fontSize={["14px", "20px"]}
                color="light.info"    
            >Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            {isLargeScreen && (<Box 
                position="absolute" 
                ml="870"
                mt="76"
                ><Image src="/images/airplane.svg"></Image>
            </Box>)}
            
        </Flex>
    );
}