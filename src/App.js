import './App.css';
import logo from './imagens/logo.svg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          <img src={logo} alt='logo-lucas-books-trinângulo-vermelho'></img>  
          <p><strong>Lucas</strong>Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
