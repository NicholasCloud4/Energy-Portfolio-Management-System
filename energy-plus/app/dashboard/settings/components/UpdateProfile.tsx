'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { supabaseClient } from '@/lib/supabaseClient';

export default function UpdateProfile() {
    const supabase = supabaseClient;
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [showEditFields, setShowEditFields] = useState(false);
    const [loading, setLoading] = useState(false);

    const [profileData, setProfileData] = useState({
        firstName: '', lastName: '', email: '', username: ''
    });

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        async function loadData() {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
                if (profile) {
                    const initial = {
                        firstName: profile.first_name || '',
                        lastName: profile.last_name || '',
                        username: profile.username || '',
                        email: user.email || ''
                    };
                    setProfileData(initial);
                    reset(initial);
                }
            }
        }
        loadData();
    }, [reset, supabase]);

    const handleCancel = () => {
        reset(profileData);
        setShowEditFields(false);
        setMessage(null);
    };

    const onSubmit = async (data: any) => {
        setLoading(true);
        setMessage(null);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            const updates: any = {};

            if (data.firstName !== profileData.firstName) updates.first_name = data.firstName;
            if (data.lastName !== profileData.lastName) updates.last_name = data.lastName;
            if (data.username?.toLowerCase() !== profileData.username?.toLowerCase()) {
                updates.username = data.username.toLowerCase();
            }

            if (Object.keys(updates).length > 0) {
                const { error } = await supabase.from('profiles').update(updates).eq('id', user?.id);
                if (error) throw error;
            }

            if (data.email?.toLowerCase() !== user?.email?.toLowerCase()) {
                const { error: emailError } = await supabase.auth.updateUser({ email: data.email.toLowerCase() });
                if (emailError) throw emailError;
                setMessage({ type: 'success', text: 'Success! Check your email to confirm.' });
            } else {
                setMessage({ type: 'success', text: 'Profile saved!' });
            }

            setProfileData(data);
            setShowEditFields(false);
        } catch (err: any) {
            setMessage({ type: 'error', text: err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>
                Your Information
            </Typography>

            {message && <Alert severity={message.type} sx={{ mb: 2 }}>{message.text}</Alert>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                    <TextField
                        label="First name"
                        {...register('firstName')}
                        disabled={!showEditFields}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Last name"
                        {...register('lastName')}
                        disabled={!showEditFields}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Email"
                        {...register('email')}
                        disabled={!showEditFields}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Username"
                        {...register('username')}
                        disabled={!showEditFields}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>

                {!showEditFields ? (
                    <Button
                        variant="contained"
                        onClick={() => setShowEditFields(true)}
                        sx={{ px: 4, py: 1.5, mb: 2 }}
                    >
                        Edit
                    </Button>
                ) : (
                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            {loading ? 'Saving...' : 'Submit'}
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={handleCancel}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Cancel
                        </Button>
                    </Stack>
                )}
            </form>
        </Box>
    );
}