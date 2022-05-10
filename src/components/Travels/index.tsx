import { Box, Flex, Grid, GridItem, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Travels() {

    const isLargeScreen = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true
      })

    return (
        <>
        {isLargeScreen && (<Flex 
            as="section"
            w="100%"
            maxWidth={1440}
            m="0 auto"

            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px="140"
            mt="7.125rem"
        >
            
            <Box>
            <Image m="0 auto" src="/images/icons/cocktail.svg"></Image>
            <Text
                fontSize="24"
                fontWeight="semibold"
                color="dark.htext"
                mt="6"
            >vida noturna</Text>
            </Box>
            <Box>
            <Image m="0 auto" src="/images/icons/surf.svg"></Image>
            <Text
                fontSize="24"
                fontWeight="semibold"
                color="dark.htext"
                mt="6"
            >praia</Text>
            </Box>
            <Box>
            <Image m="0 auto" src="/images/icons/building.svg"></Image>
            <Text
                fontSize="24"
                fontWeight="semibold"
                color="dark.htext"
                mt="6"
            >moderno</Text>
            </Box>
            <Box>
            <Image m="0 auto" src="/images/icons/museum.svg"></Image>
            <Text
                fontSize="24"
                fontWeight="semibold"
                color="dark.htext"
                mt="6"
            >clássico</Text>
            </Box>
            <Box>
            <Image m="0 auto" src="/images/icons/earth.svg"></Image>
            <Text
                fontSize="24"
                fontWeight="semibold"
                color="dark.htext"
                mt="6"
            >e mais...</Text>
            </Box>
        </Flex>)}
        
        {!isLargeScreen && (<Grid 
            h="275px"
            templateRows="repeat(1, 1fr 1fr)"
            templateColumns='repeat(2, 1fr)'
            gap={4}
            m="0 auto"
            mt="36px"
        >
            <GridItem
                display="flex"
                alignItems="center"
                justifyContent="left"
            >
                <Image w="8px" src="/images/ellipse.svg" mr="8px"></Image>
                <Text 
                    color="dark.htext" 
                    fontSize="18px"
                    fontWeight="500"
                >vida noturna</Text>
            </GridItem>
            <GridItem
                display="flex"
                alignItems="center"
                justifyContent="right"
            >
                <Image w="8px" src="/images/ellipse.svg" mr="8px"></Image>
                <Text 
                    color="dark.htext" 
                    fontSize="18px"
                    fontWeight="500"
                >praia</Text>
            </GridItem>
            <GridItem
                display="flex"
                alignItems="center"
                justifyContent="left"
            >
                <Image w="8px" src="/images/ellipse.svg" mr="8px"></Image>
                <Text 
                    color="dark.htext" 
                    fontSize="18px"
                    fontWeight="500"
                >moderno</Text>
            </GridItem>
            <GridItem
                display="flex"
                alignItems="center"
                justifyContent="right"
            >
                <Image w="8px" src="/images/ellipse.svg" mr="8px"></Image>
                <Text 
                    color="dark.htext" 
                    fontSize="18px"
                    fontWeight="500"
                >clássico</Text>
            </GridItem>
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="center"

              m="0 auto"
              rowSpan={1}
              colSpan={2}>
                <Image w="8px" src="/images/ellipse.svg" mr="8px"></Image>
                <Text 
                    color="dark.htext" 
                    fontSize="18px"
                    fontWeight="500"
                >e mais...</Text>
            </GridItem>
        </Grid>)}
        </>
    );
}