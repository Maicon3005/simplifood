import "./style.css";

export function BotaoAzul(props) {
  const { conteudo } = props;
  return <button className="botao-azul">{conteudo}</button>;
}
