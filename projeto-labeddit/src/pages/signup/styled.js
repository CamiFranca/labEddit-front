import styled from "styled-components"

export const SignupStyled = styled.div`

.formLoginPage{
    display:flex;
    /* justify-content:center; */
    align-items:center;
    flex-direction:column;
    height:100vh;
    background-color:#ffffff;
.title{
    margin-top:4vh;
    margin-bottom:12vh;
    font-size:32px;
    font-family:sans-serif;
    
}
.form{
    display:flex;
    flex-direction:column;
    justify-content:center;
   
    >button{
        border-radius:4vh;
        width:54vh;
        height:8vh;
        cursor:pointer;       
        font-weight:bold;
        font-size: 18px;
        font-family:sans-serif;
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
    margin-bottom:4vh;

    >input{
        Width:54vh;
        Height:8vh;
        margin:1vh;
        padding-left:8px;

    }
}
.contract{
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-bottom:3vh;
    font-family:sans-serif;
    font-size:14px;
    >label{
        margin-right:4px;
    }
}
}`
