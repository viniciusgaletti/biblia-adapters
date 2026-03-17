import { i as supabase } from "./button-BPoK0gyP.js";
//#region src/services/aprendizados.ts
var getAprendizados = async () => {
	const { data, error } = await supabase.from("aprendizados").select("*").order("created_at", { ascending: false });
	if (error) throw error;
	return data;
};
var getAprendizado = async (id) => {
	const { data, error } = await supabase.from("aprendizados").select("*").eq("id", id).single();
	if (error) throw error;
	return data;
};
var createAprendizado = async (aprendizado) => {
	const { data, error } = await supabase.from("aprendizados").insert([{ ...aprendizado }]).select().single();
	if (error) throw error;
	return data;
};
var deleteAprendizado = async (id) => {
	const { error } = await supabase.from("aprendizados").delete().eq("id", id);
	if (error) throw error;
};
//#endregion
export { getAprendizados as i, deleteAprendizado as n, getAprendizado as r, createAprendizado as t };

//# sourceMappingURL=aprendizados-DZToyReT.js.map