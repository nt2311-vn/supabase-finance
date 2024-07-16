import { createClient } from "@refinedev/supabase";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || "";

export const supabaseClient = createClient(supabaseURL, supabaseKey, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
