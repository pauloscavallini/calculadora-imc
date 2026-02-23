import { useState } from 'react'
import './App.css'

function App() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [calculado, setCalculado] = useState(false);

    function calcular() {
        if (!peso || !altura) {
           return;
        }
        setCalculado(true);
    }

    return (
        <>
            <div className="card d-flex gap-3">
                <label htmlFor="peso">Peso: </label>
                <input
                    className="form-control"
                    id="peso"
                    name="peso"
                    type="number"
                    placeholder="Digite seu peso"
                    value={peso}
                    onChange={(e) => {
                        const value = e.target.value;
                        setPeso(value === "" ? "" : parseFloat(value));
                    }}
                />

                <label htmlFor="altura">Altura: </label>
                <input
                    className="form-control"
                    id="altura"
                    name="altura"
                    type="number"
                    placeholder="Digite sua altura"
                    value={altura}
                    onChange={(e) => {
                        const value = e.target.value;
                        setAltura(value === "" ? "" : parseFloat(value));
                    }}
                />

                <button onClick={calcular} type="button">Calcular IMC</button>

                {calculado ? <p className="fw-semibold">
                    Seu IMC é: {(peso / (altura ** 2)).toFixed(2)}
                </p> : null}
            </div>
        </>
    )
}

export default App
