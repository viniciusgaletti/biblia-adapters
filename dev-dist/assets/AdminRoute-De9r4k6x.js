import { a as require_jsx_runtime, l as Navigate, u as Outlet } from "./client-D09FV_21.js";
import { i as LoaderCircle } from "./index-CFcikIOc.js";
import { t as useAdminAuth } from "./use-admin-auth-Dcd4o3sF.js";
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

//# sourceMappingURL=AdminRoute-De9r4k6x.js.map