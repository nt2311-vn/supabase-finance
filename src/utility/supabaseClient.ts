import { createClient } from "@refinedev/supabase";
import { configDotenv } from "dotenv";

configDotenv({ path: "../.env.local" });

const supabaseURL = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";

export const supabaseClient = createClient(supabaseURL, supabaseKey, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
