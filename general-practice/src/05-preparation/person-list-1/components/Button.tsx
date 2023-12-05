interface Props {
  title: string;
  onClick: Function;
}

const Button = ({ title, onClick }: Props): JSX.Element => {
  return <button onClick={() => onClick()}>{title}</button>;
};

export default Button;
