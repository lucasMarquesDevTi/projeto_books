import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const IconesContainer = styled.ul`
        display: flex;
        align-items: center;  
`

const Icone = styled.li`
    margin-right: 2.5rem;
    width: 1.563rem;
`

const icones = [perfil, sacola];

function Icones() {

    return (
        <IconesContainer>
            {icones.map((icone) => (
                <Icone key={icone}><img src={icone} alt=''></img></Icone>
            ))}
        </IconesContainer>
    )
}

export default Icones
