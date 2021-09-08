import React from 'react';
import styled from 'styled-components';
import LockIcon from '@material-ui/icons/Lock';

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
            <input type="text" class="login" placeholder="Insira seu CPF" />
            <span><LockIcon style={{ fontSize: 16 }} /></span>
            <span2>Acessar</span2>
            <span3>Pessoa física</span3>
            <span4>Pessoa jurídica</span4>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    position: sticky;
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
        cursor: pointer;
        text-decoration: none;

            &:hover {
                content: "";                             
                display: flex;                            
                height: 2px;
                text-decoration: underline;
                color: #c00;
                opacty: 0;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);
            }    
    }

    h2 {
        display: flex;
        align-items: center;
        margin-left: 30px;
        font-size: 17px;
        color: #222;
        font-weight: 400;
        cursor: pointer;
        
            &:hover {
                text-decoration: underline;
                color: black;
                transform-origin: left center;
                transform: scaleX(1);               
                opacty: 0;
                transform-origin: left center;
                transition: all 250ms;
                transform: scaleX(1);                
            }
        }

        input {
            position: absolute;
            display: flex;
            margin-left: 46px;
            letter-spacing: -.05em;
            line-height: 1.1;
            font-weight: 600;
            color: #888;
            transition: color 1s, opacity 1s;
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
            margin-top: -2px;
            box-shadow: inset 0 -2px 0 0 #ccc;            
        }

        .login {
            font-size: 13px;
            margin-left 1440px;
            margin-bottom: 6px;
            box-shadow: 0px 0 1px 1px #999;
            width: 146px;
            height: 20px;
            padding: .4rem !important;
            background-color: #f0f0f0;
            color: #444;            
        }

        span {
            display: flex;
            position: relative;
            margin-top: 25px;
            margin-left: 210px;    
        }

        span2 {
            display: flex;
            position: relative;
            margin-bottom: 36px;
            margin-left: -145px;
        }

        span3 {
            cursor: pointer;
            display: flex;
            position: relative;
            margin-bottom: 36px;
            margin-left: 13px;
        }

        span4 {
            cursor: pointer;
            display: flex;
            position: relative;
            margin-bottom: 36px;
            margin-left: 13px;
            text-decoration: underline;
            color: #c00;
        }
`

const Logo = styled.img`
    cursor: pointer;
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


