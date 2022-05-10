import { Box, Flex, Image, Text} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {

    let isInternalLink = false;
    const router = useRouter();


    if (router.asPath != "/") {
        isInternalLink = true;
    }

    return(  
        <Flex
            as="header"
            w="100%"
            maxWidth={[375, 1440]}
            h={["50px", "100px"]}
            m="0 auto"

            display="flex"
            alignItems="center"
            justifyContent="center"
        >

            {isInternalLink && (<Box
                w="100%"
                position="absolute"
                maxWidth={[375, 1440]}

                display="flex"
                alignItems="center"
                pl={["16px", "140px"]} 
            >
                <Link href="/" passHref>
                 <Text
                    as="a"
                 >
                 <Image
                 w={["16px", "32px"]}
                 src="/images/arrow.svg">
                </Image>
                </Text>
                </Link>

            </Box>)}

            <Link href="/" passHref>
                <Text as="a">
                    <Image w={["81px", "184px"]} src="/images/logo.svg"></Image>
                </Text>
            </Link>
        </Flex>
    );
}