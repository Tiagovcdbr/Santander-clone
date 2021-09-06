import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <BigHeader>
            <ul class="menu-fixo">
                <li class="fixo1">Meu dia a dia</li>
                <li class="fixo2">Produtos e Serviços</li>
                <li class="fixo3">Open Finance</li>
                <li class="fixo4">Atendimento</li>
                <li class="fixo5">Agências</li>
                <li class="fixo6">Sobre o Santander</li>
            </ul>
        </BigHeader>
    )
}

export default Home

const BigHeader = styled.div`
    .menu-fixo {
        position: sticky;
        font-weight: 400;
        background-color: #9b111e ;
        color: #f0f0f0;
        height: 60px;
        display: flex;
        font-size: 18px;
        flex-direction: inherit;
        justify-content: flex-start;
        align-content: center;
        list-style: none;
        margin-top: 2px;
        padding: 2px;

        &:before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
        }
    }

    .fixo1 {
        cursor: pointer;
        position: relative;
        margin-top: 15px;
        margin-left: 50px;

        &:hover {
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);               
                opacty: 1;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);                
            }
    }

    .fixo2 {
        cursor: pointer;
        position: relative;
        margin-top: 15px;
        margin-left: 50px;

        &:hover {
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);               
                opacty: 1;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);                
            }
    }

    .fixo3 {
        cursor: pointer;
        position: relative;
        margin-top: 15px;
        margin-left: 40px;

        &:hover {
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);               
                opacty: 1;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);                
            }
    }

    .fixo4 {
        cursor: pointer;
        position: relative;
        margin-top: 15px;
        margin-left: 40px;

        &:hover {
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);               
                opacty: 1;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);                
            }
    }

    .fixo5 {
        cursor: pointer;
        position: relative;
        margin-top: 15px;
        margin-left: 40px;

        &:hover {
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);               
                opacty: 1;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);                
            }
    }

    .fixo6{
        cursor: pointer;
        position: relative;
        margin-top: 15px;
        margin-left: 40px;

        &:hover {
                text-decoration: underline;
                color: white;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);               
                opacty: 1;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);                
            }
    }
`


