import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";
import { groupCreate } from "../../storage/group/groupCreate";

export function NewGroup() {

    const [group, setGroup] = useState('');
    const navigation = useNavigation();

    async function handleNavigationToPlayers() {
        try {
            await groupCreate(group)
        navigation.navigate('players', { group })
        } catch (error) {
            
        }
    }

    return (
        <Container>

            <Header showBackButton />

            <Content>

                <Icon />

                <HighLight
                    title="Novo Grupo"
                    subTitle="Criar um novo grupo"
                />

                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup} />

                <Button
                    title="Criar novo Grupo"
                    style={{ marginTop: 16 }}
                    onPress={handleNavigationToPlayers}
                />

            </Content>

        </Container>
    )
}