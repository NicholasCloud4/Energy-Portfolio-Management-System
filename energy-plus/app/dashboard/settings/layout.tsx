'use client';

import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import {supabaseClient} from '@/lib/supabaseClient';
import ChangePassword from './Components/ChangePassword';
import ChangeEmail from './Components/ChangeEmail';
import ChangeFirstName from './Components/ChangeFirstName';
import ChangeLastName from './Components/ChangeLastName'


type ProfileFormData = {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
};
export default function ProfileSettings() {
    const supabase = supabaseClient;
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [showEditFields, setShowEditFields] = useState(false);

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
            <Box sx = {{ textAlign: 'left', mb: 3}}>
                <Button
                    variant = "contained"
                    color = "primary"
                    size = "large"
                    onClick ={() => setShowEditFields(!showEditFields)}
                    sx ={{px:4, py: 1.5}}
                >
                    {showEditFields? 'Hide edit fields' : 'Edit your personal information'}
                </Button>

            </Box>
            {showEditFields && (
                <Box sx={{ mt: 2 }}>
                    <ChangeFirstName />
                    <ChangeLastName />
                    <ChangePassword />
                    <ChangeEmail />
                </Box>
            )}
        </Box>
    );
}