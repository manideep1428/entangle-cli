'use client'
import { ClerkProvider } from "@clerk/nextjs";

export default function Providers({children}: {children: React.ReactNode}){

    return (
        <body>
            <ClerkProvider>
            {children}
            </ClerkProvider>
        </body>
    )
}