import { g as require_react, t as supabase, v as __toESM } from "./client-D09FV_21.js";
//#region src/hooks/use-admin-auth.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useAdminAuth() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		const fetchSession = async () => {
			const { data: { session } } = await supabase.auth.getSession();
			if (mounted) {
				setSession(session);
				setLoading(false);
			}
		};
		fetchSession();
		const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
			setSession(newSession);
			setLoading(false);
		});
		return () => {
			mounted = false;
			subscription.unsubscribe();
		};
	}, []);
	const signOut = async () => {
		await supabase.auth.signOut();
	};
	return {
		session,
		loading,
		signOut
	};
}
//#endregion
export { useAdminAuth as t };

//# sourceMappingURL=use-admin-auth-CzBVU3ds.js.map