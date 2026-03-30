import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { supabaseClient } from '@/lib/supabaseClient';

type ChangeFirstNameFormData = {
    firstName: string;
};

export default function ChangeFirstName() {
    const supabase = supabaseClient;

    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState<{
        type: 'success' | 'error';
        text: string
    } | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ChangeFirstNameFormData>({
        defaultValues: {
            firstName: '',
        },
    });

    const handleFormSubmit = async (data: ChangeFirstNameFormData) => {
        setMessage(null);
        setIsSaving(true);

        try {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                setMessage({ type: 'error', text: 'You need to be signed in' });
                return;
            }

            const trimmed = data.firstName.trim();

            if (!trimmed) {
                setMessage({ type: 'error', text: 'First name is required' });
                return;
            }

            const { error } = await supabase
                .from('profiles')
                .update({ first_name: trimmed })
                .eq('id', user.id);

            if (error) throw error;

            setMessage({ type: 'success', text: 'First name updated successfully' });
            reset();
        } catch (error) {
            console.error('Error updating first name:', error);
            setMessage({ type: 'error', text: 'Could not update first name' });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <Box sx={{ maxWidth: 480, mx: 'auto', mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Change First Name
            </Typography>

            {message && (
                <Alert severity={message.type} sx={{ mb: 3 }}>
                    {message.text}
                </Alert>
            )}

            <Box
                component="form"
                onSubmit={handleSubmit(handleFormSubmit)}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <TextField
                    {...register('firstName', { required: 'First name is required' })}
                    label="New first name"
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                    fullWidth
                    disabled={isSaving}
                />

                <Button
                    type="submit"
                    variant="contained"
                    disabled={isSaving}
                    sx={{ alignSelf: 'flex-start', mt: 0.5, px: 4, py: 1.5 }}
                >
                    {isSaving ? 'Saving…' : 'Submit'}
                </Button>
            </Box>
        </Box>
    );
}