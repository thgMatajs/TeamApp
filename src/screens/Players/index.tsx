import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { Container } from "./styles";

export function Players() {
    return (
        <Container>

            <Header showBackButton />

            <HighLight
                title="Nome da turma"
                subTitle="Adicione a galera e separe os times"
            />
        </Container>
    )
}