import { r as Link, t as require_jsx_runtime } from "./jsx-runtime-DhwWYHGh.js";
import { t as Button } from "./button-DbtXtS4I.js";
import { t as useAdminAuth } from "./use-admin-auth-Bc37Zn_P.js";
//#region src/pages/admin/Dashboard.tsx
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const { signOut } = useAdminAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/Dashboard.tsx:9:5",
		"data-prohibitions": "[]",
		className: "p-8 max-w-5xl mx-auto font-sans animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/admin/Dashboard.tsx:10:7",
			"data-prohibitions": "[]",
			className: "flex justify-between items-center mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/admin/Dashboard.tsx:11:9",
				"data-prohibitions": "[]",
				className: "text-2xl font-bold text-foreground tracking-tight",
				children: "Admin Dashboard"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/admin/Dashboard.tsx:12:9",
				"data-prohibitions": "[]",
				variant: "outline",
				onClick: signOut,
				children: "Sair"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/admin/Dashboard.tsx:16:7",
			"data-prohibitions": "[]",
			className: "bg-card border border-border p-6 rounded-lg shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/admin/Dashboard.tsx:17:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground mb-4",
				children: "Bem-vindo ao painel de administração."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				"data-uid": "src/pages/admin/Dashboard.tsx:18:9",
				"data-prohibitions": "[]",
				to: "/admin/editar/exemplo-id",
				className: "text-primary text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
				children: "Ir para Exemplo de Edição de Aprendizado"
			})]
		})]
	});
}
//#endregion
export { AdminDashboard as default };

//# sourceMappingURL=Dashboard-C-sfDQbo.js.map