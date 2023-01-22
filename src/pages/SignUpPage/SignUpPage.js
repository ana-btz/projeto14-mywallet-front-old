import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import StyledLogo from "../../components/StyledLogo";
import StyledScreen from "../../components/StyledScreen";
import { Container } from "./styles";

export default function SignUpPage() {
    const navigate = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();
        navigate("/");
    }

    return (
        <StyledScreen>
            <Container>
                <StyledLogo>MayWallet</StyledLogo>
                <form onSubmit={handleSignUp}>
                    <StyledInput placeholder="Nome"></StyledInput>
                    <StyledInput placeholder="E-mail"></StyledInput>
                    <StyledInput placeholder="Senha"></StyledInput>
                    <StyledInput placeholder="Confirme a senha"></StyledInput>
                    <StyledButton>Cadastrar</StyledButton>
                </form>
                <StyledLink to="/">
                    Já tem uma conta? Entre agora!
                </StyledLink>
            </Container>
        </StyledScreen>
    );
}
