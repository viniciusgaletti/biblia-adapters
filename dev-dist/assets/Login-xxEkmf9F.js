import { E as __toESM, _ as Navigate, d as require_jsx_runtime, m as useToast, t as Button, w as require_react, x as useNavigate } from "./button-DMYV3pJh.js";
import { t as LoaderCircle } from "./loader-circle-pedXnbvr.js";
import { r as BookOpen, t as useAuth } from "./index-Cm0Es-oG.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-BMVqA-P1.js";
import { n as Input, t as Label } from "./label-Q-CCHO1F.js";
//#region src/pages/Login.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const [isSignUp, setIsSignUp] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const { signIn, signUp, user } = useAuth();
	const navigate = useNavigate();
	const { toast } = useToast();
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		"data-uid": "src/pages/Login.tsx:28:12",
		"data-prohibitions": "[editContent]",
		to: "/",
		replace: true
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const { error } = isSignUp ? await signUp(email, password) : await signIn(email, password);
			if (error) throw error;
			if (isSignUp) toast({
				title: "Conta criada com sucesso",
				description: "Você já pode acessar seus aprendizados."
			});
			navigate("/");
		} catch (err) {
			toast({
				variant: "destructive",
				title: "Erro na autenticação",
				description: err.message || "Verifique suas credenciais e tente novamente."
			});
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/Login.tsx:59:5",
		"data-prohibitions": "[editContent]",
		className: "flex flex-col items-center justify-center min-h-[70vh] px-4 animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/Login.tsx:60:7",
			"data-prohibitions": "[]",
			className: "mb-8 flex flex-col items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/Login.tsx:61:9",
					"data-prohibitions": "[]",
					className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
						"data-uid": "src/pages/Login.tsx:62:11",
						"data-prohibitions": "[editContent]",
						className: "w-8 h-8 text-primary"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/Login.tsx:64:9",
					"data-prohibitions": "[]",
					className: "text-3xl font-bold text-foreground tracking-tight",
					children: "Bíblia dos Eliters"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/Login.tsx:65:9",
					"data-prohibitions": "[]",
					className: "text-muted-foreground mt-2 text-center max-w-sm",
					children: "Seu repositório pessoal de conhecimento e evolução contínua."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/Login.tsx:70:7",
			"data-prohibitions": "[editContent]",
			className: "w-full max-w-md shadow-elevation border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				"data-uid": "src/pages/Login.tsx:71:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/Login.tsx:72:11",
					"data-prohibitions": "[editContent]",
					children: isSignUp ? "Criar Conta" : "Acessar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
					"data-uid": "src/pages/Login.tsx:73:11",
					"data-prohibitions": "[editContent]",
					children: isSignUp ? "Preencha os dados abaixo para criar sua bíblia." : "Entre com seu e-mail e senha para continuar."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				"data-uid": "src/pages/Login.tsx:79:9",
				"data-prohibitions": "[editContent]",
				onSubmit: handleSubmit,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/pages/Login.tsx:80:11",
					"data-prohibitions": "[]",
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/Login.tsx:81:13",
						"data-prohibitions": "[]",
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/Login.tsx:82:15",
							"data-prohibitions": "[]",
							htmlFor: "email",
							children: "E-mail"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"data-uid": "src/pages/Login.tsx:83:15",
							"data-prohibitions": "[editContent]",
							id: "email",
							type: "email",
							placeholder: "seu@email.com",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/Login.tsx:92:13",
						"data-prohibitions": "[]",
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/Login.tsx:93:15",
							"data-prohibitions": "[]",
							htmlFor: "password",
							children: "Senha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"data-uid": "src/pages/Login.tsx:94:15",
							"data-prohibitions": "[editContent]",
							id: "password",
							type: "password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							required: true,
							minLength: 6
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
					"data-uid": "src/pages/Login.tsx:104:11",
					"data-prohibitions": "[editContent]",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						"data-uid": "src/pages/Login.tsx:105:13",
						"data-prohibitions": "[editContent]",
						type: "submit",
						className: "w-full",
						disabled: isLoading,
						children: [isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							"data-uid": "src/pages/Login.tsx:106:29",
							"data-prohibitions": "[editContent]",
							className: "mr-2 h-4 w-4 animate-spin"
						}), isSignUp ? "Cadastrar" : "Entrar"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"data-uid": "src/pages/Login.tsx:109:13",
						"data-prohibitions": "[editContent]",
						type: "button",
						onClick: () => setIsSignUp(!isSignUp),
						className: "text-sm text-primary hover:underline",
						children: isSignUp ? "Já tem uma conta? Faça login" : "Não tem uma conta? Cadastre-se"
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { Login as default };

//# sourceMappingURL=Login-xxEkmf9F.js.map