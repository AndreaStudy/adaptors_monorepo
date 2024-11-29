import React from 'react';
import CommonSidebar from '@components/aside/CommonSiderbar';
import {
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui/components/ui/sidebar';
function Layout({ children }: { childredn: React.ReactNode }) {
  return (
    <div className="flex h-full">
      {/* <Sidebar /> */}
      <SidebarProvider className="">
        <CommonSidebar />
        <main className="w-full h-auto overflow-y-auto transition-all duration-300 ml-2 ">
          <SidebarTrigger className="" />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}

export default Layout;