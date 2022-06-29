import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function Footer({ children }: Props) {
  return (
    <footer className="flex flex-row w-full justify-evenly">{children}</footer>
  );
}
