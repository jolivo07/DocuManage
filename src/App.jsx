import { Route, Routes, Navigate} from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"


function App() {

  return (
      <Routes>
        <Route path="/" element={<Navigate to={"/Login"}/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
  )
}

export default App
