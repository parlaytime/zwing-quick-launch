import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { Users, Target, Shield, Mail } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

type UserRole = 'player' | 'coach' | 'admin';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('player');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent'
          },
          scopes: 'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.readonly'
        }
      });
      
      if (error) throw error;
      
      // Store selected role in session storage for callback handling
      sessionStorage.setItem('selectedRole', selectedRole);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
            data: {
              role: selectedRole,
              display_name: displayName
            }
          }
        });
        
        if (error) throw error;
        
        toast({
          title: "Account created!",
          description: "Please check your email to verify your account.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        
        if (error) throw error;
        
        toast({
          title: "Welcome back!",
          description: "Successfully signed in.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-strong">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">Z</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Zwing
              </h1>
              <p className="text-sm text-muted-foreground">Golf coaching platform</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-muted-foreground text-sm">
              Choose your role and sign in to continue
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Role Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Select your role</Label>
            <div className="grid grid-cols-3 gap-3">
              <Button
                type="button"
                variant={selectedRole === 'player' ? 'default' : 'outline'}
                className="h-20 flex-col space-y-2 relative"
                onClick={() => setSelectedRole('player')}
              >
                <Users className="h-6 w-6" />
                <span className="text-xs font-medium">Player</span>
                {selectedRole === 'player' && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    ✓
                  </Badge>
                )}
              </Button>
              <Button
                type="button"
                variant={selectedRole === 'coach' ? 'default' : 'outline'}
                className="h-20 flex-col space-y-2 relative"
                onClick={() => setSelectedRole('coach')}
              >
                <Target className="h-6 w-6" />
                <span className="text-xs font-medium">Coach</span>
                {selectedRole === 'coach' && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    ✓
                  </Badge>
                )}
              </Button>
              <Button
                type="button"
                variant={selectedRole === 'admin' ? 'default' : 'outline'}
                className="h-20 flex-col space-y-2 relative"
                onClick={() => setSelectedRole('admin')}
              >
                <Shield className="h-6 w-6" />
                <span className="text-xs font-medium">Admin</span>
                {selectedRole === 'admin' && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    ✓
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          {/* Google Sign In */}
          <Button
            type="button"
            variant="outline"
            className="w-full h-12"
            onClick={handleGoogleSignIn}
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </Button>

          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-card px-2 text-xs text-muted-foreground">or</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailAuth} className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required={isSignUp}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full h-12" disabled={loading}>
              <Mail className="w-4 h-4 mr-2" />
              {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Continue with Email'}
            </Button>
          </form>

          {/* Toggle Sign Up/Sign In */}
          <div className="text-center text-sm">
            {isSignUp ? (
              <span>
                Already have an account?{' '}
                <button
                  type="button"
                  className="text-primary hover:underline font-medium"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign in
                </button>
              </span>
            ) : (
              <span>
                Don't have an account?{' '}
                <button
                  type="button"
                  className="text-primary hover:underline font-medium"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign up
                </button>
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;