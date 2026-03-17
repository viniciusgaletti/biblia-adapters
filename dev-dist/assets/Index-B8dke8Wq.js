import { E as __toESM, d as require_jsx_runtime, g as Link, l as createLucideIcon, m as useToast, t as Button, w as require_react } from "./button-DMYV3pJh.js";
import { i as Calendar, n as Badge, r as Tag, t as Skeleton } from "./skeleton-D2GGYGUN.js";
import { i as getAprendizados } from "./aprendizados-DgI4ZuJl.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-BMVqA-P1.js";
var BookX = createLucideIcon("book-x", [
	["path", {
		d: "m14.5 7-5 5",
		key: "dy991v"
	}],
	["path", {
		d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
		key: "k3hazp"
	}],
	["path", {
		d: "m9.5 7 5 5",
		key: "s45iea"
	}]
]);
var Plus = createLucideIcon("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
//#endregion
//#region src/pages/Index.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const [aprendizados, setAprendizados] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		const fetchAprendizados = async () => {
			try {
				setAprendizados(await getAprendizados());
			} catch (error) {
				toast({
					variant: "destructive",
					title: "Erro ao carregar",
					description: "Não foi possível carregar seus aprendizados."
				});
			} finally {
				setLoading(false);
			}
		};
		fetchAprendizados();
	}, [toast]);
	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Index.tsx:45:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/Index.tsx:46:7",
			"data-prohibitions": "[]",
			className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/Index.tsx:47:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/Index.tsx:48:11",
					"data-prohibitions": "[]",
					className: "text-3xl font-bold tracking-tight",
					children: "Lista de Aprendizados"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/Index.tsx:49:11",
					"data-prohibitions": "[]",
					className: "text-muted-foreground mt-1",
					children: "Sua jornada de conhecimento documentada."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				"data-uid": "src/pages/Index.tsx:51:9",
				"data-prohibitions": "[]",
				to: "/novo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					"data-uid": "src/pages/Index.tsx:52:11",
					"data-prohibitions": "[]",
					className: "shadow-sm transition-transform active:scale-95 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						"data-uid": "src/pages/Index.tsx:53:13",
						"data-prohibitions": "[editContent]",
						className: "w-5 h-5 mr-2 transition-transform group-hover:rotate-90"
					}), "Novo Aprendizado"]
				})
			})]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/Index.tsx:60:9",
			"data-prohibitions": "[editContent]",
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8",
			children: [
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/Index.tsx:62:13",
				"data-prohibitions": "[]",
				className: "overflow-hidden border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					"data-uid": "src/pages/Index.tsx:63:15",
					"data-prohibitions": "[]",
					className: "pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/Index.tsx:64:17",
						"data-prohibitions": "[editContent]",
						className: "h-6 w-3/4 mb-2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/Index.tsx:65:17",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-1/3"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					"data-uid": "src/pages/Index.tsx:67:15",
					"data-prohibitions": "[]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/Index.tsx:68:17",
						"data-prohibitions": "[editContent]",
						className: "h-20 w-full"
					})
				})]
			}, i))
		}) : aprendizados.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/Index.tsx:74:9",
			"data-prohibitions": "[]",
			className: "flex flex-col items-center justify-center p-12 text-center mt-8 border-dashed bg-card/50",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookX, {
					"data-uid": "src/pages/Index.tsx:75:11",
					"data-prohibitions": "[editContent]",
					className: "w-12 h-12 text-muted-foreground mb-4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					"data-uid": "src/pages/Index.tsx:76:11",
					"data-prohibitions": "[]",
					className: "text-xl font-semibold mb-2",
					children: "Nenhum aprendizado encontrado"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/Index.tsx:77:11",
					"data-prohibitions": "[]",
					className: "text-muted-foreground mb-6 max-w-md",
					children: "Você ainda não registrou nada. Comece a construir sua bíblia anotando o que você aprendeu hoje!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					"data-uid": "src/pages/Index.tsx:81:11",
					"data-prohibitions": "[]",
					to: "/novo",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/Index.tsx:82:13",
						"data-prohibitions": "[]",
						variant: "outline",
						children: "Comece a escrever"
					})
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/Index.tsx:86:9",
			"data-prohibitions": "[editContent]",
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8",
			children: aprendizados.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				"data-uid": "src/pages/Index.tsx:88:13",
				"data-prohibitions": "[editContent]",
				to: `/aprendizado/${item.id}`,
				className: "group block h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					"data-uid": "src/pages/Index.tsx:89:15",
					"data-prohibitions": "[editContent]",
					className: "h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						"data-uid": "src/pages/Index.tsx:90:17",
						"data-prohibitions": "[editContent]",
						className: "pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-uid": "src/pages/Index.tsx:91:19",
							"data-prohibitions": "[editContent]",
							className: "flex justify-between items-start gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								"data-uid": "src/pages/Index.tsx:92:21",
								"data-prohibitions": "[editContent]",
								className: "text-lg line-clamp-2 leading-tight group-hover:text-primary transition-colors",
								children: item.titulo
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Index.tsx:96:19",
							"data-prohibitions": "[editContent]",
							className: "flex items-center text-xs text-muted-foreground mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
								"data-uid": "src/pages/Index.tsx:97:21",
								"data-prohibitions": "[editContent]",
								className: "w-3 h-3 mr-1"
							}), formatDate(item.created_at)]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						"data-uid": "src/pages/Index.tsx:101:17",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/Index.tsx:102:19",
							"data-prohibitions": "[editContent]",
							className: "text-sm text-muted-foreground line-clamp-3 mb-4",
							children: item.conteudo
						}), item.categoria && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							"data-uid": "src/pages/Index.tsx:104:21",
							"data-prohibitions": "[editContent]",
							variant: "secondary",
							className: "font-normal text-xs flex items-center w-fit",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								"data-uid": "src/pages/Index.tsx:108:23",
								"data-prohibitions": "[editContent]",
								className: "w-3 h-3 mr-1"
							}), item.categoria]
						})]
					})]
				})
			}, item.id))
		})]
	});
}
//#endregion
export { Index as default };

//# sourceMappingURL=Index-B8dke8Wq.js.map