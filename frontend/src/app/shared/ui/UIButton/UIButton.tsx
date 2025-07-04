import s from "./UIButton.module.scss";
type VariantsButton = "red" | "green" | "blue";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantsButton;
}

export default function UIButton({
  variant = "blue",
  children = "Empty",
  ...props
}: Props) {
  const styleVariant = {
    red: s.red,
    green: s.green,
    blue: s.blue,
  };

  return (
    <button
      type="button"
      {...props}
      className={`${styleVariant[variant]} cursor-pointer px-[0.417vw] py-[0.625vw] border-[0.208vw] rounded-[0.625vw] w-[100%] ${props.className}`}
    >
      {children}
    </button>
  );
}
