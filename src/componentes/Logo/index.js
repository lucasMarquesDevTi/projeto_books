import logo from '../../imagens/logo.svg';
import styled from 'styled-components'


const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;
    margin-left: 10px;
`


function Logo() {

    return (
        <LogoContainer>
            <LogoImage 
                src={logo} 
                alt='logo-lucas-books-triângulo-vermelho'
            ></LogoImage>
            <p><strong>Lucas</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo
