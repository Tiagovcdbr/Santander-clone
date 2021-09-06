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
    margin-right: 25px;
    
    .slick-dots li button:before
    {
        display: inline-block;
        font-size: 10px;
        line-height: 0px;
        display: block;
        padding: 5px;             
        ...
    }
`

const Wrap = styled.div`
    img {
        position: relative;
        width: 100%;
        margin: 0 auto;
                
    }
`
