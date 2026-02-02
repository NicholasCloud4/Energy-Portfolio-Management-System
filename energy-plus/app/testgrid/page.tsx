'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import TestGridComponent, { Task } from './TestGrid';
import { supabase } from '@/lib/supabaseClient'; // adjust path if needed

export default function Page() {
    const [rows, setRows] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    // Example of how you can display data from supabase. If RLS is enabled you need to integrade policies. In this example RLS is not enabled.
    useEffect(() => {
        const fetchTasks = async () => {
            const { data, error } = await supabase
                .from('tasks')
                .select('id, name, status');

            if (error) {
                console.error(error);
                return;
            }

            setRows(data ?? []);
            setLoading(false);
        };

        fetchTasks();
    }, []);

    return (
        <div style={{ padding: 24 }}>
            <h1>Supabase Example Grid</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <TestGridComponent rows={rows} />
            )}
        </div>
    );
}
