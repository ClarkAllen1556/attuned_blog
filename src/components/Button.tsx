import { useEffect, useRef } from 'react';
import '@styles/button.css';

interface Props {
  buttonLabel: string;
  variant?: 'primary' | 'secondary' | 'text';
  click: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  buttonLabel,
  variant = 'primary',
  click,
}: Props) {
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    switch (variant) {
      case 'text':
        btn.current?.classList.add('txt-button');
        break;
      case 'primary':
        btn.current?.classList.add('primary-button');
        break;
      case 'secondary':
        btn.current?.classList.add('secondary-button');
        break;
    }
  }, []);

  return (
    <button ref={btn} onClick={click}>
      {buttonLabel}
    </button>
  );
}
