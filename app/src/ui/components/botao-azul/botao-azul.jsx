import "./style.css";

export function BotaoAzul(props) {
  const { conteudo, onclick } = props;

  function handleOnClick() {
    onclick();
  }

  return (
    <button className="botao-azul" onClick={handleOnClick}>
      {conteudo}
    </button>
  );
}
