import React from 'react'
import styled from "styled-components"

function Suport() {
    return (
        <Nav>
            <h1>Facilite seu dia a dia com nosso autoatendimento</h1>
            <Navmenu>

            </Navmenu>
        </Nav>
    )
}

export default Suport

const Nav = styled.div`
    h1 {
        position: absolute;
        font-size: 2rem;
        line-height: 1.5;
        margin-bottom: 2rem;
        font-weight: 400;
        color: #222;
        margin-top: 800px;
        margin-left: 390px;
    }
`

const Navmenu = styled.img`

`
