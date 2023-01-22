import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import NewEntryPage from "./pages/NewEntryPage/NewEntryPage";
import NewExitPage from "./pages/NewExitPage/NewExitPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/nova-entrada" element={<NewEntryPage />} />
                <Route path="/nova-saida" element={<NewExitPage />} />
            </Routes>
        </BrowserRouter>
    );
}