import { MdInfoOutline } from "react-icons/md";
import { Box, Flex, Grid, GridItem, Heading, Icon, Image as ImageChakra, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { NextHead } from "../../components/NextHead";

import image from "../../utils/image";

export default function Continent() {

    const isLargeScreen = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true
      })

    return (
        <>
        <NextHead title="Europa" />
        <Flex
            as="main"
            direction="column" 
            h="100vh" maxWidth={["375px", "1440px"]} 
            m="0 auto"
        >
            
            {isLargeScreen ? 
                <ImageChakra 
                id="bannerContinent"
                w="100%"
                src={image.continent.banner.europe}
                ></ImageChakra>
                 : 
                <ImageChakra 
                id="bannerContinent"
                w="100%"
                src={image.continent.banner.europe2}
                ></ImageChakra>
            }

            <Heading
            position="absolute"
            fontSize={["28px", "48px"]}
            fontWeight="600"

            ml={["136px", "140px"]}
            mt={["56px", "369px"]}
            >Europa</Heading>

            <Grid
                templateRows="repeat(1, 1fr)"
                templateColumns='repeat(2, 1fr)'

                display="flex"
                alignItems="center"
                flexDirection={["column", "row"]}

                mt={["24px", "80px"]}
                px={["16px", "140px"]}
            >
                <GridItem>
                    <Text 
                    w={["343px", "600px"]}
                    fontSize={["14px", "24px"]}
                    fontWeight="400"
                    align="justify"

                    color="dark.htext"
                    >A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
                </GridItem>
                <GridItem>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"

                            w={["343px", "490px"]}
                            h={["59px", "99px"]}
                            ml={["0px", "70px"]}
                            mt={["16px", "0px"]}
                        >

                            <Text
                              as="span"
                              fontSize={["24px", "48px"]}
                              color="yellowtrip.100"
                              fontWeight="600"
                              textAlign={["left", "center"]}>50
                                <Text
                                fontSize={["18px", "24px"]}
                                color="dark.htext">países</Text>
                            </Text>

                            <Text
                              as="span"
                              fontSize={["24px", "48px"]}
                              color="yellowtrip.100"
                              fontWeight="600"
                              textAlign={["left", "center"]}>60
                                <Text
                                fontSize={["18px", "24px"]}
                                color="dark.htext">línguas</Text>
                            </Text>

                            <Text
                              as="div"
                              fontSize={["24px", "48px"]}
                              color="yellowtrip.100"
                              fontWeight="600"
                              textAlign={["left", "center"]}>27
                                <Text
                                as="span"
                                display="flex" 
                                alignItems="center"
                                fontSize={["18px", "24px"]}
                                color="dark.htext">cidades +100
                                    <Tooltip hasArrow label='Cidades mais visitadas neste continente!' bg='gray.300' color='black'>
                                        <Box
                                        >
                                        <Icon
                                        as={MdInfoOutline}
                                        color="dark.info"
                                        boxSize={["10px", "16px"]}
                                        ml="5px"/></Box>
                                    </Tooltip>
                                </Text>
                            </Text>
                            
                        </Box>
                </GridItem>
            </Grid>

            <Box
                px={["16px", "140px"]}
                mt={["32px", "80px"]}
            >
                <Text
                    fontSize={["24px", "36px"]}
                    fontWeight="500"
                    color="dark.htext"

                    mb={["20px", "40px"]}
                >Cidades +100</Text>
                <Flex 
                    justifyContent={["center", "normal"]}
                >
                <Grid
                    templateRows={["repeat(5, 1fr)", "repeat(2, 1fr)"]}
                    templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
                    gap="45px"

                    mb="35px"
                >
                    
                    {image.card.map((item) => (<GridItem>
                        <Box
                            w="256px"
                            h="279px"
                        >
                            <ImageChakra src={item.image}></ImageChakra>

                            <Grid
                                templateRows="repeat(2, 1fr)"
                                templateColumns='repeat(3, 1fr)'
                                gap={0}

                                pt="18px"
                                pb="25px"
                                pl="24px"
                                pr="38px"

                                mt="-3px"

                                h="109"
                                w="100%"

                                border="1px"
                                borderRadius="4px"
                                borderStyle="solid"
                                borderColor="yellowtrip.50"

                            >
                                <GridItem
                                    colSpan={2}
                                    rowSpan={1}
                                >
                                        <Text
                                            fontSize="20px"
                                            font-family='Barlow'
                                            fontWeight="600"
                                            color="dark.htext"
                                        >{item.city}</Text>
                                </GridItem>

                                <GridItem
                                    colSpan={1}
                                    rowSpan={2}
                                    w="100%"

                                    display="flex"
                                    alignItems="center"
                                    justifyContent="flex-end"
                                >
                                        <ImageChakra src={item.flag}></ImageChakra>
                                </GridItem>
                                
                                <GridItem
                                colSpan={2}
                                rowSpan={1}
                                w="100%"
                                pt="12px"
                                >
                                        <Text
                                            as="span"
                                            fontSize="16px"
                                            font-family='Barlow'
                                            fontWeight="500"
                                            color="dark.info"
                                        >{item.country}</Text>
                                </GridItem>
                            
                            </Grid>

                        </Box>
                    </GridItem>
                    ))}
                    
                </Grid>
                </Flex>
            </Box>
        </Flex>

        </>
    );
}