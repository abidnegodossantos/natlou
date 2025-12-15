import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

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
        <html lang="pt">
            <body className={`${openSans.variable} ${montserrat.variable}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }}>{children}</main>
                <Footer />
                <WhatsAppButton />
                <MobileBottomBar />
            </body>
        </html>
    );
}
