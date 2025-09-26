import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Login from "@/pages/Login";
import AuthCallback from "@/pages/AuthCallback";
import PlayerDashboard from "@/components/dashboard/PlayerDashboard";
import CoachDashboard from "@/components/dashboard/CoachDashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Route components for each role
const PlayerRoutes = () => (
  <Routes>
    <Route index element={<PlayerDashboard />} />
    <Route path="coaches" element={<div className="p-6">My Coaches - Coming Soon</div>} />
    <Route path="find" element={<div className="p-6">Find Coaches - Coming Soon</div>} />
    <Route path="book" element={<div className="p-6">Book Lesson - Coming Soon</div>} />
    <Route path="recaps" element={<div className="p-6">Lesson Recaps - Coming Soon</div>} />
    <Route path="messages" element={<div className="p-6">Messages - Coming Soon</div>} />
  </Routes>
);

const CoachRoutes = () => (
  <Routes>
    <Route index element={<CoachDashboard />} />
    <Route path="students" element={<div className="p-6">Students - Coming Soon</div>} />
    <Route path="schedule" element={<div className="p-6">Schedule - Coming Soon</div>} />
    <Route path="lesson-types" element={<div className="p-6">Lesson Types - Coming Soon</div>} />
    <Route path="availability" element={<div className="p-6">Availability - Coming Soon</div>} />
    <Route path="drills" element={<div className="p-6">Drill Library - Coming Soon</div>} />
    <Route path="recaps" element={<div className="p-6">Lesson Recaps - Coming Soon</div>} />
    <Route path="messages" element={<div className="p-6">Messages - Coming Soon</div>} />
    <Route path="settings" element={<div className="p-6">Settings - Coming Soon</div>} />
  </Routes>
);

const AdminRoutes = () => (
  <Routes>
    <Route index element={<AdminDashboard />} />
    <Route path="users" element={<div className="p-6">Users - Coming Soon</div>} />
    <Route path="drills" element={<div className="p-6">Drill Moderation - Coming Soon</div>} />
    <Route path="analytics" element={<div className="p-6">Analytics - Coming Soon</div>} />
    <Route path="settings" element={<div className="p-6">Settings - Coming Soon</div>} />
  </Routes>
);

const DashboardRouter = () => {
  const { profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!profile) {
    return <Navigate to="/login" replace />;
  }

  switch (profile.role) {
    case 'admin':
      return <Navigate to="/admin" replace />;
    case 'coach':
      return <Navigate to="/coach" replace />;
    case 'player':
      return <Navigate to="/player" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
};

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/login" 
              element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} 
            />
            <Route 
              path="/auth/callback" 
              element={<AuthCallback />} 
            />
            {/* Protected Routes */}
            <Route 
              path="/player/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <PlayerRoutes />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route 
              path="/coach/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <CoachRoutes />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route 
              path="/admin/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <AdminRoutes />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <DashboardRouter />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
