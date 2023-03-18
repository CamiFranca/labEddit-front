import { CommentStyledPage} from "../comments/styled"
import line from "../../images/line.png"

export const CommentsPage = () => {


    return (
        <CommentStyledPage>
            <textarea name='content'
            minlength="50" maxlength="255">
            </textarea>
            <textarea name='comment'
                minlength="50" maxlength="255" 
                placeholder="Adicionar comentário">  
            </textarea>
            <button className="continuar"
                type="button"
                value="Continuar">Responder
            </button>
            <img src={line} alt="line"></img>
        </CommentStyledPage>
    )

}
