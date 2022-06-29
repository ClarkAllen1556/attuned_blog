import { ReactNode } from 'react';

export default function Header({ children }: { children?: ReactNode }) {
  return (
    <header className="inline-flex items-center justify-center lg:justify-start h-20 w-full">
      <h1 className="text-sol-black-1 mr-2"> ~$ </h1>
      <h1> UrbanBlog </h1>

      <div>{children}</div>
    </header>
  );
}
