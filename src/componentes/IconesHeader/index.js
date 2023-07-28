import './style.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icones = [perfil, sacola];

function Icones() {

    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'  key={icone}><img src={icone} alt=''></img></li>
            ))}
        </ul>
    )
}

export default Icones
