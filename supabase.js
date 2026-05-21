import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = https://uajqyaulvlqleqprxwtr.supabase.co/rest/v1/
const supabaseKey = sb_publishable_b1Fq_jAP4A9On12qxqZIWw_R7R-OxFF

export const supabase = createClient(supabaseUrl, supabaseKey)
