// import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen px-8 py-4 flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;