/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <Column3>
                <h1>Fale com a gente</h1>
                <span>Central de Atendimento</span>
                <span2>Central de Renegociação</span2>
                <span3>SAC</span3>
                <span4>Ouvidoria</span4>
                <span5>Encontre nossas agências</span5>
                <span6>Horários de Atendimento</span6>
                <span7>Telefones</span7>
                <span8>Fraudes</span8>
            </Column3>
            <Column4>
                <h1>Redes sociais</h1>
                <a>
                    <img src="/images/rede1.png" alt="#" />
                </a>
                <a2>
                    <img src="/images/rede2.png" alt="#" />
                </a2>
                <a3>
                    <img src="/images/rede3.png" alt="#" />
                </a3>
                <a4>
                    <img src="/images/rede4.png" alt="#" />
                </a4>
                <a5>
                    <img src="/images/rede5.png" alt="#" />
                </a5>                
            </Column4>
                <div id="linha-horizontal"></div>
            <Footer2>
                    <p>© 2021 Banco Santander (Brasil) S.A., CNPJ: 90.400.888/0001-42</p>
                    <p2>Av. Presidente Juscelino Kubitscheck 2041/2235 – Vila Olímpia – São Paulo/SP.</p2>
                <ul>
                    <li>
                        <a href="#" alt="#">Política de Privacidade</a> 
                    </li>
                    <li>
                        <a2 href="#" alt="#">Segurança</a2> 
                    </li>
                    <li>
                        <a3 href="#" alt="#">LGPD</a3> 
                    </li>
                </ul>
            </Footer2>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    height: 710px;
    margin-top: 20px;
    background-color: #222;

    #linha-horizontal {
        position: absolute;
        width: 1122px;
        border: 1px solid #fff;
        margin-top: 515px;
        margin-left: 390px;
}
    
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

    }
    
    span3 {
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

const Column3 = styled.div`
    h1 {
        position: absolute;
        font-size: 1.5rem;
        margin-bottom: 2.5rem;
        font-weight: 400;
        color: #fff;
        margin-left: 950px;
        margin-top: 60px;             
    }

    span {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 950px;
        margin-top: 132px;

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
        margin-left: 950px;
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
    }
    
    span3 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 950px;
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
        margin-left: 950px;
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
        margin-left: 950px;
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
        margin-left: 950px;
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
        margin-left: 950px;
        margin-top: 384px;

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

    span8 {
        position: absolute;
        font-size: 1rem;
        list-style: none;
        line-height: 1.8rem;
        color: #fff;
        margin-left: 950px;
        margin-top: 425px;

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

const Column4 = styled.div`
    h1 {
        position: absolute;
        font-size: 1.5rem;
        margin-bottom: 2.5rem;
        font-weight: 400;
        color: #fff;
        margin-left: 1232px;
        margin-top: 60px;             
    }

    a {
        cursor: pointer;
        position: absolute;
        margin-left: 1230px;
        margin-top: 130px;
    }

    a2 {
        cursor: pointer;
        position: absolute;
        margin-left: 1274px;
        margin-top: 130px;
    }

    a3 {
        cursor: pointer;
        position: absolute;
        margin-left: 1317px;
        margin-top: 130px;
    }

    a4 {
        cursor: pointer;
        position: absolute;
        margin-left: 1360px;
        margin-top: 130px;
    }

    a5 {
        cursor: pointer;
        position: absolute;
        margin-left: 1405px;
        margin-top: 131px;
    }
`

const Footer2 = styled.div`
    p {
        position: absolute;
        letter-spacing: -.02em;
        line-height: 1.8;
        font-weight: 400;
        font-stretch: normal;
        font-style: normal;
        color: #fff;
        font-size: .875rem;
        margin-left: 390px;
        margin-top: 580px;
    }

    p2 {
       position: absolute;
        letter-spacing: -.02em;
        line-height: 1.8;
        font-weight: 400;
        font-stretch: normal;
        font-style: normal;
        color: #fff;
        font-size: .875rem;
        margin-left: 390px;
        margin-top: 612px; 
    }

    li a {
        position: absolute;
        display: inline-block;
        font-size: .880rem;
        color: white;
        margin-left: 1245px;
        margin-top: 596px;

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

    li a2 {
        position: absolute;
        display: inline-block;
        font-size: .880rem;
        color: white;
        margin-left: 1393px;
        margin-top: 575px;
        text-decoration: underline;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 1;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }

    li a3 {
        position: absolute;
        display: inline-block;
        font-size: .880rem;
        color: white;
        margin-left: 1470px;
        margin-top: 554px;
        text-decoration: underline;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 1;
                transform-origin: left center;
                transition: ease all 250ms;
                transform: scaleX(1);                
            }
    }
`
