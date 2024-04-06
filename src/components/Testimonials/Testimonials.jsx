import Slider from 'react-slick';

import { TestimonialCard } from './TestimonialCard';

// importamos data que es un array de objetos con la info de cada testimonios :v
import { cards } from '../../data/data';

import './Testimonials.css';

export const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <section id='testimonials' className="py-20 bg-secondary-light">
            <div className="container-section flex flex-col gap-10">
                <h1 className="font-lora text-center md:text-start font-medium text-5xl text-black">What Do They Say About Us?</h1>
                <p className="font-poppins text-center md:text-start text-xl leading-relaxed mb-5">Discover what our values partners, clients, and supporters have to<br />say
                    about their experiencies with AidManager</p>
                <Slider {...settings}>
                    {
                        cards.map((card, index) =>
                            <TestimonialCard
                                key={index}
                                name={card.name}
                                review={card.review}
                                position={card.position}
                                profile={card.profile}
                            />
                        )
                    }
                </Slider>
            </div>
        </section>
    )
}
