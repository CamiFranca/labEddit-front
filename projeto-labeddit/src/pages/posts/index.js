import { PostStyledPage } from "./styled"
import line from "../../images/line.png"

export const PostsPage = () => {


    return (
        <PostStyledPage>
            <textarea name='content'
                placeholder='Escreva seu post...'
                minlength="50" maxlength="255">
            </textarea>
            <button className="continuar"
                type="button"
                value="Continuar">Postar
            </button>
            <img src={line} alt="line"></img>
            <textarea name='comment'
                minlength="50" maxlength="255">
            </textarea>
        </PostStyledPage>
    )

}