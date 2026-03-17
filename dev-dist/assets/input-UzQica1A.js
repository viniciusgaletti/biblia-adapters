import { a as require_jsx_runtime, g as require_react, v as __toESM } from "./client-D09FV_21.js";
import { a as cn } from "./button-BeRAxBEE.js";
//#region src/components/ui/input.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		"data-uid": "src/components/ui/input.tsx:7:7",
		"data-prohibitions": "[editContent]",
		type,
		className: cn("flex w-full rounded-[var(--radius)] border border-border bg-background px-[12px] py-[10px] text-[13px] transition-all duration-200 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
export { Input as t };

//# sourceMappingURL=input-UzQica1A.js.map