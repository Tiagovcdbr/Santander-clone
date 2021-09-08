import React from 'react'
import styled from "styled-components"

function Tips() {
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
            <Group>

            </Group>
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
        display: flex;
        posiition: absolute;
        margin-Left: 390px;
        margin-top: 1910px;
    }
`

const Cards2 = styled.div`
    img {
        display: flex;
        position: absolute;
        margin-left: 678px;
        margin-top: -258px;
    }
`

const Cards3 = styled.div`
    img {
        display: flex;
        position: absolute;
        margin-left: 968px;
        margin-top: -258px;
    }
`

const Cards4 = styled.div`
    img {
        display: flex;
        position: absolute;
        margin-left: 1256px;
        margin-top: -258px;
    }
`

const Group = styled.div`
    
`
