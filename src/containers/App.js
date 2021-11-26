import {useState} from 'react'
import NavBar from '../components/NavBar';
import { ChakraProvider } from "@chakra-ui/react"
import AppRouter from '../routes/AppRouter'
function App() {
  

  return (

   <div>
  <ChakraProvider>
     <AppRouter />
  </ChakraProvider>

         
</div>



  )
 

}

export default App;
