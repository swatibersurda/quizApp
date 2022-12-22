
import { Home } from "./Home"
import { Routes,Route } from "react-router-dom"
import { DashBoard } from "./DashBoard"
import { Quiz } from "./Quiz"
import { Result } from "./Result"
export const AllRoutes=()=>{
  return(
    <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/dashboard" element={<DashBoard/>}></Route>
         <Route path="/quiz" element={<Quiz/>}></Route>
         <Route path="/result" element={<Result/>}></Route>
  
   </Routes>
  ) 
  
}