import type { User as SupabaseUser } from "@supabase/supabase-js";

declare module "@supabase/supabase-js" {
	interface User extends SupabaseUser {
		stripeCustomerId?: string;
		stripeSubscriptionId?: string;
		stripeSubscriptionStatus?: string;
		stripePriceId?: string;
	}
}
