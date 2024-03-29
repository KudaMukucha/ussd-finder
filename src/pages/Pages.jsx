import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import CodeDetails from "./CodeDetails";
import Codes from "./Codes";
import Faqs from "./Faqs";
import Home from "./Home";
import Searched from "./Searched";

export default function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
       <Route path="/" element={<Home/>}/>
       <Route path="/item/:name" element={<CodeDetails/>}/>
       <Route path="/codes/:type" element={<Codes/>}/>
       <Route path="/results/:search" element={<Searched/>} />
       <Route path="/faqs" element={<Faqs/>}/>
    </Routes>
    </AnimatePresence>
  )
}
