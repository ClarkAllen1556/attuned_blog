import { ReactNode } from 'react';

export default function Header({ children }: { children?: ReactNode }) {
  return (
    <header className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-20 w-full">
      <h1 className="dark:text-sol-yellow-1">
        <span className="text-sol-black-1 dark:text-sol-grey-1 mr-2">~$</span>
        UrbanBlog
      </h1>

      <div className="flex gap-2">{children}</div>
    </header>
  );
}
