import { useState } from "react"
import { createUser } from "../../services/auth"
import {Link} from "react-router-dom";


export default function Login(){
  const [values, setValues]= useState({
    email:"",
    password: "",
  })
// (...) y la sintaxis de propiedad computada ([name]: value) se usan para actualizar eficientemente el objeto de estado.
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setValues({
        // (...) se usa para copiar todas las propiedades existentes del objeto de estado actual 
        ...values,
        [name]: value,
    });
}
  const handleSubmit = async(event)=> {
    event.preventDefault();
    await createUser(values.email, values.password);
  };
  return (
   <>
   <section className="max-w-md m-auto flex flex-col items-center justify-center h-[100vh]">
        <div className="bg-white p-6 rounded-md w-full md:w-md"></div>
        <img src="/src/assets/images/logo_transparent.png" alt="" className="w-15"/>
        <form 
        className="my-5"
        onSubmit={handleSubmit}>
          <input
          className=" border px-3 py-2 rounded-md w-full "
          type="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          placeholder="Ingrese su correo electrónico"
          />

          <input 
          className=" border px-3 py-2 rounded-md w-full mt-4"
          type="password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
          placeholder="Ingrese su contraseña" />
        
          <div>
          <button
          className="border border-yellow-400 text-black font-bold w-full px-3 py-2 rounded-md
                hover:bg-yellow-400 hover:text-white transition-all ease-in-out duration-300 mt-4"
                >
                  Iniciar sesión
                </button>
            
          </div>
        </form>
   </section>
   </>

  )


}


  


