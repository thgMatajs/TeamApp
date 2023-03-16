import { useState } from "react";

import { FlatList } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { Input } from "../../components/Input";
import { ListEmpty } from "../../components/ListEmpty";
import { Playercard } from "../../components/PlayerCard";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Players() {
    const [team, setTeam] = useState('Time a')
    const [players, setPlayers] = useState([])
    return (
        <Container>

            <Header showBackButton />

            <HighLight
                title="Nome da turma"
                subTitle="Adicione a galera e separe os times"
            />

            <Form>
                <Input
                    placeholder="Nome da participante"
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon="add"
                />
            </Form>

            <HeaderList>
                <FlatList
                    data={["Time a", "Time b"]}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Playercard
                        name={item}
                        onRemove={() => { }}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Que tal adicionar um jogador?"
                    />
                )}
                contentContainerStyle={[
                    { paddingBottom: 56 },
                    players.length === 0 && { flex: 1 }
                ]}
            />

        </Container>
    )
}