import React from 'react'
import styled from "styled-components"

function Important() {
    return (
        <Nav>
            <h1>Importante para você</h1>
            <h4>Facilite seu dia a dia com nosso autoatendimento</h4>
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
            <Card2>
                <img src="/images/item2.png" alt="#"/>
            </Card2>
            <Card3>
                <img src="/images/item3.png" alt="#"/>
            </Card3>
            <Card4>
                <img src="/images/item4.png" alt="#"/>
            </Card4>
            <Card5>
                <img src="/images/item5.png" alt="#"/>
            </Card5>
            <Card6>
                <img src="/images/item6.png" alt="#"/>
            </Card6>
            <h2>Tem alguma dúvida sobre os serviços?</h2>
            <h3>Acesse nossa Central de Atendimento</h3>
            <SlideImg>
                <img src="/images/bigslide.png" alt="#" />
            </SlideImg>
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

    h2 {
        position: absolute;
        margin-top: 1085px;
        margin-left: 388px;
        font-size: 19px;
        letter-spacing: -.02em;
        line-height: 1.8;
        font-weight: 400;
        color: #222;
    }

    h3 {
        cursor: pointer;
       position: absolute;
        margin-top: 1085px;
        margin-left: 700px;
        font-size: 19px;
        letter-spacing: -.02em;
        line-height: 1.8;
        font-weight: 500;
        color: #c00 !important;
        text-decoration: underline !important; 
    }

    h4 {
        position: absolute;
        font-size: 2rem;
        line-height: 1.5;
        font-weight: 400;
        color: #222;
        margin-top: 800px;
        margin-left: 390px;
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

const Card2 = styled.div`
    position: absolute;
    margin-top: 588px;
    margin-left: 190px;
`

const Card3 = styled.div`
    position: absolute;
    margin-top: 588px;
    margin-left: 380px;
`

const Card4 = styled.div`
    position: absolute;
    margin-top: 588px;
    margin-left: 574px;
`

const Card5 = styled.div`
    position: absolute;
    margin-top: 588px;
    margin-left: 768px;
`

const Card6 = styled.div`
    cursor: pointer;
    position: absolute;
    margin-top: 588px;
    margin-left: 958px;
`

const SlideImg = styled.div`
    img {
        position: absolute;
        margin-top: 1220px;
        margin-left: 390px;
        cursor: pointer;
    }
`

