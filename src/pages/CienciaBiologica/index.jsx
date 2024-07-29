
import { useEffect,useState } from "react";

import { getCarriers } from '../../services/getcarriers';
import { Link } from "react-router-dom";
// Importar imagenes
import logo from "../../assets/imagenes/logo_transparent.png";
import lupa from "../../assets/imagenes/lupa.png";



function CienciasBiologicas() {
    
    const [carriers,SetCarriers] = useState([]); // almacen de carreras totales 
    const [inputValue,SetInputValue] = useState('')
    const [carrerafilter, SetCarreraFilter] = useState([]); // almacen de carreras ya filtrada
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCarriers();
                const carrerasBiologicas = data.filter(carrera => carrera.area === 'biologica');
                SetCarriers(carrerasBiologicas);
                SetCarreraFilter(carrerasBiologicas);
                
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            } 
        };
    
        fetchData();
    }, []);
    
    const handleChange = (event) => {
        const value = event.target.value.toLowerCase()
            SetInputValue(value);
        
            if (value === '') {
                // Si el valor está vacío, restablece la lista filtrada a la lista completa de carreras
                SetCarreraFilter(carriers);
            } else {
                const carrierFiltered = carrerafilter.filter((carrier) => {
                    return carrier.name.toLowerCase().includes(value);
                });
    
                SetCarreraFilter(carrierFiltered);
            }
    }

    return (
        <>
            <section>
                <div>
                    <div className="flex mt-2 mr-4 items-center">
                        <img src={logo} width={110}  alt="" />
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
                            <img  className="flex h-4 ml-2 mt-3 "  src={lupa} height={10} width={20} alt= ""/>
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
                                            <img className="h-[40vh] w-[45vh] flex bg-cover rounded-[15px]" src={carrier.image} width={250}/>
                                        </div>
                                        <div className="w-full absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-400 rounded-[20px]"></div>
                                        <div className="absolute inset-0 hover:text-white 
                                            text-[13px] justify-center items-center text-transparent p-4 text-justify mt-6"><p>{carrier.description} </p>
                                        </div>
                                    </div>
                                    <div className="h-[10vh] w-[40vh] absolute bottom-[2vh] left-[6vh] backdrop-blur-lg rounded-[20px] md:bottom-[1vh]">
                                        <Link to={`/carreraspregrado/${encodeURIComponent(carrier.name.toLowerCase().replace(/\s+/g, ''))}`}> <h3 className="flex p-4 text-[15px] font-bold text-center">{carrier.name}</h3>
                                        </Link> 

                                    

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