import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyle } from './GlobalStyle'
import { Router } from "./routes"
import {GlobalContext} from "./context/GlobalContext"
const App = () => {

  // const context = {

  // }
  return (
    <>
    <GlobalStyle/>
    {/* <GlobalContext value={context}> */}
    <Router/>
    {/* </GlobalContext> */}
    </>
  )
}

export default App;
