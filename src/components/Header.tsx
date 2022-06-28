import { ReactNode } from 'react';

export default function Header({ children }: { children?: ReactNode }) {
  return (
    <header className="h-20 w-full inline-flex">
      <div className="inline-flex items-center gap-2">
        <h1 className="text-sol-black-1"> ~$ </h1>
        <h1> UrbanBlog </h1>
      </div>

      <div>{children}</div>
    </header>
  );
}
