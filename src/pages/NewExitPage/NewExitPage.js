import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledScreen from "../../components/StyledScreen";
import StyledTextTop from "../../components/StyledTextTop";
import { Container } from "./styles";

export default function NewExitPage() {
    return (
        <StyledScreen>
            <Container>
                <StyledTextTop>Nova Saída</StyledTextTop>
                <StyledInput placeholder="Valor"></StyledInput>
                <StyledInput placeholder="Descrição"></StyledInput>
                <StyledButton>Salvar saída</StyledButton>
            </Container>
        </StyledScreen>
    );
}
