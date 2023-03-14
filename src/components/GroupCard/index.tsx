import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & { //fazendo isso o GoupCard herdara caracteristicas do TouchableOpacity
    title: string
}
export function GroupCard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    )
}