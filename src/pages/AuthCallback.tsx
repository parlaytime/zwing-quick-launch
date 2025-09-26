import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Exchange code for session
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        
        if (session) {
          // Store Google tokens if they exist
          if (session.provider_token || session.provider_refresh_token) {
            try {
              const response = await fetch(`https://qrszvbbedvvyhmwcnfcj.functions.supabase.co/store-tokens`, {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${session.access_token}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  provider_token: session.provider_token,
                  provider_refresh_token: session.provider_refresh_token
                })
              });
              
              if (!response.ok) {
                console.warn('Failed to store tokens:', await response.text());
              }
            } catch (tokenError) {
              console.warn('Error storing tokens:', tokenError);
            }
          }

          // Get or create profile with role
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (profileError && profileError.code !== 'PGRST116') {
            throw profileError;
          }

          // If no profile exists, create one with the selected role
          if (!profile) {
            const selectedRole = sessionStorage.getItem('selectedRole') as 'player' | 'coach' | 'admin' || 'player';
            sessionStorage.removeItem('selectedRole');

            const { error: insertError } = await supabase
              .from('profiles')
              .insert({
                id: session.user.id,
                role: selectedRole,
                display_name: session.user.user_metadata?.display_name || 
                           session.user.user_metadata?.full_name || 
                           session.user.email?.split('@')[0] || 'User',
                phone: session.user.user_metadata?.phone
              });

            if (insertError) throw insertError;

            // Route based on new role
            switch (selectedRole) {
              case 'admin':
                navigate('/admin');
                break;
              case 'coach':
                navigate('/coach');
                break;
              default:
                navigate('/player');
            }
          } else {
            // Route based on existing profile role
            switch (profile.role) {
              case 'admin':
                navigate('/admin');
                break;
              case 'coach':
                navigate('/coach');
                break;
              default:
                navigate('/player');
            }
          }

          toast({
            title: "Welcome!",
            description: "Successfully signed in.",
          });
        } else {
          throw new Error('No session found');
        }
      } catch (error: any) {
        console.error('Auth callback error:', error);
        toast({
          title: "Authentication Error",
          description: error.message,
          variant: "destructive"
        });
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    handleAuthCallback();
  }, [navigate, toast]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-white">Completing sign-in...</p>
        </div>
      </div>
    );
  }

  return null;
};

export default AuthCallback;