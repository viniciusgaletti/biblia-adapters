import { a as createLucideIcon, f as Link, g as useNavigate, i as cn, o as cva, r as createSlot, s as require_jsx_runtime, t as Button, u as useToast, x as __toESM, y as require_react } from "./button-pSLtMQQj.js";
import { n as require_react_dom, t as LoaderCircle } from "./loader-circle-2MIJ0fA1.js";
import { t as ArrowLeft } from "./arrow-left-ByU3_M6v.js";
import { t as createAprendizado } from "./aprendizados-Bt742plA.js";
import { n as CardContent, t as Card } from "./card-CxwY7B8u.js";
var Save = createLucideIcon("save", [
	["path", {
		d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
		key: "1c8476"
	}],
	["path", {
		d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
		key: "1ydtos"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]);
//#endregion
//#region src/components/ui/input.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		"data-uid": "src/components/ui/input.tsx:9:7",
		"data-prohibitions": "[editContent]",
		type,
		className: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
require_react_dom();
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((primitive, node) => {
	const Slot = createSlot(`Primitive.${node}`);
	const Node = import_react.forwardRef((props, forwardedRef) => {
		const { asChild, ...primitiveProps } = props;
		const Comp = asChild ? Slot : node;
		if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
			...primitiveProps,
			ref: forwardedRef
		});
	});
	Node.displayName = `Primitive.${node}`;
	return {
		...primitive,
		[node]: Node
	};
}, {});
//#endregion
//#region ../../cache/modules/biblia-dos-eliters-3acf3/node_modules/.pnpm/@radix-ui+react-label@2.1.8_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@_55fa612a976b7bdfbf4dcdd93d861aab/node_modules/@radix-ui/react-label/dist/index.mjs
var NAME = "Label";
var Label$1 = import_react.forwardRef((props, forwardedRef) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.label, {
		...props,
		ref: forwardedRef,
		onMouseDown: (event) => {
			if (event.target.closest("button, input, select, textarea")) return;
			props.onMouseDown?.(event);
			if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
		}
	});
});
Label$1.displayName = NAME;
var Root = Label$1;
//#endregion
//#region src/components/ui/label.tsx
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	"data-uid": "src/components/ui/label.tsx:16:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
//#endregion
//#region src/components/ui/textarea.tsx
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		"data-uid": "src/components/ui/textarea.tsx:9:7",
		"data-prohibitions": "[editContent]",
		className: cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/pages/NovoAprendizado.tsx
function NovoAprendizado() {
	const [titulo, setTitulo] = (0, import_react.useState)("");
	const [conteudo, setConteudo] = (0, import_react.useState)("");
	const [categoria, setCategoria] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const { toast } = useToast();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!titulo.trim() || !conteudo.trim()) return;
		setIsSubmitting(true);
		try {
			await createAprendizado({
				titulo: titulo.trim(),
				conteudo: conteudo.trim(),
				categoria: categoria.trim() || null
			});
			toast({
				title: "Sucesso!",
				description: "Aprendizado registrado na sua bíblia."
			});
			navigate("/");
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Erro ao salvar",
				description: "Tente novamente mais tarde."
			});
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/NovoAprendizado.tsx:47:5",
		"data-prohibitions": "[editContent]",
		className: "max-w-3xl mx-auto animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/NovoAprendizado.tsx:48:7",
			"data-prohibitions": "[]",
			className: "mb-6 flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				"data-uid": "src/pages/NovoAprendizado.tsx:49:9",
				"data-prohibitions": "[]",
				to: "/",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/pages/NovoAprendizado.tsx:50:11",
					"data-prohibitions": "[]",
					variant: "ghost",
					size: "icon",
					className: "rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						"data-uid": "src/pages/NovoAprendizado.tsx:51:13",
						"data-prohibitions": "[editContent]",
						className: "w-5 h-5"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/NovoAprendizado.tsx:54:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/NovoAprendizado.tsx:55:11",
					"data-prohibitions": "[]",
					className: "text-3xl font-bold tracking-tight",
					children: "Novo Aprendizado"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/NovoAprendizado.tsx:56:11",
					"data-prohibitions": "[]",
					className: "text-muted-foreground",
					children: "O que você descobriu hoje?"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			"data-uid": "src/pages/NovoAprendizado.tsx:60:7",
			"data-prohibitions": "[editContent]",
			className: "border-border shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				"data-uid": "src/pages/NovoAprendizado.tsx:61:9",
				"data-prohibitions": "[editContent]",
				onSubmit: handleSubmit,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/pages/NovoAprendizado.tsx:62:11",
					"data-prohibitions": "[]",
					className: "space-y-6 pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/NovoAprendizado.tsx:63:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/NovoAprendizado.tsx:64:15",
								"data-prohibitions": "[]",
								htmlFor: "titulo",
								className: "text-base font-medium",
								children: "Título"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/NovoAprendizado.tsx:67:15",
								"data-prohibitions": "[editContent]",
								id: "titulo",
								placeholder: "Ex: Como centralizar uma div",
								value: titulo,
								onChange: (e) => setTitulo(e.target.value),
								required: true,
								className: "text-lg py-6",
								autoFocus: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/NovoAprendizado.tsx:78:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/NovoAprendizado.tsx:79:15",
								"data-prohibitions": "[]",
								htmlFor: "categoria",
								className: "text-base font-medium",
								children: "Categoria (Opcional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/NovoAprendizado.tsx:82:15",
								"data-prohibitions": "[editContent]",
								id: "categoria",
								placeholder: "Ex: CSS, Filosofia, Finanças...",
								value: categoria,
								onChange: (e) => setCategoria(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/NovoAprendizado.tsx:90:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/NovoAprendizado.tsx:91:15",
								"data-prohibitions": "[]",
								htmlFor: "conteudo",
								className: "text-base font-medium",
								children: "Conteúdo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								"data-uid": "src/pages/NovoAprendizado.tsx:94:15",
								"data-prohibitions": "[editContent]",
								id: "conteudo",
								placeholder: "Descreva detalhadamente o que você aprendeu...",
								value: conteudo,
								onChange: (e) => setConteudo(e.target.value),
								required: true,
								className: "min-h-[300px] resize-y text-base p-4"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/NovoAprendizado.tsx:104:11",
					"data-prohibitions": "[editContent]",
					className: "flex items-center justify-end gap-3 p-6 pt-0 border-t border-border mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						"data-uid": "src/pages/NovoAprendizado.tsx:105:13",
						"data-prohibitions": "[]",
						to: "/",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"data-uid": "src/pages/NovoAprendizado.tsx:106:15",
							"data-prohibitions": "[]",
							type: "button",
							variant: "ghost",
							children: "Cancelar"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/pages/NovoAprendizado.tsx:110:13",
						"data-prohibitions": "[editContent]",
						type: "submit",
						disabled: isSubmitting || !titulo.trim() || !conteudo.trim(),
						children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							"data-uid": "src/pages/NovoAprendizado.tsx:112:17",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4 mr-2 animate-spin"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
							"data-uid": "src/pages/NovoAprendizado.tsx:114:17",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4 mr-2"
						}), "Salvar"]
					})]
				})]
			})
		})]
	});
}
//#endregion
export { NovoAprendizado as default };

//# sourceMappingURL=NovoAprendizado-CBEW5ulH.js.map