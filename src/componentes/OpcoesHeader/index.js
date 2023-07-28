import './style.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function Opcoes() {

    return (
        <ul className='opcoes'>
            {textoOpcoes.map((opcao) => (
                <li className='opcao' key={opcao}><p>{opcao}</p></li>
            ))}
        </ul>
    )
}

export default Opcoes