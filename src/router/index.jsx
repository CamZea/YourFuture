import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, 
    CarrerasPage,
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
                <Route path="/carreras" element={<CarrerasPage />} />
                <Route path="/carreraspregrado/agronomia" element={<AgronomiaPage />} />
                <Route path="/carreraspregrado/administracion" element={<AdministracionPage />} />
                <Route path="/carreraspregrado/medicina" element={<MedicinaPage />} />
                <Route path="/carreraspregrado/biologiamarina" element={<BiologiaMarinaPage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/cienciasalud" element={<CienciaSaludPage />} />
                <Route path="/ingenierias" element={<IngenieriaPage />} />
                <Route path="/cienciasbiologicas" element={<CienciaBiologicaPage />} />



            </Routes>
        
        </BrowserRouter>
    )
}