import Logo from '../Logo'
import Opcoes from '../OpcoesHeader'
import Icones from '../IconesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
        
         background-color: #fff;
         display: flex;
         justify-content: center;
        
`

function Header() {

    return (
        <HeaderContainer>
            <Logo />
            <Opcoes />
            <Icones />
        </HeaderContainer>
    )
}

export default Header