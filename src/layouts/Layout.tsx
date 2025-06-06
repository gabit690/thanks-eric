import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
};
