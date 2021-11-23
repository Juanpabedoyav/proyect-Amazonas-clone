import {useState} from 'react'
import FacebookLogin from 'react-facebook-login';

function App() {
const [perfil, setPerfil] = useState({})
  const responseFacebook = (response) => {
    console.log(response);
    const res = response.picture;
    const{data} = res;
    console.log(data );
    setPerfil(data);
  }
  
  return (
   <> <div>
    <FacebookLogin
    appId="3341008039459589"
    autoLoad={false}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook} />

</div>
<div>
         
                <img src={perfil.url} alt="" />
         
</div></>



  )
 

}

export default App;
