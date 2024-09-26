import Slider from 'react-slick';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleChevronLeft, faCircleChevronRight, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.css';



const Modal = () =>{
    const galleryImages = [
        {
            img: 'https://i.scdn.co/image/ab67616d00001e02886138b13b71b770ab5faeab',
            description: 'Capa do album "BLAZELESS"'
        },
        {
            img: 'https://i.scdn.co/image/ab67616d00001e02479b0640a266681c30f65270',
            description: 'Capa do album "UNITY"'
        },
        {
            img: 'https://i.scdn.co/image/ab67616d00001e0274de59dc45756f92a606a2a6',
            description: 'Capa do album "ANIMA"'
        },
        {
            img: 'https://i.scdn.co/image/ab67616d00001e02de3e6a4c47898da8b9858d84',
            description: 'Capa do single "EMPTY DEVICES"'
        },
        {
            img: 'https://i.scdn.co/image/ab67616d00001e02b04104dfbcdde0af57844ee8',
            description: 'Capa do single "GREED"'
        },
        {
            img: 'https://i.scdn.co/image/ab67616d00001e0212e18ecf007f6b77235adcf6',
            description: 'Capa do single "JOURNEY"'
        },
        {
            img: 'https://i.scdn.co/image/ab67616d00001e021bef4ab50cce6d739c995f6d',
            description: 'Capa do single "RISING SUN"'
        },
        
    ]
    




    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = (index) =>{
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber (galleryImages.length - 1): setSlideNumber (slideNumber - 1)
    }
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length ? setSlideNumber(0): setSlideNumber(slideNumber +1)
    }
    const handleOverlayClick = (event) =>{
        if (event.target.classList.contains(styles.sliderWrap)){
            handleCloseModal();
        }
    }



return(
    <div>
        {openModal &&
            <div className={styles.sliderWrap} onClick={handleOverlayClick}>
                <FontAwesomeIcon icon ={faCircleXmark} className={styles.btnClose} onClick={handleCloseModal} onContextMenu={(event) => event.preventDefault()}/>
                <FontAwesomeIcon icon ={faCircleChevronLeft} className={styles.btnPrev} onClick={prevSlide} onContextMenu={(event) => event.preventDefault()}/>
                <FontAwesomeIcon icon ={faCircleChevronRight} className={styles.btnNext} onClick={nextSlide} onContextMenu={(event) => event.preventDefault()}/>
                <div className={styles.fullScreenImage}>
                    <img src={galleryImages[slideNumber].img} alt=''/>
                    <p className={styles.description}>{galleryImages[slideNumber].description}</p>
                </div>
            </div>
        }
        <div className={styles.galleryWrap}>
            {
                galleryImages && galleryImages.map((slide, index)=> {
                    return(
                        <div 
                            className={styles.single}
                            key={index}
                            onClick={()=> handleOpenModal(index)}
                        >
                            <img src={slide.img} alt="" />
                        </div>
                    )
                })
            }

        </div>
    </div>
)





}
export default Modal;