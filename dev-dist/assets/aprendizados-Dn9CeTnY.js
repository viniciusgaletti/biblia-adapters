import { i as supabase } from "./button-BPdVCIk6.js";
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
	const { data, error } = await supabase.from("aprendizados").insert([aprendizado]).select().single();
	if (error) throw error;
	return data;
};
//#endregion
export { getAprendizado as n, getAprendizados as r, createAprendizado as t };

//# sourceMappingURL=aprendizados-Dn9CeTnY.js.map