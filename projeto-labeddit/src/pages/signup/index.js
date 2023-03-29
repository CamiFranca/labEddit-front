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
    const [password, setPassword] = useState("")

    // useEffect(() => {
    //     // Verifica se o usuário já está logado
    //     const token = localStorage.getItem("token")
    //     if (token) {
    //       setToken(true)
    //       goToPostsPage(navigate)
    //     }
    //   }, [])

    const input = {
        "nickName": apelido,
        "email": email,
        "password": password

    }
    const signup = () => {

        axios.post(`${BASE_URL}/users/signup`, input)

            .then((res) => {
                localStorage.setItem("token", res.data.token)
                goToPostsPage(navigate) 
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        signup()
    }

    return (
        <SignupStyled>
            <div className="formLoginPage">

                <h1 className="title">Olá, boas vindas ao <br /> LabEddit ;)</h1>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input name="apelido"
                            type="text"
                            value={apelido}
                            placeholder="Apelido"
                            onChange={(e) => setApelido(e.target.value)} />
                        <input name="senha"
                            type="text"
                            value={email}
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)} />
                        <input name="email"
                            type="text"
                            value={password}
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)} />

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
                    <button className="continuar"
                        type="submit"
                        value="Continuar">
                        Cadastrar</button>
                </form>


            </div>
        </SignupStyled>
    )


}