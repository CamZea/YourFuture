
import { get ,ref } from "firebase/database";
import { useEffect,useState } from "react";
import { database } from "../../services/firebase_2";
import { Link } from "react-router-dom";




function CienciasBiologicas() {
    
    const [Carreras,SetCarreras] = useState([]); // almacen de carreras totales 
    
    const [inputValue,SetInputValue] = useState('')
    const [carrerafilter, SetCarreraFilter] = useState([]); // almacen de carreras ya filtrada
    

    useEffect(() => {                        /// extraer la informacion de la base de datos y guardalor en SetCarreras y setCarrera
        const CarrerasRef = ref(database, 'Carreras');
        get(CarrerasRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const CarrerasArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                        id,
                        ...data,
                    }));
                    const CarrerasBiologicas = CarrerasArray.filter((carrera) => carrera.area === 'biologica');
                    SetCarreras(CarrerasBiologicas);
                    SetCarreraFilter(CarrerasBiologicas)
                } else {
                    console.log("No hay datos disponibles");
                }
            })
            .catch((error) => {
                console.error("Error al obtener datos:", error);
            });
    }, []);

    const handleChange = (event) =>{          
        const value = event.target.value.toLowerCase()
        SetInputValue(value)
        
        const carrierFiltered = Carreras.filter((carrier) => { /// Se realiza el filtro de la variable Carreras de acuerdo al nombre y se almacena en SetCarrera
            const filterByName = carrier.Nombre.toLowerCase().includes(value)
            return filterByName
        })

        SetCarreraFilter(carrierFiltered);
    }

    
    

    return (
        <>
            <section>
                <div>
                    <div className="flex mt-2 mr-4 items-center">
                        <img src="src/assets/imagenes/logo_transparent.png" width={110}  alt="" />
                        <ul className="flex w-full h-[50px] gap-4 p-4 bg-black text-white text-sm rounded-lg items-center md:text-sm">
                            <li>
                                <Link className="hover:underline transition-all ease-in-out duration-300" to={"/home"}>
                                    Inicio 
                                </Link>
                            </li>
                            <li>
                                <Link  className="hover:underline transition-all ease-in-out duration-300" to={"/carreras"}>
                                    Carreras
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline transition-all ease-in-out duration-300" to={"/carreras"}>
                                    Comunidad
                                </Link>
                            </li>
                            <li>
                                <Link  className="hover:underline transition-all ease-in-out duration-300" to={"/nosotros"}>
                                    Sobre Nosotros
                                </Link>
                            </li>
                        </ul>    
                    </div>
                    <span className= "flex p-10 font-bold text-blue-500 text-[5vh]">       
                        CIENCIAS BIOLOGICAS
                    </span>
                    <div className="flex gap-[10vh] p-5 w-full ">
                        <div className="flex w-[40%] h-[7vh] ml-6 border border-black-400 text-[12px] rounded-[20px] justify-center ">
                            <img  className="flex h-4 ml-2 mt-3 "  src="src/assets/imagenes/lupa.png" height={10} width={20} alt= ""/>
                            <input 
                            type ="text" 
                            id="carrier"  
                            placeholder="Busca por carrera"
                            className="p-4 outline-none w-[80%]"
                            onChange={handleChange} />
                        </div>
                    </div>
                    
                    <div>
                        <div className= "bg-cover grid grid-cols-2 gap-6 mx-10 my-6"> 
                            {carrerafilter.map((carrier) => (
                                <div className= " relative h-[50vh] mt-[4vh] gap-10 p-4  " key={carrier.id} >
                                    <div className="group relative w-[45vh] overflow-hidden cursor-pointer"> 
                                        <div className="relative" >
                                            <img className="h-[40vh] w-[45vh] flex bg-cover rounded-[15px]" src={carrier.url} width={250}/>
                                        </div>
                                        <div className="w-full absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-400 rounded-[20px]"></div>
                                        <div className="absolute inset-0 hover:text-white text-[13px] justify-center items-center text-transparent p-4 text-justify mt-6">
                                            <p>{carrier.Descripcion} </p>
                                        </div>
                                    </div>
                                    <div className="h-[10vh] w-[40vh] absolute bottom-[2vh] left-[6vh] backdrop-blur-lg rounded-[20px] md:bottom-[1vh]">
                                      <Link to={`/carreraspregrado/${encodeURIComponent(carrier.Nombre.toLowerCase().replace(/\s+/g, ''))}`}> <h3 className="flex p-4 text-[15px] font-bold text-center">{carrier.Nombre}</h3> </Link>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>        
                </div>
            </section>
        </>
    );
}
export default CienciasBiologicas;