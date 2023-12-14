import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ekukpkmiitskvadkozxz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdWtwa21paXRza3ZhZGtvenh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MzY0NzEsImV4cCI6MjAxNzAxMjQ3MX0.TySCEpdsLeeWpnAkWhmnhelhLLbovfFfqD3IcfWlgdY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
