import alumnos from '../data/alumnos.json';

const Json = props =>{
    
    return(
        <div>
            <h2>Ejemplo carga datos de Json</h2>
            <ul>
                {alumnos.map(alumno =>(
                    <li>{alumno.nombre} {alumno.apellido} / {alumno.edad} anios</li>
                ))}
            </ul>
        </div>
    )
}

export default Json;