import { AppSidebar } from "@/components/dashboard/components/app-sidebar";
import { SiteHeader } from "@/components/dashboard/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">              
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
