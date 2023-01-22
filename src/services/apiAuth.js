import axios from "axios";

// Todas as autenticações (login/cadastro) vêm aqui

const BASE_URL = "URL da API";

function login(body) {
    const promise = axios.post(`${BASE_URL}/`, body);
    return promise;
}

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/cadastro`, body);
    return promise;
}

const apiAuth = { login, signUp };
export default apiAuth;