import { Route, Routes } from "react-router-dom";
import CodeDetails from "./CodeDetails";
import Codes from "./Codes";
import Home from "./Home";
import Searched from "./Searched";

export default function Pages() {
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/item/:name" element={<CodeDetails/>}/>
       <Route path="/codes/:type" element={<Codes/>}/>
       <Route path="/results/:search" element={<Searched/>} />
    </Routes>
  )
}
