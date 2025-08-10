// Pages
import Inicio from "../pages/Inicio";
import Noticias from "../pages/Noticias";
import Talleres from "../pages/Talleres";
import Voluntariados from "../pages/Voluntariados";
import Donar from "../pages/Donar";
import Error404 from "../pages/Error404";


// UI
import Header from '../components/ui/Header'

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/voluntarios" element={<Voluntariados />} />
        <Route path="/donar" element={<Donar />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}