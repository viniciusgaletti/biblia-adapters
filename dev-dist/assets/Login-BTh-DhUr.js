import { a as require_jsx_runtime, g as require_react, p as useNavigate, t as supabase, v as __toESM } from "./client-D09FV_21.js";
import "./react-dom-D47xuAER.js";
import { t as Button } from "./button-CiSPku0O.js";
import { r as LoaderCircle } from "./index-DY3s7Fls.js";
import { t as useAdminAuth } from "./use-admin-auth-CzBVU3ds.js";
import { t as Input } from "./input-BmZQJX4Y.js";
import { t as Label } from "./label-DaJv_aPs.js";
//#region src/pages/admin/Login.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin() {
	const navigate = useNavigate();
	const { session, loading: authLoading } = useAdminAuth();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!authLoading && session) navigate("/admin", { replace: true });
	}, [
		session,
		authLoading,
		navigate
	]);
	if (authLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/pages/admin/Login.tsx:26:7",
		"data-prohibitions": "[]",
		className: "min-h-screen flex justify-center items-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			"data-uid": "src/pages/admin/Login.tsx:27:9",
			"data-prohibitions": "[editContent]",
			className: "w-8 h-8 animate-spin text-primary"
		})
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		const { error: signInError } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (signInError) {
			setError("E-mail ou senha incorretos. Tente novamente.");
			setLoading(false);
		} else navigate("/admin");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/pages/admin/Login.tsx:51:5",
		"data-prohibitions": "[editContent]",
		className: "flex justify-center items-start px-4 font-sans bg-background min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/admin/Login.tsx:52:7",
			"data-prohibitions": "[editContent]",
			className: "w-full max-w-[400px] h-fit bg-card border border-border rounded-[calc(var(--radius)*2)] p-[40px] shadow-sm animate-fade-in-up mt-[80px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/admin/Login.tsx:53:9",
				"data-prohibitions": "[]",
				className: "text-center mb-[32px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/admin/Login.tsx:54:11",
					"data-prohibitions": "[]",
					className: "text-[1.125rem] font-bold text-primary mb-[4px]",
					children: "Biblia dos Eliters"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/admin/Login.tsx:55:11",
					"data-prohibitions": "[]",
					className: "text-[0.75rem] text-muted-foreground tracking-[0.04em] uppercase",
					children: "Acesso restrito"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				"data-uid": "src/pages/admin/Login.tsx:59:9",
				"data-prohibitions": "[editContent]",
				onSubmit: handleSubmit,
				className: "space-y-[20px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Login.tsx:60:11",
						"data-prohibitions": "[]",
						className: "space-y-[8px] flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/admin/Login.tsx:61:13",
							"data-prohibitions": "[]",
							htmlFor: "email",
							className: "text-[13px] font-medium text-foreground",
							children: "E-mail"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"data-uid": "src/pages/admin/Login.tsx:64:13",
							"data-prohibitions": "[editContent]",
							id: "email",
							type: "email",
							placeholder: "seu@email.com",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							disabled: loading,
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Login.tsx:74:11",
						"data-prohibitions": "[]",
						className: "space-y-[8px] flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/admin/Login.tsx:75:13",
							"data-prohibitions": "[]",
							htmlFor: "password",
							className: "text-[13px] font-medium text-foreground",
							children: "Senha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"data-uid": "src/pages/admin/Login.tsx:78:13",
							"data-prohibitions": "[editContent]",
							id: "password",
							type: "password",
							placeholder: "Sua senha",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							disabled: loading,
							required: true
						})]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/admin/Login.tsx:89:13",
						"data-prohibitions": "[editContent]",
						className: "text-[0.8125rem] font-medium text-destructive mt-[16px] text-center",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/pages/admin/Login.tsx:93:11",
						"data-prohibitions": "[editContent]",
						type: "submit",
						className: "w-full bg-primary text-primary-foreground py-[11px] text-[0.875rem] font-medium h-auto hover:bg-primary/90 transition-colors",
						disabled: loading,
						children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							"data-uid": "src/pages/admin/Login.tsx:99:15",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4 mr-2 animate-spin shrink-0",
							"aria-hidden": "true"
						}) : null, loading ? "Entrando..." : "Entrar"]
					})
				]
			})]
		})
	});
}
//#endregion
export { AdminLogin as default };

//# sourceMappingURL=Login-BTh-DhUr.js.map