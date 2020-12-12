import api from '../utils/api';
import { InferGetServerSidePropsType } from 'next';
import { 
    Container, 
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    SimpleGrid,
    Image,
    StatGroup,
    Box
} from '@chakra-ui/react';

type PlayersData = {
    count: Number;
    count_total: Number;
    page: Number;
    page_total: Number;
    items_per_page: Number;
    items: [];
}

export const getServerSideProps = async () => {
    const res = await api.get('/players');
    const players: PlayersData = await res.data;

    return {
        props: {
            players
        }
    }
}

const Players = ({ players }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(players);
    return (
        <>
            <Container>
                <SimpleGrid columns={2} spacing="3">
                    {players.items.map((data: any) => (
                        <StatGroup
                            key={data.id} 
                            p="3" 
                            marginBottom="2" 
                            shadow="sm" 
                            borderWidth="1px"
                            overflow="hidden"
                        >
                            <Box>
                                <Image
                                    borderRadius="full"
                                    src="https://i.ibb.co/X4zvYxX/Soccer-bro.png"
                                    alt="Segun Adebayo"
                                />
                            </Box>
                            <Stat>
                                <StatLabel fontWeight="bold">{data.name}</StatLabel>
                                <StatNumber fontWeight="sm">OVR {data.rating}</StatNumber>
                                <StatHelpText>{data.position}</StatHelpText>
                            </Stat>
                        </StatGroup>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}

export default Players;
