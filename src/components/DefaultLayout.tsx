// @ts-ignore
import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const DefaultLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen my-1">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
