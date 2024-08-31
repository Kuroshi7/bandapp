import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import { Link } from "react-router-dom";

const Carousel = ({ members }) => {
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
        description: 'Metalcore band influenced by: 1 2 3 4',
        image: 'path to image',
        socials: [
            {plataform: 'Spotify', link: 'spotify....'},
            {plataform: 'instagram', link: 'instagram....'},
            {plataform: 'youtube', link: 'youtube....'},
        ],
    },
    {
        name: 'Henrique',
        description: 'Drummer',
        image: 'path to image',
        socials: [
            {plataform: 'instagram', link: 'instagram....'},
        ],
    },
    {
        name: 'Lucas Ferreira',
        description: 'Lead Guitarist',
        image: 'path to image',
        socials: [
            {plataform: 'instagram', link: 'instagram....'},
        ],
    },
    {
        name: 'Gabriel Henrique',
        description: 'Vocalist',
        image: 'path to image',
        socials: [
            {plataform: 'instagram', link: 'instagram....'},
        ],
    },
    {
        name: 'Victor Soffi',
        description: 'Bassist',
        image: 'path to image',
        socials: [
            {plataform: 'instagram', link: 'instagram....'},
        ],
    },
    {
        name: 'Lucas Raphalski',
        description: 'Rythim Guitarist',
        image: 'path to image',
        socials: [
            {plataform: 'instagram', link: 'instagram....'},
        ],
    },
];



    return(
        <Slider {...settings} className={styles.carousel}>
            {members.map((member, index)=>(
                <div key={index} className={styles.slide}>
                    <img src = {member.image} alt={member.name} className={style.memberImage}/>
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