import line from "../../images/line.png"
import brandLabeddit from "../../images/brandLabeddit.png"
import { HomeStyled } from "./styled"
import { useState, useEffect } from "react"
import { goToLoginPage, goToPostsPage, goToSignupPage } from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from "../../constants"
// import { useLocation } from 'react-router-dom'


export const LoginPage = () => {

    const [emailLogin, setEmailLogin] = useState('')
    const [senhaLogin, setSenhaLogin] = useState('')
    const [token, setToken] = useState('')

    const navigate = useNavigate()
    // const location = useLocation()

    const input = {
        "email": emailLogin,
        "password": senhaLogin
    }


    const login = () => {

        axios.post(`${BASE_URL}/users/login`, input)

            .then((res) => {
                setToken(res.data.token)
                window.localStorage.setItem("token", res.data.token)
                token ? goToPostsPage(navigate) : goToLoginPage(navigate)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login()
    }

    return (

        <HomeStyled>
            <div className="formLoginPage">
                <div className="logo">
                    <img src={brandLabeddit} alt="brand labeddit"></img>
                    <span>O projeto de rede social da Labenu</span>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input name="email"
                            type="email"
                            placeholder="E-mail"
                            value={emailLogin}
                            onChange={(e) => setEmailLogin(e.target.value)} />
                        <input name="senha"
                            type="text"
                            placeholder="Senha"
                            value={senhaLogin}
                            onChange={(e) => setSenhaLogin(e.target.value)} />
                        <button className="continuar"

                        >Continuar
                        </button>
                        <img src={line} alt="line"></img>
                    </div>
                    <button className="conta"
                        type="button"
                        value="CrieUmaConta"
                        onClick={() => goToSignupPage(navigate)}>Crie uma conta
                    </button>
                </form>
                <div className="end-button">

                </div>
            </div>
        </HomeStyled>
    )
 }

