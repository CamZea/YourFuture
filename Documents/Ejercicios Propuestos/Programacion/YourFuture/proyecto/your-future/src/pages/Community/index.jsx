import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CreateCommunity } from "../../components";
import InputCommunity from "../../components/CreateCommunity";

export default function Community() {
  const [commmunity, setCommunity] = useState("");

  const handleInputCommunity = (event) => {
    setCommunity(event.target.value);
  };

  const handleListCommunity = async (commmunity) => {
    const newCommunity = await createCommunity(commmunity);

    const newCommunitys = [...listCommunitys, newCommunity];
    setListCommunity(newCommunitys);
    setCommunity("");
  };

  return (
    <>
      <nav className=" flex bg-yellow-400 justify-end gap-12  bg-opacity-80">
        <div className=" flex justify-center  ">
          <input
            type="text"
            placeholder="Buscar..."
            className="rounded-md rounded-r-none p-1 outline-none "
          />
          <button className="bg-black">
            click{" "}
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right"
              style={{ color: "#FFD43B" }}
            />
          </button>
        </div>

        <ul className="flex gap-4 justify-end ">
          <li className=" ">
            <Link href="">
              {" "}
              <img
                src="/src/assets/foro/elements/corazon.png"
                alt=""
                className="w-6"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              {" "}
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
              {" "}
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
              />{" "}
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
      <body>
        <aside className=" fixed  left-0 w-60 h-full   bg-[#212121]  hover:overflow-auto pb-20 border border-transparent border-r-white">
          <div class="relative group">
            <button
              id="dropdown-button"
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md rounded-t-none shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
              <span class="mr-2">Comunidades</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-2 -mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center ">
            <ul class="">
              <li>
                <button class=" p-3 text-md font-ligth text-white ">
                  <i class="fa-solid fa-plus mr-3" style="color: #FFD43B;"></i>
                  Crear una comunidad
                </button>
              </li>

              <li class="flex ml-2">
                {" "}
                <img
                  src="assets/profiles/user_8872036.png"
                  class="w-7 h-8"
                  alt=""
                />{" "}
                <button href="" class="text-white text-sm p-2 font-light">
                  Comunidad Area-Ingenierias
                </button>
                <i
                  class="fa-solid fa-star mt-2 mr-3"
                  style="color: #B197FC;"
                ></i>
              </li>
              <li class="flex ml-2">
                <img
                  src="assets/profiles/user_7454510.png"
                  class="w-9 h-9"
                  alt=""
                />{" "}
                <button href="" class="text-white text-sm p-2 font-light">
                  Comunidad de Sociales
                </button>
                <i
                  class="fa-regular fa-star mt-2 mr-3"
                  style="color: #B197FC;"
                ></i>
              </li>
              <li class="flex ml-2">
                <img
                  src="assets/profiles/video-call_9274248.png"
                  class="w-7 h-7"
                  alt=""
                />
                <button href="" class="text-white text-sm p-2 font-light">
                  Comunidad Tecnológica{" "}
                </button>
                <i
                  class="fa-regular fa-star mt-2 mr-3"
                  style="color: #B197FC;"
                ></i>
              </li>
              <li class="flex ml-2">
                {" "}
                <img
                  src="assets/profiles/doctor_4220231.png"
                  class="w-7 h-7"
                  alt=""
                />
                <button href="" class="text-white text-sm p-2 font-light">
                  Comunidad de Biomédicas
                </button>
                <i
                  class="fa-solid fa-star mt-2 mr-3"
                  style="color: #B197FC;"
                ></i>
              </li>
              <li>
                <button href="" class="text-white text-md p-2 ">
                  <i class="fa-solid fa-plus mr-3" style="color: #FFD43B;"></i>
                  Unirme a una comunidad
                </button>
              </li>
            </ul>
          </div>
          <div class="relative group">
            <button
              id="dropdown-button"
              class="inline-flex justify-center w-full mt-5 px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md rounded-t-none shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
              <span class="mr-2">Recursos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-2 -mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <ul>
              <li class="text-white text-sm p-2 font-light">
                <a href="">
                  <i
                    class="fa-solid fa-circle-exclamation mr-2"
                    style="color: #FFD43B;"
                  ></i>{" "}
                  Avisos
                </a>
              </li>
              <li class="text-white text-sm p-2 font-light">
                <a href="">
                  <i class="fa-solid fa-globe mr-2" style="color: #FFD43B;"></i>
                  Novedades
                </a>
              </li>
              <li class="text-white text-sm p-2 font-light">
                <a href="">
                  <i
                    class="fa-solid fa-handshake-angle mr-2"
                    style="color: #FFD43B;"
                  ></i>
                  Ayuda{" "}
                </a>
              </li>
              <li class="text-white text-sm p-2 font-light">
                <a href="">
                  <i
                    class="fa-solid fa-book-open mr-2"
                    style="color: #FFD43B;"
                  ></i>
                  Blog
                </a>
              </li>
              <li class="text-white text-sm p-2 font-light">
                <a href="">
                  <i
                    class="fa-solid fa-layer-group mr-2"
                    style="color: #FFD43B;"
                  ></i>
                  Carreras
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div class="flex items-center justify-center p-5 ">
              {/*<select
                      class="outline-none focus:outline-none p-2 bg-transparent rounded-3xl text-white text-sm font-light"
                      value={selectedValue}
                      onChange={handleSelectChange}
                    >
                      {genre.map((item, i) => (
                        <option value={item} key={i} class="text-black">
                           Lo mejor del día 
                           
                        </option> 
                        <option value={item} key={i} class="text-black">
                           Más buscados
                        </option>
                        <option value={item} key={i} class="text-black">
                            Con más personas 
                        </option>
                        <option value={item} key={i} class="text-black">
                            Nuevas comunidades
                        </option>
                        <option value={item} key={i} class="text-black">
                            Con mas likes
                        </option>
                      ))}
                    </select>*/}
            </div>

            <div
              id="container-chat"
              class="w-full p-2  ml-3 rounded-md text-[#adadad] hover:text-white hover:bg-gradient-to-r hover:from-[#2d2d2d]  hover:border-r-[#2d2d2d] hover:border-r-[6px] "
            >
              <div class="flex  p-3 border-top  border-top-gray-400">
                <img
                  src="assets/profiles/undraw_profile_pic_re_iwgo.svg"
                  class="w-7 h-7 ml-4"
                  alt=""
                />
                <button href="" class="text-white text-sm p-2 font-semibold">
                  User0041{" "}
                </button>
                <span class="text text-xs text-gray-500 mt-2 mr-4">
                  . Hace un dia
                </span>
              </div>
              <div class="ml-6">
                <p class="text-white text-sm font-Josefin-Sans">
                  Hola chicos, he encontrado un curso interesante sobre
                  inteligencia artificial.Estoy segura que les va a interesar
                </p>
                <p class="text-white text-sm">Aqui abajo les dejo el link.</p>
                <p class="text-white text-sm">
                  Ya saben, estamos para apoyarnos. Alguien podria recomendarme
                  cursos parecidos?
                </p>
                <img
                  src="assets/curso2.0.jpeg"
                  alt="https://www.eventbrite.com/cc/cursos-inteligencia-artificial-genai-y-chatgpt-1617599"
                  class="w-full mt-4"
                />
              </div>
              <button class=" bg-gray-700  p-2 ml-6 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm  ">
                <i
                  class="fa-solid fa-arrow-up-long mx-2"
                  style="color: #ffffff;"
                ></i>
                307
                <i
                  class="fa-solid fa-arrow-down-long mx-2"
                  style="color: #ffffff;"
                ></i>
              </button>
              <button class=" bg-gray-700  p-2 ml-2 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm  ">
                <i
                  class="fa-solid fa-comment-dots mx-2"
                  style="color: #ffffff;"
                ></i>{" "}
                Comentarios{" "}
              </button>
              <button class="bg-gray-700  p-2 ml-2 mt-4 rounded-3xl hover:bg-gradient-to-r hover:from-[#A18309] text text-sm">
                <i
                  class="fa-solid fa-share-from-square mx-2"
                  style="color: #fcfcfd;"
                ></i>
                Compartir
              </button>
            </div>
          </div>
        </aside>
      </body>
    </>
  );
}
