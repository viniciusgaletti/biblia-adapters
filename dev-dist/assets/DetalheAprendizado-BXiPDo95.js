import { a as require_jsx_runtime, c as Link, g as require_react, m as useParams, o as createLucideIcon, v as __toESM } from "./client-D09FV_21.js";
import { a as cn, t as Button } from "./button-BeRAxBEE.js";
import { t as ArrowLeft } from "./arrow-left-DCIMdVmn.js";
import { t as toast } from "./index-CFcikIOc.js";
import { i as submitRating, n as fetchLearningById } from "./learnings-CbN_tra6.js";
import { t as Skeleton } from "./skeleton-pj6mIB-1.js";
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
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
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
	const [userRating, setUserRating] = (0, import_react.useState)(0);
	const [ratingId, setRatingId] = (0, import_react.useState)();
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [hoverRating, setHoverRating] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (ap?.title) document.title = `${ap.title} | Biblia dos Adapters`;
		else if (!loading) document.title = "Detalhe do Aprendizado | Biblia dos Adapters";
		if (ap) {
			const stored = localStorage.getItem(`rating_${ap.id}`);
			if (stored) try {
				const parsed = JSON.parse(stored);
				setUserRating(parsed.rating);
				setRatingId(parsed.id);
			} catch (e) {}
		}
	}, [ap, loading]);
	const handleRate = async (value) => {
		if (!ap || isSubmitting) return;
		try {
			setIsSubmitting(true);
			const result = await submitRating(ap.id, value, ratingId);
			setUserRating(value);
			setRatingId(result.id);
			localStorage.setItem(`rating_${ap.id}`, JSON.stringify({
				rating: value,
				id: result.id
			}));
			toast.success("Avaliação enviada com sucesso!");
			refetch();
		} catch (err) {
			console.error(err);
			toast.error("Erro ao enviar avaliação. Tente novamente.");
		} finally {
			setIsSubmitting(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/DetalheAprendizado.tsx:71:7",
		"data-prohibitions": "[]",
		className: "max-w-[680px] mx-auto animate-fade-in font-sans",
		"aria-busy": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:72:9",
				"data-prohibitions": "[editContent]",
				className: "h-4 w-32 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:73:9",
				"data-prohibitions": "[]",
				className: "flex gap-2 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/pages/DetalheAprendizado.tsx:74:11",
					"data-prohibitions": "[editContent]",
					className: "h-5 w-8"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/pages/DetalheAprendizado.tsx:75:11",
					"data-prohibitions": "[editContent]",
					className: "h-5 w-24"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:77:9",
				"data-prohibitions": "[editContent]",
				className: "h-10 w-full mb-4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:78:9",
				"data-prohibitions": "[editContent]",
				className: "h-4 w-48 mb-8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:79:9",
				"data-prohibitions": "[]",
				className: "space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/DetalheAprendizado.tsx:80:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:81:13",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-48 mb-3"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:82:13",
						"data-prohibitions": "[editContent]",
						className: "h-24 w-full"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/DetalheAprendizado.tsx:84:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:85:13",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-48 mb-3"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:86:13",
						"data-prohibitions": "[editContent]",
						className: "h-32 w-full"
					})]
				})]
			})
		]
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/DetalheAprendizado.tsx:95:7",
		"data-prohibitions": "[]",
		className: "max-w-[680px] mx-auto text-center py-12 font-sans animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			"data-uid": "src/pages/DetalheAprendizado.tsx:96:9",
			"data-prohibitions": "[]",
			className: "text-destructive mb-4",
			role: "alert",
			children: "Não foi possível carregar o aprendizado."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			"data-uid": "src/pages/DetalheAprendizado.tsx:99:9",
			"data-prohibitions": "[]",
			onClick: refetch,
			variant: "outline",
			className: "font-sans",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:100:11",
				"data-prohibitions": "[editContent]",
				className: "w-4 h-4 mr-2",
				"aria-hidden": "true"
			}), "Tentar novamente"]
		})]
	});
	if (!ap) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/DetalheAprendizado.tsx:109:7",
		"data-prohibitions": "[]",
		className: "max-w-[680px] mx-auto text-center py-12 font-sans animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			"data-uid": "src/pages/DetalheAprendizado.tsx:110:9",
			"data-prohibitions": "[]",
			className: "text-muted-foreground mb-6",
			role: "alert",
			children: "Aprendizado não encontrado."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			"data-uid": "src/pages/DetalheAprendizado.tsx:113:9",
			"data-prohibitions": "[]",
			to: "/",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:114:11",
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
		"data-uid": "src/pages/DetalheAprendizado.tsx:139:7",
		"data-prohibitions": "[editContent]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			"data-uid": "src/pages/DetalheAprendizado.tsx:140:9",
			"data-prohibitions": "[editContent]",
			className: "text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground mb-[10px]",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/DetalheAprendizado.tsx:143:9",
			"data-prohibitions": "[editContent]",
			className: "text-[0.875rem] leading-[1.85] text-foreground whitespace-pre-line",
			children: content
		})]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		"data-uid": "src/pages/DetalheAprendizado.tsx:150:5",
		"data-prohibitions": "[editContent]",
		className: "max-w-[680px] mx-auto animate-fade-in font-sans pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				"data-uid": "src/pages/DetalheAprendizado.tsx:151:7",
				"data-prohibitions": "[]",
				to: "/",
				className: "inline-flex items-center text-[0.75rem] tracking-[0.02em] text-muted-foreground hover:text-foreground transition-colors mb-6 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					"data-uid": "src/pages/DetalheAprendizado.tsx:155:9",
					"data-prohibitions": "[editContent]",
					className: "w-3 h-3 mr-1.5",
					"aria-hidden": "true"
				}), " Voltar para lista"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:158:7",
				"data-prohibitions": "[editContent]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/DetalheAprendizado.tsx:159:9",
						"data-prohibitions": "[editContent]",
						className: "flex flex-wrap items-center gap-2 mb-4",
						children: [
							ap.number != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:161:13",
								"data-prohibitions": "[editContent]",
								className: "bg-muted text-muted-foreground text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]",
								children: ["#", ap.number]
							}),
							ap.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:166:13",
								"data-prohibitions": "[editContent]",
								className: "bg-accent text-accent-foreground text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]",
								children: ap.category
							}),
							ap.level && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:171:13",
								"data-prohibitions": "[editContent]",
								className: cn("text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]", getLevelColor(ap.level)),
								children: ap.level
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						"data-uid": "src/pages/DetalheAprendizado.tsx:182:9",
						"data-prohibitions": "[editContent]",
						className: "text-[1.625rem] font-bold tracking-[-0.02em] leading-[1.3] text-foreground mb-3",
						children: ap.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/DetalheAprendizado.tsx:186:9",
						"data-prohibitions": "[editContent]",
						className: "flex items-center gap-[12px] text-[0.75rem] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:187:11",
								"data-prohibitions": "[editContent]",
								children: ap.author || "Autor desconhecido"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:188:11",
								"data-prohibitions": "[]",
								"aria-hidden": "true",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/DetalheAprendizado.tsx:189:11",
								"data-prohibitions": "[editContent]",
								children: formatDateLong(ap.date)
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:193:7",
				"data-prohibitions": "[editContent]",
				className: "border-t border-border mt-[16px] mb-[28px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:195:7",
				"data-prohibitions": "[]",
				className: "space-y-[32px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:196:9",
						"data-prohibitions": "[editContent]",
						title: "Contexto / Problema que Resolve",
						content: ap.context
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:197:9",
						"data-prohibitions": "[editContent]",
						title: "O Aprendizado",
						content: ap.learning
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:198:9",
						"data-prohibitions": "[editContent]",
						title: "Passo a Passo",
						content: ap.steps
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:199:9",
						"data-prohibitions": "[editContent]",
						title: "Observações / Dicas Extras",
						content: ap.observations
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:202:7",
				"data-prohibitions": "[editContent]",
				className: "mt-12 pt-8 border-t border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					"data-uid": "src/pages/DetalheAprendizado.tsx:203:9",
					"data-prohibitions": "[]",
					className: "text-sm font-bold text-foreground mb-4",
					children: "Avalie este aprendizado"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/DetalheAprendizado.tsx:204:9",
					"data-prohibitions": "[editContent]",
					className: "flex items-center gap-4 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/DetalheAprendizado.tsx:205:11",
						"data-prohibitions": "[editContent]",
						className: "flex gap-1",
						children: [
							1,
							2,
							3,
							4,
							5
						].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"data-uid": "src/pages/DetalheAprendizado.tsx:207:15",
							"data-prohibitions": "[editContent]",
							disabled: isSubmitting,
							onMouseEnter: () => setHoverRating(star),
							onMouseLeave: () => setHoverRating(0),
							onClick: () => handleRate(star),
							className: "p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-colors",
							"aria-label": `Avaliar com ${star} estrelas`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								"data-uid": "src/pages/DetalheAprendizado.tsx:216:17",
								"data-prohibitions": "[editContent]",
								className: cn("w-6 h-6 transition-all", (hoverRating || userRating) >= star ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30 hover:text-muted-foreground")
							})
						}, star))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/DetalheAprendizado.tsx:227:11",
						"data-prohibitions": "[editContent]",
						className: "text-sm text-muted-foreground",
						children: ap.rating_avg && ap.rating_count ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							"data-uid": "src/pages/DetalheAprendizado.tsx:229:15",
							"data-prohibitions": "[editContent]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									"data-uid": "src/pages/DetalheAprendizado.tsx:230:17",
									"data-prohibitions": "[editContent]",
									className: "text-foreground",
									children: Number(ap.rating_avg).toFixed(1)
								}),
								" / 5 (",
								ap.rating_count,
								" ",
								ap.rating_count === 1 ? "avaliação" : "avaliações",
								")"
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/pages/DetalheAprendizado.tsx:234:15",
							"data-prohibitions": "[]",
							children: "Seja o primeiro a avaliar!"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				"data-uid": "src/pages/DetalheAprendizado.tsx:240:7",
				"data-prohibitions": "[]",
				className: "mt-[44px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					"data-uid": "src/pages/DetalheAprendizado.tsx:241:9",
					"data-prohibitions": "[]",
					to: "/",
					tabIndex: -1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/pages/DetalheAprendizado.tsx:242:11",
						"data-prohibitions": "[]",
						variant: "ghost",
						className: "text-[0.8125rem] text-muted-foreground hover:bg-muted/50 h-auto py-2 px-3 -ml-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							"data-uid": "src/pages/DetalheAprendizado.tsx:246:13",
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

//# sourceMappingURL=DetalheAprendizado-BXiPDo95.js.map