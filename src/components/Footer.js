import React from 'react'
import styled from "styled-components"

function Footer() {
    return (
        <Container>
            <Column1>
                <h1>Produtos e Serviços</h1>
                <span>Conta corrente</span>
                <span2>Cartões de crédito</span2>
                <span3>Seguros</span3>
                <span4>Crédito e Financiamentos</span4>
                <span5>Investimentos</span5>
                <span6>Tarifas e pacotes de serviços</span6>
                <span7>Para sua Empresa</span7>
            </Column1>
            <Column2>
                <h1>Sobre o Santander</h1>
                <span>Sobre nós</span>
                <span2>Imprensa</span2>
                <span3>Educação Financeira</span3>
                <span4>Trabalhe conosco</span4>
            </Column2>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    height: 710px;
    margin-top: 20px;
    background-color: #222;
`

const Column1 = styled.div`
    h1 {
        position: absolute;
        font-size: 1.5rem;
        margin-bottom: 2.5rem;
        font-weight: 400;
        color: #fff;
        margin-left: 390px;
        margin-top: 60px;             
    }

    span {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 390px;
        margin-top: 130px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }

    span2 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 390px;
        margin-top: 175px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }

    span3 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 390px;
        margin-top: 215px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }

    span4 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 390px;
        margin-top: 255px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }

    span5 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 390px;
        margin-top: 297px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }

    span6 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 390px;
        margin-top: 340px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }

    span7 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 390px;
        margin-top: 380px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }
`

const Column2 = styled.div`
    h1 {
        position: absolute;
        font-size: 1.5rem;
        margin-bottom: 2.5rem;
        font-weight: 400;
        color: #fff;
        margin-left: 670px;
        margin-top: 60px;             
    }

    span {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 670px;
        margin-top: 130px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }

    span2 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 670px;
        margin-top: 174px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }

    }span3 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 670px;
        margin-top: 215px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }

    span4 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 670px;
        margin-top: 255px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }
`
