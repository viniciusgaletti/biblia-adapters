import { a as require_jsx_runtime, c as Link, g as require_react, v as __toESM } from "./client-D09FV_21.js";
import { a as cn, t as Button } from "./button-BeRAxBEE.js";
import { t as ArrowLeft } from "./arrow-left-DCIMdVmn.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-CyLNbRw8.js";
import { t as Plus } from "./plus-DeMb-NdG.js";
import { T as X } from "./dist-Cjh9VPbQ.js";
import { i as LoaderCircle } from "./index-DJw-Hamh.js";
import "./learnings-lUo10QHQ.js";
import { t as Input } from "./input-UzQica1A.js";
import { a as FormControl, c as FormLabel, d as useFieldArray, i as Form, l as FormMessage, n as useNewLearning, o as FormField, s as FormItem, u as Textarea } from "./use-new-learning-DFojDVAk.js";
import "./label-Cg7XO7Wk.js";
//#region src/pages/NovoAprendizado.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var ReqLabel = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormLabel, {
	"data-uid": "src/pages/NovoAprendizado.tsx:27:3",
	"data-prohibitions": "[editContent]",
	className: "text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]",
	children: [
		children,
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/pages/NovoAprendizado.tsx:29:5",
			"data-prohibitions": "[]",
			className: "text-primary ml-[2px]",
			"aria-hidden": "true",
			children: "*"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/pages/NovoAprendizado.tsx:32:5",
			"data-prohibitions": "[]",
			className: "sr-only",
			children: "(Obrigatório)"
		})
	]
});
var OptLabel = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormLabel, {
	"data-uid": "src/pages/NovoAprendizado.tsx:37:3",
	"data-prohibitions": "[editContent]",
	className: "text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]",
	children: [
		children,
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-uid": "src/pages/NovoAprendizado.tsx:39:5",
			"data-prohibitions": "[]",
			className: "text-muted-foreground font-normal text-[12px] ml-1",
			children: "(opcional)"
		})
	]
});
function NovoAprendizado() {
	const { form, isSubmitting, onSubmit } = useNewLearning();
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: "stepsArray"
	});
	(0, import_react.useEffect)(() => {
		document.title = "Registrar Aprendizado | Biblia dos Adapters";
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/NovoAprendizado.tsx:55:5",
		"data-prohibitions": "[editContent]",
		className: "max-w-[680px] mx-auto animate-fade-in-up pb-12 font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				"data-uid": "src/pages/NovoAprendizado.tsx:56:7",
				"data-prohibitions": "[]",
				to: "/",
				className: "inline-flex items-center text-[12px] tracking-[0.02em] text-muted-foreground hover:text-primary mb-[28px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					"data-uid": "src/pages/NovoAprendizado.tsx:60:9",
					"data-prohibitions": "[editContent]",
					className: "w-3.5 h-3.5 mr-1.5",
					"aria-hidden": "true"
				}), "Voltar para lista"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"data-uid": "src/pages/NovoAprendizado.tsx:64:7",
				"data-prohibitions": "[]",
				className: "mb-[36px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/NovoAprendizado.tsx:65:9",
					"data-prohibitions": "[]",
					className: "text-[24px] font-bold tracking-[-0.02em] text-foreground",
					children: "Registrar Aprendizado"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/NovoAprendizado.tsx:68:9",
					"data-prohibitions": "[]",
					className: "text-[13px] text-muted-foreground mt-1 leading-[1.6]",
					children: "Compartilhe com a equipe o que você aprendeu na prática."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
				"data-uid": "src/pages/NovoAprendizado.tsx:73:7",
				"data-prohibitions": "[editContent]",
				...form,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					"data-uid": "src/pages/NovoAprendizado.tsx:74:9",
					"data-prohibitions": "[editContent]",
					onSubmit,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"data-uid": "src/pages/NovoAprendizado.tsx:75:11",
							"data-prohibitions": "[]",
							className: "mb-[36px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/NovoAprendizado.tsx:76:13",
								"data-prohibitions": "[]",
								className: "uppercase text-[11px] font-bold tracking-[0.08em] text-muted-foreground border-b border-border pb-[8px] mb-[20px]",
								children: "Identificação"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/NovoAprendizado.tsx:79:13",
								"data-prohibitions": "[]",
								className: "grid grid-cols-1 sm:grid-cols-2 gap-[16px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/NovoAprendizado.tsx:80:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "author",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/NovoAprendizado.tsx:84:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/NovoAprendizado.tsx:85:21",
													"data-prohibitions": "[]",
													children: "Autor"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/NovoAprendizado.tsx:86:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														"data-uid": "src/pages/NovoAprendizado.tsx:87:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Seu nome completo",
														disabled: isSubmitting,
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/NovoAprendizado.tsx:89:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/NovoAprendizado.tsx:93:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "date",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/NovoAprendizado.tsx:97:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/NovoAprendizado.tsx:98:21",
													"data-prohibitions": "[]",
													children: "Data"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/NovoAprendizado.tsx:99:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														"data-uid": "src/pages/NovoAprendizado.tsx:100:23",
														"data-prohibitions": "[editContent]",
														type: "date",
														disabled: isSubmitting,
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/NovoAprendizado.tsx:102:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/NovoAprendizado.tsx:106:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "category",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/NovoAprendizado.tsx:110:19",
											"data-prohibitions": "[editContent]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/NovoAprendizado.tsx:111:21",
													"data-prohibitions": "[]",
													children: "Categoria"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													"data-uid": "src/pages/NovoAprendizado.tsx:112:21",
													"data-prohibitions": "[editContent]",
													onValueChange: field.onChange,
													defaultValue: field.value,
													disabled: isSubmitting,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
														"data-uid": "src/pages/NovoAprendizado.tsx:117:23",
														"data-prohibitions": "[editContent]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
															"data-uid": "src/pages/NovoAprendizado.tsx:118:25",
															"data-prohibitions": "[editContent]",
															className: cn(form.formState.errors.category && "border-destructive focus-visible:ring-destructive"),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
																"data-uid": "src/pages/NovoAprendizado.tsx:124:27",
																"data-prohibitions": "[editContent]",
																placeholder: "Selecione uma categoria"
															})
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
														"data-uid": "src/pages/NovoAprendizado.tsx:127:23",
														"data-prohibitions": "[]",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/NovoAprendizado.tsx:128:25",
																"data-prohibitions": "[]",
																value: "IA",
																children: "IA"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/NovoAprendizado.tsx:129:25",
																"data-prohibitions": "[]",
																value: "Vibecoding",
																children: "Vibecoding"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/NovoAprendizado.tsx:130:25",
																"data-prohibitions": "[]",
																value: "Automações",
																children: "Automações"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/NovoAprendizado.tsx:131:25",
																"data-prohibitions": "[]",
																value: "Agentes de IA",
																children: "Agentes de IA"
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/NovoAprendizado.tsx:134:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/NovoAprendizado.tsx:138:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "level",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/NovoAprendizado.tsx:142:19",
											"data-prohibitions": "[editContent]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/NovoAprendizado.tsx:143:21",
													"data-prohibitions": "[]",
													children: "Nível"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													"data-uid": "src/pages/NovoAprendizado.tsx:144:21",
													"data-prohibitions": "[editContent]",
													onValueChange: field.onChange,
													defaultValue: field.value,
													disabled: isSubmitting,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
														"data-uid": "src/pages/NovoAprendizado.tsx:149:23",
														"data-prohibitions": "[editContent]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
															"data-uid": "src/pages/NovoAprendizado.tsx:150:25",
															"data-prohibitions": "[editContent]",
															className: cn(form.formState.errors.level && "border-destructive focus-visible:ring-destructive"),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
																"data-uid": "src/pages/NovoAprendizado.tsx:156:27",
																"data-prohibitions": "[editContent]",
																placeholder: "Selecione o nível"
															})
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
														"data-uid": "src/pages/NovoAprendizado.tsx:159:23",
														"data-prohibitions": "[]",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/NovoAprendizado.tsx:160:25",
																"data-prohibitions": "[]",
																value: "Iniciante",
																children: "Iniciante"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/NovoAprendizado.tsx:161:25",
																"data-prohibitions": "[]",
																value: "Intermediario",
																children: "Intermediário"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																"data-uid": "src/pages/NovoAprendizado.tsx:162:25",
																"data-prohibitions": "[]",
																value: "Avancado",
																children: "Avançado"
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/NovoAprendizado.tsx:165:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"data-uid": "src/pages/NovoAprendizado.tsx:172:11",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/NovoAprendizado.tsx:173:13",
								"data-prohibitions": "[]",
								className: "uppercase text-[11px] font-bold tracking-[0.08em] text-muted-foreground border-b border-border pb-[8px] mb-[20px]",
								children: "Conteúdo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/NovoAprendizado.tsx:176:13",
								"data-prohibitions": "[editContent]",
								className: "flex flex-col gap-[20px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/NovoAprendizado.tsx:177:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "title",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/NovoAprendizado.tsx:181:19",
											"data-prohibitions": "[editContent]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/NovoAprendizado.tsx:182:21",
													"data-prohibitions": "[]",
													children: "Título"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/NovoAprendizado.tsx:183:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														"data-uid": "src/pages/NovoAprendizado.tsx:184:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Título curto e direto do aprendizado",
														disabled: isSubmitting,
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/NovoAprendizado.tsx:190:21",
													"data-prohibitions": "[editContent]",
													className: "text-[11px] text-muted-foreground text-right mt-1",
													children: [field.value?.length || 0, "/100"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/NovoAprendizado.tsx:193:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/NovoAprendizado.tsx:197:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "context",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/NovoAprendizado.tsx:201:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/NovoAprendizado.tsx:202:21",
													"data-prohibitions": "[]",
													children: "Contexto"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/NovoAprendizado.tsx:203:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														"data-uid": "src/pages/NovoAprendizado.tsx:204:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Descreva o problema ou situação que gerou esse aprendizado.",
														rows: 4,
														disabled: isSubmitting,
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/NovoAprendizado.tsx:211:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/NovoAprendizado.tsx:215:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "learning",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/NovoAprendizado.tsx:219:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReqLabel, {
													"data-uid": "src/pages/NovoAprendizado.tsx:220:21",
													"data-prohibitions": "[]",
													children: "Aprendizado"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/NovoAprendizado.tsx:221:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														"data-uid": "src/pages/NovoAprendizado.tsx:222:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Descreva a solução ou insight de forma clara e direta.",
														rows: 5,
														disabled: isSubmitting,
														...field
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/NovoAprendizado.tsx:229:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/NovoAprendizado.tsx:234:15",
										"data-prohibitions": "[editContent]",
										className: "space-y-0 flex flex-col",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"data-uid": "src/pages/NovoAprendizado.tsx:235:17",
												"data-prohibitions": "[]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													"data-uid": "src/pages/NovoAprendizado.tsx:236:19",
													"data-prohibitions": "[]",
													className: "text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]",
													children: [
														"Passos",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															"data-uid": "src/pages/NovoAprendizado.tsx:238:21",
															"data-prohibitions": "[]",
															className: "text-muted-foreground font-normal text-[12px] ml-1",
															children: "(opcional)"
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													"data-uid": "src/pages/NovoAprendizado.tsx:242:19",
													"data-prohibitions": "[]",
													className: "text-[12px] text-muted-foreground mb-[10px]",
													children: "Se o aprendizado tem uma sequência, liste os passos. Deixe em branco se não se aplicar."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"data-uid": "src/pages/NovoAprendizado.tsx:247:17",
												"data-prohibitions": "[editContent]",
												className: "flex flex-col gap-[8px]",
												children: fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/NovoAprendizado.tsx:249:21",
													"data-prohibitions": "[editContent]",
													className: "flex flex-row items-start gap-[8px]",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															"data-uid": "src/pages/NovoAprendizado.tsx:250:23",
															"data-prohibitions": "[editContent]",
															className: "font-mono text-[13px] font-medium text-muted-foreground min-w-[24px] text-right mt-[10px]",
															children: [index + 1, "."]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
															"data-uid": "src/pages/NovoAprendizado.tsx:253:23",
															"data-prohibitions": "[editContent]",
															control: form.control,
															name: `stepsArray.${index}.value`,
															render: ({ field: inputField }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
																"data-uid": "src/pages/NovoAprendizado.tsx:257:27",
																"data-prohibitions": "[]",
																className: "flex-1 space-y-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
																	"data-uid": "src/pages/NovoAprendizado.tsx:258:29",
																	"data-prohibitions": "[]",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
																		"data-uid": "src/pages/NovoAprendizado.tsx:259:31",
																		"data-prohibitions": "[editContent]",
																		...inputField,
																		rows: 2,
																		className: "font-mono text-[13px] py-[9px] px-[12px] min-h-0 shadow-none resize-y leading-[1.6] break-words overflow-y-auto overflow-x-hidden w-full",
																		placeholder: `Passo ${index + 1}`,
																		disabled: isSubmitting,
																		"aria-label": `Passo ${index + 1}`
																	})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
																	"data-uid": "src/pages/NovoAprendizado.tsx:268:29",
																	"data-prohibitions": "[editContent]"
																})]
															})
														}),
														fields.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															"data-uid": "src/pages/NovoAprendizado.tsx:273:25",
															"data-prohibitions": "[]",
															type: "button",
															variant: "ghost",
															size: "icon",
															className: "w-[28px] h-[28px] shrink-0 text-muted-foreground hover:text-destructive hover:bg-transparent mt-[6px]",
															onClick: () => remove(index),
															"aria-label": `Remover passo ${index + 1}`,
															disabled: isSubmitting,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
																"data-uid": "src/pages/NovoAprendizado.tsx:282:27",
																"data-prohibitions": "[editContent]",
																className: "w-4 h-4",
																"aria-hidden": "true"
															})
														})
													]
												}, field.id))
											}),
											fields.length < 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												"data-uid": "src/pages/NovoAprendizado.tsx:289:19",
												"data-prohibitions": "[]",
												type: "button",
												variant: "ghost",
												className: "w-fit mt-[8px] text-[13px] font-mono text-primary hover:text-primary/90 hover:bg-transparent px-0 h-auto gap-[4px]",
												onClick: () => append({ value: "" }),
												disabled: isSubmitting,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
													"data-uid": "src/pages/NovoAprendizado.tsx:296:21",
													"data-prohibitions": "[editContent]",
													className: "w-3.5 h-3.5",
													"aria-hidden": "true"
												}), "Adicionar passo"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
										"data-uid": "src/pages/NovoAprendizado.tsx:302:15",
										"data-prohibitions": "[editContent]",
										control: form.control,
										name: "observations",
										render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
											"data-uid": "src/pages/NovoAprendizado.tsx:306:19",
											"data-prohibitions": "[]",
											className: "space-y-0 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptLabel, {
													"data-uid": "src/pages/NovoAprendizado.tsx:307:21",
													"data-prohibitions": "[]",
													children: "Observações"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/pages/NovoAprendizado.tsx:308:21",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														"data-uid": "src/pages/NovoAprendizado.tsx:309:23",
														"data-prohibitions": "[editContent]",
														placeholder: "Pontos de atenção, limitações ou informações extras para os colegas.",
														rows: 3,
														disabled: isSubmitting,
														value: field.value || "",
														onChange: field.onChange
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
													"data-uid": "src/pages/NovoAprendizado.tsx:317:21",
													"data-prohibitions": "[editContent]"
												})
											]
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/NovoAprendizado.tsx:324:11",
							"data-prohibitions": "[editContent]",
							className: "flex items-center justify-end gap-[12px] border-t border-border pt-[24px] mt-[40px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								"data-uid": "src/pages/NovoAprendizado.tsx:325:13",
								"data-prohibitions": "[]",
								to: "/",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"data-uid": "src/pages/NovoAprendizado.tsx:326:15",
									"data-prohibitions": "[]",
									type: "button",
									variant: "outline",
									disabled: isSubmitting,
									className: "px-[20px] py-[10px] h-auto text-[13px] bg-transparent border-border hover:bg-accent hover:text-accent-foreground disabled:opacity-50",
									children: "Cancelar"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/pages/NovoAprendizado.tsx:335:13",
								"data-prohibitions": "[editContent]",
								type: "submit",
								disabled: isSubmitting,
								className: "px-[22px] py-[10px] h-auto text-[13px] font-medium disabled:opacity-50 disabled:cursor-not-allowed",
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									"data-uid": "src/pages/NovoAprendizado.tsx:342:19",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 mr-2 animate-spin shrink-0",
									"aria-hidden": "true"
								}), "Registrando..."] }) : "Registrar Aprendizado"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { NovoAprendizado as default };

//# sourceMappingURL=NovoAprendizado-D3PV2bbf.js.map