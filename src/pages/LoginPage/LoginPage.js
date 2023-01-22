import StyledScreen from "../../components/StyledScreen";
import StyledLogo from "../../components/StyledLogo";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        navigate("/home")
    }

    return (
        <StyledScreen>
            <Container>
                <StyledLogo>MyWallet</StyledLogo>
                <form onSubmit={handleLogin}>
                    <StyledInput
                        placeholder="E-mail"
                    />
                    <StyledInput
                        placeholder="Senha"
                    />
                    <StyledButton>Entrar</StyledButton>
                </form>
                <StyledLink to="/cadastro">
                    Primeira vez? Cadastre-se!
                </StyledLink>
            </Container>
        </StyledScreen>
    );
}
