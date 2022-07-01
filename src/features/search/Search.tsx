interface Props {
  placeHolder?: string;
}

export default function Search({ placeHolder }: Props) {
  return (
    <input
      type="text"
      placeholder={placeHolder}
      className="border-2 p-2 border-sol-grey-2 focus:border-sol-yellow-1 dark:focus:border-sol-blue-1 rounded-md dark:bg-sol-black-2 outline-none"
    />
  );
}
