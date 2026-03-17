import { a as require_jsx_runtime, c as Link, g as require_react, m as useParams, p as useNavigate, v as __toESM } from "./client-D09FV_21.js";
import { t as Input } from "./input-CU9DIYAF.js";
import { t as ArrowLeft } from "./arrow-left-DCIMdVmn.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-H5Ic4qMm.js";
import { t as Plus } from "./plus-DeMb-NdG.js";
import { T as X } from "./dist-DcaTQt1M.js";
import { a as cn, t as Button } from "./button-CiSPku0O.js";
import { o as useToast, s as LoaderCircle } from "./index-jZkD1oa4.js";
import { n as fetchLearningById } from "./learnings-CkpGBjTW.js";
import { t as Skeleton } from "./skeleton-BvP868zf.js";
import { a as FormControl, c as FormLabel, d as useFieldArray, f as useForm, i as Form, l as FormMessage, o as FormField, r as a, s as FormItem, t as NewLearningSchema, u as Textarea } from "./use-new-learning-CV4u_xvh.js";
import { n as adminService, t as Badge } from "./badge-jNgfatAn.js";
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
	"data-uid": "src/pages/admin/EditLearning.tsx:29:3",
	"data-prohibitions": "[editContent]",
	className: "text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]",
	children: [
		children,
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/pages/admin/EditLearning.tsx:31:5",
			"data-prohibitions": "[]",
			className: "text-primary ml-[2px]",
			"aria-hidden": "true",
			children: "*"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/pages/admin/EditLearning.tsx:34:5",
			"data-prohibitions": "[]",
			className: "sr-only",
			children: "(Obrigatório)"
		})
	]
});
var OptLabel = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormLabel, {
	"data-uid": "src/pages/admin/EditLearning.tsx:39:3",
	"data-prohibitions": "[editContent]",
	className: "text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]",
	children: [
		children,
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/pages/admin/EditLearning.tsx:41:5",
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
		"data-uid": "src/pages/admin/EditLearning.tsx:60:7",
		"data-prohibitions": "[]",
		className: "max-w-[680px] mx-auto animate-fade-in-up pb-12 font-mono p-4 sm:p-0 mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/admin/EditLearning.tsx:61:9",
				"data-prohibitions": "[editContent]",
				className: "w-32 h-4 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/admin/EditLearning.tsx:62:9",
				"data-prohibitions": "[editContent]",
				className: "w-48 h-8 mb-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/admin/EditLearning.tsx:63:9",
				"data-prohibitions": "[editContent]",
				className: "w-64 h-4 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/admin/EditLearning.tsx:64:9",
				"data-prohibitions": "[]",
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/EditLearning.tsx:65:11",
						"data-prohibitions": "[]",
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
						children: [
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
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
								"data-uid": "src/pages/admin/EditLearning.tsx:69:13",
								"data-prohibitions": "[editContent]",
								className: "h-10 w-full"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/admin/EditLearning.tsx:71:11",
						"data-prohibitions": "[editContent]",
						className: "h-10 w-full"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/admin/EditLearning.tsx:72:11",
						"data-prohibitions": "[editContent]",
						className: "h-24 w-full"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/admin/EditLearning.tsx:73:11",
						"data-prohibitions": "[editContent]",
						className: "h-32 w-full"
					})
				]
			})
		]
	});
	if (error || !learning) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/EditLearning.tsx:81:7",
		"data-prohibitions": "[editContent]",
		className: "max-w-[680px] mx-auto flex flex-col items-center justify-center min-h-[50vh] animate-fade-in-up font-mono",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			"data-uid": "src/pages/admin/EditLearning.tsx:82:9",
			"data-prohibitions": "[editContent]",
			className: "text-xl font-bold mb-4",
			children: error || "Aprendizado nao encontrado."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			"data-uid": "src/pages/admin/EditLearning.tsx:83:9",
			"data-prohibitions": "[]",
			to: "/admin",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/admin/EditLearning.tsx:84:11",
				"data-prohibitions": "[]",
				children: "Voltar ao painel"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/EditLearning.tsx:91:5",
		"data-prohibitions": "[editContent]",
		className: "max-w-[680px] mx-auto animate-fade-in-up pb-12 font-mono p-4 sm:p-0 mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				"data-uid": "src/pages/admin/EditLearning.tsx:92:7",
				"data-prohibitions": "[]",
				to: "/admin",
				className: "inline-flex items-center text-[12px] tracking-[0.02em] text-muted-foreground hover:text-primary mb-[28px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					"data-uid": "src/pages/admin/EditLearning.tsx:96:9",
					"data-prohibitions": "[editContent]",
					className: "w-3.5 h-3.5 mr-1.5",
					"aria-hidden": "true"
				}), "Voltar ao painel"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"data-uid": "src/pages/admin/EditLearning.tsx:100:7",
				"data-prohibitions": "[editContent]",
				className: "mb-[36px] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/admin/EditLearning.tsx:101:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						"data-uid": "src/pages/admin/EditLearning.tsx:102:11",
						"data-prohibitions": "[editContent]",
						className: "text-[24px] font-bold tracking-[-0.02em] text-foreground flex items-center gap-3",
						children: ["Editar Aprendizado", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							"data-uid": "src/pages/admin/EditLearning.tsx:104:13",
							"data-prohibitions": "[editContent]",
							variant: "secondary",
							className: "font-mono text-sm",
							children: ["#", learning.number]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/admin/EditLearning.tsx:108:11",
						"data-prohibitions": "[]",
						className: "text-[13px] text-muted-foreground mt-1 leading-[1.6]",
						children: "Editando aprendizado existente"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
				"data-uid": "src/pages/admin/EditLearning.tsx:114:7",
				"data-prohibitions": "[editContent]",
				...form,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					"data-uid": "src/pages/admin/EditLearning.tsx:115:9",
					"data-prohibitions": "[editContent]",
					onSubmit,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"data-uid": "src/pages/admin/EditLearning.tsx:116:11",
							"data-prohibitions": "[]",
							className: "mb-[36px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/admin/EditLearning.tsx:117:13",
								"data-prohibitions": "[]",
								className: "uppercase text-[11px] font-bold tracking-[0.08em] text-muted-foreground border-b border-border pb-[8px] mb-[20px]",
								children: "Identificação"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/admin/EditLearning.tsx:120:13",
								"data-prohibitions": "[]",
								className: "grid grid-cols-1 sm:grid-cols-2 gap-[16px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:121:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "author",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:125:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:126:21",
													"data-prohibitions": "[]",
													children: "Autor"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:127:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														"data-uid": "src/pages/admin/EditLearning.tsx:128:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Nome completo",
														disabled: isSubmitting,
														className: "font-mono",
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:135:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:139:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "date",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:143:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:144:21",
													"data-prohibitions": "[]",
													children: "Data"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:145:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														"data-uid": "src/pages/admin/EditLearning.tsx:146:23",
														"data-prohibitions": "[editContent]",
														type: "date",
														disabled: isSubmitting,
														className: "font-mono",
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:148:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:152:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "category",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:156:19",
											"data-prohibitions": "[editContent]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:157:21",
													"data-prohibitions": "[]",
													children: "Categoria"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													"data-uid": "src/pages/admin/EditLearning.tsx:158:21",
													"data-prohibitions": "[editContent]",
													onValueChange: field.onChange,
													defaultValue: field.value,
													disabled: isSubmitting,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
														"data-uid": "src/pages/admin/EditLearning.tsx:163:23",
														"data-prohibitions": "[editContent]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
															"data-uid": "src/pages/admin/EditLearning.tsx:164:25",
															"data-prohibitions": "[editContent]",
															className: cn("font-mono", form.formState.errors.category && "border-destructive focus-visible:ring-destructive"),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
																"data-uid": "src/pages/admin/EditLearning.tsx:171:27",
																"data-prohibitions": "[editContent]",
																placeholder: "Selecione"
															})
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
														"data-uid": "src/pages/admin/EditLearning.tsx:174:23",
														"data-prohibitions": "[]",
														className: "font-mono",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:175:25",
																"data-prohibitions": "[]",
																value: "IA",
																children: "IA"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:176:25",
																"data-prohibitions": "[]",
																value: "Vibecoding",
																children: "Vibecoding"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:177:25",
																"data-prohibitions": "[]",
																value: "Automacoes",
																children: "Automacoes"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:178:25",
																"data-prohibitions": "[]",
																value: "Agentes de IA",
																children: "Agentes de IA"
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:181:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:185:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "level",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:189:19",
											"data-prohibitions": "[editContent]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:190:21",
													"data-prohibitions": "[]",
													children: "Nível"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													"data-uid": "src/pages/admin/EditLearning.tsx:191:21",
													"data-prohibitions": "[editContent]",
													onValueChange: field.onChange,
													defaultValue: field.value,
													disabled: isSubmitting,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
														"data-uid": "src/pages/admin/EditLearning.tsx:196:23",
														"data-prohibitions": "[editContent]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
															"data-uid": "src/pages/admin/EditLearning.tsx:197:25",
															"data-prohibitions": "[editContent]",
															className: cn("font-mono", form.formState.errors.level && "border-destructive focus-visible:ring-destructive"),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
																"data-uid": "src/pages/admin/EditLearning.tsx:204:27",
																"data-prohibitions": "[editContent]",
																placeholder: "Selecione"
															})
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
														"data-uid": "src/pages/admin/EditLearning.tsx:207:23",
														"data-prohibitions": "[]",
														className: "font-mono",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:208:25",
																"data-prohibitions": "[]",
																value: "Iniciante",
																children: "Iniciante"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:209:25",
																"data-prohibitions": "[]",
																value: "Intermediario",
																children: "Intermediário"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:210:25",
																"data-prohibitions": "[]",
																value: "Avancado",
																children: "Avançado"
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:213:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"data-uid": "src/pages/admin/EditLearning.tsx:220:11",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/admin/EditLearning.tsx:221:13",
								"data-prohibitions": "[]",
								className: "uppercase text-[11px] font-bold tracking-[0.08em] text-muted-foreground border-b border-border pb-[8px] mb-[20px]",
								children: "Conteúdo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/admin/EditLearning.tsx:224:13",
								"data-prohibitions": "[editContent]",
								className: "flex flex-col gap-[20px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:225:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "title",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:229:19",
											"data-prohibitions": "[editContent]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:230:21",
													"data-prohibitions": "[]",
													children: "Título"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:231:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														"data-uid": "src/pages/admin/EditLearning.tsx:232:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Titulo do aprendizado",
														disabled: isSubmitting,
														className: "font-mono",
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/admin/EditLearning.tsx:239:21",
													"data-prohibitions": "[editContent]",
													className: "text-[11px] text-muted-foreground text-right mt-1",
													children: [field.value?.length || 0, "/100"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:242:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:246:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "context",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:250:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:251:21",
													"data-prohibitions": "[]",
													children: "Contexto"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:252:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														"data-uid": "src/pages/admin/EditLearning.tsx:253:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Contexto...",
														rows: 4,
														disabled: isSubmitting,
														className: "font-mono",
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:261:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:265:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "learning",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:269:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:270:21",
													"data-prohibitions": "[]",
													children: "Aprendizado"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:271:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														"data-uid": "src/pages/admin/EditLearning.tsx:272:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Aprendizado...",
														rows: 5,
														disabled: isSubmitting,
														className: "font-mono",
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:280:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/EditLearning.tsx:285:15",
										"data-prohibitions": "[editContent]",
										className: "space-y-0 flex flex-col",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"data-uid": "src/pages/admin/EditLearning.tsx:286:17",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													"data-uid": "src/pages/admin/EditLearning.tsx:287:19",
													"data-prohibitions": "[]",
													className: "text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]",
													children: [
														"Passos",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															"data-uid": "src/pages/admin/EditLearning.tsx:289:21",
															"data-prohibitions": "[]",
															className: "text-muted-foreground font-normal text-[12px] ml-1",
															children: "(opcional)"
														})
													]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"data-uid": "src/pages/admin/EditLearning.tsx:294:17",
												"data-prohibitions": "[editContent]",
												className: "flex flex-col gap-[8px]",
												children: fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/admin/EditLearning.tsx:296:21",
													"data-prohibitions": "[editContent]",
													className: "flex flex-row items-center gap-[8px]",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															"data-uid": "src/pages/admin/EditLearning.tsx:297:23",
															"data-prohibitions": "[editContent]",
															className: "font-mono text-[13px] font-medium text-muted-foreground min-w-[24px] text-right",
															children: [index + 1, "."]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
															"data-uid": "src/pages/admin/EditLearning.tsx:300:23",
															"data-prohibitions": "[editContent]",
															control: form.control,
															name: `stepsArray.${index}.value`,
															render: ({ field: inputField }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
																"data-uid": "src/pages/admin/EditLearning.tsx:304:27",
																"data-prohibitions": "[]",
																className: "flex-1 space-y-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
																	"data-uid": "src/pages/admin/EditLearning.tsx:305:29",
																	"data-prohibitions": "[]",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																		"data-uid": "src/pages/admin/EditLearning.tsx:306:31",
																		"data-prohibitions": "[editContent]",
																		...inputField,
																		className: "font-mono text-[13px] py-[9px] px-[12px] h-auto shadow-none",
																		placeholder: `Passo ${index + 1}`,
																		disabled: isSubmitting
																	})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
																	"data-uid": "src/pages/admin/EditLearning.tsx:313:29",
																	"data-prohibitions": "[editContent]"
																})]
															})
														}),
														fields.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															"data-uid": "src/pages/admin/EditLearning.tsx:318:25",
															"data-prohibitions": "[]",
															type: "button",
															variant: "ghost",
															size: "icon",
															className: "w-[28px] h-[28px] shrink-0 text-muted-foreground hover:text-destructive",
															onClick: () => remove(index),
															disabled: isSubmitting,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
																"data-uid": "src/pages/admin/EditLearning.tsx:326:27",
																"data-prohibitions": "[editContent]",
																className: "w-4 h-4"
															})
														})
													]
												}, field.id))
											}),
											fields.length < 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												"data-uid": "src/pages/admin/EditLearning.tsx:333:19",
												"data-prohibitions": "[]",
												type: "button",
												variant: "ghost",
												className: "w-fit mt-[8px] text-[13px] font-mono text-primary px-0 h-auto gap-[4px]",
												onClick: () => append({ value: "" }),
												disabled: isSubmitting,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
													"data-uid": "src/pages/admin/EditLearning.tsx:340:21",
													"data-prohibitions": "[editContent]",
													className: "w-3.5 h-3.5"
												}), "Adicionar passo"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/admin/EditLearning.tsx:346:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "observations",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/admin/EditLearning.tsx:350:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptLabel, {
													"data-uid": "src/pages/admin/EditLearning.tsx:351:21",
													"data-prohibitions": "[]",
													children: "Observações"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/admin/EditLearning.tsx:352:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														"data-uid": "src/pages/admin/EditLearning.tsx:353:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Observacoes...",
														rows: 3,
														disabled: isSubmitting,
														className: "font-mono",
														value: field.value || "",
														onChange: field.onChange
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/admin/EditLearning.tsx:362:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/EditLearning.tsx:369:11",
							"data-prohibitions": "[editContent]",
							className: "flex items-center justify-end gap-[12px] border-t border-border pt-[24px] mt-[40px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								"data-uid": "src/pages/admin/EditLearning.tsx:370:13",
								"data-prohibitions": "[]",
								to: "/admin",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"data-uid": "src/pages/admin/EditLearning.tsx:371:15",
									"data-prohibitions": "[]",
									type: "button",
									variant: "ghost",
									disabled: isSubmitting,
									className: "font-mono",
									children: "Cancelar"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/pages/admin/EditLearning.tsx:375:13",
								"data-prohibitions": "[editContent]",
								type: "submit",
								disabled: isSubmitting,
								className: "font-mono font-medium",
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									"data-uid": "src/pages/admin/EditLearning.tsx:378:19",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 mr-2 animate-spin shrink-0"
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

//# sourceMappingURL=EditLearning-CJhBOLlr.js.map