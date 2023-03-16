import styled from "styled-components"

export const HomeStyled = styled.div`

.formLoginPage{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
    /* width:100vw; */
    background-color:#ffffff;
.logo{
    display:flex;
    flex-direction:column;
    margin-bottom:8vh;
    justify-content:center;
    align-items:center;

    >img{
        height:20vh ;
        width:24vh ;
    }
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
.conta{
    background-color:#FFFFFF;
   border:2px solid #FE7E02;
   color:#FE7E02;
   margin-bottom:50px;
   
}
img{
        margin-top:3vh;
        margin-bottom:3vh;
}
    .inputs{
    display:flex;
    flex-direction:column;
    margin-bottom:4vh;

    >input{
        Width:54vh;
        Height:8vh;
        margin:1vh;
        padding-left:4px;

    }
}
}`
