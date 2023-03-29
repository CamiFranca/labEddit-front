import { PostStyledPage } from "./styled"
import line from "../../images/line.png"


    useEffect(() => {

        getPosts()

    }, [])

   

    const getPosts = () => {

    const token = window.localStorage.getItem('token')

        axios.get(`${BASE_URL}/posts`,{
            headers :{
                'Authorization': token
            }
        })

        .then((res)=>{
            setPosts(res.data)
            console.log(res)
        })

        .catch((err)=>{
            console.log(err)
        }) 
        


    }

    const input = {
        "content" : contentPost
    }

    const postagem = () => {

        const token = window.localStorage.getItem('token')
    
            axios.post(`${BASE_URL}/posts`,input,{
                headers :{
                    'Authorization': token
                }
            })
    
            .then((res)=>{
                setCreatePost(res.data)
                window.location.reload()
            })
    
            .catch((err)=>{
                console.log(err)
            }) 
            
    
    
        }
    //no return precisa passar um map por post pra poder renderizar um por um na tela
    return (
        <PostStyledPage>
            <textarea name='content'
                placeholder='Escreva seu post...'

            </textarea>
            <button className="postar"
                type="button"

        </PostStyledPage>
    )

}