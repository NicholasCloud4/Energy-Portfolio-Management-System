import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { supabaseClient } from '@/lib/supabaseClient';

type EmailForm = {
    newEmail: string;
    confirm: string;
};

export default function ChangeEmail() {
    const supabase = supabaseClient;
    const [saving, setSaving] = useState(false);
    const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm<EmailForm>({
        defaultValues: { newEmail: '', confirm: '' },
    });

    const newEmailValue = watch('newEmail');

    const onSubmit = async (values: EmailForm) => {
        setMsg(null);
        setSaving(true);

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setMsg({ type: 'error', text: 'Please sign in first' });
                return;
            }

            const email = values.newEmail.trim().toLowerCase();

            console.log('Trying to update email to:', email);

            //email validation.
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if (!emailRegex.test(email)) {
                setMsg({ type: 'error', text: 'Please enter a valid email address' });
                return;
            }

            if (email.length < 2) {
                setMsg({ type: 'error', text: 'Email address should be at least 2 characters' });
                return;
            }

            if (email === user.email?.toLowerCase()) {
                setMsg({ type: 'error', text: 'This is already your email address'});
                return;
            }

            const { error: updateError } = await supabase.auth.updateUser({ email });
            if (updateError) {
                if (updateError.message.includes('duplicate')) {
                    setMsg({ type: 'error', text: 'This email is already in use' });
                } else {
                    throw updateError;
                }
                return;
            }
            const { error: prfileError } = await supabase
                .from('profiles')
                .update({ email })
                .eq('id', user.id);
            if (prfileError) throw prfileError;
            setMsg({ type: 'success', text: 'Email update requested please check your inbox' });
            reset();

        } catch (err) {
            console.error('email update failed', err);
            setMsg({ type: 'error', text: 'Could not update email, please try again.' });
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
                Change Email Address
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    {...register('newEmail', { required: 'Required' })}
                    label="New email address"
                    type = "email"
                    error={!!errors.newEmail}
                    helperText={errors.newEmail?.message}
                    fullWidth
                />

                <TextField
                    {...register('confirm', {
                        required: 'Please type it again',
                        validate: (val) => val === newEmailValue || 'Does not match',
                    })}
                    label="Confirm"
                    type = "email"
                    error={!!errors.confirm}
                    helperText={errors.confirm?.message}
                    fullWidth
                />

                <Button
                    type="submit"
                    variant="contained"
                    disabled={saving}
                    sx={{ alignSelf: 'flex-start', mt: 0.5, px: 4, py: 1.5 }}
                >
                    {saving ? 'Saving…' : 'Submit'}
                </Button>
            </Box>
        </Box>
    );
}