import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.png" />
            <h1>Para Você</h1>
            <h2>Para sua Empresa</h2>
            <div id="divBusca">
                <input type="text" id="txtBusca" placeholder="O que você procura?" />
                <Search src="https://www.santander.com.br/sites/WPC_CMS/imagem/21-03-26_095020_M_ic_search.svg" id="btnBusca" alt="Buscar" />
                <div class="search-field-container"></div>
            </div>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    padding: 0 10px;

    h1 {
        display: flex;
        align-items: center;
        margin-left: 50px;
        font-size: 18px;
        color: #c00;
        font-weight: 600;         
    }

    h2 {
        display: flex;
        align-items: center;
        margin-left: 30px;
        font-size: 17px;
        color: #222;
        font-weight: 400;
        }

        input {
            position: absolute;
            display: flex;
            margin-left: 46px;
            font-size: 15px;
            width: 850px;
            margin-top: 30px;
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
            box-shadow: 8 4px 15px -4px rgba(0, 0, 0, .25);
            transition: color 1s, opacity 1s;
            overflow: hidden;            
        }
        
        .search-field-container {            
            align-items: center;
            overflow: hidden;
            width: 850px;
            height: 81px;
            display: flex;
            margin-left: 50px;
            margin-top: 2px;
            box-shadow: inset 0 -2px 0 0 #ccc;            
        }
`

const Logo = styled.img`
    display: flex;
    align-items: center;
    width: 148px;
    height: 50px;
    margin-top: 4px;
    margin-bottom: -1px;
    margin-left: 20px;    
`

const Search = styled.img`
    position: absolute;
    height: 20px;
    margin-left: 54rem;
    width: 20px;
    margin-top: 32px;
`


