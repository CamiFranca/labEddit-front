import { CommentStyledPage } from "../comments/styled"
import line from "../../images/line.png"
import baloon from "../../images/baloon.png"
import downArrow from "../../images/downArrow.png"
import upArrow from "../../images/upArrow.png"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants"
import axios from "axios"
import { goToLoginPage } from "../../routes/coordinator"
import { useNavigate, useParams } from "react-router-dom"
import { goToCommentsPage } from "../../routes/coordinator"


export const CommentsPage = () => {

    const [postId, setPostId] = useState([])

    const [createComment, setCreateComment] = useState('')
    const [commentPost, setCommentPost] = useState('')
    const [getCommentsId, setGetCommentsId] = useState([])
    const [likeDislikecomment, likeDislikeComment] = useState('')




    // const params = useParams()
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {

        if (localStorage.getItem('token') === "") {
            goToLoginPage(navigate)
        } else {

            getPostById()
            getCommentsByPostId()
        }


    }, [])



    const getPostById = () => {


        const token = window.localStorage.getItem('token')

        axios.get(`${BASE_URL}/posts/${id}`, {
            headers: {
                'Authorization': token
            }

        })
            .then((res) => {
                console.log(res)
                setPostId(res.data)

            })

            .catch((err) => {
                console.log(err)

            })

    }

    const createComments = () => {

        const input = {
            "comments": commentPost
        }

        const token = window.localStorage.getItem('token')

        axios.post(`${BASE_URL}/comments/${id}`, input, {
            headers: {
                'Authorization': token
            }

        })
            .then((res) => {
                console.log(res)
                setCreateComment(res.data)
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
                getPostById()

            })

            .catch((err) => {
                console.log(err)

            })

    }

    const getCommentsByPostId = () => {

        const token = window.localStorage.getItem('token')

        axios.get(`${BASE_URL}/comments/post/${id}`, {
            headers: {
                'Authorization': token
            }

        })
            .then((res) => {
                console.log(res)
                setGetCommentsId(res.data)

            })

            .catch((err) => {
                console.log(err)

            })

    }

    const likeOrDislikeComment = (id, likeDislikecomment) => {

        const input = {
            "like": likeDislikecomment

        }
        const token = window.localStorage.getItem('token')

        axios.put(`${BASE_URL}/comments/${id}/like`, input, {
            headers: {
                'Authorization': token
            }

        })
            .then((res) => {
                console.log(res)
                getCommentsByPostId()

            })

            .catch((err) => {
                console.log(err)

            })

    }
    // const likeOrDislikeComment = (id, likeDislikeComment) => {

    //     const input = {


    return (
        <CommentStyledPage>
            <div>
                <div>
                    <div className="container">
                        <p className="title">Enviado por: {postId.nickName}</p>
                        <p className="post">{postId.content}</p>
                        <div className="row">
                            <div className="right">
                                <button onClick={() => likeOrDislike(postId.id, true)}>
                                    <img src={upArrow} alt="up arrow" className="up"></img></button>
                                <span className="number">{postId.likes}</span>

                                <button onClick={() => likeOrDislike(postId.id, false)}>
                                    <img src={downArrow} alt="down arrow" className="down"></img></button>
                                <span className="number">{postId.dislikes}</span>
                            </div>
                            <div className="left">
                                <img src={baloon}
                                    alt="baloon"
                                // onClick={() => goToCommentsPage(navigate, postId.id)}
                                ></img>
                                <span>{postId.comments}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <textarea name='comment'
                minLength="50" maxLength="255"
                placeholder="Adicionar comentário"
                value={commentPost}
                onChange={(e) => setCommentPost(e.target.value)}
            >
            </textarea>
            <button className="continuar"
                type="button"
                value="Continuar"
                onClick={() => createComments()}
            >Responder
            </button>
            <img src={line} alt="line"></img>

            <div>{getCommentsId.map((comment) => {
                return (
                    <div key={comment} className="container">
                        <p className="title">enviado por: {comment.creatorNickName}</p>
                        <p className="post">{comment.comment}</p>
                        <div className="row">
                            <div className="right">
                                <button onClick={() => likeOrDislikeComment(comment.id, true)}>
                                    <img src={upArrow} alt="up arrow" className="up"></img></button>
                                <span className="number">{comment.likes}</span>

                                <button onClick={() =>likeOrDislikeComment(comment.id, false)}>
                                    <img src={downArrow} alt="down arrow" className="down"></img></button>
                                <span className="number">{comment.dislikes}</span>
                            </div>

                        </div>
                    </div>


                )
            }).reverse()}

            </div>
        </CommentStyledPage>
    )

}

