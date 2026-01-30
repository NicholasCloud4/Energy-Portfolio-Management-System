"use client";

import { useEffect, useState } from "react";
import DashboardGrid, { Task } from "./DashboardGrid";
import { supabase } from "@/lib/supabaseClient";
import AppAppBar from "../landing-page/components/AppAppBar";
import { Box } from "@mui/material";

export default function Page() {
  const [rows, setRows] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  // Example of how you can display data from supabase. If RLS is enabled you need to integrade policies. In this example RLS is not enabled.
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("id, name, status");

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
    <>
      <AppAppBar />
      <Box sx={{ p: 2, textAlign: "center" }}>
        <h1>Supabase Example Grid</h1>

        {loading ? <p>Loading...</p> : <DashboardGrid rows={rows} />}
      </Box>
    </>
  );
}
