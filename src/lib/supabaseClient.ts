import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const supabaseUrl = "https://qrszvbbedvvyhmwcnfcj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyc3p2YmJlZHZ2eWhtd2NuZmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MjkwMDYsImV4cCI6MjA3NDQwNTAwNn0.e5U_QCx0TUpwblbDTI0a7vQ6nDdQS_H0m7XG6Ebw2cw";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});

// Storage bucket helpers
export const getStorageSignedUrl = async (bucket: string, path: string) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(path, 3600); // 1 hour expiry
  
  if (error) throw error;
  return data.signedUrl;
};

export const uploadToStorage = async (bucket: string, path: string, file: File) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false
    });
  
  if (error) throw error;
  return data;
};