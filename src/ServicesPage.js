import React from 'react'
import { Link } from 'react-router-dom'
import Navbarpage from './Navbarpage'

const ServicesPage = () => {
    return (
        <>
            <Navbarpage />


            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://wallpaperaccess.com/full/1209397.jpg" class="d-block w-100" height={600} width={300} />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </>
    )
}

export default ServicesPage