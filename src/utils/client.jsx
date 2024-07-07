// src/utils/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://vjcvrexoovrhfmvntfna.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqY3ZyZXhvb3ZyaGZtdm50Zm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMzA3MzEsImV4cCI6MjAzMzkwNjczMX0.4C8uvY05S8SeMsQKd9jb3ydDwSGgve65DMWOiHjsf1E";


if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
