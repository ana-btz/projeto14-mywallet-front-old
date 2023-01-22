import StyledScreen from "../../components/StyledScreen";
import StyledLogo from "../../components/StyledLogo";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth"
import { useState } from "react";

export default function LoginPage() {
    const [inputsObj, setInputsObj] = useState({ email: "", senha: "" });
    const navigate = useNavigate();

    console.log(inputsObj);

    function handleInput(e) {
        setInputsObj({ ...inputsObj, [e.target.name]: e.target.value });
    }

    function handleLogin(e) {
        e.preventDefault();

        apiAuth.login(inputsObj)
            .then(res => {
                console.log(res.data);
                navigate("/home")
            })
            .catch(err => {
                console.log(err.response.data)
                alert.log(err.response.data.message)
            });
    }

    return (
        <StyledScreen>
            <Container>
                <StyledLogo>MyWallet</StyledLogo>
                <form onSubmit={handleLogin}>
                    <StyledInput
                        value={inputsObj.email}
                        name="email"
                        type="email"
                        required
                        onChange={handleInput}
                        placeholder="E-mail"
                    />
                    <StyledInput
                        value={inputsObj.senha}
                        name="senha"
                        type="password"
                        required
                        onChange={handleInput}
                        placeholder="Senha"
                    />
                    <StyledButton type="submit">Entrar</StyledButton>
                </form>
                <StyledLink to="/cadastro">
                    Primeira vez? Cadastre-se!
                </StyledLink>
            </Container>
        </StyledScreen>
    );
}
