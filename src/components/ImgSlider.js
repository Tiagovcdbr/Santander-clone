import React from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 700,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slide1.png" alt="/" />
            </Wrap>
            <Wrap>
                <img src="/images/slide2.png" alt="/" />
            </Wrap>
            <Wrap>
                <img src="/images/slide3.png" alt="/" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`

    cursor: pointer;
    
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
        width: 100%;
        height: 100%;
    }
`
