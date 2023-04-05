import { PostStyledPage } from "./styled"
import line from "../../images/line.png"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants"
import axios from "axios"
// import line from "../../images/line.png"
import baloon from "../../images/baloon.png"
import downArrow from "../../images/downArrow.png"
import upArrow from "../../images/upArrow.png"
import { goToCommentsPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"



export const PostsPage = () => {

    const [posts, setPosts] = useState([])
    const [createPost, setCreatePost] = useState('')
    const [contentPost, setContentPost] = useState('')
    
    const navigate = useNavigate()

    useEffect(() => {

        getPosts()

    }, [])



    const getPosts = () => {

        const token = window.localStorage.getItem('token')

        axios.get(`${BASE_URL}/posts`, {
            headers: {
                'Authorization': token
            }
        })

            .then((res) => {
                setPosts(res.data)
                console.log(res)
            })

            .catch((err) => {
                console.log(err)
            })



    }

    const input = {
        "content": contentPost
    }

    const postagem = () => {

        const token = window.localStorage.getItem('token')

        axios.post(`${BASE_URL}/posts`, input, {
            headers: {
                'Authorization': token
            }
        })

            .then((res) => {
                setCreatePost(res.data)
                window.location.reload()
            })

            .catch((err) => {
                console.log(err)
            })



    }
    const likeOrDislike = (id, likeDislike) => {

        const input = {
            "like": likeDislike

        }
        const token = window.localStorage.getItem('token')

        axios.put(`${BASE_URL}/posts/${id}/like`, input, {
            headers: {
                'Authorization': token
            }

        })
            .then((res) => {
                console.log(res)
                getPosts()

            })

            .catch((err) => {
                console.log(err)

            })

    }
    //no return precisa passar um map por post pra poder renderizar um por um na tela
    return (
        <>
            <PostStyledPage>
                <textarea name='content'
                    placeholder='Escreva seu post...'
                    minlength="50" maxlength="255"
                    value={contentPost}
                    onChange={(e) => setContentPost(e.target.value)}
                >


                </textarea>
                <button className="postar"
                    type="button"
                    value="Continuar"
                    onClick={postagem}>Postar

                </button>
                <img src={line} alt="line"></img>
                {posts.map((post) => {
                    return (
                        <div>
                            <div>
                                <div className="container">
                                    <p className="title">Enviado por: {post.nickName}</p>
                                    <p className="post">{post.content}</p>
                                    <div className="row">
                                        <div className="right">
                                            <button onClick={() => likeOrDislike(post.id, true)}>
                                            <img src={upArrow} alt="up arrow" className="up"></img></button>
                                            <span className="number">{post.likes}</span>

                                            <button onClick={() => likeOrDislike(post.id, false)}>
                                            <img src={downArrow} alt="down arrow" className="down"></img></button>
                                            <span className="number">{post.dislikes}</span>
                                        </div>
                                        <div className="left">
                                            <img src={baloon}
                                                alt="baloon"
                                            onClick={() => goToCommentsPage(navigate, post.id)}
                                            ></img>
                                            <span>{post.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </PostStyledPage >
        </>
    )

}
