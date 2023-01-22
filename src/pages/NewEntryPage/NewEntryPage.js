import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledScreen from "../../components/StyledScreen";
import StyledTextTop from "../../components/StyledTextTop";
import { Container } from "./styles";

export default function NewEntryPage() {
    const navigate = useNavigate();

    function handleNewEntry(e) {
        e.preventDefault();
        navigate("/home");
    }

    return (
        <StyledScreen>
            <Container>
                <form onSubmit={handleNewEntry}>
                    <StyledTextTop>Nova Entrada</StyledTextTop>
                    <StyledInput placeholder="Valor"></StyledInput>
                    <StyledInput placeholder="Descrição"></StyledInput>
                    <StyledButton>Salvar entrada</StyledButton>
                </form>
            </Container>
        </StyledScreen>
    );
}
