import { Box } from "@chakra-ui/react";

export function Separator() {
    return (
        <Box 
                maxWidth={1440}
                m="0 auto"
                borderWidth={["1px", "2px"]}
                borderStyle="solid" 
                borderColor="dark.htext"
                w={["60px", "90px"]}
                mt={["36px", "20"]}
        ></Box>
    );
}