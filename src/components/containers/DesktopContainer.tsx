import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

const DesktopContainer = ({ children }: { children: ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 640 });

  return isDesktop ? <div> {children} </div> : null;
};

export default DesktopContainer;