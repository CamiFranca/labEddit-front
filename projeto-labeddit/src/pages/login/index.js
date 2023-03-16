import line from "../../images/line.png"
import brandLabeddit from "../../images/brandLabeddit.png"
import btnContinuar from "../../images/btnContinuar.png"
import { HomeStyled } from "./styled"
import react,{useState} from "react"

export const LoginPage = () => {

    const [emailLogin, setEmailLogin] = useState('')
    const [senhaLogin, setSenhaLogin] = useState('')
    return (

        <HomeStyled>
            <div className="formLoginPage">
                <div className="logo">
                    <img src={brandLabeddit} alt></img>
                    <span>O projeto de rede social da Labenu</span>
                </div>

                <form className="form">
                    <div className="inputs">
                        <input name="email" type="text" placeholder="E-mail" onChange={(e)=>setEmailLogin(e.target.value)} />
                        <input name="senha" type="text" placeholder="Senha" onChange={(e)=>setSenhaLogin(e.target.ariaValueMax)}/>
                    </div>

                    <button className="continuar" type="submit" value="Continuar">Continuar</button>
                    <img src={line} alt="line"></img>
                    <button className="conta" type="submit" value="CrieUmaConta">Crie uma conta</button>
                </form>
            </div>
        </HomeStyled>
    )

}