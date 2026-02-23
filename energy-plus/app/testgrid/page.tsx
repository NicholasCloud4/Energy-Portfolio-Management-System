'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import TestGridComponent, { Task } from './TestGrid';
import { supabaseClient } from '@/lib/supabaseClient';
export default function Page() {
    const [rows, setRows] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            const { data, error } = await supabaseClient
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
