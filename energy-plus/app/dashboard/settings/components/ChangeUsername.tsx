import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { supabaseClient } from '@/lib/supabaseClient';

type UsernameForm = {
    newUsername: string;
    confirm: string;
};

export default function ChangeUsername() {
    const supabase = supabaseClient;
    const [saving, setSaving] = useState(false);
    const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm<UsernameForm>({
        defaultValues: { newUsername: '', confirm: '' },
    });

    const entered = watch('newUsername');

    const onSubmit = async (values: UsernameForm) => {
        setMsg(null);
        setSaving(true);

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setMsg({ type: 'error', text: 'Please sign in first' });
                return;
            }

            const name = values.newUsername.trim();
            //basic username validation.
            if (name.length < 3) {
                setMsg({ type: 'error', text: 'Username should be at least 3 characters' });
                return;
            }

            //duplicate username check
            const { data: alreadyUsed } = await supabase
                .from('profiles')
                .select('id')
                .eq('username', name.toLowerCase())
                .neq('id', user.id)
                .maybeSingle();

            if (alreadyUsed) {
                setMsg({ type: 'error', text: 'That username is already taken' });
                return;
            }

            const { error } = await supabase
                .from('profiles')
                .update({ username: name.toLowerCase() })
                .eq('id', user.id);

            if (error) throw error;

            setMsg({ type: 'success', text: 'Username changed' });
            reset();

        } catch (err) {
            console.error('username update failed', err);
            setMsg({ type: 'error', text: 'Could not update username, please try again.' });
        } finally {
            setSaving(false);
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 480 }}>
            {msg && (
                <Alert severity={msg.type} sx={{ mb: 3 }}>
                    {msg.text}
                </Alert>
            )}

            <Typography variant="h6" sx={{ mb: 2 }}>
                Change your username
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    {...register('newUsername', { required: 'Required' })}
                    label="New username"
                    error={!!errors.newUsername}
                    helperText={errors.newUsername?.message}
                    fullWidth
                />

                <TextField
                    {...register('confirm', {
                        required: 'Please type it again',
                        validate: (val) => val === entered || 'Does not match',
                    })}
                    label="Confirm"
                    error={!!errors.confirm}
                    helperText={errors.confirm?.message}
                    fullWidth
                />

                <Button
                    type="submit"
                    variant="contained"
                    disabled={saving}
                    sx={{ alignSelf: 'flex-start', mt: 1 }}
                >
                    {saving ? 'Saving…' : 'Update'}
                </Button>
            </Box>
        </Box>
    );
}