(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/energy-plus/app/dashboard/settings/Components/ChangePassword.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChangePassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ChangePassword() {
    _s();
    const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"];
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, formState: { errors }, watch, setValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            password: '',
            confirmPassword: ''
        }
    });
    //watches password field to compare it with confirm password field.
    const newPassword = watch('password');
    const handleFormSubmit = async (data)=>{
        setMessage(null);
        if (!data.password.trim()) {
            setMessage({
                type: 'error',
                text: 'Password is required'
            });
            return;
        }
        if (data.password !== data.confirmPassword) {
            setMessage({
                type: 'error',
                text: 'Passwords do not match'
            });
            return;
        }
        setIsSaving(true);
        try {
            const { error } = await supabase.auth.updateUser({
                password: data.password
            });
            if (error) throw error;
            setMessage({
                type: 'success',
                text: 'Password updated successfully'
            });
            setValue('password', '');
            setValue('confirmPassword', '');
        } catch (error) {
            console.log(error);
            setMessage({
                type: 'error',
                text: 'Error updating password'
            });
        } finally{
            setIsSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            width: '100%'
        },
        children: [
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                severity: message.type,
                sx: {
                    mb: 2
                },
                children: message.text
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangePassword.tsx",
                lineNumber: 76,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h6",
                gutterBottom: true,
                children: "Change Password"
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangePassword.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                component: "form",
                onSubmit: handleSubmit(handleFormSubmit),
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...register('password', {
                            required: 'password must be 8 characters or more',
                            minLength: 8
                        }),
                        label: "New password",
                        type: "password",
                        error: !!errors.password,
                        helperText: errors.password ? errors.password?.message || 'Password must be at least 8 characters' : '',
                        fullWidth: true
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangePassword.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...register('confirmPassword', {
                            validate: (value)=>value === newPassword || !newPassword || 'Passwords do not match'
                        }),
                        label: "Confirm new password",
                        type: "password",
                        error: !!errors.confirmPassword,
                        helperText: errors.confirmPassword?.message,
                        fullWidth: true
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangePassword.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "submit",
                        variant: "contained",
                        disabled: isSaving,
                        sx: {
                            alignSelf: 'flex-start',
                            mt: 0.5,
                            mb: 2,
                            px: 4,
                            py: 1.5
                        },
                        children: isSaving ? 'Saving...' : 'Submit'
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangePassword.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangePassword.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangePassword.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
_s(ChangePassword, "tHrqZBASrPliP5IuVaAQXBUY2K4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ChangePassword;
var _c;
__turbopack_context__.k.register(_c, "ChangePassword");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/settings/Components/ChangeEmail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChangeEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ChangeEmail() {
    _s();
    const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"];
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, formState: { errors }, watch, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            newEmail: '',
            confirm: ''
        }
    });
    const newEmailValue = watch('newEmail');
    const onSubmit = async (values)=>{
        setMsg(null);
        setSaving(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setMsg({
                    type: 'error',
                    text: 'Please sign in first'
                });
                return;
            }
            const email = values.newEmail.trim().toLowerCase();
            console.log('Trying to update email to:', email);
            //email validation.
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if (!emailRegex.test(email)) {
                setMsg({
                    type: 'error',
                    text: 'Please enter a valid email address'
                });
                return;
            }
            if (email.length < 2) {
                setMsg({
                    type: 'error',
                    text: 'Email address should be at least 2 characters'
                });
                return;
            }
            if (email === user.email?.toLowerCase()) {
                setMsg({
                    type: 'error',
                    text: 'This is already your email address'
                });
                return;
            }
            const { error: updateError } = await supabase.auth.updateUser({
                email
            });
            if (updateError) {
                if (updateError.message.includes('duplicate')) {
                    setMsg({
                        type: 'error',
                        text: 'This email is already in use'
                    });
                } else {
                    throw updateError;
                }
                return;
            }
            const { error: prfileError } = await supabase.from('profiles').update({
                email
            }).eq('id', user.id);
            if (prfileError) throw prfileError;
            setMsg({
                type: 'success',
                text: 'Email update requested please check your inbox'
            });
            reset();
        } catch (err) {
            console.error('email update failed', err);
            setMsg({
                type: 'error',
                text: 'Could not update email, please try again.'
            });
        } finally{
            setSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            width: '100%',
            maxWidth: 480
        },
        children: [
            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                severity: msg.type,
                sx: {
                    mb: 3
                },
                children: msg.text
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeEmail.tsx",
                lineNumber: 92,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "h6",
                sx: {
                    mb: 2
                },
                children: "Change Email Address"
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeEmail.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                component: "form",
                onSubmit: handleSubmit(onSubmit),
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...register('newEmail', {
                            required: 'Required'
                        }),
                        label: "New email address",
                        type: "email",
                        error: !!errors.newEmail,
                        helperText: errors.newEmail?.message,
                        fullWidth: true
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeEmail.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...register('confirm', {
                            required: 'Please type it again',
                            validate: (val)=>val === newEmailValue || 'Does not match'
                        }),
                        label: "Confirm",
                        type: "email",
                        error: !!errors.confirm,
                        helperText: errors.confirm?.message,
                        fullWidth: true
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeEmail.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "submit",
                        variant: "contained",
                        disabled: saving,
                        sx: {
                            alignSelf: 'flex-start',
                            mt: 0.5,
                            px: 4,
                            py: 1.5
                        },
                        children: saving ? 'Saving…' : 'Submit'
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeEmail.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeEmail.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeEmail.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, this);
}
_s(ChangeEmail, "7hvSqGbzq9DNv/IL6Cga9LrQsLo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ChangeEmail;
var _c;
__turbopack_context__.k.register(_c, "ChangeEmail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/settings/Components/ChangeFirstName.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChangeFirstName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ChangeFirstName() {
    _s();
    const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"];
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, formState: { errors }, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            firstName: ''
        }
    });
    const handleFormSubmit = async (data)=>{
        setMessage(null);
        setIsSaving(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setMessage({
                    type: 'error',
                    text: 'You need to be signed in'
                });
                return;
            }
            const trimmed = data.firstName.trim();
            if (!trimmed) {
                setMessage({
                    type: 'error',
                    text: 'First name is required'
                });
                return;
            }
            const { error } = await supabase.from('profiles').update({
                first_name: trimmed
            }).eq('id', user.id);
            if (error) throw error;
            setMessage({
                type: 'success',
                text: 'First name updated successfully'
            });
            reset();
        } catch (error) {
            console.error('Error updating first name:', error);
            setMessage({
                type: 'error',
                text: 'Could not update first name'
            });
        } finally{
            setIsSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            maxWidth: 480,
            mx: 'auto',
            mt: 4
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "h6",
                gutterBottom: true,
                children: "Change First Name"
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeFirstName.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                severity: message.type,
                sx: {
                    mb: 3
                },
                children: message.text
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeFirstName.tsx",
                lineNumber: 77,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                component: "form",
                onSubmit: handleSubmit(handleFormSubmit),
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...register('firstName', {
                            required: 'First name is required'
                        }),
                        label: "New first name",
                        error: !!errors.firstName,
                        helperText: errors.firstName?.message,
                        fullWidth: true,
                        disabled: isSaving
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeFirstName.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "submit",
                        variant: "contained",
                        disabled: isSaving,
                        sx: {
                            alignSelf: 'flex-start',
                            mt: 0.5,
                            px: 4,
                            py: 1.5
                        },
                        children: isSaving ? 'Saving…' : 'Submit'
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeFirstName.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeFirstName.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeFirstName.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
_s(ChangeFirstName, "LDXiFss5qjotW8o+J0IcvI5vr74=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ChangeFirstName;
var _c;
__turbopack_context__.k.register(_c, "ChangeFirstName");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/settings/Components/ChangeLastName.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChangeLastName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ChangeLastName() {
    _s();
    const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"];
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, formState: { errors }, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            lastName: ''
        }
    });
    const handleFormSubmit = async (data)=>{
        setMessage(null);
        setIsSaving(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setMessage({
                    type: 'error',
                    text: 'You need to be signed in'
                });
                return;
            }
            const trimmed = data.lastName.trim();
            if (!trimmed) {
                setMessage({
                    type: 'error',
                    text: 'Last name is required'
                });
                return;
            }
            const { error } = await supabase.from('profiles').update({
                last_name: trimmed
            }).eq('id', user.id);
            if (error) throw error;
            setMessage({
                type: 'success',
                text: 'Last name updated successfully'
            });
            reset();
        } catch (error) {
            console.error('Error updating last name:', error);
            setMessage({
                type: 'error',
                text: 'Could not update last name'
            });
        } finally{
            setIsSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            maxWidth: 480,
            mx: 'auto',
            mt: 4
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "h6",
                gutterBottom: true,
                children: "Change Last Name"
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeLastName.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                severity: message.type,
                sx: {
                    mb: 3
                },
                children: message.text
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeLastName.tsx",
                lineNumber: 77,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                component: "form",
                onSubmit: handleSubmit(handleFormSubmit),
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...register('lastName', {
                            required: 'Last name is required'
                        }),
                        label: "New last name",
                        error: !!errors.lastName,
                        helperText: errors.lastName?.message,
                        fullWidth: true,
                        disabled: isSaving
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeLastName.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "submit",
                        variant: "contained",
                        disabled: isSaving,
                        sx: {
                            alignSelf: 'flex-start',
                            mt: 0.5,
                            px: 4,
                            py: 1.5,
                            mb: 2
                        },
                        children: isSaving ? 'Saving…' : 'Submit'
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeLastName.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeLastName.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/energy-plus/app/dashboard/settings/Components/ChangeLastName.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
_s(ChangeLastName, "LDXiFss5qjotW8o+J0IcvI5vr74=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ChangeLastName;
var _c;
__turbopack_context__.k.register(_c, "ChangeLastName");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/energy-plus/app/dashboard/settings/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$settings$2f$Components$2f$ChangePassword$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/settings/Components/ChangePassword.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$settings$2f$Components$2f$ChangeEmail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/settings/Components/ChangeEmail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$settings$2f$Components$2f$ChangeFirstName$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/settings/Components/ChangeFirstName.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$settings$2f$Components$2f$ChangeLastName$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-plus/app/dashboard/settings/Components/ChangeLastName.tsx [app-client] (ecmascript)");
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
;
;
;
;
function ProfileSettings() {
    _s();
    const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseClient"];
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showEditFields, setShowEditFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { formState: { errors }, reset, watch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileSettings.useEffect": ()=>{
            let isCurrent = true;
            const fetchProfile = {
                "ProfileSettings.useEffect.fetchProfile": async ()=>{
                    try {
                        const { data: { user } } = await supabase.auth.getUser();
                        if (!user) {
                            setMessage({
                                type: 'error',
                                text: 'No data, please sign in'
                            });
                            return;
                        }
                        const { data, error } = await supabase.from('profiles').select('first_name, last_name, email, username').eq('id', user.id).single();
                        if (error) throw error;
                        if (isCurrent) {
                            reset({
                                firstName: data?.first_name || '',
                                lastName: data?.last_name || '',
                                email: user.email || '',
                                username: data?.username || '',
                                password: '',
                                confirmPassword: ''
                            });
                        }
                    } catch (error) {
                        console.error('Error fetching profile:', error);
                        setMessage({
                            type: 'error',
                            text: 'Error fetching profile data'
                        });
                    }
                }
            }["ProfileSettings.useEffect.fetchProfile"];
            fetchProfile();
            return ({
                "ProfileSettings.useEffect": ()=>{
                    isCurrent = false;
                }
            })["ProfileSettings.useEffect"];
        }
    }["ProfileSettings.useEffect"], [
        reset
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            maxWidth: 450,
            mx: 'auto',
            p: 2
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h4",
                gutterBottom: true,
                children: "Profile Settings"
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                severity: message.type,
                sx: {
                    mb: 3
                },
                onClose: ()=>setMessage(null),
                children: message.text
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                lineNumber: 99,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h6",
                gutterBottom: true,
                sx: {
                    mt: 3,
                    mb: 2
                },
                children: "Your Information"
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    mb: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "First name",
                        value: watch('firstName'),
                        disabled: true,
                        fullWidth: true,
                        variant: "outlined"
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Last name",
                        value: watch('lastName'),
                        disabled: true,
                        fullWidth: true,
                        variant: "outlined"
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Email",
                        value: watch('email'),
                        disabled: true,
                        fullWidth: true,
                        variant: "outlined"
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Username",
                        value: watch('username'),
                        disabled: true,
                        fullWidth: true,
                        variant: "outlined"
                    }, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    textAlign: 'left',
                    mb: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "contained",
                    color: "primary",
                    size: "large",
                    onClick: ()=>setShowEditFields(!showEditFields),
                    sx: {
                        px: 4,
                        py: 1.5
                    },
                    children: showEditFields ? 'Hide edit fields' : 'Edit your personal information'
                }, void 0, false, {
                    fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                    lineNumber: 147,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                lineNumber: 146,
                columnNumber: 13
            }, this),
            showEditFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    mt: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$settings$2f$Components$2f$ChangeFirstName$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                        lineNumber: 160,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$settings$2f$Components$2f$ChangeLastName$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                        lineNumber: 161,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$settings$2f$Components$2f$ChangePassword$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                        lineNumber: 162,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$app$2f$dashboard$2f$settings$2f$Components$2f$ChangeEmail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                        lineNumber: 163,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
                lineNumber: 159,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/energy-plus/app/dashboard/settings/layout.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
_s(ProfileSettings, "VU9iGZjXV5jtpjaS64lxAAlMJxA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$plus$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ProfileSettings;
var _c;
__turbopack_context__.k.register(_c, "ProfileSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=energy-plus_app_dashboard_settings_2f6fceba._.js.map