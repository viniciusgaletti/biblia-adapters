import { a as require_jsx_runtime, c as Link, g as require_react, m as useParams, o as createLucideIcon, v as __toESM } from "./client-D09FV_21.js";
import { t as ArrowLeft } from "./arrow-left-DCIMdVmn.js";
import { a as cn, t as Button } from "./button-CiSPku0O.js";
import { n as fetchLearningById } from "./learnings-CkpGBjTW.js";
import { t as Skeleton } from "./skeleton-BvP868zf.js";
var RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
//#endregion
//#region src/hooks/use-learning-detail.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useLearningDetail(id) {
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const fetchDetail = (0, import_react.useCallback)(async () => {
		if (!id) {
			setLoading(false);
			return;
		}
		try {
			setLoading(true);
			setError(null);
			setData(await fetchLearningById(id));
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}, [id]);
	(0, import_react.useEffect)(() => {
		fetchDetail();
	}, [fetchDetail]);
	return {
		data,
		loading,
		error,
		refetch: fetchDetail
	};
}
//#endregion
//#region src/pages/DetalheAprendizado.tsx
var import_jsx_runtime = require_jsx_runtime();
function formatDateLong(dateString) {
	if (!dateString) return "";
	const d = dateString.includes("T") ? new Date(dateString) : /* @__PURE__ */ new Date(dateString + "T12:00:00Z");
	return new Intl.DateTimeFormat("pt-BR", {
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(d);
}
function DetalheAprendizado() {
	const { id } = useParams();
	const { data: ap, loading, error, refetch } = useLearningDetail(id);
	(0, import_react.useEffect)(() => {
		if (ap?.title) document.title = `${ap.title} | Biblia dos Adapters`;
		else if (!loading) document.title = "Detalhe do Aprendizado | Biblia dos Adapters";
	}, [ap, loading]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/DetalheAprendizado.tsx:33:7",
		"data-prohibitions": "[]",
		className: "max-w-[680px] mx-auto animate-fade-in font-sans",
		"aria-busy": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:34:9",
				"data-prohibitions": "[editContent]",
				className: "h-4 w-32 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:35:9",
				"data-prohibitions": "[]",
				className: "flex gap-2 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/pages/DetalheAprendizado.tsx:36:11",
					"data-prohibitions": "[editContent]",
					className: "h-5 w-8"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/pages/DetalheAprendizado.tsx:37:11",
					"data-prohibitions": "[editContent]",
					className: "h-5 w-24"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:39:9",
				"data-prohibitions": "[editContent]",
				className: "h-10 w-full mb-4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:40:9",
				"data-prohibitions": "[editContent]",
				className: "h-4 w-48 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:41:9",
				"data-prohibitions": "[]",
				className: "space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/DetalheAprendizado.tsx:42:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:43:13",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-48 mb-3"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:44:13",
						"data-prohibitions": "[editContent]",
						className: "h-24 w-full"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/DetalheAprendizado.tsx:46:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:47:13",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-48 mb-3"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:48:13",
						"data-prohibitions": "[editContent]",
						className: "h-32 w-full"
					})]
				})]
			})
		]
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/DetalheAprendizado.tsx:57:7",
		"data-prohibitions": "[]",
		className: "max-w-[680px] mx-auto text-center py-12 font-sans animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			"data-uid": "src/pages/DetalheAprendizado.tsx:58:9",
			"data-prohibitions": "[]",
			className: "text-destructive mb-4",
			role: "alert",
			children: "Não foi possível carregar o aprendizado."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			"data-uid": "src/pages/DetalheAprendizado.tsx:61:9",
			"data-prohibitions": "[]",
			onClick: refetch,
			variant: "outline",
			className: "font-sans",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:62:11",
				"data-prohibitions": "[editContent]",
				className: "w-4 h-4 mr-2",
				"aria-hidden": "true"
			}), "Tentar novamente"]
		})]
	});
	if (!ap) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/DetalheAprendizado.tsx:71:7",
		"data-prohibitions": "[]",
		className: "max-w-[680px] mx-auto text-center py-12 font-sans animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			"data-uid": "src/pages/DetalheAprendizado.tsx:72:9",
			"data-prohibitions": "[]",
			className: "text-muted-foreground mb-6",
			role: "alert",
			children: "Aprendizado não encontrado."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			"data-uid": "src/pages/DetalheAprendizado.tsx:75:9",
			"data-prohibitions": "[]",
			to: "/",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:76:11",
				"data-prohibitions": "[]",
				variant: "outline",
				className: "font-sans",
				children: "Voltar para lista"
			})
		})]
	});
	const getLevelColor = (level) => {
		switch (level?.toLowerCase()) {
			case "iniciante": return "bg-[#d1fae5] text-[#065f46] dark:bg-[#064e3b] dark:text-[#a7f3d0]";
			case "intermediario":
			case "intermediário": return "bg-[#fef3c7] text-[#92400e] dark:bg-[#78350f] dark:text-[#fde68a]";
			case "avancado":
			case "avançado": return "bg-[#fee2e2] text-[#991b1b] dark:bg-[#7f1d1d] dark:text-[#fecaca]";
			default: return "bg-muted text-muted-foreground";
		}
	};
	const Section = ({ title, content }) => content ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"data-uid": "src/pages/DetalheAprendizado.tsx:101:7",
		"data-prohibitions": "[editContent]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			"data-uid": "src/pages/DetalheAprendizado.tsx:102:9",
			"data-prohibitions": "[editContent]",
			className: "text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground mb-[10px]",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/DetalheAprendizado.tsx:105:9",
			"data-prohibitions": "[editContent]",
			className: "text-[0.875rem] leading-[1.85] text-foreground whitespace-pre-line",
			children: content
		})]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		"data-uid": "src/pages/DetalheAprendizado.tsx:112:5",
		"data-prohibitions": "[editContent]",
		className: "max-w-[680px] mx-auto animate-fade-in font-sans pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:113:7",
				"data-prohibitions": "[]",
				to: "/",
				className: "inline-flex items-center text-[0.75rem] tracking-[0.02em] text-muted-foreground hover:text-foreground transition-colors mb-6 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					"data-uid": "src/pages/DetalheAprendizado.tsx:117:9",
					"data-prohibitions": "[editContent]",
					className: "w-3 h-3 mr-1.5",
					"aria-hidden": "true"
				}), " Voltar para lista"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:120:7",
				"data-prohibitions": "[editContent]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/DetalheAprendizado.tsx:121:9",
						"data-prohibitions": "[editContent]",
						className: "flex flex-wrap items-center gap-2 mb-4",
						children: [
							ap.number != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:123:13",
								"data-prohibitions": "[editContent]",
								className: "bg-muted text-muted-foreground text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]",
								children: ["#", ap.number]
							}),
							ap.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:128:13",
								"data-prohibitions": "[editContent]",
								className: "bg-accent text-accent-foreground text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]",
								children: ap.category
							}),
							ap.level && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:133:13",
								"data-prohibitions": "[editContent]",
								className: cn("text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]", getLevelColor(ap.level)),
								children: ap.level
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						"data-uid": "src/pages/DetalheAprendizado.tsx:144:9",
						"data-prohibitions": "[editContent]",
						className: "text-[1.625rem] font-bold tracking-[-0.02em] leading-[1.3] text-foreground mb-3",
						children: ap.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/DetalheAprendizado.tsx:148:9",
						"data-prohibitions": "[editContent]",
						className: "flex items-center gap-[12px] text-[0.75rem] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:149:11",
								"data-prohibitions": "[editContent]",
								children: ap.author || "Autor desconhecido"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:150:11",
								"data-prohibitions": "[]",
								"aria-hidden": "true",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:151:11",
								"data-prohibitions": "[editContent]",
								children: formatDateLong(ap.date)
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:155:7",
				"data-prohibitions": "[editContent]",
				className: "border-t border-border mt-[16px] mb-[28px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:157:7",
				"data-prohibitions": "[]",
				className: "space-y-[32px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:158:9",
						"data-prohibitions": "[editContent]",
						title: "Contexto / Problema que Resolve",
						content: ap.context
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:159:9",
						"data-prohibitions": "[editContent]",
						title: "O Aprendizado",
						content: ap.learning
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:160:9",
						"data-prohibitions": "[editContent]",
						title: "Passo a Passo",
						content: ap.steps
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:161:9",
						"data-prohibitions": "[editContent]",
						title: "Observações / Dicas Extras",
						content: ap.observations
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:164:7",
				"data-prohibitions": "[]",
				className: "mt-[44px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					"data-uid": "src/pages/DetalheAprendizado.tsx:165:9",
					"data-prohibitions": "[]",
					to: "/",
					tabIndex: -1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:166:11",
						"data-prohibitions": "[]",
						variant: "ghost",
						className: "text-[0.8125rem] text-muted-foreground hover:bg-muted/50 h-auto py-2 px-3 -ml-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							"data-uid": "src/pages/DetalheAprendizado.tsx:170:13",
							"data-prohibitions": "[editContent]",
							className: "w-3 h-3 mr-2",
							"aria-hidden": "true"
						}), " Voltar para lista"]
					})
				})
			})
		]
	});
}
//#endregion
export { DetalheAprendizado as default };

//# sourceMappingURL=DetalheAprendizado-Cd8qQxr5.js.map