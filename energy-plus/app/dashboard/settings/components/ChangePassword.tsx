'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Typography, Alert, Button } from '@mui/material';
import { supabaseClient } from '@/lib/supabaseClient';

export default function ChangePassword() {
    const supabase = supabaseClient;
    const [showFields, setShowFields] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        defaultValues: { password: '', confirmPassword: '' },
    });

    const newPassword = watch('password');

    const handleFormSubmit = async (data: any) => {
        setMessage(null);
        setIsSaving(true);
        try {
            const { error } = await supabase.auth.updateUser({ password: data.password });
            if (error) throw error;
            setMessage({ type: 'success', text: 'Password updated successfully' });
            setValue('password', '');
            setValue('confirmPassword', '');
        } catch (error) {
            setMessage({ type: 'error', text: 'Error updating password' });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={() => setShowFields(!showFields)} sx={{ px: 4, py: 1.5, mb: 2 }}>
                {showFields ? 'Hide' : 'Change Password'}
            </Button>

            {showFields && (
                <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <Typography variant="h6">Update Password</Typography>
                    {message && <Alert severity={message.type}>{message.text}</Alert>}

                    <TextField {...register('password', { required: true, minLength: 8 })}
                               label="New password"
                               type="password"
                               error={!!errors.password} fullWidth />
                    <TextField {...register('confirmPassword', { validate: v => v === newPassword || 'Passwords do not match' })} label="Confirm new password" type="password" error={!!errors.confirmPassword} fullWidth />

                    <Button type="submit" variant="contained" disabled={isSaving} sx={{ width: 'fit-content', px: 4 }}>
                        {isSaving ? 'Saving...' : 'Save Password'}
                    </Button>
                </Box>
            )}
        </Box>
    );
}