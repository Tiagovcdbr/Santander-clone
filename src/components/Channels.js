import React from 'react'
import styled from "styled-components"

function Channels() {
    return (
        <Details>
            <h1>Conheça os nossos canais digitais</h1>
            <h4>Você consegue fazer tudo o que faria em uma agência Santander</h4>
            <span>Como se digitalizar?</span>
        </Details>
    )
}

export default Channels

const Details = styled.div`
    h1 {
        position: absolute;
        font-size: 2rem;
        line-height: 1.5;
        margin-top: 1390px;
        margin-left: 390px;
        font-weight: 400;
        color: #222;
    }

    h4 {
        position: absolute;
        color: #222;
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 400;
        margin-top: 1450px;
        margin-left: 390px;
    }

    span {
        position: absolute;
        text-decoration: underline;
        color: #c00;
        font-size: 1rem;
        font-weight: 400;
        margin-top: 1405px;
        margin-left: 1350px;
    }
`