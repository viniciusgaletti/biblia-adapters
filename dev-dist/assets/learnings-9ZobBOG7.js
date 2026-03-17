import { t as supabase } from "./client-B7YiK7DP.js";
//#region src/services/learnings.ts
var searchLearnings = async (searchTerm, category, level) => {
	let query = supabase.from("learnings").select("*").order("number", { ascending: true });
	if (searchTerm) query = query.or(`title.ilike.%${searchTerm}%,author.ilike.%${searchTerm}%,context.ilike.%${searchTerm}%,learning.ilike.%${searchTerm}%`);
	if (category && category !== "Todos") query = query.eq("category", category);
	if (level && level !== "Todos") query = query.eq("level", level);
	const { data, error } = await query;
	if (error) throw error;
	return data;
};
var fetchLearningById = async (id) => {
	const { data, error } = await supabase.from("learnings").select("*").eq("id", id).single();
	if (error) throw error;
	return data;
};
var createLearning = async (payload) => {
	const { data, error } = await supabase.from("learnings").insert([payload]).select().single();
	if (error) throw error;
	return data;
};
//#endregion
export { fetchLearningById as n, searchLearnings as r, createLearning as t };

//# sourceMappingURL=learnings-9ZobBOG7.js.map