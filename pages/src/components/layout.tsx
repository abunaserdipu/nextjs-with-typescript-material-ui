import React from 'react'
import Sidebar from "./sidebar/sidebar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
