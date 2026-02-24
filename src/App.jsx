import { useState } from 'react'
import './App.css'
import Input from "./components/Input/Input.jsx";
import Resposta from './components/Resposta/Resposta.jsx';

function App() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);

    function calcular() {
        if ((peso === "" || isNaN(peso)) || (altura === "" || isNaN(altura)) ) {
            console.log(peso, altura);
           return;
        }
        setImc(peso / (altura * altura));
    }

    function alterarPeso(e) {
        var valor = e.target.value;
        if (valor >= 0) {
            setPeso(valor);
        }
    }

    function alterarAltura(e) {
        var valor = e.target.value;
        if (valor >= 0) {
            setAltura(valor);
        }
    }

    return (
        <>
            <div className="card d-flex gap-3">
                <Input
                    nome="peso"
                    label="Peso"
                    placeholder="Informe seu peso"
                    hook={peso} acao={alterarPeso}
                    tipo="number" />

                <Input
                    nome="altura"
                    label="Altura"
                    placeholder="Informe sua altura"
                    hook={altura} acao={alterarAltura}
                    tipo="number" />

                <button onClick={calcular} type="button">Calcular IMC</button>

                {(imc > 0 && !isNaN(imc)) ? <Resposta resultado={imc.toFixed(2)} /> : null}
            </div>
        </>
    )
}

export default App
