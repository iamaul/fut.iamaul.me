import { Flex, Box } from "@chakra-ui/react";

import ThemeBtn from "./ThemeBtn";

const Nav = () => {
    return (
        <>
            <Flex as="nav" width="full" align="center">
                <Box marginLeft="auto">
                    <ThemeBtn />
                </Box>        
            </Flex>
        </>
    )
}

export default Nav;
