import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SignUpPage, LoginPage, AboutUsPage, CareersPage, CommunityPage, ProgramsPage } from "../pages";
export default function Router(){

    return (
        //Se encarga de la navegacion del proyecto, los diferentes paths
        <BrowserRouter>
        

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
    
           
        </Routes>

        </BrowserRouter>

);

}