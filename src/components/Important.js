import React from 'react'
import styled from "styled-components"

function Important() {
    return (
        <Nav>
            <h1>Importante para você</h1>
                <img src="/images/card1.png" alt="#" />
            <Nav2>
                <img src="/images/card2.png" alt="#" />
            </Nav2>
            <Prev>
                <img src="/images/prev.png" alt="#" />
            </Prev>
            <Next>
                <img src="/images/next.png" alt="#" />
            </Next>
            <Card>
                <img src="/images/item1.png" alt="#"/>
            </Card>
        </Nav>
        
    )
}

export default Important

const Nav = styled.div`   
    h1 {
        position: absolute;
        font-size: 2rem;
        line-height: 1.5;
        margin-bottom: 2rem;
        margin-top: 1rem;
        font-weight: 400;
        margin-top: 200px;
        margin-left: 390px;
    }

    img {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        margin-left: 390px;
        margin-top: 300px;
        border-radius: 6px;
    }
`

const Nav2 = styled.div`
    img {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        margin-left: 965px;
        margin-top: 300px;
        border-radius: 6px;
    }
`

const Prev = styled.div`
    cursor: pointer;
    position: absolute;
    margin-left: -50px;
    margin-top: -240px;
`

const Next = styled.div`
    cursor: pointer;
    position: absolute;
    margin-left: 1130px;
    margin-top: -242px;

`

const Card = styled.div`
    position: absolute;
    margin-top: 588px;
    margin-left: -3px;
`

