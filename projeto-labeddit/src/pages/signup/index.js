import react, {useState} from "react"
import { SignupStyled } from "./styled"

export const SignupPage = () => {

    const [senha, setSenha] = useState("")
    const [email,setEmail] = useState("")
    const [apelido,setApelido] = useState("")

const sendForm =()=>{
    
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
                        onChange={(e)=>setApelido(e.target.value)} />
                        <input name="senha"
                        type="text" 
                        value={senha}
                        placeholder="E-mail"
                        onChange={(e)=>setSenha(e.target.value)} />
                        <input name="email"
                        type="text"
                        value={email}
                        placeholder="Senha"
                        onChange={(e)=>setEmail(e.target.value)} />

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