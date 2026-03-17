import { t as supabase } from "./client-D09FV_21.js";
//#region src/services/learnings.ts
var searchLearnings = async (searchTerm, category, level, sortBy = "recentes") => {
	let query = supabase.from("learnings").select("*");
	if (searchTerm) query = query.or(`title.ilike.%${searchTerm}%,author.ilike.%${searchTerm}%,context.ilike.%${searchTerm}%,learning.ilike.%${searchTerm}%`);
	if (category && category !== "Todos") query = query.eq("category", category);
	if (level && level !== "Todos") query = query.eq("level", level);
	if (sortBy === "relevancia") query = query.order("rating_avg", { ascending: false }).order("rating_count", { ascending: false }).order("number", { ascending: true });
	else query = query.order("number", { ascending: false });
	const { data, error } = await query;
	if (error) throw error;
	return data;
};
var fetchLearningById = async (id) => {
	let query = supabase.from("learnings").select("*");
	if (/^\d+$/.test(id)) query = query.eq("number", parseInt(id, 10));
	else query = query.eq("id", id);
	const { data, error } = await query.single();
	if (error) throw error;
	return data;
};
var createLearning = async (payload) => {
	const { data, error } = await supabase.from("learnings").insert([payload]).select().single();
	if (error) throw error;
	return data;
};
var deleteRating = async (ratingId) => {
	const { error } = await supabase.from("learning_ratings").delete().eq("id", ratingId);
	if (error) throw error;
};
var submitRating = async (learningId, rating) => {
	const { data, error } = await supabase.from("learning_ratings").insert([{
		learning_id: learningId,
		rating
	}]).select("id").single();
	if (error) throw error;
	return data.id;
};
//#endregion
export { submitRating as a, searchLearnings as i, deleteRating as n, fetchLearningById as r, createLearning as t };

//# sourceMappingURL=learnings-lUo10QHQ.js.map