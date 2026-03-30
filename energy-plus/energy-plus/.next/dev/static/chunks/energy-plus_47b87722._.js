(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/energy-plus/app/dashboard/components/NavbarBreadcrumbs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavbarBreadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Breadcrumbs$2f$Breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Breadcrumbs/Breadcrumbs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Breadcrumbs$2f$breadcrumbsClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__breadcrumbsClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Breadcrumbs/breadcrumbsClasses.js [app-client] (ecmascript) <export default as breadcrumbsClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NavigateNextRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/NavigateNextRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const StyledBreadcrumbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Breadcrumbs$2f$Breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        margin: theme.spacing(1, 0),
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Breadcrumbs$2f$breadcrumbsClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__breadcrumbsClasses$3e$__["breadcrumbsClasses"].separator}`]: {
            color: (theme.vars || theme).palette.action.disabled,
            margin: 1
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Breadcrumbs$2f$breadcrumbsClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__breadcrumbsClasses$3e$__["breadcrumbsClasses"].ol}`]: {
            alignItems: 'center'
        }
    }));
_c = StyledBreadcrumbs;
function NavbarBreadcrumbs() {
    _s();
    let pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '/dashboard/home';
    // Default to /dashboard/home if path is exactly /dashboard
    if (pathname === '/dashboard') pathname = '/dashboard/home';
    const pathParts = pathname.split('/').filter(Boolean);
    const breadcrumbs = pathParts.map((part, index)=>{
        const label = part.charAt(0).toUpperCase() + part.slice(1);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "body1",
            sx: {
                color: index === pathParts.length - 1 ? 'text.primary' : 'text.secondary',
                fontWeight: index === pathParts.length - 1 ? 600 : 400
            },
            children: label
        }, index, false, {
            fileName: "[project]/energy-plus/app/dashboard/components/NavbarBreadcrumbs.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledBreadcrumbs, {
        "aria-label": "breadcrumb",
        separator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NavigateNextRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            fontSize: "small"
        }, void 0, false, {
            fileName: "[project]/energy-plus/app/dashboard/components/NavbarBreadcrumbs.tsx",
            lineNumber: 47,
            columnNumber: 24
        }, void 0),
        children: breadcrumbs
    }, void 0, false, {
        fileName: "[project]/energy-plus/app/dashboard/components/NavbarBreadcrumbs.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_s(NavbarBreadcrumbs, "wVXOWZKWdId76kQQO0KX6Oz3JDA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = NavbarBreadcrumbs;
var _c, _c1;
__turbopack_context__.k.register(_c, "StyledBreadcrumbs");
__turbopack_context__.k.register(_c1, "NavbarBreadcrumbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/theme/ColorModeSwitch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ColorModeSwitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Switch/Switch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/styles/ThemeProviderWithVars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WbSunnyRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/WbSunnyRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DarkModeRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/DarkModeRounded.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ThemeSwitch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        width: 50,
        height: 28,
        padding: 4,
        "& .MuiSwitch-switchBase": {
            padding: 2,
            margin: 4,
            transitionDuration: "300ms",
            "&.Mui-checked": {
                transform: "translateX(22px)"
            }
        },
        "& .MuiSwitch-thumb": {
            width: 24,
            height: 24,
            backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001a4d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
            transition: "all 0.3s ease"
        },
        "& .MuiSwitch-track": {
            borderRadius: 20,
            backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[600] : theme.palette.grey[400],
            opacity: 1
        }
    }));
