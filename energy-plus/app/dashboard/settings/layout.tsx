'use client';

import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import {supabaseClient} from '@/lib/supabaseClient';
import ChangePassword from './components/ChangePassword';
import ChangeUsername from './components/ChangeUsername';


type ProfileFormData = {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
};
//Profile settings page to allow user to change their password, will implement email change in the future.
export default function ProfileSettings() {
    const supabase = supabaseClient;
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const {
        formState: { errors},
        reset,
        watch,
    } = useForm<ProfileFormData>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
    });


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
                    .select('first_name, last_name, email, username')
                    .eq('id', user.id)
                    .single();

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
                setMessage({ type: 'error', text: 'Error fetching profile data' });
            }
        };

        fetchProfile();


        return () => {
            isCurrent = false;
        };
    }, [reset]);



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
                <TextField
                    label = "Username"
                    value = {watch('username')}
                    disabled
                    fullWidth
                    variant = "outlined"
                />
            </Box>


            <ChangePassword/>
            <ChangeUsername/>
        </Box>

    );
}