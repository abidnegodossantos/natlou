'use client';

import { QRCodeSVG } from 'qrcode.react';
import { useRef, useEffect, useState } from 'react';
import { Download } from 'lucide-react';

interface ProductQRCodeProps {
    slug: string;
}

export default function ProductQRCode({ slug }: ProductQRCodeProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const [url, setUrl] = useState('');

    useEffect(() => {
        // Set the URL on the client side to match the current domain
        setUrl(`${window.location.origin}/shop/${slug}`);
    }, [slug]);

    const handleDownload = () => {
        if (!svgRef.current) return;
        
        const svg = svgRef.current;
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        
        // Define standard sizes for the download (higher res than displayed)
        canvas.width = 500;
        canvas.height = 500;
        
        img.onload = () => {
            if (ctx) {
                // White background
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                // Draw QR Code
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                
                // Trigger download
                const pngFile = canvas.toDataURL("image/png");
                const downloadLink = document.createElement("a");
                downloadLink.download = `QR_Natlou_${slug}.png`;
                downloadLink.href = `${pngFile}`;
                downloadLink.click();
            }
        };
        
        img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
    };

    // Don't render until client-side hydration sets the URL
    if (!url) return null;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            backgroundColor: 'var(--bg-card)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            boxShadow: '0 4px 15px var(--shadow-color)'
        }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600', textAlign: 'center' }}>
                QR Code do Produto
            </p>
            <div style={{ padding: '0.75rem', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <QRCodeSVG 
                    value={url} 
                    size={120} 
                    fgColor="#004d99" 
                    bgColor="#ffffff"
                    level="H" 
                    ref={svgRef}
                    includeMargin={false}
                />
            </div>
            <button 
                onClick={handleDownload}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--border-light)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
            >
                <Download size={14} />
                Descarregar QR
            </button>
        </div>
    );
}
