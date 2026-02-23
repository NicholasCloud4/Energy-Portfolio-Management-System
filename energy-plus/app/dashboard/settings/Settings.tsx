'use client';

import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import {supabaseClient} from '@/lib/supabaseClient';


type ProfileFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};
//Profile settings page to allow user to change their password, will implement email change in the future.
export default function ProfileSettings() {
    const supabase = supabaseClient;
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors},
        reset,
        watch,
        setValue
    } = useForm<ProfileFormData>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
    });

    //watches password field to compare it with confirm password field.
    const newPassword = watch ('password');

    useEffect(() => {
        let isCurrent = true;

        const fetchProfile = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser();

                if (!user) {
                    setMessage({ type: 'error', text: 'No data, please sign in' });
                    return;
                }
                //fetches data from profile table, selects first name, last name and email where id matches user id, and returns a single record
                const { data, error } = await supabase
                    .from('profiles')
                    .select('first_name, last_name, email')
                    .eq('id', user.id)
                    .single();

                if (error) throw error;

                if (isCurrent) {
                    reset({
                        firstName: data?.first_name || '',
                        lastName: data?.last_name || '',
                        email: user.email || '',
                        password: '',
                        confirmPassword: ''
                    });
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
                setMessage({ type: 'error', text: 'Error fetching profile data' });
            }
        };

        fetchProfile();


        return () => {
            isCurrent = false;
        };
    }, [reset]);

    const handleFormSubmit = async (data: ProfileFormData) => {
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
        <Box sx={{ maxWidth: 450, mx: 'auto', p: 2 }}>
            <Typography variant = "h4" gutterBottom>
                Profile Settings
            </Typography>

            {message && (
                <Alert severity = {message.type}
                       sx={{mb: 3}}
                       onClose = {() => setMessage (null)}
                >
                    {message.text}
                </Alert>
            )}

            <Typography variant = "h6" gutterBottom sx={{ mt: 3, mb: 2}}>
                Your Information
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                mb: 4
            }}>
                <TextField
                    label = "First name"
                    value = {watch('firstName')}
                    disabled
                    fullWidth
                    variant = "outlined"
                />
                <TextField
                    label = "Last name"
                    value = {watch('lastName')}
                    disabled
                    fullWidth
                    variant = "outlined"
                />
                <TextField
                    label = "Email"
                    value = {watch('email')}
                    disabled
                    fullWidth
                    variant = "outlined"

                />
            </Box>


            <Typography variant = "h6" gutterBottom sx={{ mt: 3, mb: 2}}>
                Change Password
            </Typography>
            <Box
                component = "form"
                onSubmit = {handleSubmit(handleFormSubmit)}
                sx={{ display: 'flex', flexDirection: 'column', gap : 2}}
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
                        sx={{ alignSelf: 'flex-start', px: 4, py: 1.5}}
                >
                    {isSaving ? 'Saving...' : 'Save Changes'}
                </Button>
            </Box>
        </Box>
    );
}