(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/energy-plus/theme/themePrimitives.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brand",
    ()=>brand,
    "colorSchemes",
    ()=>colorSchemes,
    "getDesignTokens",
    ()=>getDesignTokens,
    "gray",
    ()=>gray,
    "green",
    ()=>green,
    "orange",
    ()=>orange,
    "red",
    ()=>red,
    "shadows",
    ()=>shadows,
    "shape",
    ()=>shape,
    "typography",
    ()=>typography
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])();
const customShadows = [
    ...defaultTheme.shadows
];
const brand = {
    50: 'hsl(210, 100%, 95%)',
    100: 'hsl(210, 100%, 92%)',
    200: 'hsl(210, 100%, 80%)',
    300: 'hsl(210, 100%, 65%)',
    400: 'hsl(210, 98%, 48%)',
    500: 'hsl(210, 98%, 42%)',
    600: 'hsl(210, 98%, 55%)',
    700: 'hsl(210, 100%, 35%)',
    800: 'hsl(210, 100%, 16%)',
    900: 'hsl(210, 100%, 21%)'
};
const gray = {
    50: 'hsl(220, 35%, 97%)',
    100: 'hsl(220, 30%, 94%)',
    200: 'hsl(220, 20%, 88%)',
    300: 'hsl(220, 20%, 80%)',
    400: 'hsl(220, 20%, 65%)',
    500: 'hsl(220, 20%, 42%)',
    600: 'hsl(220, 20%, 35%)',
    700: 'hsl(220, 20%, 25%)',
    800: 'hsl(220, 30%, 6%)',
    900: 'hsl(220, 35%, 3%)'
};
const green = {
    50: 'hsl(120, 80%, 98%)',
    100: 'hsl(120, 75%, 94%)',
    200: 'hsl(120, 75%, 87%)',
    300: 'hsl(120, 61%, 77%)',
    400: 'hsl(120, 44%, 53%)',
    500: 'hsl(120, 59%, 30%)',
    600: 'hsl(120, 70%, 25%)',
    700: 'hsl(120, 75%, 16%)',
    800: 'hsl(120, 84%, 10%)',
    900: 'hsl(120, 87%, 6%)'
};
const orange = {
    50: 'hsl(45, 100%, 97%)',
    100: 'hsl(45, 92%, 90%)',
    200: 'hsl(45, 94%, 80%)',
    300: 'hsl(45, 90%, 65%)',
    400: 'hsl(45, 90%, 40%)',
    500: 'hsl(45, 90%, 35%)',
    600: 'hsl(45, 91%, 25%)',
    700: 'hsl(45, 94%, 20%)',
    800: 'hsl(45, 95%, 16%)',
    900: 'hsl(45, 93%, 12%)'
};
const red = {
    50: 'hsl(0, 100%, 97%)',
    100: 'hsl(0, 92%, 90%)',
    200: 'hsl(0, 94%, 80%)',
    300: 'hsl(0, 90%, 65%)',
    400: 'hsl(0, 90%, 40%)',
    500: 'hsl(0, 90%, 30%)',
    600: 'hsl(0, 91%, 25%)',
    700: 'hsl(0, 94%, 18%)',
    800: 'hsl(0, 95%, 12%)',
    900: 'hsl(0, 93%, 6%)'
};
const getDesignTokens = (mode)=>{
    customShadows[1] = mode === 'dark' ? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px' : 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';
    return {
        palette: {
            mode,
            primary: {
                light: brand[200],
                main: brand[400],
                dark: brand[700],
                contrastText: brand[50],
                ...mode === 'dark' && {
                    contrastText: brand[50],
                    light: brand[300],
                    main: brand[400],
                    dark: brand[700]
                }
            },
            info: {
                light: brand[100],
                main: brand[300],
                dark: brand[600],
                contrastText: gray[50],
                ...mode === 'dark' && {
                    contrastText: brand[300],
                    light: brand[500],
                    main: brand[700],
                    dark: brand[900]
                }
            },
            warning: {
                light: orange[300],
                main: orange[400],
                dark: orange[800],
                ...mode === 'dark' && {
                    light: orange[400],
                    main: orange[500],
                    dark: orange[700]
                }
            },
            error: {
                light: red[300],
                main: red[400],
                dark: red[800],
                ...mode === 'dark' && {
                    light: red[400],
                    main: red[500],
                    dark: red[700]
                }
            },
            success: {
                light: green[300],
                main: green[400],
                dark: green[800],
                ...mode === 'dark' && {
                    light: green[400],
                    main: green[500],
                    dark: green[700]
                }
            },
            grey: {
                ...gray
            },
            divider: mode === 'dark' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[700], 0.6) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[300], 0.4),
            background: {
                default: 'hsl(0, 0%, 99%)',
                paper: 'hsl(220, 35%, 97%)',
                ...mode === 'dark' && {
                    default: gray[900],
                    paper: 'hsl(220, 30%, 7%)'
                }
            },
            text: {
                primary: gray[800],
                secondary: gray[600],
                warning: orange[400],
                ...mode === 'dark' && {
                    primary: 'hsl(0, 0%, 100%)',
                    secondary: gray[400]
                }
            },
            action: {
                hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[200], 0.2),
                selected: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[200], 0.3)}`,
                ...mode === 'dark' && {
                    hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[600], 0.2),
                    selected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[600], 0.3)
                }
            }
        },
        typography: {
            fontFamily: 'Inter, sans-serif',
            h1: {
                fontSize: defaultTheme.typography.pxToRem(48),
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: -0.5
            },
            h2: {
                fontSize: defaultTheme.typography.pxToRem(36),
                fontWeight: 600,
                lineHeight: 1.2
            },
            h3: {
                fontSize: defaultTheme.typography.pxToRem(30),
                lineHeight: 1.2
            },
            h4: {
                fontSize: defaultTheme.typography.pxToRem(24),
                fontWeight: 600,
                lineHeight: 1.5
            },
            h5: {
                fontSize: defaultTheme.typography.pxToRem(20),
                fontWeight: 600
            },
            h6: {
                fontSize: defaultTheme.typography.pxToRem(18),
                fontWeight: 600
            },
            subtitle1: {
                fontSize: defaultTheme.typography.pxToRem(18)
            },
            subtitle2: {
                fontSize: defaultTheme.typography.pxToRem(14),
                fontWeight: 500
            },
            body1: {
                fontSize: defaultTheme.typography.pxToRem(14)
            },
            body2: {
                fontSize: defaultTheme.typography.pxToRem(14),
                fontWeight: 400
            },
            caption: {
                fontSize: defaultTheme.typography.pxToRem(12),
                fontWeight: 400
            }
        },
        shape: {
            borderRadius: 8
        },
        shadows: customShadows
    };
};
const colorSchemes = {
    light: {
        palette: {
            primary: {
                light: brand[200],
                main: brand[400],
                dark: brand[700],
                contrastText: brand[50]
            },
            info: {
                light: brand[100],
                main: brand[300],
                dark: brand[600],
                contrastText: gray[50]
            },
            warning: {
                light: orange[300],
                main: orange[400],
                dark: orange[800]
            },
            error: {
                light: red[300],
                main: red[400],
                dark: red[800]
            },
            success: {
                light: green[300],
                main: green[400],
                dark: green[800]
            },
            grey: {
                ...gray
            },
            divider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[300], 0.4),
            background: {
                default: 'hsl(0, 0%, 99%)',
                paper: 'hsl(220, 35%, 97%)'
            },
            text: {
                primary: gray[800],
                secondary: gray[600],
                warning: orange[400]
            },
            action: {
                hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[200], 0.2),
                selected: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[200], 0.3)}`
            },
            baseShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px'
        }
    },
    dark: {
        palette: {
            primary: {
                contrastText: brand[50],
                light: brand[300],
                main: brand[400],
                dark: brand[700]
            },
            info: {
                contrastText: brand[300],
                light: brand[500],
                main: brand[700],
                dark: brand[900]
            },
            warning: {
                light: orange[400],
                main: orange[500],
                dark: orange[700]
            },
            error: {
                light: red[400],
                main: red[500],
                dark: red[700]
            },
            success: {
                light: green[400],
                main: green[500],
                dark: green[700]
            },
            grey: {
                ...gray
            },
            divider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[700], 0.6),
            background: {
                default: gray[900],
                paper: 'hsl(220, 30%, 7%)'
            },
            text: {
                primary: 'hsl(0, 0%, 100%)',
                secondary: gray[400]
            },
            action: {
                hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[600], 0.2),
                selected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(gray[600], 0.3)
            },
            baseShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
        }
    }
};
const typography = {
    fontFamily: 'Inter, sans-serif',
    h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
    },
    h2: {
        fontSize: defaultTheme.typography.pxToRem(36),
        fontWeight: 600,
        lineHeight: 1.2
    },
    h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 1.2
    },
    h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5
    },
    h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600
    },
    h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600
    },
    subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18)
    },
    subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 500
    },
    body1: {
        fontSize: defaultTheme.typography.pxToRem(14)
    },
    body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400
    },
    caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400
    }
};
const shape = {
    borderRadius: 8
};
// @ts-ignore
const defaultShadows = [
    'none',
    'var(--template-palette-baseShadow)',
    ...defaultTheme.shadows.slice(2)
];
const shadows = defaultShadows;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/theme/customizations/inputs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inputsCustomizations",
    ()=>inputsCustomizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$OutlinedInput$2f$outlinedInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__outlinedInputClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/OutlinedInput/outlinedInputClasses.js [app-client] (ecmascript) <export default as outlinedInputClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$SvgIcon$2f$svgIconClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__svgIconClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/SvgIcon/svgIconClasses.js [app-client] (ecmascript) <export default as svgIconClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ToggleButtonGroup$2f$toggleButtonGroupClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toggleButtonGroupClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/ToggleButtonGroup/toggleButtonGroupClasses.js [app-client] (ecmascript) <export default as toggleButtonGroupClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ToggleButton$2f$toggleButtonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toggleButtonClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/ToggleButton/toggleButtonClasses.js [app-client] (ecmascript) <export default as toggleButtonClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckBoxOutlineBlankRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/CheckBoxOutlineBlankRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/CheckRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RemoveRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/RemoveRounded.js [app-client] (ecmascript)");
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
const inputsCustomizations = {
    MuiButtonBase: {
        defaultProps: {
            disableTouchRipple: true,
            disableRipple: true
        },
        styleOverrides: {
            root: ({ theme })=>({
                    boxSizing: 'border-box',
                    transition: 'all 100ms ease-in',
                    '&:focus-visible': {
                        outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.primary.main, 0.5)}`,
                        outlineOffset: '2px'
                    }
                })
        }
    },
    MuiButton: {
        styleOverrides: {
            root: ({ theme })=>({
                    boxShadow: 'none',
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    textTransform: 'none',
                    variants: [
                        {
                            props: {
                                size: 'small'
                            },
                            style: {
                                height: '2.25rem',
                                padding: '8px 12px'
                            }
                        },
                        {
                            props: {
                                size: 'medium'
                            },
                            style: {
                                height: '2.5rem'
                            }
                        },
                        {
                            props: {
                                color: 'primary',
                                variant: 'contained'
                            },
                            style: {
                                color: 'white',
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900],
                                backgroundImage: `linear-gradient(to bottom, ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700]}, ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800]})`,
                                boxShadow: `inset 0 1px 0 ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`,
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700]}`,
                                '&:hover': {
                                    backgroundImage: 'none',
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700],
                                    boxShadow: 'none'
                                },
                                '&:active': {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800]
                                },
                                ...theme.applyStyles('dark', {
                                    color: 'black',
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][50],
                                    backgroundImage: `linear-gradient(to bottom, ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][100]}, ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][50]})`,
                                    boxShadow: 'inset 0 -1px 0  hsl(220, 30%, 80%)',
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][50]}`,
                                    '&:hover': {
                                        backgroundImage: 'none',
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300],
                                        boxShadow: 'none'
                                    },
                                    '&:active': {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][400]
                                    }
                                })
                            }
                        },
                        {
                            props: {
                                color: 'secondary',
                                variant: 'contained'
                            },
                            style: {
                                color: 'white',
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][300],
                                backgroundImage: `linear-gradient(to bottom, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][400], 0.8)}, ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500]})`,
                                boxShadow: `inset 0 2px 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][200], 0.2)}, inset 0 -2px 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][700], 0.4)}`,
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500]}`,
                                '&:hover': {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][700],
                                    boxShadow: 'none'
                                },
                                '&:active': {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][700],
                                    backgroundImage: 'none'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined'
                            },
                            style: {
                                color: (theme.vars || theme).palette.text.primary,
                                border: '1px solid',
                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200],
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][50], 0.3),
                                '&:hover': {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][100],
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                                },
                                '&:active': {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200]
                                },
                                ...theme.applyStyles('dark', {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800],
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700],
                                    '&:hover': {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900],
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][600]
                                    },
                                    '&:active': {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900]
                                    }
                                })
                            }
                        },
                        {
                            props: {
                                color: 'secondary',
                                variant: 'outlined'
                            },
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][700],
                                border: '1px solid',
                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][200],
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][50],
                                '&:hover': {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][100],
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][400]
                                },
                                '&:active': {
                                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][200], 0.7)
                                },
                                ...theme.applyStyles('dark', {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][50],
                                    border: '1px solid',
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][900],
                                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][900], 0.3),
                                    '&:hover': {
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][700],
                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][900], 0.6)
                                    },
                                    '&:active': {
                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][900], 0.5)
                                    }
                                })
                            }
                        },
                        {
                            props: {
                                variant: 'text'
                            },
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][600],
                                '&:hover': {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][100]
                                },
                                '&:active': {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200]
                                },
                                ...theme.applyStyles('dark', {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][50],
                                    '&:hover': {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700]
                                    },
                                    '&:active': {
                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700], 0.7)
                                    }
                                })
                            }
                        },
                        {
                            props: {
                                color: 'secondary',
                                variant: 'text'
                            },
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][700],
                                '&:hover': {
                                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][100], 0.5)
                                },
                                '&:active': {
                                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][200], 0.7)
                                },
                                ...theme.applyStyles('dark', {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][100],
                                    '&:hover': {
                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][900], 0.5)
                                    },
                                    '&:active': {
                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][900], 0.3)
                                    }
                                })
                            }
                        }
                    ]
                })
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({ theme })=>({
                    boxShadow: 'none',
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    textTransform: 'none',
                    fontWeight: theme.typography.fontWeightMedium,
                    letterSpacing: 0,
                    color: (theme.vars || theme).palette.text.primary,
                    border: '1px solid ',
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200],
                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][50], 0.3),
                    '&:hover': {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][100],
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                    },
                    '&:active': {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200]
                    },
                    ...theme.applyStyles('dark', {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800],
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700],
                        '&:hover': {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900],
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][600]
                        },
                        '&:active': {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900]
                        }
                    }),
                    variants: [
                        {
                            props: {
                                size: 'small'
                            },
                            style: {
                                width: '2.25rem',
                                height: '2.25rem',
                                padding: '0.25rem',
                                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$SvgIcon$2f$svgIconClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__svgIconClasses$3e$__["svgIconClasses"].root}`]: {
                                    fontSize: '1rem'
                                }
                            }
                        },
                        {
                            props: {
                                size: 'medium'
                            },
                            style: {
                                width: '2.5rem',
                                height: '2.5rem'
                            }
                        }
                    ]
                })
        }
    },
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: ({ theme })=>({
                    borderRadius: '10px',
                    boxShadow: `0 4px 16px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][400], 0.2)}`,
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ToggleButtonGroup$2f$toggleButtonGroupClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toggleButtonGroupClasses$3e$__["toggleButtonGroupClasses"].selected}`]: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500]
                    },
                    ...theme.applyStyles('dark', {
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ToggleButtonGroup$2f$toggleButtonGroupClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toggleButtonGroupClasses$3e$__["toggleButtonGroupClasses"].selected}`]: {
                            color: '#fff'
                        },
                        boxShadow: `0 4px 16px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][700], 0.5)}`
                    })
                })
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: ({ theme })=>({
                    padding: '12px 16px',
                    textTransform: 'none',
                    borderRadius: '10px',
                    fontWeight: 500,
                    ...theme.applyStyles('dark', {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][400],
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ToggleButton$2f$toggleButtonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toggleButtonClasses$3e$__["toggleButtonClasses"].selected}`]: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][300]
                        }
                    })
                })
        }
    },
    MuiCheckbox: {
        defaultProps: {
            disableRipple: true,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckBoxOutlineBlankRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: 'hsla(210, 0%, 0%, 0.0)'
                }
            }, void 0, false, {
                fileName: "[project]/energy-plus/theme/customizations/inputs.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            checkedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    height: 14,
                    width: 14
                }
            }, void 0, false, {
                fileName: "[project]/energy-plus/theme/customizations/inputs.tsx",
                lineNumber: 318,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0)),
            indeterminateIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RemoveRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    height: 14,
                    width: 14
                }
            }, void 0, false, {
                fileName: "[project]/energy-plus/theme/customizations/inputs.tsx",
                lineNumber: 319,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0))
        },
        styleOverrides: {
            root: ({ theme })=>({
                    margin: 10,
                    height: 16,
                    width: 16,
                    borderRadius: 5,
                    border: '1px solid ',
                    borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300], 0.8),
                    boxShadow: '0 0 0 1.5px hsla(210, 0%, 0%, 0.04) inset',
                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][100], 0.4),
                    transition: 'border-color, background-color, 120ms ease-in',
                    '&:hover': {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][300]
                    },
                    '&.Mui-focusVisible': {
                        outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                        outlineOffset: '2px',
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][400]
                    },
                    '&.Mui-checked': {
                        color: 'white',
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500],
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500],
                        boxShadow: `none`,
                        '&:hover': {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][600]
                        }
                    },
                    ...theme.applyStyles('dark', {
                        borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700], 0.8),
                        boxShadow: '0 0 0 1.5px hsl(210, 0%, 0%) inset',
                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900], 0.8),
                        '&:hover': {
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][300]
                        },
                        '&.Mui-focusVisible': {
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][400],
                            outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                            outlineOffset: '2px'
                        }
                    })
                })
        }
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
                border: 'none'
            },
            input: {
                '&::placeholder': {
                    opacity: 0.7,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][500]
                }
            }
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                padding: 0
            },
            root: ({ theme })=>({
                    padding: '8px 12px',
                    color: (theme.vars || theme).palette.text.primary,
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    border: `1px solid ${(theme.vars || theme).palette.divider}`,
                    backgroundColor: (theme.vars || theme).palette.background.default,
                    transition: 'border 120ms ease-in',
                    '&:hover': {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][400]
                    },
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$OutlinedInput$2f$outlinedInputClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__outlinedInputClasses$3e$__["outlinedInputClasses"].focused}`]: {
                        outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][400]
                    },
                    ...theme.applyStyles('dark', {
                        '&:hover': {
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][500]
                        }
                    }),
                    variants: [
                        {
                            props: {
                                size: 'small'
                            },
                            style: {
                                height: '2.25rem'
                            }
                        },
                        {
                            props: {
                                size: 'medium'
                            },
                            style: {
                                height: '2.5rem'
                            }
                        }
                    ]
                }),
            notchedOutline: {
                border: 'none'
            }
        }
    },
    MuiInputAdornment: {
        styleOverrides: {
            root: ({ theme })=>({
                    color: (theme.vars || theme).palette.grey[500],
                    ...theme.applyStyles('dark', {
                        color: (theme.vars || theme).palette.grey[400]
                    })
                })
        }
    },
    MuiFormLabel: {
        styleOverrides: {
            root: ({ theme })=>({
                    typography: theme.typography.caption,
                    marginBottom: 8
                })
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/theme/customizations/dataDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dataDisplayCustomizations",
    ()=>dataDisplayCustomizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$SvgIcon$2f$svgIconClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__svgIconClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/SvgIcon/svgIconClasses.js [app-client] (ecmascript) <export default as svgIconClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$typographyClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__typographyClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Typography/typographyClasses.js [app-client] (ecmascript) <export default as typographyClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$buttonBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__buttonBaseClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/ButtonBase/buttonBaseClasses.js [app-client] (ecmascript) <export default as buttonBaseClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Chip/chipClasses.js [app-client] (ecmascript) <export default as chipClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$iconButtonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__iconButtonClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/IconButton/iconButtonClasses.js [app-client] (ecmascript) <export default as iconButtonClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/themePrimitives.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
const dataDisplayCustomizations = {
    MuiList: {
        styleOverrides: {
            root: {
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0
            }
        }
    },
    MuiListItem: {
        styleOverrides: {
            root: ({ theme })=>({
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$SvgIcon$2f$svgIconClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__svgIconClasses$3e$__["svgIconClasses"].root}`]: {
                        width: '1rem',
                        height: '1rem',
                        color: (theme.vars || theme).palette.text.secondary
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$typographyClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__typographyClasses$3e$__["typographyClasses"].root}`]: {
                        fontWeight: 500
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$buttonBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__buttonBaseClasses$3e$__["buttonBaseClasses"].root}`]: {
                        display: 'flex',
                        gap: 8,
                        padding: '2px 8px',
                        borderRadius: (theme.vars || theme).shape.borderRadius,
                        opacity: 0.7,
                        '&.Mui-selected': {
                            opacity: 1,
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.selected, 0.3),
                            [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$SvgIcon$2f$svgIconClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__svgIconClasses$3e$__["svgIconClasses"].root}`]: {
                                color: (theme.vars || theme).palette.text.primary
                            },
                            '&:focus-visible': {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.selected, 0.3)
                            },
                            '&:hover': {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.selected, 0.5)
                            }
                        },
                        '&:focus-visible': {
                            backgroundColor: 'transparent'
                        }
                    }
                })
        }
    },
    MuiListItemText: {
        styleOverrides: {
            primary: ({ theme })=>({
                    fontSize: theme.typography.body2.fontSize,
                    fontWeight: 500,
                    lineHeight: theme.typography.body2.lineHeight
                }),
            secondary: ({ theme })=>({
                    fontSize: theme.typography.caption.fontSize,
                    lineHeight: theme.typography.caption.lineHeight
                })
        }
    },
    MuiListSubheader: {
        styleOverrides: {
            root: ({ theme })=>({
                    backgroundColor: 'transparent',
                    padding: '4px 8px',
                    fontSize: theme.typography.caption.fontSize,
                    fontWeight: 500,
                    lineHeight: theme.typography.caption.lineHeight
                })
        }
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: 0
            }
        }
    },
    MuiChip: {
        defaultProps: {
            size: 'small'
        },
        styleOverrides: {
            root: ({ theme })=>({
                    border: '1px solid',
                    borderRadius: '999px',
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].label}`]: {
                        fontWeight: 600
                    },
                    variants: [
                        {
                            props: {
                                color: 'default'
                            },
                            style: {
                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200],
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][100],
                                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].label}`]: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][500]
                                },
                                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].icon}`]: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][500]
                                },
                                ...theme.applyStyles('dark', {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700],
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800],
                                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].label}`]: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                                    },
                                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].icon}`]: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300]
                                    }
                                })
                            }
                        },
                        {
                            props: {
                                color: 'success'
                            },
                            style: {
                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"][200],
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"][50],
                                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].label}`]: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"][500]
                                },
                                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].icon}`]: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"][500]
                                },
                                ...theme.applyStyles('dark', {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"][800],
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"][900],
                                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].label}`]: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"][300]
                                    },
                                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].icon}`]: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"][300]
                                    }
                                })
                            }
                        },
                        {
                            props: {
                                color: 'error'
                            },
                            style: {
                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["red"][100],
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["red"][50],
                                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].label}`]: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["red"][500]
                                },
                                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].icon}`]: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["red"][500]
                                },
                                ...theme.applyStyles('dark', {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["red"][800],
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["red"][900],
                                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].label}`]: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["red"][200]
                                    },
                                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].icon}`]: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["red"][300]
                                    }
                                })
                            }
                        },
                        {
                            props: {
                                size: 'small'
                            },
                            style: {
                                maxHeight: 20,
                                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].label}`]: {
                                    fontSize: theme.typography.caption.fontSize
                                },
                                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$SvgIcon$2f$svgIconClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__svgIconClasses$3e$__["svgIconClasses"].root}`]: {
                                    fontSize: theme.typography.caption.fontSize
                                }
                            }
                        },
                        {
                            props: {
                                size: 'medium'
                            },
                            style: {
                                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$chipClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__chipClasses$3e$__["chipClasses"].label}`]: {
                                    fontSize: theme.typography.caption.fontSize
                                }
                            }
                        }
                    ]
                })
        }
    },
    MuiTablePagination: {
        styleOverrides: {
            actions: {
                display: 'flex',
                gap: 8,
                marginRight: 6,
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$iconButtonClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__iconButtonClasses$3e$__["iconButtonClasses"].root}`]: {
                    minWidth: 0,
                    width: 36,
                    height: 36
                }
            }
        }
    },
    MuiIcon: {
        defaultProps: {
            fontSize: 'small'
        },
        styleOverrides: {
            root: {
                variants: [
                    {
                        props: {
                            fontSize: 'small'
                        },
                        style: {
                            fontSize: '1rem'
                        }
                    }
                ]
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/theme/customizations/feedback.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "feedbackCustomizations",
    ()=>feedbackCustomizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/themePrimitives.ts [app-client] (ecmascript)");
;
;
const feedbackCustomizations = {
    MuiAlert: {
        styleOverrides: {
            root: ({ theme })=>({
                    borderRadius: 10,
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orange"][100],
                    color: (theme.vars || theme).palette.text.primary,
                    border: `1px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orange"][300], 0.5)}`,
                    '& .MuiAlert-icon': {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orange"][500]
                    },
                    ...theme.applyStyles('dark', {
                        backgroundColor: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orange"][900], 0.5)}`,
                        border: `1px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orange"][800], 0.5)}`
                    })
                })
        }
    },
    MuiDialog: {
        styleOverrides: {
            root: ({ theme })=>({
                    '& .MuiDialog-paper': {
                        borderRadius: '10px',
                        border: '1px solid',
                        borderColor: (theme.vars || theme).palette.divider
                    }
                })
        }
    },
    MuiLinearProgress: {
        styleOverrides: {
            root: ({ theme })=>({
                    height: 8,
                    borderRadius: 8,
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200],
                    ...theme.applyStyles('dark', {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800]
                    })
                })
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/theme/customizations/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navigationCustomizations",
    ()=>navigationCustomizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$buttonBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__buttonBaseClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/ButtonBase/buttonBaseClasses.js [app-client] (ecmascript) <export default as buttonBaseClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$dividerClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dividerClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Divider/dividerClasses.js [app-client] (ecmascript) <export default as dividerClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/MenuItem/menuItemClasses.js [app-client] (ecmascript) <export default as menuItemClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$selectClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selectClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Select/selectClasses.js [app-client] (ecmascript) <export default as selectClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$tabClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__tabClasses$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Tab/tabClasses.js [app-client] (ecmascript) <export default as tabClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$UnfoldMoreRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/icons-material/esm/UnfoldMoreRounded.js [app-client] (ecmascript)");
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
const navigationCustomizations = {
    MuiMenuItem: {
        styleOverrides: {
            root: ({ theme })=>({
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    padding: '6px 8px',
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__["menuItemClasses"].focusVisible}`]: {
                        backgroundColor: 'transparent'
                    },
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__["menuItemClasses"].selected}`]: {
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__["menuItemClasses"].focusVisible}`]: {
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.selected, 0.3)
                        }
                    }
                })
        }
    },
    MuiMenu: {
        styleOverrides: {
            list: {
                gap: '0px',
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$dividerClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dividerClasses$3e$__["dividerClasses"].root}`]: {
                    margin: '0 -8px'
                }
            },
            paper: ({ theme })=>({
                    marginTop: '4px',
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    border: `1px solid ${(theme.vars || theme).palette.divider}`,
                    backgroundImage: 'none',
                    background: 'hsl(0, 0%, 100%)',
                    boxShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$buttonBaseClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__buttonBaseClasses$3e$__["buttonBaseClasses"].root}`]: {
                        '&.Mui-selected': {
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.action.selected, 0.3)
                        }
                    },
                    ...theme.applyStyles('dark', {
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900],
                        boxShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
                    })
                })
        }
    },
    MuiSelect: {
        defaultProps: {
            IconComponent: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$UnfoldMoreRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    fontSize: "small",
                    ...props,
                    ref: ref
                }, void 0, false, {
                    fileName: "[project]/energy-plus/theme/customizations/navigation.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        },
        styleOverrides: {
            root: ({ theme })=>({
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    border: '1px solid',
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200],
                    backgroundColor: (theme.vars || theme).palette.background.paper,
                    boxShadow: `inset 0 1px 0 1px hsla(220, 0%, 100%, 0.6), inset 0 -1px 0 1px hsla(220, 35%, 90%, 0.5)`,
                    '&:hover': {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][300],
                        backgroundColor: (theme.vars || theme).palette.background.paper,
                        boxShadow: 'none'
                    },
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$selectClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selectClasses$3e$__["selectClasses"].focused}`]: {
                        outlineOffset: 0,
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][400]
                    },
                    '&:before, &:after': {
                        display: 'none'
                    },
                    ...theme.applyStyles('dark', {
                        borderRadius: (theme.vars || theme).shape.borderRadius,
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700],
                        backgroundColor: (theme.vars || theme).palette.background.paper,
                        boxShadow: `inset 0 1px 0 1px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700], 0.15)}, inset 0 -1px 0 1px hsla(220, 0%, 0%, 0.7)`,
                        '&:hover': {
                            borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700], 0.7),
                            backgroundColor: (theme.vars || theme).palette.background.paper,
                            boxShadow: 'none'
                        },
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$selectClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selectClasses$3e$__["selectClasses"].focused}`]: {
                            outlineOffset: 0,
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900]
                        },
                        '&:before, &:after': {
                            display: 'none'
                        }
                    })
                }),
            select: ({ theme })=>({
                    display: 'flex',
                    alignItems: 'center',
                    ...theme.applyStyles('dark', {
                        display: 'flex',
                        alignItems: 'center',
                        '&:focus-visible': {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900]
                        }
                    })
                })
        }
    },
    MuiLink: {
        defaultProps: {
            underline: 'none'
        },
        styleOverrides: {
            root: ({ theme })=>({
                    color: (theme.vars || theme).palette.text.primary,
                    fontWeight: 500,
                    position: 'relative',
                    textDecoration: 'none',
                    width: 'fit-content',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '1px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: (theme.vars || theme).palette.text.secondary,
                        opacity: 0.3,
                        transition: 'width 0.3s ease, opacity 0.3s ease'
                    },
                    '&:hover::before': {
                        width: 0
                    },
                    '&:focus-visible': {
                        outline: `3px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"][500], 0.5)}`,
                        outlineOffset: '4px',
                        borderRadius: '2px'
                    }
                })
        }
    },
    MuiDrawer: {
        styleOverrides: {
            paper: ({ theme })=>({
                    backgroundColor: (theme.vars || theme).palette.background.default
                })
        }
    },
    MuiPaginationItem: {
        styleOverrides: {
            root: ({ theme })=>({
                    '&.Mui-selected': {
                        color: 'white',
                        backgroundColor: (theme.vars || theme).palette.grey[900]
                    },
                    ...theme.applyStyles('dark', {
                        '&.Mui-selected': {
                            color: 'black',
                            backgroundColor: (theme.vars || theme).palette.grey[50]
                        }
                    })
                })
        }
    },
    MuiTabs: {
        styleOverrides: {
            root: {
                minHeight: 'fit-content'
            },
            indicator: ({ theme })=>({
                    backgroundColor: (theme.vars || theme).palette.grey[800],
                    ...theme.applyStyles('dark', {
                        backgroundColor: (theme.vars || theme).palette.grey[200]
                    })
                })
        }
    },
    MuiTab: {
        styleOverrides: {
            root: ({ theme })=>({
                    padding: '6px 8px',
                    marginBottom: '8px',
                    textTransform: 'none',
                    minWidth: 'fit-content',
                    minHeight: 'fit-content',
                    color: (theme.vars || theme).palette.text.secondary,
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    border: '1px solid',
                    borderColor: 'transparent',
                    ':hover': {
                        color: (theme.vars || theme).palette.text.primary,
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][100],
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][200]
                    },
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$tabClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__tabClasses$3e$__["tabClasses"].selected}`]: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900]
                    },
                    ...theme.applyStyles('dark', {
                        ':hover': {
                            color: (theme.vars || theme).palette.text.primary,
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800],
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700]
                        },
                        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$tabClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__tabClasses$3e$__["tabClasses"].selected}`]: {
                            color: '#fff'
                        }
                    })
                })
        }
    },
    MuiStepConnector: {
        styleOverrides: {
            line: ({ theme })=>({
                    borderTop: '1px solid',
                    borderColor: (theme.vars || theme).palette.divider,
                    flex: 1,
                    borderRadius: '99px'
                })
        }
    },
    MuiStepIcon: {
        styleOverrides: {
            root: ({ theme })=>({
                    color: 'transparent',
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][400]}`,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    '& text': {
                        display: 'none'
                    },
                    '&.Mui-active': {
                        border: 'none',
                        color: (theme.vars || theme).palette.primary.main
                    },
                    '&.Mui-completed': {
                        border: 'none',
                        color: (theme.vars || theme).palette.success.main
                    },
                    ...theme.applyStyles('dark', {
                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][700]}`,
                        '&.Mui-active': {
                            border: 'none',
                            color: (theme.vars || theme).palette.primary.light
                        },
                        '&.Mui-completed': {
                            border: 'none',
                            color: (theme.vars || theme).palette.success.light
                        }
                    }),
                    variants: [
                        {
                            props: {
                                completed: true
                            },
                            style: {
                                width: 12,
                                height: 12
                            }
                        }
                    ]
                })
        }
    },
    MuiStepLabel: {
        styleOverrides: {
            label: ({ theme })=>({
                    '&.Mui-completed': {
                        opacity: 0.6,
                        ...theme.applyStyles('dark', {
                            opacity: 0.5
                        })
                    }
                })
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/theme/customizations/surfaces.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "surfacesCustomizations",
    ()=>surfacesCustomizations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/themePrimitives.ts [app-client] (ecmascript)");
;
;
const surfacesCustomizations = {
    MuiAccordion: {
        defaultProps: {
            elevation: 0,
            disableGutters: true
        },
        styleOverrides: {
            root: ({ theme })=>({
                    padding: 4,
                    overflow: 'clip',
                    backgroundColor: (theme.vars || theme).palette.background.default,
                    border: '1px solid',
                    borderColor: (theme.vars || theme).palette.divider,
                    ':before': {
                        backgroundColor: 'transparent'
                    },
                    '&:not(:last-of-type)': {
                        borderBottom: 'none'
                    },
                    '&:first-of-type': {
                        borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
                        borderTopRightRadius: (theme.vars || theme).shape.borderRadius
                    },
                    '&:last-of-type': {
                        borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
                        borderBottomRightRadius: (theme.vars || theme).shape.borderRadius
                    }
                })
        }
    },
    MuiAccordionSummary: {
        styleOverrides: {
            root: ({ theme })=>({
                    border: 'none',
                    borderRadius: 8,
                    '&:hover': {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][50]
                    },
                    '&:focus-visible': {
                        backgroundColor: 'transparent'
                    },
                    ...theme.applyStyles('dark', {
                        '&:hover': {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800]
                        }
                    })
                })
        }
    },
    MuiAccordionDetails: {
        styleOverrides: {
            root: {
                mb: 20,
                border: 'none'
            }
        }
    },
    MuiPaper: {
        defaultProps: {
            elevation: 0
        }
    },
    MuiCard: {
        styleOverrides: {
            root: ({ theme })=>{
                return {
                    padding: 16,
                    gap: 16,
                    transition: 'all 100ms ease',
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][50],
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    border: `1px solid ${(theme.vars || theme).palette.divider}`,
                    boxShadow: 'none',
                    ...theme.applyStyles('dark', {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][800]
                    }),
                    variants: [
                        {
                            props: {
                                variant: 'outlined'
                            },
                            style: {
                                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                                boxShadow: 'none',
                                background: 'hsl(0, 0%, 100%)',
                                ...theme.applyStyles('dark', {
                                    background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"][900], 0.4)
                                })
                            }
                        }
                    ]
                };
            }
        }
    },
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: 0,
                '&:last-child': {
                    paddingBottom: 0
                }
            }
        }
    },
    MuiCardHeader: {
        styleOverrides: {
            root: {
                padding: 0
            }
        }
    },
    MuiCardActions: {
        styleOverrides: {
            root: {
                padding: 0
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/theme/AppTheme.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$customizations$2f$inputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/customizations/inputs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$customizations$2f$dataDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/customizations/dataDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$customizations$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/customizations/feedback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$customizations$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/customizations/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$customizations$2f$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/customizations/surfaces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/themePrimitives.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function AppTheme(props) {
    _s();
    const { children, disableCustomTheme, themeComponents } = props;
    const theme = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "AppTheme.useMemo[theme]": ()=>{
            return disableCustomTheme ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
                // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
                cssVariables: {
                    colorSchemeSelector: 'data-mui-color-scheme',
                    cssVarPrefix: 'template'
                },
                colorSchemes: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorSchemes"],
                typography: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"],
                shadows: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadows"],
                shape: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$themePrimitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shape"],
                components: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$customizations$2f$inputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputsCustomizations"],
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$customizations$2f$dataDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataDisplayCustomizations"],
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$customizations$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feedbackCustomizations"],
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$customizations$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationCustomizations"],
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$customizations$2f$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surfacesCustomizations"],
                    ...themeComponents
                }
            });
        }
    }["AppTheme.useMemo[theme]"], [
        disableCustomTheme,
        themeComponents
    ]);
    if (disableCustomTheme) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/energy-plus/theme/AppTheme.tsx",
            lineNumber: 48,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        theme: theme,
        disableTransitionOnChange: true,
        children: children
    }, void 0, false, {
        fileName: "[project]/energy-plus/theme/AppTheme.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(AppTheme, "TF0AHbRu8DO10P/SWtT0KIxHEhc=");
_c = AppTheme;
var _c;
__turbopack_context__.k.register(_c, "AppTheme");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$AppTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/theme/AppTheme.tsx [app-client] (ecmascript)");
'use client';
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$theme$2f$AppTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/energy-plus/app/layout.tsx",
                    lineNumber: 11,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/layout.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/energy-plus/app/layout.tsx",
            lineNumber: 9,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/energy-plus/app/layout.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=energy-plus_657f02f0._.js.map