import { Route, Routes } from "react-router-dom";
import CodeDetails from "./CodeDetails";
import Home from "./Home";

export default function Pages() {
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/item/:name" element={<CodeDetails/>}/>
    </Routes>
  )
}
