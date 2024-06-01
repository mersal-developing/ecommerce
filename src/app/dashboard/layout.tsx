import Header from "@/components/dashboard/header";
import SideNav from "@/components/dashboard/sideNav";

import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row">
      <SideNav />

      <div className="flex min-h-screen w-full flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
