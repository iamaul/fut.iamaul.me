import { 
    Stack, 
    Heading, 
    Box, 
    Image, 
    Flex,
    Button
} from '@chakra-ui/react';

import Link from 'next/link';

const Page404 = () => {
    return (
        <>
            <Flex
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                direction={{ base: "column-reverse", md: "row" }}
                minH="70vh"
                px={8}
                mb={16}
            >
                <Stack
                    spacing={4}
                    w={{ base: "80%", md: "40%" }}
                    align={["center", "center", "flex-start", "flex-start"]}
                >
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        color="primary.800"
                        textAlign={["center", "center", "left", "left"]}
                    >
                        Page 404
                    </Heading>
                    <Heading
                        as="h2"
                        size="md"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={["center", "center", "left", "left"]}
                    >
                        The page you requested cannot be found!
                    </Heading>
                    <Link href="/" passHref>
                        <Button
                            borderRadius="8px"
                            py="4"
                            px="4"
                            lineHeight="1"
                            size="md"
                        >
                            Go back
                        </Button>
                    </Link>
                </Stack>
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                    <Image src="https://i.ibb.co/Xzfvy99/Empty-amico.png" />
                </Box>
            </Flex>
        </>
    )
}

export default Page404;
