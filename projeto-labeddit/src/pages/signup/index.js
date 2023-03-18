import { SignupStyled } from "./styled"
import { useState, useEffect } from "react"
import { goToLoginPage, goToPostsPage } from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from "../../constants"



export const SignupPage = () => {



    const navigate = useNavigate()


    const [apelido, setApelido] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [token, setToken] = useState("")

    useEffect(() => {

        signup()

    }, [])

    const input = {
        nickName: apelido,
        email: email,
        senha: senha

    }
    const signup = () => {

        axios.post(`${BASE_URL}/users/login`, input)

            .then((res) => {
                setToken(res.data.token)
                localStorage.setItem("token", token)
                token ? goToPostsPage(navigate) : goToLoginPage(navigate)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <SignupStyled>
            <div className="formLoginPage">

                <h1 className="title">Olá, boas vindas ao <br /> LabEddit ;)</h1>

                <form className="form">
                    <div className="inputs">
                        <input name="apelido"
                            type="text"
                            value={apelido}
                            placeholder="Apelido"
                            onChange={(e) => setApelido(e.target.value)} />
                        <input name="senha"
                            type="text"
                            value={senha}
                            placeholder="E-mail"
                            onChange={(e) => setSenha(e.target.value)} />
                        <input name="email"
                            type="text"
                            value={email}
                            placeholder="Senha"
                            onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="contract">
                        <label>
                            <input type="checkbox" name="checkbox" />
                        </label>
                        <p>Ao continuar, você concorda com o nosso
                            <a href="https://www.homehost.com.br/"> Contrato de <br />usuário </a>
                            e nossa <a href="https://www.homehost.com.br/">Politica de privacidade</a></p>
                        <p>Eu concordo em receber emails sobre coisas legais <br /> no labEddit</p>
                    </div>
                    <button className="continuar" type="submit" value="Continuar">Cadastrar</button>
                </form>


            </div>
        </SignupStyled>
    )


}