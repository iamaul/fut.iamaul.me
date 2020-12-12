import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <>
            <Box 
                margin="0 auto"
                maxWidth={800}
                transition="0.4s ease-out"
            >
                <Header />
                <Box margin="8">
                    <Nav />
                    <Box as="main" marginY={22}>
                        {children}
                    </Box>
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default Layout;
