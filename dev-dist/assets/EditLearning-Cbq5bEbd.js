import { a as require_jsx_runtime, c as Link, g as require_react, m as useParams, p as useNavigate, v as __toESM } from "./client-D09FV_21.js";
import "./react-dom-D47xuAER.js";
import { t as ArrowLeft } from "./arrow-left-DCIMdVmn.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-CCm9mSHw.js";
import { t as Plus } from "./plus-DeMb-NdG.js";
import { T as X } from "./dist-Gd_mGgr5.js";
import { a as cn, t as Button } from "./button-CiSPku0O.js";
import { n as useToast, r as LoaderCircle } from "./index-DY3s7Fls.js";
import { n as fetchLearningById } from "./learnings-DmqZRIP-.js";
import { t as Skeleton } from "./skeleton-BvP868zf.js";
import { t as Input } from "./input-BmZQJX4Y.js";
import { a as FormControl, c as FormLabel, d as useFieldArray, f as useForm, i as Form, l as FormMessage, o as FormField, r as a, s as FormItem, t as NewLearningSchema, u as Textarea } from "./use-new-learning-B97yLv_P.js";
import "./label-DaJv_aPs.js";
import { t as adminService } from "./admin-Bb_eAA0H.js";
//#region src/hooks/use-edit-learning.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var useEditLearning = (id) => {
	const navigate = useNavigate();
	const { toast } = useToast();
	const [learning, setLearning] = (0, import_react.useState)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const form = useForm({
		resolver: a(NewLearningSchema),
		defaultValues: {
			author: "",
			date: "",
			title: "",
			context: "",
			learning: "",
			stepsArray: [{ value: "" }],
			observations: ""
		}
	});
	(0, import_react.useEffect)(() => {
		const loadLearning = async () => {
			if (!id) {
				setError("ID não fornecido");
				setIsLoading(false);
				return;
			}
			try {
				setIsLoading(true);
				const data = await fetchLearningById(id);
				setLearning(data);
				let parsedSteps = [{ value: "" }];
				if (data.steps) {
					const splitSteps = data.steps.split("\n").map((line) => ({ value: line.replace(/^\d+\.\s*/, "").trim() })).filter((step) => step.value.length > 0);
					if (splitSteps.length > 0) parsedSteps = splitSteps;
				}
				form.reset({
					author: data.author,
					date: data.date,
					category: data.category,
					level: data.level,
					title: data.title,
					context: data.context,
					learning: data.learning,
					stepsArray: parsedSteps,
					observations: data.observations || ""
				});
			} catch (err) {
				console.error(err);
				setError("Aprendizado nao encontrado.");
			} finally {
				setIsLoading(false);
			}
		};
		loadLearning();
	}, [id, form]);
	const onSubmit = async (data) => {
		if (!id) return;
		setIsSubmitting(true);
		try {
			const validSteps = data.stepsArray?.map((step) => step.value.trim()).filter((step) => step.length > 0) || [];
			const formattedSteps = validSteps.length > 0 ? validSteps.map((step, index) => `${index + 1}. ${step}`).join("\n") : null;
			await adminService.updateLearning(id, {
				title: data.title,
				author: data.author,
				date: data.date,
				category: data.category,
				level: data.level,
				context: data.context,
				learning: data.learning,
				steps: formattedSteps,
				observations: data.observations || null
			});
			toast({ title: "Aprendizado atualizado com sucesso!" });
			navigate("/admin");
		} catch (error) {
			console.error(error);
			toast({
				title: "Nao foi possivel salvar. Tente novamente.",
				variant: "destructive"
			});
		} finally {
			setIsSubmitting(false);
		}
	};
	return {
		form,
		learning,
		isLoading,
		isSubmitting,
		error,
		onSubmit: form.handleSubmit(onSubmit)
	};
};
//#endregion
//#region src/pages/admin/EditLearning.tsx
var import_jsx_runtime = require_jsx_runtime();
var ReqLabel = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormLabel, {
	"data-uid": "src/pages/admin/EditLearning.tsx:28:3",
	"data-prohibitions": "[editContent]",
	className: "text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]",
	children: [
		children,
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/pages/admin/EditLearning.tsx:30:5",
			"data-prohibitions": "[]",
			className: "text-primary ml-[2px]",
			"aria-hidden": "true",
			children: "*"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/pages/admin/EditLearning.tsx:33:5",
			"data-prohibitions": "[]",
			className: "sr-only",
			children: "(Obrigatório)"
		})
	]
});
var OptLabel = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormLabel, {
	"data-uid": "src/pages/admin/EditLearning.tsx:38:3",
	"data-prohibitions": "[editContent]",
	className: "text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]",
	children: [
		children,
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/pages/admin/EditLearning.tsx:40:5",
			"data-prohibitions": "[]",
			className: "text-muted-foreground font-normal text-[12px] ml-1",
			children: "(opcional)"
		})
	]
});
function EditLearning() {
	const { id } = useParams();
	const { form, learning, isLoading, isSubmitting, error, onSubmit } = useEditLearning(id);
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: "stepsArray"
	});
	(0, import_react.useEffect)(() => {
		document.title = "Editar Aprendizado | Admin";
	}, []);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/EditLearning.tsx:59:7",
		"data-prohibitions": "[]",
		className: "max-w-[680px] mx-auto animate-fade-in-up pb-12 font-sans px-4 sm:px-0 pt-[32px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/admin/EditLearning.tsx:60:9",
				"data-prohibitions": "[editContent]",
				className: "w-32 h-4 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/admin/EditLearning.tsx:61:9",
				"data-prohibitions": "[editContent]",
				className: "w-48 h-8 mb-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/admin/EditLearning.tsx:62:9",
				"data-prohibitions": "[editContent]",
				className: "w-64 h-4 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/admin/EditLearning.tsx:63:9",
				"data-prohibitions": "[]",
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/EditLearning.tsx:64:11",
						"data-prohibitions": "[]",
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
								"data-uid": "src/pages/admin/EditLearning.tsx:65:13",
								"data-prohibitions": "[editContent]",
								className: "h-10 w-full"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
								"data-uid": "src/pages/admin/EditLearning.tsx:66:13",
								"data-prohibitions": "[editContent]",
								className: "h-10 w-full"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
								"data-uid": "src/pages/admin/EditLearning.tsx:67:13",
								"data-prohibitions": "[editContent]",
								className: "h-10 w-full"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
								"data-uid": "src/pages/admin/EditLearning.tsx:68:13",
								"data-prohibitions": "[editContent]",
								className: "h-10 w-full"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/admin/EditLearning.tsx:70:11",
						"data-prohibitions": "[editContent]",
						className: "h-10 w-full"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/admin/EditLearning.tsx:71:11",
						"data-prohibitions": "[editContent]",
						className: "h-24 w-full"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/admin/EditLearning.tsx:72:11",
						"data-prohibitions": "[editContent]",
						className: "h-32 w-full"
					})
				]
			})
		]
	});
	if (error || !learning) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/EditLearning.tsx:80:7",
		"data-prohibitions": "[editContent]",
		className: "max-w-[680px] mx-auto flex flex-col items-center justify-center min-h-[50vh] animate-fade-in-up font-sans px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			"data-uid": "src/pages/admin/EditLearning.tsx:81:9",
			"data-prohibitions": "[editContent]",
			className: "text-xl font-bold mb-4",
			children: error || "Aprendizado nao encontrado."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			"data-uid": "src/pages/admin/EditLearning.tsx:82:9",
			"data-prohibitions": "[]",
			to: "/admin",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/admin/EditLearning.tsx:83:11",
				"data-prohibitions": "[]",
				children: "Voltar ao painel"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/EditLearning.tsx:90:5",
		"data-prohibitions": "[editContent]",
		className: "max-w-[680px] mx-auto animate-fade-in-up pb-12 font-sans px-4 sm:px-0 pt-[32px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				"data-uid": "src/pages/admin/EditLearning.tsx:91:7",
				"data-prohibitions": "[]",
				to: "/admin",
				className: "inline-flex items-center text-[12px] tracking-[0.02em] text-muted-foreground hover:text-primary mb-[28px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					"data-uid": "src/pages/admin/EditLearning.tsx:95:9",
					"data-prohibitions": "[editContent]",
					className: "w-3.5 h-3.5 mr-1.5",
					"aria-hidden": "true"
				}), "Voltar ao painel"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"data-uid": "src/pages/admin/EditLearning.tsx:99:7",
				"data-prohibitions": "[editContent]",
				className: "mb-[36px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/admin/EditLearning.tsx:100:9",
					"data-prohibitions": "[]",
					className: "text-[1.25rem] font-bold tracking-[-0.02em] text-foreground",
					children: "Editar Aprendizado"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/admin/EditLearning.tsx:103:9",
					"data-prohibitions": "[editContent]",
					className: "flex items-center gap-[8px] mt-[8px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						"data-uid": "src/pages/admin/EditLearning.tsx:104:11",
						"data-prohibitions": "[editContent]",
						className: "font-sans text-[0.75rem] px-2 py-0.5 rounded-full border border-border bg-secondary text-secondary-foreground font-semibold",
						children: ["#", learning.number]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/admin/EditLearning.tsx:107:11",
						"data-prohibitions": "[]",
						className: "text-[0.75rem] text-muted-foreground",
						children: "Editando aprendizado existente"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
				"data-uid": "src/pages/admin/EditLearning.tsx:113:7",
				"data-prohibitions": "[editContent]",
				...form,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					"data-uid": "src/pages/admin/EditLearning.tsx:114:9",
					"data-prohibitions": "[editContent]",
					onSubmit,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"data-uid": "src/pages/admin/EditLearning.tsx:115:11",
							"data-prohibitions": "[]",
							className: "mb-[36px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/admin/EditLearning.tsx:116:13",
								"data-prohibitions": "[]",
								className: "uppercase text-[11px] font-bold tracking-[0.08em] text-muted-foreground border-b border-border pb-[8px] mb-[20px]",
								children: "Identificação"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/admin/EditLearning.tsx:119:13",
								"data-prohibitions": "[]",
								className: "grid grid-cols-1 sm:grid-cols-2 gap-[16px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:120:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "author",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:124:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:125:21",
													"data-prohibitions": "[]",
													children: "Autor"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:126:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														"data-uid": "src/pages/admin/EditLearning.tsx:127:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Nome completo",
														disabled: isSubmitting,
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:129:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:133:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "date",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:137:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:138:21",
													"data-prohibitions": "[]",
													children: "Data"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:139:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														"data-uid": "src/pages/admin/EditLearning.tsx:140:23",
														"data-prohibitions": "[editContent]",
														type: "date",
														disabled: isSubmitting,
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:142:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:146:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "category",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:150:19",
											"data-prohibitions": "[editContent]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:151:21",
													"data-prohibitions": "[]",
													children: "Categoria"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													"data-uid": "src/pages/admin/EditLearning.tsx:152:21",
													"data-prohibitions": "[editContent]",
													onValueChange: field.onChange,
													defaultValue: field.value,
													disabled: isSubmitting,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
														"data-uid": "src/pages/admin/EditLearning.tsx:157:23",
														"data-prohibitions": "[editContent]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
															"data-uid": "src/pages/admin/EditLearning.tsx:158:25",
															"data-prohibitions": "[editContent]",
															className: cn(form.formState.errors.category && "border-destructive focus-visible:ring-destructive"),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
																"data-uid": "src/pages/admin/EditLearning.tsx:164:27",
																"data-prohibitions": "[editContent]",
																placeholder: "Selecione"
															})
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
														"data-uid": "src/pages/admin/EditLearning.tsx:167:23",
														"data-prohibitions": "[]",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:168:25",
																"data-prohibitions": "[]",
																value: "IA",
																children: "IA"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:169:25",
																"data-prohibitions": "[]",
																value: "Vibecoding",
																children: "Vibecoding"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:170:25",
																"data-prohibitions": "[]",
																value: "Automacoes",
																children: "Automacoes"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:171:25",
																"data-prohibitions": "[]",
																value: "Agentes de IA",
																children: "Agentes de IA"
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:174:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:178:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "level",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:182:19",
											"data-prohibitions": "[editContent]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:183:21",
													"data-prohibitions": "[]",
													children: "Nível"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													"data-uid": "src/pages/admin/EditLearning.tsx:184:21",
													"data-prohibitions": "[editContent]",
													onValueChange: field.onChange,
													defaultValue: field.value,
													disabled: isSubmitting,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
														"data-uid": "src/pages/admin/EditLearning.tsx:189:23",
														"data-prohibitions": "[editContent]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
															"data-uid": "src/pages/admin/EditLearning.tsx:190:25",
															"data-prohibitions": "[editContent]",
															className: cn(form.formState.errors.level && "border-destructive focus-visible:ring-destructive"),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
																"data-uid": "src/pages/admin/EditLearning.tsx:196:27",
																"data-prohibitions": "[editContent]",
																placeholder: "Selecione"
															})
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
														"data-uid": "src/pages/admin/EditLearning.tsx:199:23",
														"data-prohibitions": "[]",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:200:25",
																"data-prohibitions": "[]",
																value: "Iniciante",
																children: "Iniciante"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:201:25",
																"data-prohibitions": "[]",
																value: "Intermediario",
																children: "Intermediário"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:202:25",
																"data-prohibitions": "[]",
																value: "Avancado",
																children: "Avançado"
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:205:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"data-uid": "src/pages/admin/EditLearning.tsx:212:11",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/admin/EditLearning.tsx:213:13",
								"data-prohibitions": "[]",
								className: "uppercase text-[11px] font-bold tracking-[0.08em] text-muted-foreground border-b border-border pb-[8px] mb-[20px]",
								children: "Conteúdo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/admin/EditLearning.tsx:216:13",
								"data-prohibitions": "[editContent]",
								className: "flex flex-col gap-[20px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:217:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "title",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:221:19",
											"data-prohibitions": "[editContent]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:222:21",
													"data-prohibitions": "[]",
													children: "Título"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:223:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														"data-uid": "src/pages/admin/EditLearning.tsx:224:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Titulo curto e direto do aprendizado",
														disabled: isSubmitting,
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/admin/EditLearning.tsx:230:21",
													"data-prohibitions": "[editContent]",
													className: "text-[11px] text-muted-foreground text-right mt-1",
													children: [field.value?.length || 0, "/100"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:233:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:237:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "context",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:241:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:242:21",
													"data-prohibitions": "[]",
													children: "Contexto"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:243:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														"data-uid": "src/pages/admin/EditLearning.tsx:244:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Descreva o problema ou situacao que gerou esse aprendizado.",
														rows: 4,
														disabled: isSubmitting,
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:251:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:255:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "learning",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:259:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:260:21",
													"data-prohibitions": "[]",
													children: "Aprendizado"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:261:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														"data-uid": "src/pages/admin/EditLearning.tsx:262:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Descreva a solucao ou insight de forma clara e direta.",
														rows: 5,
														disabled: isSubmitting,
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:269:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/EditLearning.tsx:274:15",
										"data-prohibitions": "[editContent]",
										className: "space-y-0 flex flex-col",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"data-uid": "src/pages/admin/EditLearning.tsx:275:17",
												"data-prohibitions": "[]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													"data-uid": "src/pages/admin/EditLearning.tsx:276:19",
													"data-prohibitions": "[]",
													className: "text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]",
													children: [
														"Passos",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															"data-uid": "src/pages/admin/EditLearning.tsx:278:21",
															"data-prohibitions": "[]",
															className: "text-muted-foreground font-normal text-[12px] ml-1",
															children: "(opcional)"
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													"data-uid": "src/pages/admin/EditLearning.tsx:282:19",
													"data-prohibitions": "[]",
													className: "text-[12px] text-muted-foreground mb-[10px]",
													children: "Divida o aprendizado em etapas. Deixe em branco se nao se aplicar."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"data-uid": "src/pages/admin/EditLearning.tsx:286:17",
												"data-prohibitions": "[editContent]",
												className: "flex flex-col gap-[8px]",
												children: fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/admin/EditLearning.tsx:288:21",
													"data-prohibitions": "[editContent]",
													className: "flex flex-row items-center gap-[8px]",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															"data-uid": "src/pages/admin/EditLearning.tsx:289:23",
															"data-prohibitions": "[editContent]",
															className: "text-[13px] font-medium text-muted-foreground min-w-[24px] text-right",
															children: [index + 1, "."]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
															"data-uid": "src/pages/admin/EditLearning.tsx:292:23",
															"data-prohibitions": "[editContent]",
															control: form.control,
															name: `stepsArray.${index}.value`,
															render: ({ field: inputField }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:296:27",
																"data-prohibitions": "[]",
																className: "flex-1 space-y-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
																	"data-uid": "src/pages/admin/EditLearning.tsx:297:29",
																	"data-prohibitions": "[]",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																		"data-uid": "src/pages/admin/EditLearning.tsx:298:31",
																		"data-prohibitions": "[editContent]",
																		...inputField,
																		className: "text-[13px] py-[9px] px-[12px] h-auto shadow-none",
																		placeholder: `Passo ${index + 1}`,
																		disabled: isSubmitting,
																		"aria-label": `Passo ${index + 1}`
																	})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
																	"data-uid": "src/pages/admin/EditLearning.tsx:306:29",
																	"data-prohibitions": "[editContent]"
																})]
															})
														}),
														fields.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															"data-uid": "src/pages/admin/EditLearning.tsx:311:25",
															"data-prohibitions": "[]",
															type: "button",
															variant: "ghost",
															size: "icon",
															className: "w-[28px] h-[28px] shrink-0 text-muted-foreground hover:text-destructive hover:bg-transparent",
															onClick: () => remove(index),
															"aria-label": `Remover passo ${index + 1}`,
															disabled: isSubmitting,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
																"data-uid": "src/pages/admin/EditLearning.tsx:320:27",
																"data-prohibitions": "[editContent]",
																className: "w-4 h-4",
																"aria-hidden": "true"
															})
														})
													]
												}, field.id))
											}),
											fields.length < 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												"data-uid": "src/pages/admin/EditLearning.tsx:327:19",
												"data-prohibitions": "[]",
												type: "button",
												variant: "ghost",
												className: "w-fit mt-[8px] text-[13px] text-primary hover:text-primary/90 hover:bg-transparent px-0 h-auto gap-[4px]",
												onClick: () => append({ value: "" }),
												disabled: isSubmitting,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
													"data-uid": "src/pages/admin/EditLearning.tsx:334:21",
													"data-prohibitions": "[editContent]",
													className: "w-3.5 h-3.5",
													"aria-hidden": "true"
												}), "Adicionar passo"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:340:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "observations",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:344:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:345:21",
													"data-prohibitions": "[]",
													children: "Observações"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:346:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														"data-uid": "src/pages/admin/EditLearning.tsx:347:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Pontos de atencao, limitacoes ou informacoes extras para os colegas.",
														rows: 3,
														disabled: isSubmitting,
														value: field.value || "",
														onChange: field.onChange
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:355:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/EditLearning.tsx:362:11",
							"data-prohibitions": "[editContent]",
							className: "flex items-center justify-end gap-[12px] border-t border-border pt-[24px] mt-[40px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								"data-uid": "src/pages/admin/EditLearning.tsx:363:13",
								"data-prohibitions": "[]",
								to: "/admin",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"data-uid": "src/pages/admin/EditLearning.tsx:364:15",
									"data-prohibitions": "[]",
									type: "button",
									variant: "outline",
									disabled: isSubmitting,
									className: "px-[20px] py-[10px] h-auto text-[13px] bg-transparent border-border hover:bg-accent hover:text-accent-foreground disabled:opacity-50",
									children: "Cancelar"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/pages/admin/EditLearning.tsx:373:13",
								"data-prohibitions": "[editContent]",
								type: "submit",
								disabled: isSubmitting,
								className: "px-[22px] py-[10px] h-auto text-[13px] font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground hover:bg-primary/90",
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									"data-uid": "src/pages/admin/EditLearning.tsx:380:19",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 mr-2 animate-spin shrink-0",
									"aria-hidden": "true"
								}), "Salvando..."] }) : "Salvar alteracoes"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { EditLearning as default };

//# sourceMappingURL=EditLearning-Cbq5bEbd.js.map