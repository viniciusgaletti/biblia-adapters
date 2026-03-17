import { a as require_jsx_runtime, g as require_react, o as createLucideIcon, v as __toESM } from "./client-D09FV_21.js";
import { a as cn } from "./button-BeRAxBEE.js";
var StarHalf = createLucideIcon("star-half", [["path", {
	d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
	key: "2ksp49"
}]]);
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
//#endregion
//#region src/components/ui/star-rating.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function StarRating({ rating, interactive = false, onRate, userRating, size = "sm", disabled = false }) {
	const [hoverRating, setHoverRating] = (0, import_react.useState)(0);
	const gapClass = interactive ? "gap-[3px]" : "gap-[1px]";
	const starSizeClass = size === "sm" ? "w-[14px] h-[14px]" : "w-[18px] h-[18px]";
	const containerClass = disabled ? "opacity-50 pointer-events-none" : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/components/ui/star-rating.tsx:29:5",
		"data-prohibitions": "[editContent]",
		className: cn("flex items-center", gapClass, containerClass),
		onMouseLeave: () => setHoverRating(0),
		children: [
			1,
			2,
			3,
			4,
			5
		].map((starIndex) => {
			const isHovered = interactive && hoverRating >= starIndex;
			const fillInteractive = isHovered || interactive && userRating && userRating >= starIndex && hoverRating === 0;
			const fillDisplay = !interactive && Math.floor(rating) >= starIndex;
			const isHalf = !interactive && !fillDisplay && rating >= starIndex - .5;
			const isFilled = interactive ? fillInteractive : fillDisplay;
			const finalColorClass = interactive ? isHovered ? "fill-[#fbbf24] text-[#fbbf24]" : isFilled ? "fill-[#f59e0b] text-[#f59e0b]" : "fill-transparent text-muted-foreground" : isHalf ? "fill-[#f59e0b] text-[#f59e0b]" : isFilled ? "fill-[#f59e0b] text-[#f59e0b]" : "fill-transparent text-muted-foreground";
			if (!interactive && isHalf) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarHalf, {
				"data-uid": "src/components/ui/star-rating.tsx:62:13",
				"data-prohibitions": "[editContent]",
				className: cn(starSizeClass, "fill-[#f59e0b] text-[#f59e0b] transition-colors duration-100 ease-in-out"),
				"aria-hidden": "true"
			}, starIndex);
			if (interactive) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"data-uid": "src/components/ui/star-rating.tsx:75:13",
				"data-prohibitions": "[editContent]",
				type: "button",
				disabled,
				onMouseEnter: () => setHoverRating(starIndex),
				onClick: () => onRate && onRate(starIndex),
				className: cn("flex items-center justify-center w-[32px] h-[32px] bg-transparent border-none cursor-pointer rounded-[4px] p-0 transition-colors duration-100 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring", !disabled && "hover:bg-accent"),
				"aria-label": `Avaliar com ${starIndex} estrelas`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					"data-uid": "src/components/ui/star-rating.tsx:87:15",
					"data-prohibitions": "[editContent]",
					className: cn(starSizeClass, finalColorClass, "transition-colors duration-100 ease-in-out"),
					"aria-hidden": "true"
				})
			}, starIndex);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				"data-uid": "src/components/ui/star-rating.tsx:100:11",
				"data-prohibitions": "[editContent]",
				className: cn(starSizeClass, finalColorClass, "transition-colors duration-100 ease-in-out"),
				"aria-hidden": "true"
			}, starIndex);
		})
	});
}
//#endregion
export { StarRating as t };

//# sourceMappingURL=star-rating-CxxwsLsY.js.map