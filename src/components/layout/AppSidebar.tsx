import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { 
  Home, 
  Users, 
  Search, 
  Calendar,
  MessageCircle,
  BookOpen,
  Video,
  Settings,
  Shield,
  TrendingUp,
  User,
  Target,
  Clock,
  MapPin,
  FileText
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const AppSidebar = () => {
  const location = useLocation();
  const { profile } = useAuth();

  const currentPath = location.pathname;
  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + '/');

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/50";

  // Role-based navigation items
  const getNavigationItems = () => {
    switch (profile?.role) {
      case 'player':
        return [
          { title: "Dashboard", url: "/player", icon: Home },
          { title: "My Coaches", url: "/player/coaches", icon: Users },
          { title: "Find Coaches", url: "/player/find", icon: Search },
          { title: "Book Lesson", url: "/player/book", icon: Calendar },
          { title: "Lesson Recaps", url: "/player/recaps", icon: BookOpen },
          { title: "Messages", url: "/player/messages", icon: MessageCircle },
        ];
      case 'coach':
        return [
          { title: "Dashboard", url: "/coach", icon: Home },
          { title: "Students", url: "/coach/students", icon: Users },
          { title: "Schedule", url: "/coach/schedule", icon: Calendar },
          { title: "Lesson Types", url: "/coach/lesson-types", icon: Target },
          { title: "Availability", url: "/coach/availability", icon: Clock },
          { title: "Drill Library", url: "/coach/drills", icon: Video },
          { title: "Lesson Recaps", url: "/coach/recaps", icon: FileText },
          { title: "Messages", url: "/coach/messages", icon: MessageCircle },
          { title: "Settings", url: "/coach/settings", icon: Settings },
        ];
      case 'admin':
        return [
          { title: "Dashboard", url: "/admin", icon: Home },
          { title: "Users", url: "/admin/users", icon: Users },
          { title: "Drill Moderation", url: "/admin/drills", icon: Video },
          { title: "Analytics", url: "/admin/analytics", icon: TrendingUp },
          { title: "Settings", url: "/admin/settings", icon: Settings },
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <Sidebar className="w-64">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">Z</span>
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              Zwing
            </h1>
            <p className="text-xs text-muted-foreground capitalize">
              {profile?.role} Portal
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === `/${profile?.role}`}
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="ml-3">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {profile?.role && (
          <SidebarGroup>
            <SidebarGroupLabel>Profile</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <div className="flex items-center p-2 text-sm">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="ml-3 min-w-0">
                      <p className="font-medium truncate">{profile.display_name}</p>
                      <p className="text-xs text-muted-foreground capitalize">{profile.role}</p>
                    </div>
                  </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;