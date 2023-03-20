import {BrowserRouter, Route, Routes} from "react-router-dom"
import {
LoginPage,
SignupPage,
PostsPage,
CommentsPage
} from "../pages"
import React from "react"
import { Header } from "../components/header"
export const Router = ()=>{
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/posts" element={<PostsPage/>}/>
            <Route path="/comments/:id" element={<CommentsPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}