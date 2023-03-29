import { PostStyledPage } from "./styled"
import line from "../../images/line.png"
import downArrow from "../../images/downArrow.png"
import upArrow from "../../images/upArrow.png"
import baloon from "../../images/baloon.png"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { goToCommentsPage, goToLoginPage } from "../../routes/coordinator"

export const PostsPage = () => {

    const [posts, setPosts] = useState([])

    const [createPost, setCreatePost] = useState('')
    const [contentPost, setContentPost] = useState('')

    const [idPost, setIdPost] = useState('')
    const [savePostId, setSavePostId] = useState([])


    const navigate = useNavigate()


    useEffect(() => {

        if (localStorage.getItem('token') === "") {
            goToLoginPage(navigate)
        } else {
            getPosts()
        }


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


    const postagem = () => {

        const input = {
            "content": contentPost
        }

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


    return (
        <PostStyledPage>
            <textarea name='content'
                placeholder='Escreva seu post...'
                minLength="50" maxLength="255"
                value={contentPost}
                onChange={(e) => setContentPost(e.target.value)}
            >

            </textarea>
            <button className="postar"
                type="button"
                value="postar"
                onClick={() => postagem()}>Postar

            </button>
            <img src={line} alt="line"></img>
            <div>{posts.map((post) => {
                return (
                    <div key={post.id}>
                        <div className="container">
                            <p className="title">enviado por: {post.creatorNickName}</p>
                            <p className="post">{post.content}</p>
                            <div className="row">
                                <div className="right">
                                    <button onClick={() => likeOrDislike(post.id, true)}>
                                        <img className="up" src={upArrow} alt="up arrow">
                                        </img></button>
                                    <span className="number">{post.likes}</span>
                                    <button onClick={() => likeOrDislike(post.id, false)}><img className="down" src={downArrow} alt="down arrow"></img></button>
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
                )
            }).reverse()}
            </div>





        </PostStyledPage>
    )

}