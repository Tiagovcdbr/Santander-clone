import React from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

function Tips() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return (
        <Nav>
            <h1>Veja também</h1>
            <Cards>
                <img src="/images/tips1.png" alt="#"/>
            </Cards>
            <Cards2>
                <img src="/images/tips2.png" alt="#"/>
            </Cards2>
            <Cards3>
                <img src="/images/tips3.png" alt="#"/>
            </Cards3>
            <Cards4>
                <img src="/images/tips4.png" alt="#"/>
            </Cards4>
                <h2>Outras marcas do Grupo Santander Brasil</h2>
            <Carousel {...settings} >
                <Wrap>
                    <img src="/images/slider1.png" alt="#" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider2.png" alt="#" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider3.png" alt="#" />
                </Wrap>
            </Carousel>
        </Nav>
    )
}

export default Tips

const Nav = styled.div`
    h1 {
        position: absolute;
        font-size: 2rem;
        font-size: 2rem;
        line-height: 1.5;
        margin-bottom: 3rem;
        font-weight: 400;
        color: #222;
        margin-left: 390px;
        margin-top: -90px;
    }

    h2 {
        position: absolute;
        font-size: 2rem;
        line-height: 1.5;
        margin-bottom: 3rem;
        font-weight: 400;
        color: #222;
        margin-left: 390px;
        margin-top: 80px;
    }
`

const Cards = styled.div`
    img {
        cursor: pointer;
        display: flex;
        posiition: absolute;
        margin-Left: 390px;
        margin-top: 1910px;
    }
`

const Cards2 = styled.div`
    img {
        cursor: pointer;
        display: flex;
        position: absolute;
        margin-left: 678px;
        margin-top: -258px;
    }
`

const Cards3 = styled.div`
    img {
        cursor: pointer;
        display: flex;
        position: absolute;
        margin-left: 968px;
        margin-top: -258px;
    }
`

const Cards4 = styled.div`
    img {
        cursor: pointer;
        display: flex;
        position: absolute;
        margin-left: 1256px;
        margin-top: -258px;
    }
`

const Carousel = styled(Slider)`
    .slick-prev:before,
    .slick-next:before {
    color: black !important;
    }

    .slick-next:before {
        display: flex;
        position: relative;
        margin-left: -27px;        
    }
    
    .slick-next {
    right: 320px;
    margin-top: 85px;
    }

    .slick-prev {
    left: 350px;
    margin-top: 87px;
    }

    .slick-arrow.slick-prev {
  display: none;
}
`

const Wrap = styled.div`
    img {
        cursor: pointer;
        margin-top: 200px;
        margin-left: 385px;
        border-box: none;
    }
`
