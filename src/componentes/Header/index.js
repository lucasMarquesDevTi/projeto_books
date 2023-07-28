import './style.css'
import Logo from '../Logo'
import Opcoes from '../OpcoesHeader'
import Icones from '../IconesHeader';

function Header() {

    return (
        <header className="App-header">
            <Logo />
            <Opcoes />
            <Icones />
        </header>
    )
}

export default Header