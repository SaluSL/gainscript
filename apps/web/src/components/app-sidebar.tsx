import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp, Plus, User2 } from "lucide-react";
import { useAuth } from "@/lib/auth";

export function AppSidebar() {
  const auth = useAuth();
  const trainees = [
    {
      id: "151521215215",
      name: "Anna Przykładowa",
    },
    {
      id: "12551512521",
      name: "Adam Kowalski",
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <a href="/">
          <div className="flex items-center gap-1 transition-all duration-300 mt-1 group/logo">
            <div className="flex gap-0.5 items-center -rotate-45 group-hover/logo:rotate-0 group-hover/logo:scale-105 transition-all duration-300">
              <div className="h-2 w-1 bg-[#B8B8B8] rounded-xs"></div>
              <div className="h-4 w-1 bg-[#B8B8B8] rounded-xs"></div>
              <div className="h-1 w-1 bg-[#B8B8B8] rounded-xs"></div>
              <div className="h-1 w-1 bg-[#292929] rounded-xs"></div>
              <div className="h-4 w-1 bg-[#292929] rounded-xs"></div>
              <div className="h-2 w-1 bg-[#292929] rounded-xs"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-[#292929]">gain</span>
              <span className="text-xl font-bold text-[#B8B8B8]">script</span>
            </div>
          </div>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Ty</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a>
                    <span>Twój plan</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Podopieczni</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Dodaj podopiecznego</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {trainees.map((trainee) => (
                <SidebarMenuItem key={trainee.id}>
                  <SidebarMenuButton asChild>
                    <a>
                      <span>{trainee.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {auth.user?.name || "User"}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem onClick={() => auth.logout()}>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
