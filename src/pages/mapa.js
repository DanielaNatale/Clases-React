import '../estilos/mapa.css'

const Mapa = props =>{
    return(
        <div className="mapa">
        <h2>Ubicacion</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46827.32898259654!2d-1.6909447000705058!3d42.81565492741064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5092f6fc10d411%3A0x4018c6508cef7f0!2sPamplona%20%2F%20Iru%C3%B1a%2C%20Navarra!5e0!3m2!1ses-419!2ses!4v1700035703772!5m2!1ses-419!2ses" style={{ width:600, height:450, border:0 }}></iframe>"
        </div>
    )
}

export default Mapa;