import { useEffect, useRef } from 'react';
import '@styles/button.css';

type Variant = 'primary' | 'secondary' | 'text';

interface Props {
  btnLabel: string;
  variant?: Variant;
  click: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

export default function Button({
  btnLabel,
  variant = 'primary',
  click,
  isDisabled,
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
    <button
      ref={btn}
      onClick={click}
      disabled={isDisabled}
      className="select-none"
    >
      {btnLabel}
    </button>
  );
}
