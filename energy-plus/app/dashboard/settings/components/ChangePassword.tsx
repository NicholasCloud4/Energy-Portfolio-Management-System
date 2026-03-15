import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import {supabaseClient} from '@/lib/supabaseClient';

type ChangePasswordFormData = {
    password: string;
    confirmPassword: string;
};

export default function ChangePassword() {
    const supabase = supabaseClient;
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors},
        watch,
        setValue
    } = useForm<ChangePasswordFormData>({
        defaultValues: {
            password: '',
            confirmPassword: ''
        },
    });

    //watches password field to compare it with confirm password field.
    const newPassword = watch ('password');

    const handleFormSubmit = async (data: ChangePasswordFormData) => {
        setMessage(null);

        if (!data.password.trim()) {
            setMessage({ type: 'error', text: 'Password is required' });
            return;
        }

        if (data.password !== data.confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match' });
            return;
        }

        setIsSaving(true);

        try {
            const { error} = await supabase.auth.updateUser({
                password: data.password,
            });

            if (error) throw error;
            setMessage({ type: 'success', text: 'Password updated successfully' });
            setValue('password', '');
            setValue('confirmPassword', '');
        } catch (error) {
            console.log(error);
            setMessage({ type: 'error', text: 'Error updating password' });

        } finally {
            setIsSaving(false);
        }
    };
    return (
        <Box sx={{ width: '100%' }}>
            {message && (
                <Alert severity={message.type} sx={{ mb: 2 }}>
                    {message.text}
                </Alert>
            )}
            <Typography variant = "h6" gutterBottom>
                Change Password
            </Typography>
            <Box
                component = "form"
                onSubmit = {handleSubmit(handleFormSubmit)}
                sx={{ display: 'flex', flexDirection: 'column', gap : 2.5}}
            >
                <TextField
                    {...register('password', { required: 'password must be 8 characters or more', minLength: 8})}
                    label = "New password"
                    type = "password"
                    error = {!!errors.password}
                    helperText = {errors.password ? errors.password?.message || 'Password must be at least 8 characters' : ''}
                    fullWidth
                />

                <TextField
                    {...register('confirmPassword', {
                        validate: (value) => value === newPassword || !newPassword || 'Passwords do not match'
                    })}
                    label = "Confirm new password"
                    type = "password"
                    error = {!!errors.confirmPassword}
                    helperText = {errors.confirmPassword?.message}
                    fullWidth
                />

                <Button type = "submit"
                        variant = "contained"
                        disabled = {isSaving}
                        sx={{ alignSelf: 'flex-start', px: 4, py: 1.5, mb: 2}}
                >
                    {isSaving ? 'Saving...' : 'Submit'}
                </Button>
            </Box>
        </Box>
    );
}