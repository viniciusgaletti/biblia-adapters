import { t as supabase } from "./client-D09FV_21.js";
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
//#endregion
export { adminService as t };

//# sourceMappingURL=admin-Bb_eAA0H.js.map