import { a as require_jsx_runtime, c as Link, g as require_react, o as createLucideIcon, v as __toESM } from "./client-D09FV_21.js";
import { a as cn, t as Button } from "./button-BeRAxBEE.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-tnYmAEs7.js";
import { n as CircleAlert, t as Plus } from "./plus-DeMb-NdG.js";
import { T as X } from "./dist-BlFFuhjZ.js";
import { r as searchLearnings } from "./learnings-CbN_tra6.js";
import { t as Skeleton } from "./skeleton-pj6mIB-1.js";
import { t as Input } from "./input-DJ2UNVeP.js";
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
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
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
//#endregion
//#region src/hooks/use-learnings.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var CATEGORIES = [
	"Todos",
	"IA",
	"Vibecoding",
	"Automacoes",
	"Agentes de IA"
];
var LEVELS = [
	"Todos",
	"Iniciante",
	"Intermediario",
	"Avancado"
];
function useLearnings() {
	const [data, setData] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)("");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("Todos");
	const [levelFilter, setLevelFilter] = (0, import_react.useState)("Todos");
	(0, import_react.useEffect)(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(searchTerm);
		}, 300);
		return () => clearTimeout(handler);
	}, [searchTerm]);
	const fetchFilteredLearnings = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			setError(null);
			setData((await searchLearnings(debouncedSearch, categoryFilter, levelFilter)).map((item) => {
				const dateObj = /* @__PURE__ */ new Date(item.date + "T12:00:00Z");
				return {
					id: item.id,
					number: item.number,
					title: item.title,
					author: item.author,
					date: dateObj.toLocaleDateString("pt-BR", {
						day: "2-digit",
						month: "short",
						year: "numeric"
					}),
					category: item.category,
					level: item.level,
					context: item.context,
					learning: item.learning,
					steps: item.steps,
					observations: item.observations,
					created_at: item.created_at
				};
			}));
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}, [
		debouncedSearch,
		categoryFilter,
		levelFilter
	]);
	(0, import_react.useEffect)(() => {
		fetchFilteredLearnings();
	}, [fetchFilteredLearnings]);
	const clearFilters = () => {
		setSearchTerm("");
		setCategoryFilter("Todos");
		setLevelFilter("Todos");
	};
	return {
		data,
		loading,
		error,
		searchTerm,
		setSearchTerm,
		categoryFilter,
		setCategoryFilter,
		levelFilter,
		setLevelFilter,
		clearFilters,
		refetch: fetchFilteredLearnings,
		hasActiveFilters: searchTerm !== "" || categoryFilter !== "Todos" || levelFilter !== "Todos",
		totalCount: data.length
	};
}
//#endregion
//#region src/pages/Index.tsx
var import_jsx_runtime = require_jsx_runtime();
var getLevelColors = (level) => {
	switch (level.toLowerCase()) {
		case "iniciante": return "bg-[#d1fae5] text-[#065f46] dark:bg-[#064e3b] dark:text-[#a7f3d0]";
		case "intermediario": return "bg-[#fef3c7] text-[#92400e] dark:bg-[#78350f] dark:text-[#fde68a]";
		case "avancado": return "bg-[#fee2e2] text-[#991b1b] dark:bg-[#7f1d1d] dark:text-[#fecaca]";
		default: return "bg-muted text-muted-foreground";
	}
};
function Index() {
	const { data, loading, error, searchTerm, setSearchTerm, categoryFilter, setCategoryFilter, levelFilter, setLevelFilter, clearFilters, refetch, hasActiveFilters, totalCount } = useLearnings();
	(0, import_react.useEffect)(() => {
		document.title = "Biblia dos Adapters";
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Index.tsx:52:5",
		"data-prohibitions": "[editContent]",
		className: "w-full animate-fade-in-up pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"data-uid": "src/pages/Index.tsx:54:7",
				"data-prohibitions": "[]",
				className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-[36px] gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Index.tsx:55:9",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						"data-uid": "src/pages/Index.tsx:56:11",
						"data-prohibitions": "[]",
						className: "text-[1.875rem] font-bold text-foreground tracking-[-0.02em]",
						children: "Biblia dos Adapters"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/Index.tsx:59:11",
						"data-prohibitions": "[]",
						className: "text-[0.8125rem] text-muted-foreground mt-[6px] leading-[1.6]",
						children: "Repositorio vivo de aprendizados sobre IA, Vibecoding, Automacoes e Agentes de IA"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					"data-uid": "src/pages/Index.tsx:63:9",
					"data-prohibitions": "[]",
					to: "/novo",
					className: "w-full md:w-auto shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/pages/Index.tsx:64:11",
						"data-prohibitions": "[]",
						className: "w-full bg-primary text-primary-foreground rounded-[var(--radius)] px-[18px] py-[10px] text-[0.8125rem] font-medium hover:opacity-90 transition-opacity h-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							"data-uid": "src/pages/Index.tsx:65:13",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4 mr-2"
						}), "Registrar Aprendizado"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"data-uid": "src/pages/Index.tsx:72:7",
				"data-prohibitions": "[editContent]",
				className: "flex flex-col sm:flex-row gap-[8px] sm:gap-[10px] mb-[14px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Index.tsx:73:9",
					"data-prohibitions": "[]",
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						"data-uid": "src/pages/Index.tsx:74:11",
						"data-prohibitions": "[editContent]",
						className: "absolute left-[14px] top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						"data-uid": "src/pages/Index.tsx:78:11",
						"data-prohibitions": "[editContent]",
						"aria-label": "Buscar aprendizados",
						placeholder: "Buscar por palavra-chave...",
						value: searchTerm,
						onChange: (e) => setSearchTerm(e.target.value),
						className: "w-full h-auto pl-[38px] pr-[14px] py-[10px]"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Index.tsx:86:9",
					"data-prohibitions": "[editContent]",
					className: "flex flex-col sm:flex-row gap-[8px] sm:gap-[10px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							"data-uid": "src/pages/Index.tsx:87:11",
							"data-prohibitions": "[editContent]",
							value: categoryFilter,
							onValueChange: setCategoryFilter,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								"data-uid": "src/pages/Index.tsx:88:13",
								"data-prohibitions": "[]",
								"aria-label": "Filtrar por categoria",
								className: "min-w-[155px] h-auto px-[14px] py-[10px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									"data-uid": "src/pages/Index.tsx:92:15",
									"data-prohibitions": "[editContent]",
									placeholder: "Categoria"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
								"data-uid": "src/pages/Index.tsx:94:13",
								"data-prohibitions": "[editContent]",
								children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/Index.tsx:96:17",
									"data-prohibitions": "[editContent]",
									value: cat,
									children: cat
								}, cat))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							"data-uid": "src/pages/Index.tsx:102:11",
							"data-prohibitions": "[editContent]",
							value: levelFilter,
							onValueChange: setLevelFilter,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								"data-uid": "src/pages/Index.tsx:103:13",
								"data-prohibitions": "[]",
								"aria-label": "Filtrar por dificuldade",
								className: "min-w-[155px] h-auto px-[14px] py-[10px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									"data-uid": "src/pages/Index.tsx:107:15",
									"data-prohibitions": "[editContent]",
									placeholder: "Dificuldade"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
								"data-uid": "src/pages/Index.tsx:109:13",
								"data-prohibitions": "[editContent]",
								children: LEVELS.map((lvl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/Index.tsx:111:17",
									"data-prohibitions": "[editContent]",
									value: lvl,
									children: lvl
								}, lvl))
							})]
						}),
						hasActiveFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							"data-uid": "src/pages/Index.tsx:118:13",
							"data-prohibitions": "[]",
							variant: "ghost",
							onClick: clearFilters,
							className: "h-auto px-[14px] py-[10px] text-[0.8125rem] text-muted-foreground hover:text-foreground hover:bg-transparent",
							"aria-label": "Limpar filtros",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								"data-uid": "src/pages/Index.tsx:124:15",
								"data-prohibitions": "[editContent]",
								className: "h-4 w-4 mr-2",
								"aria-hidden": "true"
							}), "Limpar filtros"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"data-uid": "src/pages/Index.tsx:132:7",
				"data-prohibitions": "[editContent]",
				className: "text-[0.75rem] text-muted-foreground tracking-[0.03em] mb-[20px]",
				"aria-live": "polite",
				children: [
					totalCount,
					" ",
					totalCount === 1 ? "aprendizado encontrado" : "aprendizados encontrados"
				]
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"data-uid": "src/pages/Index.tsx:141:9",
				"data-prohibitions": "[editContent]",
				className: "grid grid-cols-1 sm:grid-cols-2 gap-[16px]",
				"aria-busy": "true",
				children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/Index.tsx:143:13",
					"data-prohibitions": "[]",
					className: "bg-card border border-border rounded-[calc(var(--radius)*1.5)] p-[20px] flex flex-col h-[260px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Index.tsx:147:15",
							"data-prohibitions": "[]",
							className: "flex gap-[6px] mb-[14px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
									"data-uid": "src/pages/Index.tsx:148:17",
									"data-prohibitions": "[editContent]",
									className: "h-[20px] w-[30px] rounded-[3px]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
									"data-uid": "src/pages/Index.tsx:149:17",
									"data-prohibitions": "[editContent]",
									className: "h-[20px] w-[80px] rounded-[3px]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
									"data-uid": "src/pages/Index.tsx:150:17",
									"data-prohibitions": "[editContent]",
									className: "h-[20px] w-[70px] rounded-[3px]"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
							"data-uid": "src/pages/Index.tsx:152:15",
							"data-prohibitions": "[editContent]",
							className: "h-[1.4rem] w-[60%] mb-[6px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Index.tsx:153:15",
							"data-prohibitions": "[]",
							className: "flex justify-between items-center mb-[10px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
								"data-uid": "src/pages/Index.tsx:154:17",
								"data-prohibitions": "[editContent]",
								className: "h-[12px] w-[30%]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
								"data-uid": "src/pages/Index.tsx:155:17",
								"data-prohibitions": "[editContent]",
								className: "h-[12px] w-[20%]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Index.tsx:157:15",
							"data-prohibitions": "[]",
							className: "space-y-[8px] mt-[10px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
									"data-uid": "src/pages/Index.tsx:158:17",
									"data-prohibitions": "[editContent]",
									className: "h-[12px] w-full"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
									"data-uid": "src/pages/Index.tsx:159:17",
									"data-prohibitions": "[editContent]",
									className: "h-[12px] w-[95%]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
									"data-uid": "src/pages/Index.tsx:160:17",
									"data-prohibitions": "[editContent]",
									className: "h-[12px] w-[80%]"
								})
							]
						})
					]
				}, i))
			}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"data-uid": "src/pages/Index.tsx:166:9",
				"data-prohibitions": "[]",
				className: "py-[60px] flex flex-col items-center justify-center text-center border border-dashed border-destructive/20 bg-destructive/5 rounded-[calc(var(--radius)*1.5)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
						"data-uid": "src/pages/Index.tsx:167:11",
						"data-prohibitions": "[editContent]",
						className: "w-[44px] h-[44px] text-destructive",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						"data-uid": "src/pages/Index.tsx:168:11",
						"data-prohibitions": "[]",
						className: "text-[1rem] font-semibold mt-[16px] text-foreground",
						children: "Algo deu errado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/Index.tsx:169:11",
						"data-prohibitions": "[]",
						className: "text-[0.8125rem] text-muted-foreground mt-[6px] leading-[1.6] max-w-md px-4",
						children: "Nao foi possivel carregar os aprendizados."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/Index.tsx:172:11",
						"data-prohibitions": "[]",
						onClick: refetch,
						variant: "outline",
						className: "mt-[20px] h-auto px-[18px] py-[10px] text-[0.8125rem] font-medium",
						children: "Tentar novamente"
					})
				]
			}) : data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"data-uid": "src/pages/Index.tsx:181:9",
				"data-prohibitions": "[]",
				className: "py-[60px] flex flex-col items-center justify-center text-center border border-dashed border-border bg-card/50 rounded-[calc(var(--radius)*1.5)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookX, {
						"data-uid": "src/pages/Index.tsx:182:11",
						"data-prohibitions": "[editContent]",
						className: "w-[44px] h-[44px] text-muted-foreground",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						"data-uid": "src/pages/Index.tsx:183:11",
						"data-prohibitions": "[]",
						className: "text-[1rem] font-semibold mt-[16px] text-foreground",
						children: "Nenhum aprendizado encontrado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/Index.tsx:186:11",
						"data-prohibitions": "[]",
						className: "text-[0.8125rem] text-muted-foreground mt-[6px] leading-[1.6] max-w-md px-4",
						children: "Não encontramos nenhum resultado com os filtros atuais. Que tal registrar um novo aprendizado?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						"data-uid": "src/pages/Index.tsx:190:11",
						"data-prohibitions": "[]",
						to: "/novo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							"data-uid": "src/pages/Index.tsx:191:13",
							"data-prohibitions": "[]",
							className: "mt-[20px] bg-primary text-primary-foreground rounded-[var(--radius)] px-[18px] py-[10px] text-[0.8125rem] font-medium hover:opacity-90 transition-opacity h-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								"data-uid": "src/pages/Index.tsx:192:15",
								"data-prohibitions": "[editContent]",
								className: "w-4 h-4 mr-2",
								"aria-hidden": "true"
							}), "Registrar Aprendizado"]
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"data-uid": "src/pages/Index.tsx:198:9",
				"data-prohibitions": "[editContent]",
				className: "grid grid-cols-1 sm:grid-cols-2 gap-[16px]",
				children: data.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					"data-uid": "src/pages/Index.tsx:200:13",
					"data-prohibitions": "[editContent]",
					className: "bg-card border border-border rounded-[calc(var(--radius)*1.5)] p-[20px] hover:border-ring hover:shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-200 ease-in-out flex flex-col focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Index.tsx:204:15",
							"data-prohibitions": "[editContent]",
							className: "flex gap-[6px] items-center flex-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"data-uid": "src/pages/Index.tsx:205:17",
									"data-prohibitions": "[editContent]",
									className: "bg-muted text-muted-foreground text-[0.6875rem] font-bold tracking-[0.04em] rounded-[3px] px-[7px] py-[2px]",
									children: ["#", item.number]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-uid": "src/pages/Index.tsx:208:17",
									"data-prohibitions": "[editContent]",
									className: "bg-accent text-accent-foreground text-[0.6875rem] font-bold tracking-[0.04em] rounded-[3px] px-[7px] py-[2px]",
									children: item.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-uid": "src/pages/Index.tsx:211:17",
									"data-prohibitions": "[editContent]",
									className: cn("text-[0.6875rem] font-bold tracking-[0.04em] rounded-[3px] px-[7px] py-[2px]", getLevelColors(item.level)),
									children: item.level
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							"data-uid": "src/pages/Index.tsx:220:15",
							"data-prohibitions": "[editContent]",
							className: "text-[0.9375rem] font-semibold text-foreground mt-[14px] mb-[6px] leading-[1.4] line-clamp-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								"data-uid": "src/pages/Index.tsx:221:17",
								"data-prohibitions": "[editContent]",
								to: `/aprendizado/${item.id}`,
								className: "hover:underline focus:outline-none focus:underline",
								children: item.title
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/Index.tsx:228:15",
							"data-prohibitions": "[editContent]",
							className: "text-[0.75rem] text-muted-foreground flex justify-between items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/Index.tsx:229:17",
								"data-prohibitions": "[editContent]",
								children: item.author
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/Index.tsx:230:17",
								"data-prohibitions": "[editContent]",
								children: item.date
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/Index.tsx:232:15",
							"data-prohibitions": "[editContent]",
							className: "text-[0.8125rem] text-muted-foreground mt-[10px] leading-[1.75] line-clamp-3 flex-1",
							children: item.learning
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							"data-uid": "src/pages/Index.tsx:235:15",
							"data-prohibitions": "[]",
							to: `/aprendizado/${item.id}`,
							className: "text-primary text-[0.75rem] font-medium mt-[16px] tracking-[0.02em] hover:underline inline-flex items-center w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
							"aria-label": `Ver aprendizado completo sobre ${item.title}`,
							children: ["Ver aprendizado completo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"data-uid": "src/pages/Index.tsx:240:42",
								"data-prohibitions": "[editContent]",
								className: "w-3 h-3 ml-1",
								"aria-hidden": "true"
							})]
						})
					]
				}, item.id))
			})
		]
	});
}
//#endregion
export { Index as default };

//# sourceMappingURL=Index-SunHzanw.js.map