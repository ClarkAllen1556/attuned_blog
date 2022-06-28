import { ReactNode } from 'react';

interface Props {
  cardTitle?: string;
  children?: ReactNode;
}

function Card({ cardTitle, children }: Props) {
  return (
    <div className="bg-white-1 rounded p-2 border-2 border-sol-grey-1 shadow-md">
      {cardTitle}

      <div>{children}</div>
    </div>
  );
}

Card.Footer = () => null;

export default Card;
