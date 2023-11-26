"use client"

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

export default function page() {
    const handler = async () => {
        
        fetch("/api/epitech-calendar")
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        

        return
        /*
        const blob = new Blob([data], { type: 'text/calendar;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'event.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        */
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <Button onClick={handler}>Add to calandar</Button>
        </div>
    )
}