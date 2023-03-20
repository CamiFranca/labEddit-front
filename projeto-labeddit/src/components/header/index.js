import { goToLoginPage} from "../../routes/coordinator"
import { HeaderStyled } from "./styled"
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import symbol from "../../images/symbol.png"


export const Header = () => {

    const params = useParams()

    const navigate = useNavigate()
    const local = useLocation()

    const buttonHeader = () => {

        switch (local.pathname) {
            case "/":
                return
                <div className="void">
                    
                </div>
            case "/signup":
                return (
              
                    <div className='all-header'>
                        <div className='void'>

                        </div>

                        <div className='image'>
                            <img src={symbol} alt="brand labeddit"></img>
                        </div>

                        <div className='button'>
                            <a onClick={() => goToLoginPage(navigate)}><h3>Logout</h3></a>
                        </div>

                    </div>
              
                )

                case "/posts":
                    return (
                        
                        <div className='all-header'>
                            <div className='void'>
    
                            </div>
    
                            <div className='image'>
                                <img src={symbol} alt="brand labeddit"></img>
                            </div>
                            
                            <div className='button'>
                                <a onClick={() => goToLoginPage(navigate)}><h2>Logout</h2></a>
                            </div>
                        </div>
                    )

            case "/comments/id":
                return (
                    <div className='all-header'>
                        <div className='void'>

                        </div>
                        <div className='image'>
                            <img src={symbol} alt="brand labeddit"></img>
                        </div>

                        <div className='button'>
                            <button onClick={() => goToLoginPage(navigate)}><h2>Logout</h2></button>
                        </div>
                    </div>
                )

            default:
                return (
                    <div className='button'>
                        <button onClick={() => goToLoginPage(navigate)}><h2> Voltar para página inicial</h2></button>
                    </div>
                )
        }
    }
    return (
        <HeaderStyled>
            {buttonHeader()}
        </HeaderStyled>
    )

}

export default Header


