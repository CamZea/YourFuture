import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  SignUpPage, LoginPage, CareersPage, CommunityPage, HomePage } from "../pages";
import { 
    AgronomiaPage,
    AdministracionPage,
    MedicinaPage,
    BiologiaMarinaPage,
    NosotrosPage,
    CienciaSaludPage,
    IngenieriaPage,
    CienciaBiologicaPage


} from "../pages";


export default function Router() {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/home" element={<HomePage />} />
                <Route path="/carreraspregrado/agronomia" element={<AgronomiaPage />} />
                <Route path="/carreraspregrado/administracion" element={<AdministracionPage />} />
                <Route path="/carreraspregrado/medicina" element={<MedicinaPage />} />
                <Route path="/carreraspregrado/biologiamarina" element={<BiologiaMarinaPage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/cienciasalud" element={<CienciaSaludPage />} />
                <Route path="/ingenierias" element={<IngenieriaPage />} />
                <Route path="/cienciasbiologicas" element={<CienciaBiologicaPage />} />
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/carreras" element={<CareersPage />} />
                <Route path="/community" element={<CommunityPage />} />
           



            </Routes>
        
        </BrowserRouter>
    )
}