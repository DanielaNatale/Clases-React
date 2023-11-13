import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../components/Props";

const frutas=['banana','uva','manzana','frambuesa'];

const mostrarValor= valor =>{
    console.log(valor);
}

const Ejemplo1 = (props) => {

    return (
        <div>
        <h1>Ejemplo de props</h1>
        {/* propiedad simple y reutilizable */}
        
        <EjemploProps1 nombre='Flavia' /> 

        <EjemploProps1/> {/*solo muestra un hola sin nombre*/}
        {/*listado de elementos*/}

        <EjemploProps2 elementos={frutas}/>

        <h4>Ejemplo de modelo de noticia</h4>
        <EjemploProps3 titulo='Futbol messi' subtitulo='gano el 8vo balon de oro' cuerpo='otra vez messi hace historia etc etc'/>

        <EjemploProps4 cambiarValor={mostrarValor} /> {/*Este elemento necesita si o si pasarle mostrarValor*/}

        <EjemploProps5/>
        <EjemploProps5 eventoClick= {mostrarValor}/>
        </div>
    )
}

export default Ejemplo1;