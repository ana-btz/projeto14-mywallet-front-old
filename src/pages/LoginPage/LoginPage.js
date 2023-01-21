import StyledScreen from "../../components/StyledScreen";
import StyledLogo from "../../components/StyledLogo";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";
import { Container } from "./styles";

export default function LoginPage() {
    return (
        <StyledScreen>
            <Container>
                <StyledLogo>MyWallet</StyledLogo>
                <StyledInput
                    placeholder="E-mail"
                />
                <StyledInput
                    placeholder="Senha"
                />
                <StyledButton>Entrar</StyledButton>
                <StyledLink>Primeira vez? Cadastre-se!</StyledLink>
            </Container>
        </StyledScreen>
    );
}
