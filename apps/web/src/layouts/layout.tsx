import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="flex items-center p-4">
          <SidebarTrigger />
          <div className="grow flex items-center justify-center">
            <h1 className="font-semibold text-xl">Trening #1512</h1>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
