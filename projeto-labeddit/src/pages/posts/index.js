import { PostStyledPage } from "./styled"
import line from "../../images/line.png"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants"
import axios from "axios"

export const PostsPage = () => {

    const [posts, setPosts] = useState([])
    const[createPost,setCreatePost] = useState('')
    const [contentPost, setContentPost] = useState('')

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
                minlength="50" maxlength="255"
                value={contentPost}
                onChange={(e)=>setContentPost(e.target.value)}
                >
                
            </textarea>
            <button className="continuar"
                type="button"
                value="Continuar"
                onClick={postagem}>Postar
                
            </button>
            <img src={line} alt="line"></img>
            {posts.map((post)=>{
                return(
                    <>
                    <p>{post.creatorNickName}</p>
                    <p>{post.content}</p>
                    </>
                )
            })}

        
            
            
          
        </PostStyledPage>
    )

}