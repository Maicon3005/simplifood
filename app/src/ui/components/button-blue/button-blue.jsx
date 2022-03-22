import "./style.css";

export function ButtonBlue(props) {
  const { content, onclick } = props;

  return <button className="button-blue">{content}</button>;
}