_c = ThemeSwitch;
function ColorModeSwitch(props) {
    _s();
    const { mode, setMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorScheme"])();
    if (!mode) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeSwitch, {
        checked: mode === "dark",
        onChange: (e)=>setMode(e.target.checked ? "dark" : "light"),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WbSunnyRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 16,
                color: "#fff"
            }
        }, void 0, false, {
            fileName: "[project]/energy-plus/theme/ColorModeSwitch.tsx",
            lineNumber: 48,
            columnNumber: 19
        }, void 0),
        checkedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DarkModeRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 16,
                color: "#fff"
            }
        }, void 0, false, {
            fileName: "[project]/energy-plus/theme/ColorModeSwitch.tsx",
            lineNumber: 49,
            columnNumber: 26
        }, void 0),
        ...props
    }, void 0, false, {
        fileName: "[project]/energy-plus/theme/ColorModeSwitch.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_s(ColorModeSwitch, "/A8s72i832WMziaeP3kNeGioZXs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorScheme"]
    ];
});
_c1 = ColorModeSwitch;
var _c, _c1;
__turbopack_context__.k.register(_c, "ThemeSwitch");
__turbopack_context__.k.register(_c1, "ColorModeSwitch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/global-components/SitemarkIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SitemarkIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function SitemarkIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/landing-page",
        passHref: true,
        style: {
            textDecoration: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                fontFamily: "'Inter', 'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: 24,
                color: "text.primary",
                letterSpacing: 0.5,
                p: 1,
                m: 1,
                cursor: "pointer"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo.png",
                    alt: "Logo",
                    width: 15,
                    height: 22,
                    priority: true,
                    style: {
                        display: "block",
                        margin: " 6px 8px 0 0"
                    }
                }, void 0, false, {
                    fileName: "[project]/energy-plus/app/global-components/SitemarkIcon.tsx",
                    lineNumber: 26,
                    columnNumber: 13
                }, this),
                "energy+"
            ]
        }, void 0, true, {
            fileName: "[project]/energy-plus/app/global-components/SitemarkIcon.tsx",
            lineNumber: 11,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/energy-plus/app/global-components/SitemarkIcon.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = SitemarkIcon;
var _c;
__turbopack_context__.k.register(_c, "SitemarkIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseClient",
    ()=>supabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://lvohjwditghntcauzyii.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2b2hqd2RpdGdobnRjYXV6eWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2OTk4MTUsImV4cCI6MjA4NTI3NTgxNX0.yUekouRo4J4QS9Dg2nRwvD1ocD4yiRDl1-NThUw94NY"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/global-components/AppAppBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppAppBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/AppBar/AppBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/Login.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$components$2f$NavbarBreadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/components/NavbarBreadcrumbs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$ColorModeSwitch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/ColorModeSwitch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$global$2d$components$2f$SitemarkIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/global-components/SitemarkIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const StyledToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 64,
        backdropFilter: "blur(20px)",
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.7)` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.background.default, 0.7),
        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
        padding: "0 16px"
    }));
_c = StyledToolbar;
function AppAppBar() {
    _s();
    const [user, setUser] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [profile, setProfile] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [loggingOut, setLoggingOut] = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isLandingPage = pathname === "/landing-page";
    const fetchUserProfile = async (userId)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"].from("profiles").select("first_name, last_name, email, avatar_url").eq("id", userId).single();
        if (!error && data) {
            setProfile(data);
        } else {
            console.error("Error fetching profile:", error);
            setProfile(null);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "AppAppBar.useEffect": ()=>{
            const loadUserSession = {
                "AppAppBar.useEffect.loadUserSession": async ()=>{
                    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"].auth.getSession();
                    const sessionUser = data.session?.user ?? null;
                    setUser(sessionUser);
                    if (sessionUser) {
                        await fetchUserProfile(sessionUser.id);
                    }
                    setLoading(false);
                }
            }["AppAppBar.useEffect.loadUserSession"];
            loadUserSession();
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"].auth.onAuthStateChange({
                "AppAppBar.useEffect": (_event, session)=>{
                    const sessionUser = session?.user ?? null;
                    setUser(sessionUser);
                    if (sessionUser) {
                        fetchUserProfile(sessionUser.id);
                    } else {
                        setProfile(null);
                    }
                }
            }["AppAppBar.useEffect"]);
            return ({
                "AppAppBar.useEffect": ()=>{
                    subscription?.unsubscribe();
                }
            })["AppAppBar.useEffect"];
        }
    }["AppAppBar.useEffect"], []);
    const handleLogout = async ()=>{
        setLoggingOut(true);
        await __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"].auth.signOut();
        setUser(null);
        setProfile(null);
        console.log("User logged out");
        router.push("/sign-in");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        position: "fixed",
        enableColorOnDark: true,
        elevation: 0,
        sx: {
            top: 0,
            left: 0,
            right: 0,
            bgcolor: "transparent",
            backgroundImage: "none",
            zIndex: (theme)=>theme.zIndex.drawer + 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledToolbar, {
            variant: "dense",
            disableGutters: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 2
                    },
                    children: [
                        !user || isLandingPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$global$2d$components$2f$SitemarkIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                            lineNumber: 116,
                            columnNumber: 47
                        }, this) : null,
                        user && !isLandingPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                margin: "-4px 0 0 0"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "Logo",
                                width: 15,
                                height: 22,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                                lineNumber: 120,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                            lineNumber: 119,
                            columnNumber: 25
                        }, this),
                        user && !isLandingPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$components$2f$NavbarBreadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                            lineNumber: 130,
                            columnNumber: 48
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        display: {
                            xs: "none",
                            md: "flex"
                        },
                        gap: 1,
                        alignItems: "center"
                    },
                    children: [
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            color: "inherit",
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                            lineNumber: 135,
                            columnNumber: 25
                        }, this) : loggingOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            color: "inherit",
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                            lineNumber: 137,
                            columnNumber: 25
                        }, this) : user && profile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        mr: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            alt: `${profile.first_name} ${profile.last_name}`,
                                            src: profile.avatar_url || "",
                                            sx: {
                                                width: 36,
                                                height: 36
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                                            lineNumber: 141,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: "body2",
                                                    sx: {
                                                        fontWeight: 500,
                                                        lineHeight: "16px"
                                                    },
                                                    children: [
                                                        profile.first_name,
                                                        " ",
                                                        profile.last_name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: "caption",
                                                    sx: {
                                                        color: "text.secondary"
                                                    },
                                                    children: profile.email
                                                }, void 0, false, {
                                                    fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                                            lineNumber: 146,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                                    lineNumber: 140,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    color: "primary",
                                    variant: "outlined",
                                    size: "small",
                                    onClick: handleLogout,
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    component: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    href: "/sign-in",
                                    color: "primary",
                                    variant: "outlined",
                                    size: "small",
                                    startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                                        lineNumber: 167,
                                        columnNumber: 44
                                    }, void 0),
                                    children: "Sign in"
                                }, void 0, false, {
                                    fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                                    lineNumber: 161,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    component: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    href: "/sign-up",
                                    color: "primary",
                                    variant: "contained",
                                    size: "small",
                                    children: "Sign up"
                                }, void 0, false, {
                                    fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                                    lineNumber: 171,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$ColorModeSwitch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                            lineNumber: 182,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                    lineNumber: 133,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        display: {
                            xs: "flex",
                            md: "none"
                        },
                        gap: 1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$ColorModeSwitch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "medium"
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                        lineNumber: 186,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
                    lineNumber: 185,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
            lineNumber: 114,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/energy-plus/app/global-components/AppAppBar.tsx",
        lineNumber: 101,
        columnNumber: 9
    }, this);
}
_s(AppAppBar, "QLv4RSAyz9plM5OUSvxkpIgNGlg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = AppAppBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "StyledToolbar");
__turbopack_context__.k.register(_c1, "AppAppBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/components/MenuContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/List/List.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/ListItem/ListItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/Home.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/Person.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FlashOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/FlashOn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Contacts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/Contacts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$People$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/People.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Analytics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/Analytics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SettingsRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/SettingsRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function MenuContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [accountType, setAccountType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuContent.useEffect": ()=>{
            async function loadAccountType() {
                const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"].auth.getUser();
                if (!user) {
                    setAccountType("user");
                    return;
                }
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"].from("profiles").select("account_type").eq("id", user.id).single();
                if (error || !data) {
                    setAccountType("user");
                    return;
                }
                setAccountType(data.account_type);
            }
            loadAccountType();
        }
    }["MenuContent.useEffect"], []);
    const mainListItems = accountType === "auditor" ? [
        {
            text: "Overview",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 64,
                columnNumber: 43
            }, this),
            path: "/dashboard/auditorOverview"
        },
        {
            text: "Organizations",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 65,
                columnNumber: 48
            }, this),
            path: "/dashboard/auditorOrganizations"
        },
        {
            text: "Properties",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Analytics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 66,
                columnNumber: 45
            }, this),
            path: "/dashboard/properties"
        },
        {
            text: "Users",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$People$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 67,
                columnNumber: 40
            }, this),
            path: "/dashboard/users"
        }
    ] : [
        {
            text: "Overview",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 70,
                columnNumber: 43
            }, this),
            path: "/dashboard/overview"
        },
        {
            text: "Organizations",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 71,
                columnNumber: 48
            }, this),
            path: "/dashboard/organizations"
        },
        {
            text: "Log Energy",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FlashOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 72,
                columnNumber: 45
            }, this),
            path: "/dashboard/logEnergy"
        },
        {
            text: "Contacts",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Contacts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 73,
                columnNumber: 43
            }, this),
            path: "/dashboard/contacts"
        },
        {
            text: "Analytics",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Analytics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 74,
                columnNumber: 44
            }, this),
            path: "/dashboard/analytics"
        },
        {
            text: "Properties",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Analytics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 75,
                columnNumber: 45
            }, this),
            path: "/dashboard/properties"
        },
        {
            text: "Users",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$People$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 76,
                columnNumber: 40
            }, this),
            path: "/dashboard/users"
        }
    ];
    const secondaryListItems = [
        {
            text: "Settings",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SettingsRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 80,
                columnNumber: 35
            }, this),
            path: "/dashboard/settings"
        }
    ];
    const isSelected = (itemPath)=>pathname === itemPath;
    if (!accountType) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            flexGrow: 1,
            p: 1,
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                dense: true,
                children: mainListItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        disablePadding: true,
                        sx: {
                            display: "block"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            selected: isSelected(item.path),
                            onClick: ()=>router.push(item.path),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    primary: item.text
                                }, void 0, false, {
                                    fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                            lineNumber: 92,
                            columnNumber: 25
                        }, this)
                    }, index, false, {
                        fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                dense: true,
                children: secondaryListItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        disablePadding: true,
                        sx: {
                            display: "block"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            selected: isSelected(item.path),
                            onClick: ()=>router.push(item.path),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                                    lineNumber: 110,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    primary: item.text
                                }, void 0, false, {
                                    fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                                    lineNumber: 111,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this)
                    }, index, false, {
                        fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/energy-plus/app/dashboard/components/MenuContent.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}
_s(MenuContent, "A+Tej2kxS9QkenYRTMEnKDD/NUA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MenuContent;
var _c;
__turbopack_context__.k.register(_c, "MenuContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/components/SideMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SideMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Drawer/Drawer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$drawerClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drawerClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Drawer/drawerClasses.js [app-client] (ecmascript) <export default as drawerClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$components$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/components/MenuContent.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const drawerWidth = 240;
const Drawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        width: drawerWidth,
        flexShrink: 0,
        boxSizing: 'border-box',
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$drawerClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drawerClasses$3e$__["drawerClasses"].paper}`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: 64,
            height: 'calc(100% - 64px)',
            backgroundColor: theme.palette.background.paper
        }
    }));
