import styled from "styled-components"

export const PostStyledPage = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-top:4vh;
textarea{
    background-color:#E5E5E5;
    padding:8px;
    width:26vw;
    height:20vh;
    margin-bottom:12px;
    font-family:sans-serif;
    font-size:12px;
    /* border-style:none; */

}
button{
    background: linear-gradient(90deg, #FF6489, #F9B24E);
    color:#FFFFFF;
    border-style:none;
    margin-bottom:32px;
    cursor:pointer;       
    font-weight:bold;
    font-size: 18px;
    font-family:sans-serif;
    border-radius:4vh;
    width:26vw;
    height:8vh;

}
img{
    width:26vw;
    margin-bottom:23px;
}
`