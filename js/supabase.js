const SUPABASE_URL =
    "https://ohqwiqhkyvbstscqqccz.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_RPTQSOmwzBSVOVLlh3P2rg_yFyue31F";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );