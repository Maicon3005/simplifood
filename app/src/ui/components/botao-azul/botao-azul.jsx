import "./style.css";

export function BotaoAzul(props) {
  const { conteudo, onclick } = props;

  return (
    <button className="botao-azul">
      {conteudo}
    </button>
  );
}
