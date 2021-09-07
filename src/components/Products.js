import React from 'react'
import styled from "styled-components";

function Products() {
    return (
        <Nav>
            <h1>Confira outros produtos dos nossos parceiros</h1>
            <NavMenu>
                <img src="/images/bigcard1.png" alt="#" />
            </NavMenu>
            <NavMenu2>
                <img src="/images/bigcard2.png" alt="#" />
            </NavMenu2>
            <NavMenu3>
                <img src="/images/bigcard3.png" alt="#" />
            </NavMenu3>
        </Nav>
    )
}

export default Products

const Nav = styled.div`
    h1 {
        position: absolute;
        font-size: 2rem;
        line-height: 1.5;
        margin-bottom: 3rem;
        font-weight: 400;
        color: #222;
        margin-top: 55px;
        margin-left: 390px;
    }
`

const NavMenu = styled.div`
    img {
        cursor: pointer;
        position: absolute;
        margin-left: 388px;
        margin-top: 150px;
    }
`

const NavMenu2 = styled.div`
    img {
        cursor: pointer;
        position: absolute;
        margin-left: 772px;
        margin-top: 150px;
    }
`

const NavMenu3 = styled.div`
    img {
        cursor: pointer;
        position: absolute;
        margin-left: 1155px;
        margin-top: 150px;
    }
`
