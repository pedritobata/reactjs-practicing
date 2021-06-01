import classes from "./Button.module.css";

type Props = {
  text: string;
  variant: "primary" | "outlined";
  clicked?: () => void;
};

export default function Button({ text, variant, clicked }: Props) {
  return (
    <button
      onClick={clicked}
      className={`${classes.btn} ${
        variant === "primary" ? classes.primary : classes.outlined
      }`}
    >
      {text}
    </button>
  );
}
