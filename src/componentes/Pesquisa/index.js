import Input from "../Input"
import styled from 'styled-components'
import { useState } from "react"


const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #26ad8c 35%, #75eea3);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa(){

    const [ textoDigitado, setTextoDigitado ] = useState('')

    return (
        <PesquisaContainer>
            <Titulo>Conhecimento nunca é demais!</Titulo>
            <Subtitulo>Encontre seu livro em nossa biblioteca</Subtitulo>
            <Input onBlur={evento => setTextoDigitado(evento.target.value)} placeholder="Escreva o nome do livro" />
            <p>{textoDigitado}</p>
        </PesquisaContainer>
    )
}

export default Pesquisa