import { c as useNavigate, d as require_react, p as __toESM, t as require_jsx_runtime } from "./jsx-runtime-DhwWYHGh.js";
import { t as Input } from "./input-BnuxKI3X.js";
import { t as Button } from "./button-DbtXtS4I.js";
import { E as LoaderCircle, r as supabase, t as Label } from "./index-aA96_rpP.js";
import { t as useAdminAuth } from "./use-admin-auth-Bc37Zn_P.js";
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
		className: "flex justify-center px-4 font-sans bg-background min-h-screen",
		style: { paddingTop: "80px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/admin/Login.tsx:55:7",
			"data-prohibitions": "[editContent]",
			className: "w-full max-w-[400px] h-fit bg-card border border-border rounded-[var(--radius)] p-[24px] shadow-sm animate-fade-in-up",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/admin/Login.tsx:56:9",
				"data-prohibitions": "[]",
				className: "text-center mb-[32px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/admin/Login.tsx:57:11",
					"data-prohibitions": "[]",
					className: "text-[24px] font-bold text-primary tracking-[-0.02em]",
					children: "Biblia dos Eliters"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/admin/Login.tsx:60:11",
					"data-prohibitions": "[]",
					className: "text-[14px] text-muted-foreground mt-[4px]",
					children: "Acesso restrito"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				"data-uid": "src/pages/admin/Login.tsx:62:9",
				"data-prohibitions": "[editContent]",
				onSubmit: handleSubmit,
				className: "space-y-[16px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Login.tsx:63:11",
						"data-prohibitions": "[]",
						className: "space-y-[8px] flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/admin/Login.tsx:64:13",
							"data-prohibitions": "[]",
							htmlFor: "email",
							className: "text-[13px] font-medium text-foreground",
							children: "E-mail"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"data-uid": "src/pages/admin/Login.tsx:67:13",
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
						"data-uid": "src/pages/admin/Login.tsx:77:11",
						"data-prohibitions": "[]",
						className: "space-y-[8px] flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/admin/Login.tsx:78:13",
							"data-prohibitions": "[]",
							htmlFor: "password",
							className: "text-[13px] font-medium text-foreground",
							children: "Senha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"data-uid": "src/pages/admin/Login.tsx:81:13",
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
						"data-uid": "src/pages/admin/Login.tsx:91:21",
						"data-prohibitions": "[editContent]",
						className: "text-[13px] font-medium text-destructive pt-[4px]",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/pages/admin/Login.tsx:92:11",
						"data-prohibitions": "[editContent]",
						type: "submit",
						className: "w-full mt-[8px] h-auto py-[10px] text-[13px] font-medium",
						disabled: loading,
						children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							"data-uid": "src/pages/admin/Login.tsx:98:15",
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

//# sourceMappingURL=Login-zRQlD3O6.js.map