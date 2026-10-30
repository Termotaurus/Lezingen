import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://zhefnrarkwxgykjtsbkr.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_nokSCcLsP70XuynF2Yws9w_2OQIFvbW";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
