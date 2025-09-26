import { Navigate } from "react-router-dom";

const Index = () => {
  // Redirect to auth page or dashboard based on authentication status
  return <Navigate to="/auth" replace />;
};

export default Index;
