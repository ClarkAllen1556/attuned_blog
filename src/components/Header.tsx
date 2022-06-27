import { ReactNode } from 'react';

export default function Header({ children }: { children?: ReactNode }) {
  return (
    <header className="h-20 w-full inline-flex">
      <div className="inline-flex items-center gap-2">
        <h1> UrbanBlog </h1>
        <h2> ~$ </h2>
      </div>

      <div>{children}</div>
    </header>
  );
}
