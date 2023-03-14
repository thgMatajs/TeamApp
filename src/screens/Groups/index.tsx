import { Header } from '../../components/Header';
import { HighLight } from '../../components/HighLight';
import { GroupCard } from '../../components/GroupCard';


import { Container } from './styles';


export function Groups() {
    return (
        <Container>
            <Header />
            <HighLight
                title='Dominando a linguagem'
                subTitle='mataJS' />
            <GroupCard title='Galera do brilho' />
        </Container>
    );
}
