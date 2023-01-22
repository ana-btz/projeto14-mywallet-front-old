import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledScreen from "../../components/StyledScreen";
import StyledTextTop from "../../components/StyledTextTop";
import { Container } from "./styles";

export default function NewExitPage() {
    const navigate = useNavigate();

    function handleNewEntry(e) {
        e.preventDefault();
        navigate("/home");
    }

    return (
        <StyledScreen>
            <Container>
                <form onSubmit={handleNewEntry}>
                    <StyledTextTop>Nova Saída</StyledTextTop>
                    <StyledInput placeholder="Valor"></StyledInput>
                    <StyledInput placeholder="Descrição"></StyledInput>
                    <StyledButton>Salvar saída</StyledButton>
                </form>
            </Container>
        </StyledScreen>
    );
}
