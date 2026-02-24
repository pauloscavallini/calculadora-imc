

export default function Input({nome, label, placeholder, hook, acao, tipo}) {
    return (<>
        <label htmlFor={nome}>{label}: </label>
        <input
            className="form-control"
            id={nome}
            name={nome}
            type={tipo}
            placeholder={placeholder}
            value={hook}
            onChange={acao}
        />
    </>)
}