import React from 'react'
import { useState } from 'react'
import { createUser } from '../../services/auth'

export default function Footer() {
    const [values, setValues]=useState({
        email:"",
        password:""
    })

    const handleInputChange=(event)=>{
        const {name, value}=event.target;
        setValues({
            ...values,
            [name]:value,

        })
    }

    const handleSubmit= async(event)=>{
        event.preventDefault();
        await createUser(values.email, values.password)


    };
       

  return (
    <>
    <footer class="border-white mt-9 ">
            <div class="bg-yellow-500  bg-opacity-90 flex flex-wrap">
                <div class=" bg-yellow-400 bg-opacity-80 p-6 rounded-md mx-auto  max-w-2xl grow">
                  <h2 class="font-bold text-xl">Iniciar sesión</h2>
                  <p class="text-md "> Obtener novedades exclusivas sobre becas, cursos, etc.</p>
                  <form action="" class="mt-2"
                         onSubmit={handleSubmit}>
                    <div class=" borderline-none">
                      <input
                        class="px-2 py-3 w-full border border-black rounded-md outline-none"
                        type="email"
                        value={values.email}
                        onChange={handleInputChange}
                        placeholder="Ingresa tu correo"
                      
                      />
                    </div>
                    <div class="flex mt-3">
                      <input type="checkbox" class="w-9 mr-5" />
                      <p>
                        Yo confirmo ser mayor de 15 años y estar de acuerdo con los
                        Términos y Condiciones y Política de Privacidad. También estoy
                        de acuerdo con unirme a la comunidad.
                      </p>
                    </div>
                  
                  </form>
                  <div class="flex justify-center gap-9 mt-4">
                    <button id="btn-login" type="button" class="border border-none bg-black  hover:bg-white-600 p-2 mt-6 btn-md text-white  rounded-md ">Unirme a la comunidad</button>
                </div>
                  
                </div>
                
              </div>
             
            
           </footer>
    </>
  )
}

