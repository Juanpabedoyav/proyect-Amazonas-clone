import styled from 'styled-components'


export const StyleForm = styled.div`
/* border: 1px solid red; */
width: 30%;
/* height: 80vh; */
margin: 20px auto;
padding: 20px;
box-shadow: 2px 2px 10px 5px rgb(0, 0, 0, 0.2);
.label{
    margin-top: 20px;
    font-size: 1.3rem
}
.create-button{
    /* border: 1px solid red; */
    display:block;
    margin: 20px auto;
    width: 50%; 
    
}
.registro-alert{
margin: 20px 0;
    /* border-radius:28px; */
}
.error{
      /* borderx: 1px solid red; */
     
        color:red;
}
p{
    font-weight: 400;

    a{
        text-decoration:underline;
    font-weight: 600;
    margin-left:10px;
}
}
`