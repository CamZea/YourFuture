import { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  
  const NavBar = () => {
    const [isMenuOpen, setMenuOpen]= useState(false);
    //definir que por defecto se use el tamaño que tiene la pantalla
    const [windowsDimension, setWindowDimension] = useState ({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      
    });

  }
  
    return (
      <>
      <div className="flex">
       <Link href="#">
         <img
           src="./src/assets/imagenes/logo_transparent.png"
           alt="Logo"
           className="w-[130px] h-auto rounded-full "
         />
       </Link>
       <nav className="flex justify-center font-semibold w-full ">
    
    <div className="flex items-center gap-10 text text-gray-600 text-l">
         <Link href="#" className=" hover:text-yellow-600"  to={"/carreras"}>Carreras</Link>
         <Link href="#" className=" hover:text-yellow-600"  to={"/community"}>Comunidad</Link>
         <Link href="#" className=" hover:text-yellow-600"  to={"/nosotros"} >Programas y Becas</Link>
         <Link href="#" className=" hover:text-yellow-600"  to={"/nosotros"} >Sobre nosotros</Link>
         
       </div>

      

      
    </nav>
    <div className="flex mt-9 justify-start mr-5">
      <Link to={"/sign-up"}>
        <button 
        className="w-24 h-12 font-md rounded-sm  text-white  mr-5 bg-yellow-400"
        
        >Registrarse </button>
      </Link>
        
         <Link to={"/login"}>
         <button
        className="w-28 h-12 font-md rounded-sm text-white  bg-yellow-400"
        >Iniciar Sesión </button>
         </Link>
         
       
        
       </div>
     </div>

     

     
      
</>
    )
}
