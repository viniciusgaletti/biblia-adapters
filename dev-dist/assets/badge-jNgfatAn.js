import { a as require_jsx_runtime, g as require_react, t as supabase } from "./client-D09FV_21.js";
import { a as cn, o as cva } from "./button-CiSPku0O.js";
//#region src/services/admin.ts
var adminService = {
	fetchAllLearnings: async () => {
		const { data, error } = await supabase.from("learnings").select("*").order("number", { ascending: false });
		if (error) throw error;
		return data;
	},
	deleteLearning: async (id) => {
		const { error } = await supabase.from("learnings").delete().eq("id", id);
		if (error) throw error;
		return true;
	},
	updateLearning: async (id, payload) => {
		const { data, error } = await supabase.from("learnings").update(payload).eq("id", id).select().single();
		if (error) throw error;
		return data;
	}
};
require_react();
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/components/ui/badge.tsx:30:10",
		"data-prohibitions": "[editContent]",
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { adminService as n, Badge as t };

//# sourceMappingURL=badge-jNgfatAn.js.map