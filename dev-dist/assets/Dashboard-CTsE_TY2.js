import { a as require_jsx_runtime, c as Link, g as require_react, o as createLucideIcon, p as useNavigate, v as __toESM } from "./client-D09FV_21.js";
import "./react-dom-D47xuAER.js";
import { a as SelectValue, c as FocusScope, i as SelectTrigger, l as useFocusGuards, n as SelectContent, o as ReactRemoveScroll, r as SelectItem, s as hideOthers, t as Select } from "./select-CCm9mSHw.js";
import { C as createContextScope, S as createContext2, T as X, _ as Primitive, b as createSlot, d as Portal$1, m as DismissableLayer, o as useId, u as useControllableState, w as composeEventHandlers, x as createSlottable } from "./dist-Gd_mGgr5.js";
import { a as cn, c as useComposedRefs, n as buttonVariants, t as Button } from "./button-CiSPku0O.js";
import { n as useToast, t as Presence } from "./index-DY3s7Fls.js";
import { t as useAdminAuth } from "./use-admin-auth-CzBVU3ds.js";
import { t as Skeleton } from "./skeleton-BvP868zf.js";
import { t as Input } from "./input-BmZQJX4Y.js";
import { t as adminService } from "./admin-Bb_eAA0H.js";
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
var Pencil = createLucideIcon("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]);
var Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
//#endregion
//#region src/hooks/use-admin-dashboard.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useAdminDashboard() {
	const [learnings, setLearnings] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(false);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("Todos");
	const [level, setLevel] = (0, import_react.useState)("Todos");
	const { toast } = useToast();
	const fetchLearnings = (0, import_react.useCallback)(async () => {
		setLoading(true);
		setError(false);
		try {
			setLearnings(await adminService.fetchAllLearnings());
		} catch (e) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		fetchLearnings();
	}, [fetchLearnings]);
	const filteredLearnings = (0, import_react.useMemo)(() => {
		return learnings.filter((item) => {
			const q = searchTerm.toLowerCase();
			const matchSearch = searchTerm === "" || item.title.toLowerCase().includes(q) || item.author.toLowerCase().includes(q) || item.context.toLowerCase().includes(q) || item.learning.toLowerCase().includes(q);
			const matchCategory = category === "Todos" || item.category === category;
			const matchLevel = level === "Todos" || item.level === level;
			return matchSearch && matchCategory && matchLevel;
		});
	}, [
		learnings,
		searchTerm,
		category,
		level
	]);
	const deleteLearning = async (id) => {
		const previous = [...learnings];
		setLearnings(learnings.filter((l) => l.id !== id));
		try {
			await adminService.deleteLearning(id);
			toast({ title: "Aprendizado excluido com sucesso." });
		} catch (e) {
			setLearnings(previous);
			toast({
				title: "Nao foi possivel excluir. Tente novamente.",
				variant: "destructive"
			});
		}
	};
	return {
		learnings,
		filteredLearnings,
		loading,
		error,
		searchTerm,
		setSearchTerm,
		category,
		setCategory,
		level,
		setLevel,
		deleteLearning,
		fetchLearnings
	};
}
//#endregion
//#region ../../cache/modules/biblia-dos-eliters-3acf3/node_modules/.pnpm/@radix-ui+react-dialog@1.1.15_@types+react-dom@19.2.3_@types+react@19.2.14__@types+reac_779045218dc2799d336e7197abef9d38/node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_jsx_runtime = require_jsx_runtime();
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children
	});
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME$1 = "DialogTrigger";
var DialogTrigger = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...triggerProps } = props;
	const context = useDialogContext(TRIGGER_NAME$1, __scopeDialog);
	const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": context.open,
		"aria-controls": context.contentId,
		"data-state": getState(context.open),
		...triggerProps,
		ref: composedTriggerRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
});
DialogTrigger.displayName = TRIGGER_NAME$1;
var PORTAL_NAME$1 = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME$1, { forceMount: void 0 });
var DialogPortal = (props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME$1, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeDialog,
		forceMount,
		children: import_react.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$1, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
};
DialogPortal.displayName = PORTAL_NAME$1;
var OVERLAY_NAME$1 = "DialogOverlay";
var DialogOverlay = import_react.forwardRef((props, forwardedRef) => {
	const portalContext = usePortalContext(OVERLAY_NAME$1, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME$1, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
});
DialogOverlay.displayName = OVERLAY_NAME$1;
var Slot = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME$1, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot,
		allowPinchZoom: true,
		shards: [context.contentRef],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(context.open),
			...overlayProps,
			ref: forwardedRef,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
});
var CONTENT_NAME$1 = "DialogContent";
var DialogContent = import_react.forwardRef((props, forwardedRef) => {
	const portalContext = usePortalContext(CONTENT_NAME$1, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
});
DialogContent.displayName = CONTENT_NAME$1;
var DialogContentModal = import_react.forwardRef((props, forwardedRef) => {
	const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: true,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
});
var DialogContentNonModal = import_react.forwardRef((props, forwardedRef) => {
	const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
});
var DialogContentImpl = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$1, __scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, contentRef);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: context.contentId,
			"aria-describedby": context.descriptionId,
			"aria-labelledby": context.titleId,
			"data-state": getState(context.open),
			...contentProps,
			ref: composedRefs,
			onDismiss: () => context.onOpenChange(false)
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleWarning, { titleId: context.titleId }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionWarning$1, {
		contentRef,
		descriptionId: context.descriptionId
	})] })] });
});
var TITLE_NAME$1 = "DialogTitle";
var DialogTitle = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext(TITLE_NAME$1, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
});
DialogTitle.displayName = TITLE_NAME$1;
var DESCRIPTION_NAME$1 = "DialogDescription";
var DialogDescription = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext(DESCRIPTION_NAME$1, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
});
DialogDescription.displayName = DESCRIPTION_NAME$1;
var CLOSE_NAME = "DialogClose";
var DialogClose = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
	return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
	contentName: CONTENT_NAME$1,
	titleName: TITLE_NAME$1,
	docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
	const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
	const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
	import_react.useEffect(() => {
		if (titleId) {
			if (!document.getElementById(titleId)) console.error(MESSAGE);
		}
	}, [MESSAGE, titleId]);
	return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning$1 = ({ contentRef, descriptionId }) => {
	const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
	import_react.useEffect(() => {
		const describedById = contentRef.current?.getAttribute("aria-describedby");
		if (descriptionId && describedById) {
			if (!document.getElementById(descriptionId)) console.warn(MESSAGE);
		}
	}, [
		MESSAGE,
		contentRef,
		descriptionId
	]);
	return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
//#endregion
//#region ../../cache/modules/biblia-dos-eliters-3acf3/node_modules/.pnpm/@radix-ui+react-alert-dialog@1.1.15_@types+react-dom@19.2.3_@types+react@19.2.14__@type_d492cfbed6c88f7a3980b921a627d48d/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope(ROOT_NAME, [createDialogScope]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
	const { __scopeAlertDialog, ...alertDialogProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		...dialogScope,
		...alertDialogProps,
		modal: true
	});
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...triggerProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		...dialogScope,
		...triggerProps,
		ref: forwardedRef
	});
});
AlertDialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
	const { __scopeAlertDialog, ...portalProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		...dialogScope,
		...portalProps
	});
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...overlayProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
		...dialogScope,
		...overlayProps,
		ref: forwardedRef
	});
});
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = createSlottable("AlertDialogContent");
var AlertDialogContent$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, children, ...contentProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, contentRef);
	const cancelRef = import_react.useRef(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningProvider, {
		contentName: CONTENT_NAME,
		titleName: TITLE_NAME,
		docsSlug: "alert-dialog",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogContentProvider, {
			scope: __scopeAlertDialog,
			cancelRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content, {
				role: "alertdialog",
				...dialogScope,
				...contentProps,
				ref: composedRefs,
				onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
					event.preventDefault();
					cancelRef.current?.focus({ preventScroll: true });
				}),
				onPointerDownOutside: (event) => event.preventDefault(),
				onInteractOutside: (event) => event.preventDefault(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slottable, { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DescriptionWarning, { contentRef })]
			})
		})
	});
});
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...titleProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
		...dialogScope,
		...titleProps,
		ref: forwardedRef
	});
});
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...descriptionProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, {
		...dialogScope,
		...descriptionProps,
		ref: forwardedRef
	});
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...actionProps } = props;
	const dialogScope = useDialogScope(__scopeAlertDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, {
		...dialogScope,
		...actionProps,
		ref: forwardedRef
	});
});
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeAlertDialog, ...cancelProps } = props;
	const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
	const dialogScope = useDialogScope(__scopeAlertDialog);
	const ref = useComposedRefs(forwardedRef, cancelRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, {
		...dialogScope,
		...cancelProps,
		ref
	});
});
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
	const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
	import_react.useEffect(() => {
		if (!document.getElementById(contentRef.current?.getAttribute("aria-describedby"))) console.warn(MESSAGE);
	}, [MESSAGE, contentRef]);
	return null;
};
var Root2 = AlertDialog$1;
var Trigger2 = AlertDialogTrigger$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
//#endregion
//#region src/components/ui/alert-dialog.tsx
var AlertDialog = Root2;
var AlertDialogTrigger = Trigger2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	"data-uid": "src/components/ui/alert-dialog.tsx:18:3",
	"data-prohibitions": "[editContent]",
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, {
	"data-uid": "src/components/ui/alert-dialog.tsx:33:3",
	"data-prohibitions": "[editContent]",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {
		"data-uid": "src/components/ui/alert-dialog.tsx:34:5",
		"data-prohibitions": "[editContent]"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		"data-uid": "src/components/ui/alert-dialog.tsx:35:5",
		"data-prohibitions": "[editContent]",
		ref,
		className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
		...props
	})]
}));
AlertDialogContent.displayName = Content2.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	"data-uid": "src/components/ui/alert-dialog.tsx:48:3",
	"data-prohibitions": "[editContent]",
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	"data-uid": "src/components/ui/alert-dialog.tsx:53:3",
	"data-prohibitions": "[editContent]",
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	"data-uid": "src/components/ui/alert-dialog.tsx:64:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	"data-uid": "src/components/ui/alert-dialog.tsx:76:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	"data-uid": "src/components/ui/alert-dialog.tsx:88:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	"data-uid": "src/components/ui/alert-dialog.tsx:96:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
//#endregion
//#region src/hooks/use-mobile.tsx
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
//#endregion
//#region src/pages/admin/Dashboard.tsx
function AdminDashboard() {
	const { signOut } = useAdminAuth();
	const navigate = useNavigate();
	const isMobile = useIsMobile();
	const { learnings, filteredLearnings, loading, error, searchTerm, setSearchTerm, category, setCategory, level, setLevel, deleteLearning, fetchLearnings } = useAdminDashboard();
	const CATEGORIES = [
		"Todos",
		"IA",
		"Vibecoding",
		"Automacoes",
		"Agentes de IA"
	];
	const LEVELS = [
		"Todos",
		"Iniciante",
		"Intermediario",
		"Avancado"
	];
	const stats = [
		{
			label: "Total",
			val: learnings.length
		},
		{
			label: "IA",
			val: learnings.filter((l) => l.category === "IA").length
		},
		{
			label: "Vibecoding",
			val: learnings.filter((l) => l.category === "Vibecoding").length
		},
		{
			label: "Automacoes e Agentes",
			val: learnings.filter((l) => ["Automacoes", "Agentes de IA"].includes(l.category)).length
		}
	];
	const dateFmt = (d) => d ? d.split("-").reverse().join("/") : "";
	const getLvlColor = (lvl) => {
		switch (lvl) {
			case "Iniciante": return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800";
			case "Intermediario": return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800";
			case "Avancado": return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800";
			default: return "border-transparent";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/pages/admin/Dashboard.tsx:74:5",
		"data-prohibitions": "[editContent]",
		className: "min-h-screen bg-background text-foreground font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			"data-uid": "src/pages/admin/Dashboard.tsx:75:7",
			"data-prohibitions": "[editContent]",
			className: "max-w-7xl mx-auto px-4 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					"data-uid": "src/pages/admin/Dashboard.tsx:76:9",
					"data-prohibitions": "[editContent]",
					className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-[28px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Dashboard.tsx:77:11",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							"data-uid": "src/pages/admin/Dashboard.tsx:78:13",
							"data-prohibitions": "[]",
							className: "text-[1.5rem] font-bold tracking-[-0.02em] text-foreground",
							children: "Painel Admin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							"data-uid": "src/pages/admin/Dashboard.tsx:81:13",
							"data-prohibitions": "[editContent]",
							className: "text-[0.8125rem] text-muted-foreground mt-[2px]",
							children: [learnings.length, " aprendizados no repositorio"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Dashboard.tsx:85:11",
						"data-prohibitions": "[]",
						className: "flex items-center gap-[12px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							"data-uid": "src/pages/admin/Dashboard.tsx:86:13",
							"data-prohibitions": "[]",
							to: "/",
							target: "_blank",
							className: "text-[0.8125rem] text-primary hover:underline flex items-center gap-1 font-medium",
							children: ["Ver repositorio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								"data-uid": "src/pages/admin/Dashboard.tsx:91:31",
								"data-prohibitions": "[editContent]",
								className: "w-3.5 h-3.5"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"data-uid": "src/pages/admin/Dashboard.tsx:93:13",
							"data-prohibitions": "[]",
							onClick: async () => {
								await signOut();
								navigate("/admin/login");
							},
							className: "border border-border px-[16px] py-[8px] rounded-[var(--radius)] text-[0.8125rem] text-foreground hover:bg-accent transition-colors font-medium",
							children: "Sair"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/admin/Dashboard.tsx:105:9",
					"data-prohibitions": "[editContent]",
					className: "grid grid-cols-2 md:grid-cols-4 gap-[12px] mb-[28px]",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Dashboard.tsx:107:13",
						"data-prohibitions": "[editContent]",
						className: "bg-card border border-border rounded-[calc(var(--radius)*1.5)] py-[16px] px-[20px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-uid": "src/pages/admin/Dashboard.tsx:111:15",
							"data-prohibitions": "[editContent]",
							className: "text-[1.75rem] font-bold text-primary leading-none",
							children: s.val
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-uid": "src/pages/admin/Dashboard.tsx:112:15",
							"data-prohibitions": "[editContent]",
							className: "text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground mt-[4px]",
							children: s.label
						})]
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/admin/Dashboard.tsx:119:9",
					"data-prohibitions": "[editContent]",
					className: "flex flex-col md:flex-row gap-4 mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"data-uid": "src/pages/admin/Dashboard.tsx:120:11",
							"data-prohibitions": "[editContent]",
							placeholder: "Buscar aprendizados",
							"aria-label": "Buscar aprendizados",
							value: searchTerm,
							onChange: (e) => setSearchTerm(e.target.value),
							className: "md:w-1/3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							"data-uid": "src/pages/admin/Dashboard.tsx:127:11",
							"data-prohibitions": "[editContent]",
							value: category,
							onValueChange: setCategory,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								"data-uid": "src/pages/admin/Dashboard.tsx:128:13",
								"data-prohibitions": "[]",
								className: "md:w-[200px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									"data-uid": "src/pages/admin/Dashboard.tsx:129:15",
									"data-prohibitions": "[editContent]",
									placeholder: "Categoria"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
								"data-uid": "src/pages/admin/Dashboard.tsx:131:13",
								"data-prohibitions": "[editContent]",
								children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/admin/Dashboard.tsx:133:17",
									"data-prohibitions": "[editContent]",
									value: c,
									children: c
								}, c))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							"data-uid": "src/pages/admin/Dashboard.tsx:139:11",
							"data-prohibitions": "[editContent]",
							value: level,
							onValueChange: setLevel,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								"data-uid": "src/pages/admin/Dashboard.tsx:140:13",
								"data-prohibitions": "[]",
								className: "md:w-[200px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									"data-uid": "src/pages/admin/Dashboard.tsx:141:15",
									"data-prohibitions": "[editContent]",
									placeholder: "Nivel"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
								"data-uid": "src/pages/admin/Dashboard.tsx:143:13",
								"data-prohibitions": "[editContent]",
								children: LEVELS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/admin/Dashboard.tsx:145:17",
									"data-prohibitions": "[editContent]",
									value: l,
									children: l
								}, l))
							})]
						}),
						(searchTerm !== "" || category !== "Todos" || level !== "Todos") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							"data-uid": "src/pages/admin/Dashboard.tsx:152:13",
							"data-prohibitions": "[]",
							variant: "ghost",
							onClick: () => {
								setSearchTerm("");
								setCategory("Todos");
								setLevel("Todos");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								"data-uid": "src/pages/admin/Dashboard.tsx:160:15",
								"data-prohibitions": "[editContent]",
								className: "w-4 h-4 mr-2"
							}), " Limpar filtros"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-uid": "src/pages/admin/Dashboard.tsx:165:9",
					"data-prohibitions": "[editContent]",
					className: "text-[0.8125rem] text-muted-foreground mb-4",
					children: [filteredLearnings.length, " aprendizados encontrados"]
				}),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/admin/Dashboard.tsx:170:11",
					"data-prohibitions": "[editContent]",
					className: "w-full border border-border rounded-[calc(var(--radius)*1.5)] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/admin/Dashboard.tsx:171:13",
						"data-prohibitions": "[]",
						className: "bg-muted h-[35px] w-full border-b border-border"
					}), Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/admin/Dashboard.tsx:173:15",
						"data-prohibitions": "[]",
						className: "h-[52px] w-full border-b border-border bg-card flex items-center px-[14px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
							"data-uid": "src/pages/admin/Dashboard.tsx:177:17",
							"data-prohibitions": "[editContent]",
							className: "h-4 w-full bg-muted-foreground/10"
						})
					}, i))]
				}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/admin/Dashboard.tsx:182:11",
					"data-prohibitions": "[]",
					className: "text-center py-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/admin/Dashboard.tsx:183:13",
						"data-prohibitions": "[]",
						className: "mb-4 text-[0.875rem]",
						children: "Nao foi possivel carregar."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/admin/Dashboard.tsx:184:13",
						"data-prohibitions": "[]",
						onClick: fetchLearnings,
						children: "Tentar novamente"
					})]
				}) : filteredLearnings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/admin/Dashboard.tsx:187:11",
					"data-prohibitions": "[]",
					className: "text-center py-12 text-[0.875rem] text-muted-foreground",
					children: "Nenhum aprendizado encontrado."
				}) : isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/admin/Dashboard.tsx:191:11",
					"data-prohibitions": "[editContent]",
					className: "space-y-0",
					children: filteredLearnings.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Dashboard.tsx:193:15",
						"data-prohibitions": "[editContent]",
						className: "bg-card border border-border rounded-[calc(var(--radius)*1.5)] p-[16px] mb-[12px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/admin/Dashboard.tsx:197:17",
								"data-prohibitions": "[editContent]",
								className: "flex items-center gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"data-uid": "src/pages/admin/Dashboard.tsx:198:19",
									"data-prohibitions": "[editContent]",
									className: "text-[0.75rem] bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border",
									children: ["#", l.number]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									"data-uid": "src/pages/admin/Dashboard.tsx:201:19",
									"data-prohibitions": "[editContent]",
									className: "font-bold text-[0.875rem] text-foreground",
									children: l.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/admin/Dashboard.tsx:203:17",
								"data-prohibitions": "[editContent]",
								className: "flex justify-between text-[0.8125rem] text-muted-foreground mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-uid": "src/pages/admin/Dashboard.tsx:204:19",
									"data-prohibitions": "[editContent]",
									children: l.author
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-uid": "src/pages/admin/Dashboard.tsx:205:19",
									"data-prohibitions": "[editContent]",
									children: dateFmt(l.date)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/admin/Dashboard.tsx:207:17",
								"data-prohibitions": "[editContent]",
								className: "flex gap-2 flex-wrap mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-uid": "src/pages/admin/Dashboard.tsx:208:19",
									"data-prohibitions": "[editContent]",
									className: "text-[0.6875rem] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full border border-transparent",
									children: l.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-uid": "src/pages/admin/Dashboard.tsx:211:19",
									"data-prohibitions": "[editContent]",
									className: `text-[0.6875rem] font-medium px-2 py-0.5 rounded-full border ${getLvlColor(l.level)}`,
									children: l.level
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/admin/Dashboard.tsx:217:17",
								"data-prohibitions": "[]",
								className: "flex items-center gap-2 w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									"data-uid": "src/pages/admin/Dashboard.tsx:218:19",
									"data-prohibitions": "[]",
									to: `/admin/editar/${l.id}`,
									className: "flex-1 border border-border rounded-[var(--radius)] text-[0.8125rem] py-2 text-center text-foreground hover:bg-accent transition-colors font-medium",
									children: "Editar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DelDialog, {
									"data-uid": "src/pages/admin/Dashboard.tsx:224:19",
									"data-prohibitions": "[]",
									onConfirm: () => deleteLearning(l.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"data-uid": "src/pages/admin/Dashboard.tsx:225:21",
										"data-prohibitions": "[]",
										className: "flex-1 border border-destructive/30 text-destructive rounded-[var(--radius)] text-[0.8125rem] py-2 text-center hover:bg-destructive/10 transition-colors font-medium",
										children: "Excluir"
									})
								})]
							})
						]
					}, l.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/admin/Dashboard.tsx:234:11",
					"data-prohibitions": "[editContent]",
					className: "bg-card rounded-[calc(var(--radius)*1.5)] border border-border overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						"data-uid": "src/pages/admin/Dashboard.tsx:235:13",
						"data-prohibitions": "[editContent]",
						className: "w-full border-collapse text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							"data-uid": "src/pages/admin/Dashboard.tsx:236:15",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								"data-uid": "src/pages/admin/Dashboard.tsx:237:17",
								"data-prohibitions": "[]",
								className: "border-b border-border bg-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										"data-uid": "src/pages/admin/Dashboard.tsx:238:19",
										"data-prohibitions": "[]",
										className: "px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[60px]",
										children: "#"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										"data-uid": "src/pages/admin/Dashboard.tsx:241:19",
										"data-prohibitions": "[]",
										className: "px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground",
										children: "Titulo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										"data-uid": "src/pages/admin/Dashboard.tsx:244:19",
										"data-prohibitions": "[]",
										className: "px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[140px]",
										children: "Autor"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										"data-uid": "src/pages/admin/Dashboard.tsx:247:19",
										"data-prohibitions": "[]",
										className: "px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[120px]",
										children: "Categoria"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										"data-uid": "src/pages/admin/Dashboard.tsx:250:19",
										"data-prohibitions": "[]",
										className: "px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[110px]",
										children: "Nivel"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										"data-uid": "src/pages/admin/Dashboard.tsx:253:19",
										"data-prohibitions": "[]",
										className: "px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[100px]",
										children: "Data"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										"data-uid": "src/pages/admin/Dashboard.tsx:256:19",
										"data-prohibitions": "[]",
										className: "px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[100px] text-right",
										children: "Acoes"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							"data-uid": "src/pages/admin/Dashboard.tsx:261:15",
							"data-prohibitions": "[editContent]",
							children: filteredLearnings.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								"data-uid": "src/pages/admin/Dashboard.tsx:263:19",
								"data-prohibitions": "[editContent]",
								className: "border-b border-border hover:bg-accent/50 transition-colors last:border-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										"data-uid": "src/pages/admin/Dashboard.tsx:267:21",
										"data-prohibitions": "[editContent]",
										className: "px-[14px] py-[12px] text-[0.8125rem] text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/admin/Dashboard.tsx:268:23",
											"data-prohibitions": "[editContent]",
											className: "bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full border border-border text-[0.6875rem] font-medium",
											children: l.number
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										"data-uid": "src/pages/admin/Dashboard.tsx:272:21",
										"data-prohibitions": "[editContent]",
										className: "px-[14px] py-[12px] text-[0.8125rem] text-foreground font-medium max-w-[220px] truncate whitespace-nowrap",
										title: l.title,
										children: l.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										"data-uid": "src/pages/admin/Dashboard.tsx:278:21",
										"data-prohibitions": "[editContent]",
										className: "px-[14px] py-[12px] text-[0.8125rem] text-muted-foreground truncate",
										children: l.author
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										"data-uid": "src/pages/admin/Dashboard.tsx:281:21",
										"data-prohibitions": "[editContent]",
										className: "px-[14px] py-[12px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/admin/Dashboard.tsx:282:23",
											"data-prohibitions": "[editContent]",
											className: "text-[0.6875rem] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full border border-transparent",
											children: l.category
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										"data-uid": "src/pages/admin/Dashboard.tsx:286:21",
										"data-prohibitions": "[editContent]",
										className: "px-[14px] py-[12px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/admin/Dashboard.tsx:287:23",
											"data-prohibitions": "[editContent]",
											className: `text-[0.6875rem] font-medium px-2 py-0.5 rounded-full border ${getLvlColor(l.level)}`,
											children: l.level
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										"data-uid": "src/pages/admin/Dashboard.tsx:295:21",
										"data-prohibitions": "[editContent]",
										className: "px-[14px] py-[12px] text-[0.8125rem] text-muted-foreground",
										children: dateFmt(l.date)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										"data-uid": "src/pages/admin/Dashboard.tsx:298:21",
										"data-prohibitions": "[]",
										className: "px-[14px] py-[12px] text-[0.8125rem] text-foreground text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/admin/Dashboard.tsx:299:23",
											"data-prohibitions": "[]",
											className: "flex items-center justify-end gap-[4px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												"data-uid": "src/pages/admin/Dashboard.tsx:300:25",
												"data-prohibitions": "[]",
												to: `/admin/editar/${l.id}`,
												className: "w-[32px] h-[32px] rounded-[var(--radius)] flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors",
												"aria-label": "Editar",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
													"data-uid": "src/pages/admin/Dashboard.tsx:305:27",
													"data-prohibitions": "[editContent]",
													className: "w-4 h-4"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DelDialog, {
												"data-uid": "src/pages/admin/Dashboard.tsx:307:25",
												"data-prohibitions": "[]",
												onConfirm: () => deleteLearning(l.id),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													"data-uid": "src/pages/admin/Dashboard.tsx:308:27",
													"data-prohibitions": "[]",
													className: "w-[32px] h-[32px] rounded-[var(--radius)] flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors",
													"aria-label": "Excluir",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
														"data-uid": "src/pages/admin/Dashboard.tsx:312:29",
														"data-prohibitions": "[editContent]",
														className: "w-4 h-4"
													})
												})
											})]
										})
									})
								]
							}, l.id))
						})]
					})
				})
			]
		})
	});
}
function DelDialog({ children, onConfirm }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialog, {
		"data-uid": "src/pages/admin/Dashboard.tsx:330:5",
		"data-prohibitions": "[editContent]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTrigger, {
			"data-uid": "src/pages/admin/Dashboard.tsx:331:7",
			"data-prohibitions": "[editContent]",
			asChild: true,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
			"data-uid": "src/pages/admin/Dashboard.tsx:332:7",
			"data-prohibitions": "[]",
			className: "font-sans",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, {
				"data-uid": "src/pages/admin/Dashboard.tsx:333:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, {
					"data-uid": "src/pages/admin/Dashboard.tsx:334:11",
					"data-prohibitions": "[]",
					children: "Excluir aprendizado?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
					"data-uid": "src/pages/admin/Dashboard.tsx:335:11",
					"data-prohibitions": "[]",
					children: "Essa acao nao pode ser desfeita. O aprendizado sera removido permanentemente do repositorio."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, {
				"data-uid": "src/pages/admin/Dashboard.tsx:340:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
					"data-uid": "src/pages/admin/Dashboard.tsx:341:11",
					"data-prohibitions": "[]",
					children: "Cancelar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
					"data-uid": "src/pages/admin/Dashboard.tsx:342:11",
					"data-prohibitions": "[]",
					onClick: onConfirm,
					className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
					children: "Sim, excluir"
				})]
			})]
		})]
	});
}
//#endregion
export { AdminDashboard as default };

//# sourceMappingURL=Dashboard-CTsE_TY2.js.map