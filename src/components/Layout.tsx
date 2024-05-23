// import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen px-8 py-4 flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;