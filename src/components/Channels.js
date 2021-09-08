import React from 'react'
import styled from "styled-components"

function Channels() {
    return (
        <Details>
            <h1>Conheça os nossos canais digitais</h1>
            <h4>Você consegue fazer tudo o que faria em uma agência Santander</h4>
            <span>Como se digitalizar?</span>
            <Apps>
                <img src="/images/info1.png" alt="#" />
            </Apps>
            <Apps2>
                <img src="/images/info2.png" alt="#" />
            </Apps2>
            <Apps3>
                <img src="/images/info3.png" alt="#" />
            </Apps3>
            <Apps4>
                <img src="/images/info4.png" alt="#" />
            </Apps4>
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
        cursor: pointer;
        position: absolute;
        text-decoration: underline;
        color: #c00;
        font-size: 1rem;
        font-weight: 400;
        margin-top: 1405px;
        margin-left: 1355px;
    }
`

const Apps = styled.div`
    img {
        cursor: pointer;
        position: absolute;
        margin-left: 390px;
        margin-top: 1570px;
    }
`

const Apps2 = styled.div`
    img {
        cursor: pointer;
        position: absolute;
        margin-left: 678px;
        margin-top: 1570px;
    }
`

const Apps3 = styled.div`
    img {
        cursor: pointer;
        position: absolute;
        margin-left: 968px;
        margin-top: 1570px;
    }
`

const Apps4 = styled.div`
    img {
        cursor: pointer;
        position: absolute;
        margin-left: 1256px;
        margin-top: 1570px;
    }
`