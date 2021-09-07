import React from 'react'
import styled from "styled-components"

function News() {
    return (
        <Box>
            <h1>Novidades que talvez você se interesse</h1>
            <News1>
                <img src="/images/news1.png" alt="#" />
            </News1>
            <News2>
                <img src="/images/news2.png" alt="#" />
            </News2>
            <News3>
                <img src="/images/news3.png" alt="#" />
            </News3>
            <Left>
                <span>Cursos Online</span>
                <h4>Avançar+: cursos gratuitos para<p></p>quem quer empreender</h4>
                <h5>Avance o seu conhecimento sobre Gestão &<p></p> Negócios com a nova plataforma de conteúdos<p></p> exclusivos do Programa Avançar.</h5>
                <span2>Saiba mais</span2>
            </Left>
            <Center>
                <span>Poupancista</span>
                <h4>Tem apenas conta poupança?<p></p> Agora você pode acessar o app<p></p> Santander.</h4>
                <h5>Tudo na palma da sua mão: no app Santander<p></p> você consulta o extrato, acompanha o saldo e<p></p> ainda pode usar o Pix.</h5>
                <span2>Saiba mais</span2>
            </Center>
            <Right>
                <span>Exposição</span>
                <h4>Lua e Marte a passos de você</h4>
                <h5>A exposição Futuro espacial mostra os próximos<p></p> grandes passos da exploração humana, rumo à<p></p> Lua e Marte. Prepare-se para essa aventura!</h5>
                <span2>Saiba mais</span2>
            </Right>
        </Box>
    )
}

export default News

const Box = styled.div`
    h1 {
        position: absolute;
        font-size: 2rem;
        line-height: 1.5;
        margin-top: 650px;
        margin-left: 390px;
        font-weight: 400;
        color: #222;        
    }
`

const Left = styled.div`
        span {
            position: absolute;
            margin-top: 985px;
            margin-left: 390px;
            display: block;
            font-size: 1rem;
            color: #999;
        }
        
        h4 {
            position: absolute;
            margin-left: 390px;
            color: #222;
            font-size: 1.5rem;
            margin-top: 1025px;
            line-height: 2.25rem;
            font-weight: 400;
        }

        h5 {
            position: absolute;
            margin-left: 390px;
            color: #222;
            font-size: 16px;
            letter-spacing: -.02em;
            line-height: 1.8;
            font-weight: 400;
            font-stretch: normal;
            font-style: normal;
            margin-top: 1110px;
        }

        span2 {
            cursor: pointer;
            position: absolute;
            margin-left: 390px;
            margin-top: 1200px;
            font-size: 1rem;
            font-weight: 400;
            color: #c00 !important;
            text-decoration: underline !important;
        }
`

const Center = styled.div`
        span {
            position: absolute;
            margin-left: 775px;
            margin-top: 985px;
            display: block;
            font-size: 1rem;
            color: #999;
        }

        h4 {
            position: absolute;
            margin-left: 775px;
            color: #222;
            font-size: 1.5rem;
            margin-top: 1025px;
            line-height: 2.25rem;
            font-weight: 400;
        }

        h5 {
            position: absolute;
            margin-left: 775px;
            color: #222;
            font-size: 16px;
            letter-spacing: -.02em;
            line-height: 1.8;
            font-weight: 400;
            font-stretch: normal;
            font-style: normal;
            margin-top: 1150px;
        }

        span2 {
            cursor: pointer;
            position: absolute;
            margin-left: 775px;
            margin-top: 1240px;
            font-size: 1rem;
            font-weight: 400;
            color: #c00 !important;
            text-decoration: underline !important;
        }
`

const Right = styled.div`
        span {
            position: absolute;
            margin-left: 1160px;
            margin-top: 985px;
            display: block;
            font-size: 1rem;
            color: #999;
        }

        h4 {
            position: absolute;
            margin-left: 1160px;
            color: #222;
            font-size: 1.5rem;
            margin-top: 1025px;
            line-height: 2.25rem;
            font-weight: 400;
        }

        h5 {
            position: absolute;
            margin-left: 1160px;
            color: #222;
            font-size: 16px;
            letter-spacing: -.02em;
            line-height: 1.8;
            font-weight: 400;
            font-stretch: normal;
            font-style: normal;
            margin-top: 1075px;
        }
        
        span2 {
            cursor: pointer;
            position: absolute;
            margin-left: 1160px;
            margin-top: 1168px;
            font-size: 1rem;
            font-weight: 400;
            color: #c00 !important;
            text-decoration: underline !important;
        }
`

const News1 = styled.div`
    img {
        cursor: pointer;
        position: absolute;
        margin-left: 388px;
        margin-top: 750px;        
    }
`

const News2 = styled.div`
    img {
        cursor: pointer;
        position: absolute;
        margin-left: 772px;
        margin-top: 751px;
    }
`

const News3 = styled.div`
    img {
        cursor: pointer;
        position: absolute;
        margin-left: 1157px;
        margin-top: 751px;
    }
`

 