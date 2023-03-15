import { useState } from 'react';

import { Header } from '../../components/Header';
import { HighLight } from '../../components/HighLight';
import { GroupCard } from '../../components/GroupCard';
import { ListEmpty } from '../../components/ListEmpty';
import { Button } from '../../components/Button';

import { Container } from './styles';
import { FlatList } from 'react-native';


export function Groups() {
    const [groups, setGroups] =
        useState<string[]>([]);

    return (
        <Container>
            <Header />

            <HighLight
                title="Turmas"
                subTitle="jogue com a sua turma" />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Que tal cadastrar a sua primeira turma?"
                    />
                )}
            />

            <Button
                title="Criar nova turma"
                onPress={() => {
                    setGroups([...groups, 'Nova Turma']);
                }}
            />
        </Container>
    );
}
