import '../estilos/api.css'
import { useEffect, useState } from 'react'; //Hooks

const Api = (props) => {

    const [cargando, setCargando]= useState(false);
    const [personajes, setPersonajes]= useState([]);

    useEffect(()=> {
        const cargarDatos = async() =>{
            setCargando(true);
            const res = (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false);
        }
        cargarDatos();
    }, []);

//fetch > para traer los datos nativos de JS. Tambien se puede utilizar  axios(instalar dependencia)


    return (
        <>
            <h2>Datos API</h2>
            {cargando ? <p>Cargando datos...</p> : (
            <div className="personajes">
                <div className='personaje'>
                    {/* <h4>Nombre del personaje</h4> */}
                    <div className="ficha">
                        <div className="foto">
                            <img src="https://fakeimg.pl/150x150?text=img" alt="foto" />
                        </div>
                        <div className="datos">
                            <h6> Especie: Humano o no </h6>
                            <h6> Vivo: si o no </h6>
                        </div>
                    </div>
                </div>
            </div>
            )} {/*termina el operador ternario de la lunea 25*/}

        </>
    )
}

export default Api;