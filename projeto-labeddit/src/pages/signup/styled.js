import styled from "styled-components"

export const SignupStyled = styled.div`

.formLoginPage{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
    background-color:#ffffff;
    @media (max-width: 590px){
             width: 56vw;
             margin-left:16vw;
         }
.title{
    margin-top:4vh;
    margin-bottom:12vh;
    font-size:32px;
    font-family:sans-serif;
    @media (max-width: 590px){
             width: 56vw;
             margin-bottom:4vh;
             margin-left:4vw;
         }
}
.form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    justify-content:center;
    width:100%;
     @media (max-width: 590px){
             width: 100%;
          
         }
   
    >button{
        border-radius:4vh;
        width:26vw;
        height:8vh;
        cursor:pointer;       
        font-weight:bold;
        font-size: 18px;
        font-family:sans-serif;
        @media (max-width: 590px){
             width: 56vw;
         }
    
    }
}
.continuar{
    background: linear-gradient(90deg, #FF6489, #F9B24E);
    color:#FFFFFF;
    border-style:none;
   
  
}

    .inputs{
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-bottom:4vh;
   
    >input{
        Width:26vw;
        Height:8vh;
        margin:1vh;
        padding-left:8px;
        @media (max-width: 590px){
             width: 52vw;
             height:5vh;
             margin-bottom: 1vh;
         }
    }
}
.contract{
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-bottom:3vh;
    font-family:sans-serif;
    font-size:14px;
    @media (max-width: 590px){
             width: 56vw;
             margin-bottom:1vh;
             margin-left:2vw;
         }
    >label{
        margin-right:4px;
        margin-bottom:1vh;
    }
    >p{
        margin-bottom:2vh;
    }
}
}`
