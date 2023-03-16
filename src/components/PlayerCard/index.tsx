import { ButtonIcon } from "../ButtonIcon"
import { Container, Name, Icon } from "./styles"

type Props = {
    name: string
    onRemove: () => void
}
export function Playercard({ name, onRemove }: Props) {
    return (
        <Container>

            <Icon name='person' />

            <Name>
                {name}
            </Name>

            <ButtonIcon
                icon="close"
                type='SECUNDARY'
                onPress={onRemove}
            />

        </Container>
    )
}