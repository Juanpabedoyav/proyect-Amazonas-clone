import styled from 'styled-components'



export const ContainerHome = styled.div`
    background-color: #eaeded;
    height:100%;
    width: 100%;
    justify-content: space-evenly;
    /* padding: 20px 0px; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
   
    /* grid-template-columns: 1fr 1fr 1fr; */
    /* gap: 2px; */
    .container-img{
        background-image: url("https://m.media-amazon.com/images/I/61uIjme4x8L._SX1250_.jpg");
                
        /* border: 1px solid green; */
        width:100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center ;
        font-size: 3rem;
        font-weight: 800;
        box-shadow: inset 0px -650px 800px -500px #eaeded;

         h1{
             margin-top: -60px;

          } 
        /* z-index: -; */
    }
    .card{
        /* border: 1px solid green; */
        height: 400px;
        width:280px;
        margin-top: 10px;
        background-color: white;
        padding: 20px ;
        position: relative;
        bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items:center;

  
    .description{
        /* border: 1px solid red; */
        width: 100%;

        margin-top: 40px;
        font-weight:600 ;
    }
    .precio{
        /* border: 1px solid red; */
        margin:5px;
        width: 100%;
        /* text-align:right; */
    }
    .text-secure-login{
        font-weight:800;
    }
    .secure-login{
        background-color: #ffd82c;
        text-decoration: none;
        height: 30px;
        display: block;
        /* padding: 8px; */
        margin: 20px auto;
        border-radius: 8px;
        span{
            color: black;
            font-weight: 200;
            /* font-size: .5rem; */
        }
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
`