_c = Drawer;
function SideMenu() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Drawer, {
        variant: "permanent",
        sx: {
            display: {
                xs: 'none',
                md: 'block'
            },
            [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$drawerClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__drawerClasses$3e$__["drawerClasses"].paper}`]: {
                backgroundColor: 'background.paper'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/SideMenu.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    overflow: 'auto',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$components$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/energy-plus/app/dashboard/components/SideMenu.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/components/SideMenu.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/energy-plus/app/dashboard/components/SideMenu.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_c1 = SideMenu;
var _c, _c1;
__turbopack_context__.k.register(_c, "Drawer");
__turbopack_context__.k.register(_c1, "SideMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/theme/customizations/charts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chartsCustomizations",
    ()=>chartsCustomizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsAxis$2f$axisClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/x-charts/esm/ChartsAxis/axisClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsLegend$2f$chartsLegendClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/x-charts/esm/ChartsLegend/chartsLegendClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsGrid$2f$chartsGridClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/x-charts/esm/ChartsGrid/chartsGridClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/themePrimitives.ts [app-client] (ecmascript)");
;
;
const chartsCustomizations = {
    MuiChartsAxis: {
        styleOverrides: {
            root: ({ theme })=>({
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsAxis$2f$axisClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisClasses"].line}`]: {
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsAxis$2f$axisClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisClasses"].tick}`]: {
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsAxis$2f$axisClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisClasses"].tickLabel}`]: {
                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][500],
                        fontWeight: 500
                    },
                    ...theme.applyStyles('dark', {
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsAxis$2f$axisClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisClasses"].line}`]: {
                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700]
                        },
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsAxis$2f$axisClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisClasses"].tick}`]: {
                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700]
                        },
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsAxis$2f$axisClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisClasses"].tickLabel}`]: {
                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300],
                            fontWeight: 500
                        }
                    })
                })
        }
    },
    MuiChartsTooltip: {
        styleOverrides: {
            mark: ({ theme })=>({
                    ry: 6,
                    boxShadow: 'none',
                    border: `1px solid ${(theme.vars || theme).palette.divider}`
                }),
            table: ({ theme })=>({
                    border: `1px solid ${(theme.vars || theme).palette.divider}`,
                    borderRadius: theme.shape.borderRadius,
                    background: 'hsl(0, 0%, 100%)',
                    ...theme.applyStyles('dark', {
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900]
                    })
                })
        }
    },
    MuiChartsLegend: {
        styleOverrides: {
            root: {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsLegend$2f$chartsLegendClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["legendClasses"].mark}`]: {
                    ry: 6
                }
            }
        }
    },
    MuiChartsGrid: {
        styleOverrides: {
            root: ({ theme })=>({
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsGrid$2f$chartsGridClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartsGridClasses"].line}`]: {
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200],
                        strokeDasharray: '4 2',
                        strokeWidth: 0.8
                    },
                    ...theme.applyStyles('dark', {
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$charts$2f$esm$2f$ChartsGrid$2f$chartsGridClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartsGridClasses"].line}`]: {
                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700],
                            strokeDasharray: '4 2',
                            strokeWidth: 0.8
                        }
                    })
                })
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/theme/customizations/dataGrid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dataGridCustomizations",
    ()=>dataGridCustomizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$paperClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__paperClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Paper/paperClasses.js [app-client] (ecmascript) <export default as paperClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/MenuItem/menuItemClasses.js [app-client] (ecmascript) <export default as menuItemClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$listItemIconClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__listItemIconClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/ListItemIcon/listItemIconClasses.js [app-client] (ecmascript) <export default as listItemIconClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$iconButtonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__iconButtonClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/IconButton/iconButtonClasses.js [app-client] (ecmascript) <export default as iconButtonClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$checkboxClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__checkboxClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Checkbox/checkboxClasses.js [app-client] (ecmascript) <export default as checkboxClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$listClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__listClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/List/listClasses.js [app-client] (ecmascript) <export default as listClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$constants$2f$gridClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/x-data-grid/esm/constants/gridClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TablePagination$2f$tablePaginationClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__tablePaginationClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/TablePagination/tablePaginationClasses.js [app-client] (ecmascript) <export default as tablePaginationClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/themePrimitives.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const dataGridCustomizations = {
    MuiDataGrid: {
        styleOverrides: {
            root: ({ theme })=>({
                    '--DataGrid-overlayHeight': '300px',
                    overflow: 'clip',
                    borderColor: (theme.vars || theme).palette.divider,
                    backgroundColor: (theme.vars || theme).palette.background.default,
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$constants$2f$gridClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridClasses"].columnHeader}`]: {
                        backgroundColor: (theme.vars || theme).palette.background.paper
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$constants$2f$gridClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridClasses"].footerContainer}`]: {
                        backgroundColor: (theme.vars || theme).palette.background.paper
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$checkboxClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__checkboxClasses$3e$__["checkboxClasses"].root}`]: {
                        padding: theme.spacing(0.5),
                        '& > svg': {
                            fontSize: '1rem'
                        }
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TablePagination$2f$tablePaginationClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__tablePaginationClasses$3e$__["tablePaginationClasses"].root}`]: {
                        marginRight: theme.spacing(1),
                        '& .MuiIconButton-root': {
                            maxHeight: 32,
                            maxWidth: 32,
                            '& > svg': {
                                fontSize: '1rem'
                            }
                        }
                    }
                }),
            cell: ({ theme })=>({
                    borderTopColor: (theme.vars || theme).palette.divider
                }),
            menu: ({ theme })=>({
                    borderRadius: theme.shape.borderRadius,
                    backgroundImage: 'none',
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$paperClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__paperClasses$3e$__["paperClasses"].root}`]: {
                        border: `1px solid ${(theme.vars || theme).palette.divider}`
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__["menuItemClasses"].root}`]: {
                        margin: '0 4px'
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$listItemIconClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__listItemIconClasses$3e$__["listItemIconClasses"].root}`]: {
                        marginRight: 0
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$listClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__listClasses$3e$__["listClasses"].root}`]: {
                        paddingLeft: 0,
                        paddingRight: 0
                    }
                }),
            row: ({ theme })=>({
                    '&:last-of-type': {
                        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
                    },
                    '&:hover': {
                        backgroundColor: (theme.vars || theme).palette.action.hover
                    },
                    '&.Mui-selected': {
                        background: (theme.vars || theme).palette.action.selected,
                        '&:hover': {
                            backgroundColor: (theme.vars || theme).palette.action.hover
                        }
                    }
                }),
            iconButtonContainer: ({ theme })=>({
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$iconButtonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__iconButtonClasses$3e$__["iconButtonClasses"].root}`]: {
                        border: 'none',
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.selected, 0.3)
                        },
                        '&:active': {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200]
                        },
                        ...theme.applyStyles('dark', {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][50],
                            '&:hover': {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800]
                            },
                            '&:active': {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900]
                            }
                        })
                    }
                }),
            menuIconButton: ({ theme })=>({
                    border: 'none',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][100]
                    },
                    '&:active': {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200]
                    },
                    ...theme.applyStyles('dark', {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][50],
                        '&:hover': {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800]
                        },
                        '&:active': {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900]
                        }
                    })
                }),
            filterForm: ({ theme })=>({
                    gap: theme.spacing(1),
                    alignItems: 'flex-end'
                }),
            columnsManagementHeader: ({ theme })=>({
                    paddingRight: theme.spacing(3),
                    paddingLeft: theme.spacing(3)
                }),
            columnHeaderTitleContainer: {
                flexGrow: 1,
                justifyContent: 'space-between'
            },
            columnHeaderDraggableContainer: {
                paddingRight: 2
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/theme/customizations/datePickers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "datePickersCustomizations",
    ()=>datePickersCustomizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/MenuItem/menuItemClasses.js [app-client] (ecmascript) <export default as menuItemClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/x-date-pickers/esm/PickersDay/pickersDayClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/x-date-pickers/esm/YearCalendar/yearCalendarClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/themePrimitives.ts [app-client] (ecmascript)");
;
;
;
;
const datePickersCustomizations = {
    MuiPickerPopper: {
        styleOverrides: {
            paper: ({ theme })=>({
                    marginTop: 4,
                    borderRadius: theme.shape.borderRadius,
                    border: `1px solid ${(theme.vars || theme).palette.divider}`,
                    backgroundImage: 'none',
                    background: 'hsl(0, 0%, 100%)',
                    boxShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__["menuItemClasses"].root}`]: {
                        borderRadius: 6,
                        margin: '0 6px'
                    },
                    ...theme.applyStyles('dark', {
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900],
                        boxShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
                    })
                })
        }
    },
    MuiPickersArrowSwitcher: {
        styleOverrides: {
            spacer: {
                width: 16
            },
            button: ({ theme })=>({
                    backgroundColor: 'transparent',
                    color: (theme.vars || theme).palette.grey[500],
                    ...theme.applyStyles('dark', {
                        color: (theme.vars || theme).palette.grey[400]
                    })
                })
        }
    },
    MuiPickersCalendarHeader: {
        styleOverrides: {
            switchViewButton: {
                padding: 0,
                border: 'none'
            }
        }
    },
    MuiMonthCalendar: {
        styleOverrides: {
            button: ({ theme })=>({
                    fontSize: theme.typography.body1.fontSize,
                    color: (theme.vars || theme).palette.grey[600],
                    padding: theme.spacing(0.5),
                    borderRadius: theme.shape.borderRadius,
                    '&:hover': {
                        backgroundColor: (theme.vars || theme).palette.action.hover
                    },
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearCalendarClasses"].selected}`]: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700],
                        fontWeight: theme.typography.fontWeightMedium
                    },
                    '&:focus': {
                        outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                        outlineOffset: '2px',
                        backgroundColor: 'transparent',
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearCalendarClasses"].selected}`]: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700]
                        }
                    },
                    ...theme.applyStyles('dark', {
                        color: (theme.vars || theme).palette.grey[300],
                        '&:hover': {
                            backgroundColor: (theme.vars || theme).palette.action.hover
                        },
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearCalendarClasses"].selected}`]: {
                            color: (theme.vars || theme).palette.common.black,
                            fontWeight: theme.typography.fontWeightMedium,
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                        },
                        '&:focus': {
                            outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                            outlineOffset: '2px',
                            backgroundColor: 'transparent',
                            [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearCalendarClasses"].selected}`]: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                            }
                        }
                    })
                })
        }
    },
    MuiYearCalendar: {
        styleOverrides: {
            button: ({ theme })=>({
                    fontSize: theme.typography.body1.fontSize,
                    color: (theme.vars || theme).palette.grey[600],
                    padding: theme.spacing(0.5),
                    borderRadius: theme.shape.borderRadius,
                    height: 'fit-content',
                    '&:hover': {
                        backgroundColor: (theme.vars || theme).palette.action.hover
                    },
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearCalendarClasses"].selected}`]: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700],
                        fontWeight: theme.typography.fontWeightMedium
                    },
                    '&:focus': {
                        outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                        outlineOffset: '2px',
                        backgroundColor: 'transparent',
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearCalendarClasses"].selected}`]: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700]
                        }
                    },
                    ...theme.applyStyles('dark', {
                        color: (theme.vars || theme).palette.grey[300],
                        '&:hover': {
                            backgroundColor: (theme.vars || theme).palette.action.hover
                        },
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearCalendarClasses"].selected}`]: {
                            color: (theme.vars || theme).palette.common.black,
                            fontWeight: theme.typography.fontWeightMedium,
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                        },
                        '&:focus': {
                            outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                            outlineOffset: '2px',
                            backgroundColor: 'transparent',
                            [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$YearCalendar$2f$yearCalendarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearCalendarClasses"].selected}`]: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                            }
                        }
                    })
                })
        }
    },
    MuiPickersDay: {
        styleOverrides: {
            root: ({ theme })=>({
                    fontSize: theme.typography.body1.fontSize,
                    color: (theme.vars || theme).palette.grey[600],
                    padding: theme.spacing(0.5),
                    borderRadius: theme.shape.borderRadius,
                    '&:hover': {
                        backgroundColor: (theme.vars || theme).palette.action.hover
                    },
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickersDayClasses"].selected}`]: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700],
                        fontWeight: theme.typography.fontWeightMedium
                    },
                    '&:focus': {
                        outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                        outlineOffset: '2px',
                        backgroundColor: 'transparent',
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickersDayClasses"].selected}`]: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700]
                        }
                    },
                    ...theme.applyStyles('dark', {
                        color: (theme.vars || theme).palette.grey[300],
                        '&:hover': {
                            backgroundColor: (theme.vars || theme).palette.action.hover
                        },
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickersDayClasses"].selected}`]: {
                            color: (theme.vars || theme).palette.common.black,
                            fontWeight: theme.typography.fontWeightMedium,
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                        },
                        '&:focus': {
                            outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                            outlineOffset: '2px',
                            backgroundColor: 'transparent',
                            [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$PickersDay$2f$pickersDayClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickersDayClasses"].selected}`]: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                            }
                        }
                    })
                })
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/theme/customizations/treeView.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "treeViewCustomizations",
    ()=>treeViewCustomizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/themePrimitives.ts [app-client] (ecmascript)");
