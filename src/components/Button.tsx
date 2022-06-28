interface Props {
  buttonLabel: string;
  click: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ buttonLabel, click }: Props) {
  return (
    <button
      className="p-2 rounded shadow-md bg-sol-blue-1 text-white-1 active:bg-sol-yellow-1"
      onClick={click}
    >
      {buttonLabel}
    </button>
  );
}
