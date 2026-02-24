import css from './Resposta.module.css';

export default function Resposta({resultado}) {
    var classificacao = "";
    var cor = "text-danger";

    if (resultado < 18.5) {
        classificacao = "Magreza";
        cor = "text-warning";
    }
    else if (resultado >= 18.5 && resultado < 25) {
        classificacao = "Normal";
        cor = "text-success";
    }
    else if (resultado >= 25 && resultado < 30) {
        classificacao = "Sobrepeso";
        cor = "text-primary";
    }
    else if (resultado >= 30 && resultado < 35) {
        classificacao = "Obesidade grau I";
        cor = "text-warning";
    }
    else if (resultado >= 35 && resultado < 40) {
        classificacao = "Obesidade grau II";
        cor = css.textOrange;
    }
    else if (resultado >= 40) {
        classificacao = "Obesidade grau III";
        cor = "text-danger";
    }

    return (
    <>
    {resultado > 0 && (
        <p>
            Seu IMC é: <span className="fw-semibold">{resultado}</span> - Status: <span className={"fw-semibold " + cor}>{classificacao}</span> 
        </p>
    )}
    </>
    )
}