export const goToLoginPage = (navigate)=>{
    navigate('/')
}
export const goToSignupPage = (navigate)=>{
    navigate('/signup')
}
export const goToCommentsPage = (navigate,id)=>{
    navigate(`/comments/${id}`)
}
export const goToPostsPage = (navigate)=>{
    navigate('/posts')
}