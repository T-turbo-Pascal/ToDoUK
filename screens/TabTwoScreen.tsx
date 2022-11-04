import {
    Box,
    FlatList,
    Heading,
    Avatar,
    HStack,
    VStack,
    Center,
    Spacer,
    INativebaseConfig,
    NativeBaseProvider,
    ScrollView
} from "native-base";
import {StrictMode} from "react"
import { Text } from '../components/Themed';

const config: INativebaseConfig = {
    strictMode: 'warn',
};

const Pondelok = () => {
    const asd = [{
        id: "1",
        fullName: "Peráček",
        timeStamp: "14:50 - 16:20",
        recentText: "Obchodné právo                        ",
        place:'M7-M9',
        avatarUrl: "https://phonoteka.org/uploads/posts/2021-04/1618525099_53-phonoteka_org-p-fon-sploshnoi-tsvet-55.jpg"
    }];
    return <Box>
            <Heading fontSize="xl" p="4" pb="3" >
            <Text>
                Pondelok
            </Text>
        </Heading>
        <StrictMode/>
        <Center style={{flex: 1}}>
        <FlatList data={asd} renderItem={({
                                               item
                                           }) => <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.500"
        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar size="48px" source={{
                    uri: item.avatarUrl
                }} />
                <VStack>
                    <Text>
                        {item.fullName}
                    </Text>
                    <Text>
                        {item.recentText}
                    </Text>
                    <Text>
                        {item.place}
                    </Text>
                </VStack>
                <Spacer/>
                <Text>
                    {item.timeStamp}
                </Text>
            </HStack>
        </Box>} keyExtractor={item => item.id}></FlatList>
        </Center>
    </Box>;
};

const Stvrtok = () => {
    const asdaa = [{
        id: "2",
        fullName: "Krajčík",
        timeStamp: "14:50 - 16:20",
        recentText: "Výpočtová technika",
        place: 'A16',
        avatarUrl: "https://phonoteka.org/uploads/posts/2021-04/1618525050_27-phonoteka_org-p-fon-sploshnoi-tsvet-28.jpg"
    }, {
        id: "3",
        fullName: "Žalkovičová",
        timeStamp: "16:30 - 18:00",
        recentText: "Anglický jazyk pre manažérov",
        place: 'A16',
        avatarUrl: "https://phonoteka.org/uploads/posts/2021-04/1618525040_9-phonoteka_org-p-fon-sploshnoi-tsvet-9.png"
    }, {
        id: "4",
        fullName: "Ballová",
        timeStamp: "18:10 - 19:40 ",
        recentText: "Matematika",
        place: 'M8 + repetenti',
        avatarUrl: "https://phonoteka.org/uploads/posts/2021-04/1618525062_40-phonoteka_org-p-fon-sploshnoi-tsvet-42.png"
    }];
    return <Box>
        <Heading fontSize="xl" p="4" pb="3">
            <Text>
                Štvrtok
            </Text>
        </Heading>
        <StrictMode/>
        <Center>
        <FlatList data={asdaa} renderItem={({
                                               item
                                           }) => <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar size="48px" source={{
                    uri: item.avatarUrl
                }} />
                <VStack>
                    <Text>
                        {item.fullName}
                    </Text>
                    <Text>
                        {item.recentText}
                    </Text>
                    <Text>
                        {item.place}
                    </Text>
                </VStack>
                <Spacer />
                <Text>
                    {item.timeStamp}
                </Text>
            </HStack>
        </Box>} keyExtractor={item => item.id} />
        </Center>
    </Box>;
};

const Piatok = () => {
    const daasdaataii = [{
        id: "5",
        fullName: "Papula",
        timeStamp: "12:20 - 13:50",
        recentText: "Manažérska ekonomika",
        place: 'M8',
        avatarUrl: "https://phonoteka.org/uploads/posts/2021-04/1618525009_3-phonoteka_org-p-fon-sploshnoi-tsvet-3.jpg"
    }, {
        id: "6",
        fullName: "Jantová",
        timeStamp: "14:00 - 15:30",
        recentText: "Marketing                                 ",
        place: 'M8',
        avatarUrl: "https://phonoteka.org/uploads/posts/2021-04/1618525020_14-phonoteka_org-p-fon-sploshnoi-tsvet-15.jpg"
    }, {
        id: "7",
        fullName: "Strážovská",
        timeStamp: "15:40 - 17:10",
        recentText: "Manažment",
        place: 'M8',
        avatarUrl: "https://phonoteka.org/uploads/posts/2021-04/1618525113_57-phonoteka_org-p-fon-sploshnoi-tsvet-60.jpg"
    }
    ];
    return <Box>
        <Heading fontSize="xl" p="4" pb="3">
            <Text>
                Piatok
            </Text>
        </Heading>
        <StrictMode/>
        <Center>
        <FlatList data={daasdaataii} renderItem={({item}) => <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar size="48px" source={{
                    uri: item.avatarUrl
                }} />
                <VStack>
                    <Text>
                        {item.fullName}
                    </Text>
                    <Text>
                        {item.recentText}
                    </Text>
                    <Text>
                        {item.place}
                    </Text>
                </VStack>
                <Spacer />
                <Text>
                    {item.timeStamp}
                </Text>

            </HStack>
        </Box>} keyExtractor={item => item.id}>
        </FlatList>
        </Center>
    </Box>;
};

export default function ProfileSceen() {
    return (
        <NativeBaseProvider config={config}>
                <ScrollView>
                    <Pondelok/>
                    <Stvrtok/>
                    <Piatok/>
                </ScrollView>
        </NativeBaseProvider>
    );
};

