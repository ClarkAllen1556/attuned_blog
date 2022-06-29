import { ReactNode } from 'react';

interface Props {
  cardTitle?: string;
  children?: {
    content?: ReactNode;
    footer?: ReactNode;
  };
}

function Card({ cardTitle, children }: Props) {
  const content = children?.content;
  const footer = children?.footer;

  return (
    <div className="bg-white-1 rounded mb-2 p-2 border-2 border-sol-grey-1 shadow-md">
      {cardTitle}

      {content && <div> {content} </div>}

      {footer && <div className="mt-2"> {footer} </div>}
    </div>
  );
}

export default Card;
