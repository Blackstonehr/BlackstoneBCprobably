import './globals.css'
import { Inter } from 'next/font/google'
import { colors } from '@liquid/tokens'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <body className="antialiased" style={{ backgroundColor: colors.midnight, color: colors.bonewhite }}>
                <div className="max-w-[1440px] mx-auto min-h-screen relative overflow-hidden">
                    {children}
                </div>
            </body>
        </html>
    )
}

