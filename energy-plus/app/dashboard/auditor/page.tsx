"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuditorPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/dashboard/auditorOverview");
    }, [router]);

    return null;
}