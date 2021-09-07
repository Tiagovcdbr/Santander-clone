import React from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

function HomeSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/bigslide2.png" alt="/" />
            </Wrap>
            <Wrap>
                <img src="/images/bigslide3.png" alt="/" />
            </Wrap>
        </Carousel>
    )
}

export default HomeSlider

const Carousel = styled(Slider)`
    
    
    .slick-dots li button:before
    {   
        display: inline-block;
        font-size: 8px;
        line-height: 0px;
        display: block;
        padding: 5px;             
        ...
    }

    .slick-prev:before,
    .slick-next:before {
    color: transparent !important;
    }

    .slick-next:before {
        display: flex;
        position: relative;
        margin-left: -27px;        
    }
    
    .slick-next {
    right: 25px;
    } 
`

const Wrap = styled.div`
    img {
        cursor: pointer;
        position: relative;
        margin-left: 391px;
        margin-top: 1500px;
        min-height: 21rem !important;
        min-width: 55rem;
    }
`