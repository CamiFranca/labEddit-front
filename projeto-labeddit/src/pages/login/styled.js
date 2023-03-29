import styled from "styled-components"

export const HomeStyled = styled.div`

.formLoginPage{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    /* height:100vh;
    width:100vw; */
    background-color:#ffffff;
     
.logo{
    display:flex;
    flex-direction:column;
    margin-bottom:8vh;
    justify-content:center;
    align-items:center;
    width:100%;
    font-family:sans-serif;
        
        @media (max-width: 590px){
             width: 32vw;
         }

    >img{
        height:20vh ;
        width:10vw ;
        @media (max-width: 590px){
             width: 32vw;
             height:16vh;
         }
    }
}

.form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   
   
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
button{
        border-radius:4vh;
        width:26vw;
        height:8vh;
        cursor:pointer;       
        font-weight:bold;
        font-size: 18px;
        font-family:sans-serif;
       
}
.continuar{
    background: linear-gradient(90deg, #FF6489, #F9B24E);
    color:#FFFFFF;
    border-style:none;
    margin-top:16px;
    @media (max-width: 590px){
             width: 56vw;
         }
}

.conta{
background-color:#FFFFFF;
   border:2px solid #FE7E02;
   color:#FE7E02;
   @media (max-width: 590px){
             width: 56vw;
         }
 
}
img{
    margin-top:2vh;
    margin-bottom:1vh;
    width:26vw;
}
    .inputs{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:1vh;
    @media (max-width: 590px){
             width: 392px;
         }
    >input{
        width:26vw;
        height:8vh;
        margin:1vh;
        padding-left:4px;
        @media (max-width: 590px){
             width: 56vw;
         }
       
    }
}
}`
