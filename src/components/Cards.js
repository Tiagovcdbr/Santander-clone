/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import $ from 'jquery';


function Cards() {

    return (
        <Group  >
            <CardSlick>
                <h1>Dá uma olhadinha em tudo que temos</h1>
                <Slide>
                    <img src="/images/img1.png" alt="slide" />
                    <h4>Abra sua conta</h4>
                </Slide>
                <Slide2>
                    <img src="/images/img2.png" alt="slide" />
                    <h4>Empréstimo para você</h4>
                </Slide2>
                <Slide3>
                    <img src="/images/img3.png" alt="slide" />
                    <h4>Peça seu cartão</h4>
                </Slide3>
                <Slide4>
                    <img src="/images/img4.png" alt="slide" />
                    <h4>Renegocie sua dívida</h4>
                </Slide4>
                <Slide5>
                    <img src="/images/img5.png" alt="slide" />
                    <h4>Crédito pessoal</h4>
                </Slide5>
                <Slide6>
                    <img src="/images/img6.png" alt="slide" />
                    <h4>Quero investir</h4>
                </Slide6>
                <Slide7>
                    <img src="/images/img7.png" alt="slide" />
                    <h4>Portabilidade Santander</h4>
                </Slide7>
            </CardSlick>
        </Group>
    )
}

export default Cards

const Group = styled(Slider)`
    width: 100%;
    height: 100px;
    margin-top: -10px;
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);

`

const CardSlick = styled.div`
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        line-height: 1.5;
        margin: 0 0 1.5rem 0;
        font-weight: 400;
        margin-top: 18px;
        margin-right: 600px;
    }
`

const Slide = styled.div`
    img {
        position: absolute;
        margin-top: 10px;
    }
    
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: center;
    margin-left: 390px;
    margin-top: 40px;
    border: 1px solid #767676;
    border-bottom: 2px solid #767676;
    border-radius: 6px;
    width: 110px;
    height: 110px;  
    padding: 0.65%;
    
    h4 {
        position: absolute;
        margin-top: 68px;
        font-size: .9rem;
        text-align: center;
        line-height: 1.56;
        max-width: 7rem;
        font-weight: 400;
    }
`

const Slide2 = styled.div`
    img {
        position: absolute;
        margin-top: 10px;
    }
    
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: center;
    margin-left: 557px;
    margin-top: -137px;
    border: 1px solid #767676;
    border-bottom: 1px solid #767676;
    border-radius: 6px;
    width: 110px;
    height: 110px;   
    padding: 0.65%;
    
    h4 {
        position: absolute;
        margin-top: 62px;
        font-size: .9rem;
        text-align: center;
        line-height: 1.56;
        max-width: 7rem;
        font-weight: 400;
    }
`

const Slide3 = styled.div`
    img {
        position: absolute;
        margin-top: 10px;
    }
    
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: center;
    margin-left: 724px;
    margin-top: -137px;
    border: 1px solid #767676;
    border-bottom: 1px solid #767676;
    border-radius: 6px;
    width: 110px;
    height: 110px;   
    padding: 0.65%;       
    
    h4 {
        position: absolute;
        margin-top: 68px;
        font-size: .9rem;
        text-align: center;
        line-height: 1.56;
        max-width: 7rem;
        font-weight: 400;
    }
`

const Slide4 = styled.div`
    img {
        position: absolute;
        margin-top: 10px;
    }
    
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: center;
    margin-left: 890px;
    margin-top: -137px;
    border: 1px solid #767676;
    border-bottom: 1px solid #767676;
    border-radius: 6px;
    width: 110px;
    height: 110px;  
    padding: 0.65%;      
    
    h4 {
        position: absolute;
        margin-top: 60px;
        font-size: .9rem;
        text-align: center;
        line-height: 1.56;
        max-width: 7rem;
        font-weight: 400;
    }
`

const Slide5 = styled.div`
    img {
        position: absolute;
        margin-top: 10px;
    }
    
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: center;
    margin-left: 1055px;
    margin-top: -137px;
    border: 1px solid #767676;
    border-bottom: 2px solid #767676;
    border-radius: 6px;
    width: 110px;
    height: 110px;  
    padding: 0.65%;       
    
    h4 {
        position: absolute;
        margin-top: 75px;
        font-size: .9rem;
        text-align: center;
        line-height: 1.56;
        max-width: 7rem;
        font-weight: 400;
    }
`

const Slide6 = styled.div`
    img {
        position: absolute;
        margin-top: 10px;
    }
    
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: center;
    margin-left: 1220px;
    margin-top: -137px;
    border: 1px solid #767676;
    border-radius: 6px;
    width: 110px;
    height: 110px;  
    padding: 0.65%;       
    
    h4 {
        position: absolute;
        margin-top: 75px;
        font-size: .9rem;
        text-align: center;
        line-height: 1.56;
        max-width: 7rem;
        font-weight: 400;
    }
`

const Slide7 = styled.div`
    img {
        position: absolute;
        margin-top: 10px;
    }
    
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: center;
    margin-left: 1382px;
    margin-top: -137px;
    border: 1px solid #767676;
    border-radius: 6px;
    width: 110px;
    height: 110px;  
    padding: 0.65%;       
    
    h4 {
        position: absolute;
        margin-top: 65px;
        font-size: .9rem;
        text-align: center;
        line-height: 1.56;
        max-width: 7rem;
        font-weight: 400;
    }
`

