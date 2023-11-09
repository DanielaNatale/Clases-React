import { EjemploProps1, EjemploProps2, EjemploProps3 } from "../components/Props";
const frutas=['banana','uva','manzana','frambuesa'];

const Ejemplo1 = (props) => {

    return (
        <div>
        <h1>Ejemplo de props</h1>
        {/* propiedad simple y reutilizable */}
        <EjemploProps1 nombre='Flavia' /> 
        <EjemploProps1/> {/*solo muestra un hola sin nombre*/}
        {/*listado de elementos*/}
        <EjemploProps2 elementos={frutas}/>
        <EjemploProps3 titulo='Futbol messi' subtitulo='gano el 8vo balon de oro' cuerpo='otra vez messi hace historia etc etc'/>
        </div>
    )
}

export default Ejemplo1;