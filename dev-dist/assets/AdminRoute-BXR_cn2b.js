import { a as Navigate, o as Outlet, t as require_jsx_runtime } from "./jsx-runtime-B3KHMJyd.js";
import "./client-B7YiK7DP.js";
import { s as LoaderCircle } from "./index-DJTSD9uA.js";
import { t as useAdminAuth } from "./use-admin-auth-CS3Ab007.js";
//#region src/components/AdminRoute.tsx
var import_jsx_runtime = require_jsx_runtime();
function AdminRoute() {
	const { session, loading } = useAdminAuth();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/components/AdminRoute.tsx:10:7",
		"data-prohibitions": "[]",
		className: "min-h-screen flex items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			"data-uid": "src/components/AdminRoute.tsx:11:9",
			"data-prohibitions": "[editContent]",
			className: "w-8 h-8 animate-spin text-primary"
		})
	});
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		"data-uid": "src/components/AdminRoute.tsx:17:12",
		"data-prohibitions": "[editContent]",
		to: "/admin/login",
		replace: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {
		"data-uid": "src/components/AdminRoute.tsx:20:10",
		"data-prohibitions": "[editContent]"
	});
}
//#endregion
export { AdminRoute as default };

//# sourceMappingURL=AdminRoute-BXR_cn2b.js.map