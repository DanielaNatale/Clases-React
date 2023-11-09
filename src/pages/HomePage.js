import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import '../estilos/Home.css'

const HomePage = (props) => {

    const settings = {
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed:3000,
        fade:true,
        autoplay:true
    };

    return (
        <div className="galeria">
            <Slider {...settings}>
            <img src="/images/img01.jpg" alt="imagen 01" />
            <img src="/images/img02.jpg" alt="imagen 02" />
            <img src="/images/img03.jpg" alt="imagen 03" />
            <img src="/images/img04.jpg" alt="imagen 04" />
            </Slider>
        </div>

    )
}

export default HomePage;