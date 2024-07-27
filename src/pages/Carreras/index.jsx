import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getCarriers } from '../../services/getcarriers';

import logo from "../../assets/imagenes/logo_transparent.png";
import lupa from "../../assets/imagenes/lupa.png";




function Carreras() {
    const [carriers, setCarriers] = useState([]); // Almacén de carreras totales 
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();
    const [carrerafilter, SetCarreraFilter] = useState([]); 

    const fetchData = async () => {
        try {
            const data = await getCarriers();
            setCarriers(data)
            SetCarreraFilter(data);

        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error);
        }
    };

    useEffect(() => {
        fetchData(); // Llama a fetchData cuando el componente se monta
    }, []); 

    const handleChange = (event) => {
        const value = event.target.value.toLowerCase();
        setInputValue(value);

        if (value === '') {
            // Si el valor está vacío, restablece la lista filtrada a la lista completa de carreras
            SetCarreraFilter(carriers);
        } else {
            const carrierFiltered = carrerafilter.filter((carrier) => {
                return carrier.name.toLowerCase().includes(value);
            });

            SetCarreraFilter(carrierFiltered);
        }
    };

    const handleNavigation = () => {
        if (selectedOption === 'cienciasalud') {
            navigate('/cienciasalud');
        } else if (selectedOption === 'cienciasbiologicas') {
            navigate('/cienciasbiologicas');
        }
    };

    useEffect(() => {
        if (selectedOption) {
            handleNavigation();
        }
    }, [selectedOption]);


    const handleChanges = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <section>
                <div>
                    <div className="flex mt-2 mr-4 items-center">
                        <img src={logo} width={85} alt="" />
                        <ul className="flex w-full h-[50px] gap-4 p-4 bg-black text-white text-sm rounded-lg items-center md:text-sm">
                            <li>
                                <Link className="hover:underline transition-all ease-in-out duration-300" to={"/home"}>
                                    Inicio 
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline transition-all ease-in-out duration-300" to={"/carreras"}>
                                    Carreras
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline transition-all ease-in-out duration-300" to={"/comunidad"}>
                                    Comunidad
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline transition-all ease-in-out duration-300" to={"/nosotros"}>
                                    Sobre Nosotros
                                </Link>
                            </li>
                        </ul>    
                    </div>
                    <span className="relative p-5 text-[#0EA5E9] text-[5vh] font-bold">       
                        Carreras de Pregrado
                    </span>
                    <div className="flex gap-[8vh] p-5 w-full">
                        <div className="flex w-[40%] h-[7vh] ml-6 border border-black-400 text-[12px] rounded-[20px] justify-center">
                            <img className="flex h-4 ml-2 mt-3" src={lupa} height={10} width={20} alt=""/>
                            <input 
                                type="text" 
                                id="carrier"  
                                placeholder="Busca por carrera"
                                className="p-4 outline-none w-[80%]"
                                value={inputValue}
                                onChange={handleChange}
                            />
                        </div>
                        <select className="flex w-[40%] p-2 h-[7vh] border border-black-400 text-[12px] rounded-[20px] text-gray-400 outline-none" value={selectedOption} onChange={handleChanges}> 
                            <option>Busca por área de especialidad</option>
                            <option value="cienciasalud">Ciencias de la Salud</option>
                            <option value="cienciasbiologicas">Ciencias Biologicas</option> 
                            <option>Ciencias e Ingeniería</option>
                            <option>Ciencias de la Tierra</option>
                            <option>Humanidades y Ciencias Sociales</option>                   
                        </select>
                    </div>
                    
                    <div>
                        <div className="flex bg-cover grid grid-cols-1 gap-6 mx-5 my-3 md:grid md:grid-cols-4"> 
                            {carrerafilter.map((carrier) => (
                                <div className="relative h-[50vh] mt-[4vh] gap-10 p-4" key={carrier.id}>
                                    <div className="group relative w-[45vh] overflow-hidden cursor-pointer"> 
                                        <div>
                                            <img className="h-[40vh] w-[45vh] flex bg-cover rounded-[15px]" src={carrier.image} alt={carrier.name} />
                                        </div>
                                        <div className="w-full absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-400 rounded-[20px]"></div>
                                        <div className="absolute inset-0 hover:text-white text-[15px] justify-center items-center text-transparent p-4 text-justify mt-6">
                                            <p>{carrier.description}</p>
                                        </div>
                                    </div>
                                    <div className="h-[10vh] w-[40vh] absolute bottom-[2vh] left-[6vh] backdrop-blur-lg rounded-[20px] md:bottom-[1vh]">
                                        <Link to={`/CarrerasPregrado/${encodeURIComponent(carrier.name)}`}> 
                                            <h3 className="flex p-4 text-[15px] font-bold text-center">{carrier.name}</h3>
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
export default Carreras;
