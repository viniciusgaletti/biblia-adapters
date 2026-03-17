import { l as useParams, r as Link, t as require_jsx_runtime } from "./jsx-runtime-DhwWYHGh.js";
import { t as ArrowLeft } from "./arrow-left-Ch643jqJ.js";
//#region src/pages/admin/EditLearning.tsx
var import_jsx_runtime = require_jsx_runtime();
function EditLearning() {
	const { id } = useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/EditLearning.tsx:8:5",
		"data-prohibitions": "[editContent]",
		className: "p-8 max-w-5xl mx-auto font-sans animate-fade-in-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				"data-uid": "src/pages/admin/EditLearning.tsx:9:7",
				"data-prohibitions": "[]",
				to: "/admin",
				className: "inline-flex items-center text-[12px] tracking-[0.02em] text-muted-foreground hover:text-primary mb-[28px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					"data-uid": "src/pages/admin/EditLearning.tsx:13:9",
					"data-prohibitions": "[editContent]",
					className: "w-3.5 h-3.5 mr-1.5",
					"aria-hidden": "true"
				}), "Voltar para o Dashboard"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/admin/EditLearning.tsx:16:7",
				"data-prohibitions": "[]",
				className: "text-2xl font-bold text-foreground mb-4 tracking-tight",
				children: "Editar Aprendizado"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/admin/EditLearning.tsx:17:7",
				"data-prohibitions": "[editContent]",
				className: "bg-card border border-border p-6 rounded-lg shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-uid": "src/pages/admin/EditLearning.tsx:18:9",
					"data-prohibitions": "[editContent]",
					className: "text-muted-foreground",
					children: [
						"Interface de edição para o aprendizado com ID:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/pages/admin/EditLearning.tsx:20:11",
							"data-prohibitions": "[editContent]",
							className: "font-mono text-foreground",
							children: id
						})
					]
				})
			})
		]
	});
}
//#endregion
export { EditLearning as default };

//# sourceMappingURL=EditLearning-DeN7CB4a.js.map