import styled from 'styled-components'



export const ContainerHome = styled.div`
    background-color: #eaeded;
    padding: 20px;
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    overflow: hidden;
    .card{
        border: 1px solid green;
        height: 300px;
        padding: 20px;
        
        background-color: white;
        .img-card{
        /* border: 1px solid black; */
        /* height: 120px; */
        img{
            width: 100%;
            height: 100px
        }

    }
    }
  
`