import styled from "styled-components"

export const PostStyledPage = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-top:4vh;
overflow-x:hidden;
textarea{
    background-color:#E5E5E5;
    padding:8px;
    width:26vw;
    height:20vh;
    margin-bottom:12px;
    font-family:sans-serif;
    font-size:12px;
    @media (max-width: 590px){
             width: 62vw;
         }
   
}

.postar{
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
    @media (max-width: 590px){
             width: 62vw;
         }

}
img{
    width:26vw;
    margin-bottom:23px;
}

.container{
    display:flex;
    align-items: right;
    justify-content:space-between;
    flex-direction:column;
    border: 1px solid #E5E5E5;
    border-radius:15px;
    width:26vw;
    min-height:20vh;
    margin-bottom:11px;
    padding:10px;
    @media (max-width: 590px){
             width: 62vw;
         }
    >p{
        font-family:sans-serif;
    }
   
}
.title{
    font-size:10px;
    margin-bottom:12px;
}
.post{
    font-size:14px;
    margin-bottom:14px;
}
.row{
    display:flex;
    flex-direction:row;
}
.right{
    display:flex;
    flex-direction:row;
    border:1px solid #E5E5E5;
    border-radius:15px;
    margin-right:8px;
    width: 92px;
    height:28px; 
    color:gray;
    font-weight: bold;
    font-size:12px;
    >img{
    width:12px;
    height:12px; 
    }
    >button{
    border: none;
    background-color: transparent;
    cursor:pointer;
    }
   
}
.number{
        margin: 6px 2px 0px 2px;
        font-size:12px;
    }
.up{
    margin:3px 8px 3px 8px;
    height:12px;
    width:12px;
}
.down{
    margin:8px 8px 3px 8px;
    height:12px;
    width:12px;
}

.left{
    display:flex;
    flex-direction:row;
    justify-content:center;
    border:1px solid #E5E5E5;
    border-radius:15px;
    color:gray;
    font-weight: bold;
    font-size:12px;
    width:46px;
    height:28px;
    cursor:pointer;
    >img{
    cursor:pointer;
    width:12px;
    height:12px; 
    margin:5px;
    }
    >span{
        margin-top: 4px;

    }
}    
`
