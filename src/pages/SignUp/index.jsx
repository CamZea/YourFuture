import React from 'react'
import { useState } from 'react'
import { createUser } from '../../services/auth';
import login from "../../assets/imagenes/logo_transparent.png";



export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name:"",
    lastname:"",
    email:"",
    password:"",
  })

  const handleInputChange =(event) =>{
    const {name, value}= event.target; 
    setValues({
      //(...) para extender el estado actual (values) con un nuevo objeto
      ...values,
      [name]: value,
    });

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const result= await createUser(values.name, values.lastname, values.email, values.password);
    setIsLoading(false);
    if (result) {
      console.log('Usuario creado exitosamente');
    } else {
      console.log('Error al registrar el usuario');
    }
  };


  return (
    <section className="max-w-md m-auto flex items-center justify-center h-[100vh]">
    <div className="bg-white p-6 rounded-md w-full md:w-md">
    <img src={login} alt="" className="w-15"/>
      <form className='my-5' onSubmit={handleSubmit}>
      <input 
      className=" border px-3 py-2 rounded-md w-full"
      type="text"
      name="name"
      value={values.name}
      onChange={handleInputChange}
      placeholder="Ingrese su nombre"/>
        <input 
      className=" border mt-4 px-3 py-2 rounded-md w-full"
      type="text"
      name="lastname"
      value={values.lastname}
      onChange={handleInputChange}
      placeholder="Ingrese su apellido"/>


      <input 
      className=" border px-3 py-2 rounded-md w-full mt-4"
      type='email'
      name="email"
      value={values.email}
      onChange={handleInputChange}
      placeholder="Ingrese su correo electrónico"/>

     <input 
      className=" border px-3 py-2 rounded-md w-full mt-4"
      type="password"
      name="password"
      value={values.password}
      onChange={handleInputChange}
      placeholder="Ingrese su contraseña"/>

  

<div className="my-5">
                  <button
                    type="submit"
                    className="border flex items-center justify-center border-yellow-400 text-black font-bold w-full px-3 py-2 rounded-md
                  hover:bg-yellow-400 hover:text-white transition-all ease-in-out duration-300"
                  >
                     {isLoading && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Registrarme
                   
                  </button>
                </div>
      </form>
    </div>
    </section>
  )
}

