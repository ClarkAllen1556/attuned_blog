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
    <div className="bg-white-1 rounded p-2 border-2 border-sol-grey-1 shadow-md">
      {cardTitle}

      {content && <div> {content} </div>}

      {footer && <div>{footer}</div>}
    </div>
  );
}

export default Card;
