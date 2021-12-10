import styled from 'styled-components'



export const StyleDetalle = styled.section`
/* border : 1px solid red; */
display: flex;
flex-direction: row;
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
    img{
        height:100%;
        /* width: 100%; */
        margin: 0 auto;
    object-fit: contain;

    }

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