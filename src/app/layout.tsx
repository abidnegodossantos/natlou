import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-inter',
    display: 'swap',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};

export const metadata: Metadata = {
    title: 'Natlou - Climatização e Vendas',
    description: 'Serviços de manutenção, instalação e venda de Ar Condicionado.',
    manifest: '/manifest.json',
};

import WhatsAppButton from '@/components/WhatsAppButton';
import MobileBottomBar from '@/components/MobileBottomBar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var theme = localStorage.getItem('theme');
                                    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                        document.documentElement.classList.add('dark');
                                        document.documentElement.classList.remove('light');
                                    } else {
                                        document.documentElement.classList.add('light');
                                        document.documentElement.classList.remove('dark');
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body className={`${inter.variable} ${poppins.variable}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }}>{children}</main>
                <Footer />
                <WhatsAppButton />
                <MobileBottomBar />
            </body>
        </html>
    );
}
