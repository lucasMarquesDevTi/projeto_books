import styled from 'styled-components'

const OpcoesContainer = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 0.313rem;
    cursor: pointer;
    min-width: 7.5rem;
    font-weight: bold;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function Opcoes() {

    return (
        <OpcoesContainer>
            {textoOpcoes.map((opcao) => (
                <Opcao key={opcao}><p>{opcao}</p></Opcao>
            ))}
        </OpcoesContainer>
    )
}

export default Opcoes