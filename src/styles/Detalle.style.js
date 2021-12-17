import styled from 'styled-components'



export const StyleDetalle = styled.section`
/* border : 1px solid red; */
display: flex;
flex-direction: row;
overflow:hidden;
padding: 20px;
/* justify-content: center; */
height: 450px;
.alternative-img{
    margin: 20px 10px;
    /* border: 1px solid green; */
    height: 180px;
    width: 50px;
    .list-img{
            border: 1px solid #00000050 ;
            margin-top: 4px;
            border-radius: 6px; 

    }
}
.principal-img{
    margin: 20px 10px;
    /* border : 1px solid red; */
    height: 400px;
    width: 480px;
    /* position: absolute; */


}
.info-img{
    width: 370px;
    height: 400px;
    margin: 20px 10px 20px 20px;
    /* border : 1px solid red; */
}
.compra{
    width: 200px;
    height: 280px;
    padding: 10px;
    margin: 20px 10px 20px 30px;
    border : 1px solid #00000050;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .agregar-button{
background-color: #F3D184;
font-size: .8rem;
padding:2px;
margin-top: 50px;
    }
    .comprar-button{
background-color: #F0AD64;
font-size: .8rem;
padding:2px;
margin-top: 10px;


    }
}
`


export const OptionStyle = styled.section`
padding : 10px;
margin-top: 50px;
/* overflow: hidden; */
/* border: 1px solid red; */
.title{
    font-size: 1.2rem;
    font-weight: 800;
}
.option-card{
    /* border: 1px solid red; */
margin: 20px 0;
    /* display: flex; */
    /* flex-direction: row ; */
    width: auto;
    /* height:400px; */
    padding: 0px;
    white-space: nowrap;
    overflow-x: auto;
    ::-webkit-scrollbar {
    display: none;
}

.card{
        /* border: 1px solid green; */
        height: 300px;
        width:280px;
        margin-left: 10px;
        background-color: white;
        padding: 20px ;
        text-align:left;
        display:inline-block;
        overflow:hidden;

  
    .description{
        /* border: 1px solid red; */
        width: 90%;
        font-size: .8rem; 
        margin-top: 20px;
        font-weight:600 ;
        
    }
    .precio{
        /* border: 1px solid red; */
        margin:5px;
        width: 100%;
        /* text-align:right; */
    }
}
.card-img{
/* border: 1px solid red; */
width: 100%;
height: 180px;
img{
    height: 200px;
    margin: 0 auto;
}
  }
}
`