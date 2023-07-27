import './style.css'
import logo from '../../imagens/logo.svg';

function Logo() {

    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo-lucas-books-trinângulo-vermelho'
                className='logo-img'    
            ></img>
            <p><strong>Lucas</strong>Books</p>
        </div>
    )
}

export default Logo
