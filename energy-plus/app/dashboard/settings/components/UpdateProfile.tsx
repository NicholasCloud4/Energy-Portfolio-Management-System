'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { supabaseClient } from '@/lib/supabaseClient';

export default function UpdateProfile() {
    const supabase = supabaseClient;
    const [message, setMessage] = useState<any>(null);
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
                const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
                if (data) {
                    const initial = {
                        firstName: data.first_name || '',
                        lastName: data.last_name || '',
                        username: data.username || '',
                        email: user.email || ''
                    };
                    setProfileData(initial);
                    reset(initial);
                }
            }
        }
        loadData();
    }, [reset]);

    const onSubmit = async (data: any) => {
        setLoading(true);
        setMessage(null);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            const updates: any = {};
            if (data.firstName !== profileData.firstName) updates.first_name = data.firstName;
            if (data.lastName !== profileData.lastName) updates.last_name = data.lastName;
            if (data.username.toLowerCase() !== profileData.username.toLowerCase()) {
                updates.username = data.username.toLowerCase();
            }

            if (Object.keys(updates).length > 0) {
                const { error } = await supabase.from('profiles').update(updates).eq('id', user?.id);
                if (error) throw error;
            }

            if (data.email.toLowerCase() !== user?.email?.toLowerCase()) {
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
            <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>Your Information</Typography>

            {message && <Alert severity={message.type} sx={{ mb: 2 }}>{message.text}</Alert>}

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                <TextField label="First name" value={profileData.firstName} disabled fullWidth InputLabelProps={{ shrink: true }} />
                <TextField label="Last name" value={profileData.lastName} disabled fullWidth InputLabelProps={{ shrink: true }} />
                <TextField label="Email" value={profileData.email} disabled fullWidth InputLabelProps={{ shrink: true }} />
                <TextField label="Username" value={profileData.username} disabled fullWidth InputLabelProps={{ shrink: true }} />
            </Box>

            <Button variant="contained" onClick={() => setShowEditFields(!showEditFields)} sx={{ px: 4, py: 1.5, mb: 2 }}>
                {showEditFields ? 'Hide edit fields' : 'Edit'}
            </Button>

            {showEditFields && (
                <Box sx={{ mt: 2, mb: 4 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField label="New first name" {...register('firstName')} fullWidth InputLabelProps={{ shrink: true }} />
                            <TextField label="New last name" {...register('lastName')} fullWidth InputLabelProps={{ shrink: true }} />
                            <TextField label="New username" {...register('username')} fullWidth InputLabelProps={{ shrink: true }} />
                            <TextField label="New email address" {...register('email')} fullWidth InputLabelProps={{ shrink: true }} />
                            <Button type="submit" variant="contained" disabled={loading} sx={{ backgroundColor: '#fff', color: '#000', '&:hover': { backgroundColor: '#e0e0e0' }, px: 4, width: 'fit-content' }}>
                                {loading ? 'Saving...' : 'Submit All'}
                            </Button>
                        </Box>
                    </form>
                </Box>
            )}
        </Box>
    );
}