import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import CreateCommunity from "../../components/CreateCommunity";
import { CreatePosts, NavCommunity } from "../../components";
export default function Community() {
 

  return (
    <>
    <main>
    <NavCommunity/>   
    <div class="flex bg-[#212121] overflow-hidden hover:overflow-auto pb-20 w-full">
      
      <aside className="w-[270px]  sidebar bg-[#212121] hover:overflow-auto pb-20 border border-transparent border-r-white fixed top-11 left-0 z-10">
      
        <div class="relative group">
          <button id="dropdown-button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md rounded-t-none shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
            <span className="mr-2 font-semibold ">Comunidades</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        
        </div>
        <CreateCommunity/>
        <div class="relative group">
          <button id="dropdown-button" class="inline-flex justify-center w-full mt-5 px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md rounded-t-none shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
            <span class="mr-2 font-semibold">Recursos</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <ul>
            <li  className="text-white text-sm p-2 font-light "><a href=""> Avisos</a></li>
            <li  className="text-white text-sm p-2 font-light "><a href="">Novedades</a></li>
            <li  className="text-white text-sm p-2 font-light"><a href="">Ayuda </a></li>
            <li  className="text-white text-sm p-2 font-light"><a href="">Blog</a></li>
            <li  className="text-white text-sm p-2 font-light"><a href="">Carreras</a></li>
          </ul>
        
        </div>
       
         
    </aside>
    <CreatePosts/>
   
  

    </div>  


       
</main>

    
    
    </>
  );
}