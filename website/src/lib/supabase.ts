import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zhefnrarkwxgykjtsbkr.supabase.co'
const supabaseKey = 'sb_publishable_nokSCcLsP70XuynF2Yws9w_2OQIFvbW'

export const supabase = createClient(supabaseUrl, supabaseKey)
