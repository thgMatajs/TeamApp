import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {

    const [group, setGroup] = useState('');
    const navigation = useNavigation();

    async function handleNavigationToPlayers() {
        try {
            if (group.trim().length === 0) {
                return Alert.alert('Novo grupo', ' Informe o nome da turma.')
            }

            await groupCreate(group)
            navigation.navigate('players', { group })
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo grupo', error.message)
            } else {
                Alert.alert('Novo grupo', ' Nao foi possivel criar um novo grupo.')
            }
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