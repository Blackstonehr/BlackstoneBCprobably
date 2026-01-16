'use client';
import React from "react";


export const metadata: Metadata = {
    title: "Langubridge 2.0 - High Fidelity Design",
    description: "Luxury pivot environment",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="max-w-[1440px] mx-auto min-h-screen relative overflow-hidden">
                    {children}
                </div>
            </body>
        </html>
    );
}
