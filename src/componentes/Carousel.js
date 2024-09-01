import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import { Link } from "react-router-dom";
import bandALL from '../componentes/bandALL.jpg';
import henrique from '../componentes/henrique.jpg';
import ferreira from '../componentes/Ferreira.jpg';
import victor from '../componentes/victor.jpg';
import gabriel from'../componentes/gabriel.jpg';
import raphalski from '../componentes/raphalski.jpg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

const members = [
    {
        name: 'Away From The Sun',
        description: 'Metalcore band influenced by: Gojira, Chieldren of Bodom, At The Gates',
        image: bandALL,
        socials: [
            {plataform: 'Spotify', link: 'spotify....'},
            {plataform: 'Instagram', link: 'instagram....'},
            {plataform: 'YouTube', link: 'youtube....'},
        ],
    },
    {
        name: 'Henrique',
        description: 'Drummer',
        image: henrique,
        socials: [
            {plataform: 'instagram', link: 'instagram....'},
        ],
    },
    {
        name: 'Lucas Ferreira',
        description: 'Lead Guitarist',
        image: ferreira,
        socials: [
            {plataform: 'instagram', link: 'instagram....'},
        ],
    },
    {
        name: 'Gabriel Henrique',
        description: 'Vocalist',
        image: gabriel,
        socials: [
            {plataform: 'instagram', link: 'instagram....'},
        ],
    },
    {
        name: 'Victor Soffi',
        description: 'Bassist',
        image: victor,
        socials: [
            {plataform: 'instagram', link: 'instagram....'},
        ],
    },
    {
        name: 'Lucas Raphalski',
        description: 'Rythim Guitarist',
        image: raphalski,
        socials: [
            {plataform: 'instagram', link: 'instagram....'},
        ],
    },
];



    return(
        <Slider {...settings} className={styles.carousel}>
            {members.map((member, index)=>(
                <div key={index} className={styles.slide}>
                    <img src = {member.image} alt={member.name} className={styles.memberImage}/>
                <div className={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <p>{member.description}</p>
                    <div className={styles.socialButtons}>
                        {member.socials.map((social, idx) =>(
                            <a key={idx} href={social.socialLink} className={styles.socialButton}>
                                {social.plataform}
                            </a>
                        ))}
                    </div>                
                </div>                
                
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;