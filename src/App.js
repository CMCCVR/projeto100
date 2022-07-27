import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { ModalTemplate } from './Components/ModalTemplate';
import { useState } from 'react';

function App() {

  const [livro, setLivro] = useState({ nome: 'Carlos Miguel', autor: 'Costa Cruz' })

  return (
    <div className="App">
      <ModalTemplate data={livro} />
    </div>
  );
}

export default App;