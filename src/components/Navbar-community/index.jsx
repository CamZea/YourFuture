import React from 'react'
import { Link } from 'react-router-dom'

export default function  NavCommunity (props) {
  return (
   <>
   <nav className="flex  bg-yellow-500 justify-end gap-12  bg-opacity-100 h-[43px] w-full fixed top-0 right-0 z-10">
        <div className=" flex justify-center  ">
          <input
            
            type="text"
            placeholder="Buscar..."
            className="rounded-xl rounded-r-none w-[300px] p-1 outline-none  bg-yellow-400  font-sans  "
            
          />
          <button className=' bg-slate-600 rounded-xl rounded-l-none '>
          <svg width="58px" height="18px" viewBox="0 0 24 24" fill="#EADE0E" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            
          </button>
        </div>

        <ul className="flex gap-4 justify-end mt-3 ">
          <li className=" ">
            <Link href="">
        
              <img
                src="/src/assets/foro/elements/corazon.png"
                alt=""
                className="w-6"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <img
                src="/src/assets/foro/elements/hablar.png"
                alt=""
                className="w-6"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <img
                src="/src/assets/foro/elements/notificacion.png"
                alt=""
                className="w-6"
              />
            </Link>
          </li>
          <li>
            <Link href="">
           
              <img
                src="/src/assets/foro/elements/hogar.png"
                alt=""
                className="w-6"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <img
                src="/src/assets/foro/elements/usuario.png"
                alt=""
                className="w-6"
              />
            </Link>
          </li>
          <li class="mr-4">
            <Link href="">
              <img
                src="/src/assets/foro/elements/menu.png"
                alt=""
                className="w-6"
              />
            </Link>
          </li>
        </ul>
      </nav>
    
   </>
  )
}

