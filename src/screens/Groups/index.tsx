import { useState } from 'react';

import { Header } from '../../components/Header';
import { HighLight } from '../../components/HighLight';
import { GroupCard } from '../../components/GroupCard';

import { Container } from './styles';
import { FlatList } from 'react-native';


export function Groups() {
    const [groups, setGroups] =
        useState<string[]>(['Galera da Gentalha', 'Galera do Madruga']);

    return (
        <Container>
            <Header />

            <HighLight
                title='Dominando a linguagem'
                subTitle='mataJS' />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                    />
                )}
            />
        </Container>
    );
}
