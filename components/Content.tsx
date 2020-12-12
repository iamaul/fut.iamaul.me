import { 
    Stack, 
    Heading, 
    Box, 
    Image, 
    Flex,
    Button
} from '@chakra-ui/react';

import Link from 'next/link';

const Content = () => {
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
                        fut.iamaul.me
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
                        List of players FIFA Ultimate Team.
                    </Heading>
                    <Link href="/players">
                        <Button
                            borderRadius="8px"
                            py="4"
                            px="4"
                            lineHeight="1"
                            size="md"
                        >
                            Let's find out!
                        </Button>
                    </Link>
                </Stack>
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                    <Image src="https://i.ibb.co/X4zvYxX/Soccer-bro.png" />
                </Box>
            </Flex>
        </>
    )
}

export default Content;