;
;
const treeViewCustomizations = {
    MuiTreeItem: {
        styleOverrides: {
            root: ({ theme })=>({
                    position: 'relative',
                    boxSizing: 'border-box',
                    padding: theme.spacing(0, 1),
                    '& .groupTransition': {
                        marginLeft: theme.spacing(2),
                        padding: theme.spacing(0),
                        borderLeft: '1px solid',
                        borderColor: (theme.vars || theme).palette.divider
                    },
                    '&:focus-visible .focused': {
                        outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                        outlineOffset: '2px',
                        '&:hover': {
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300], 0.2),
                            outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                            outlineOffset: '2px'
                        }
                    }
                }),
            content: ({ theme })=>({
                    marginTop: theme.spacing(1),
                    padding: theme.spacing(0.5, 1),
                    overflow: 'clip',
                    '&:hover': {
                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300], 0.2)
                    },
                    '&.selected': {
                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300], 0.4),
                        '&:hover': {
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300], 0.6)
                        }
                    },
                    ...theme.applyStyles('dark', {
                        '&:hover': {
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][500], 0.2)
                        },
                        '&:focus-visible': {
                            '&:hover': {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][500], 0.2)
                            }
                        },
                        '&.selected': {
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][500], 0.4),
                            '&:hover': {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][500], 0.6)
                            }
                        }
                    })
                })
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/theme/customizations/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$charts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/theme/customizations/charts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$dataGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/theme/customizations/dataGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$datePickers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/theme/customizations/datePickers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$treeView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/theme/customizations/treeView.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-client] (ecmascript) <export default as CssBaseline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-client] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$global$2d$components$2f$AppAppBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/global-components/AppAppBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$components$2f$SideMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/components/SideMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$AppTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/AppTheme.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/theme/customizations/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$charts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/theme/customizations/charts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$dataGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/theme/customizations/dataGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$datePickers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/theme/customizations/datePickers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$treeView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/theme/customizations/treeView.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const xThemeComponents = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$charts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartsCustomizations"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$dataGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataGridCustomizations"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$datePickers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["datePickersCustomizations"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$theme$2f$customizations$2f$treeView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treeViewCustomizations"]
};
function DashboardLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$AppTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        themeComponents: xThemeComponents,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__["CssBaseline"], {
                enableColorScheme: true
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/layout.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$global$2d$components$2f$AppAppBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/layout.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'flex'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {}, void 0, false, {
                                fileName: "[project]/energy-plus/app/dashboard/layout.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$components$2f$SideMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/energy-plus/app/dashboard/layout.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/energy-plus/app/dashboard/layout.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: "main",
                        sx: {
                            flexGrow: 1,
                            overflow: 'auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {}, void 0, false, {
                                fileName: "[project]/energy-plus/app/dashboard/layout.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    p: 3
                                },
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/energy-plus/app/dashboard/layout.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/energy-plus/app/dashboard/layout.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/energy-plus/app/dashboard/layout.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/energy-plus/app/dashboard/layout.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_c = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=energy-plus_47b87722._.js.map