'use client';

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { products } from '@/app/shop/products';
import { Download } from 'lucide-react';
import { useState } from 'react';

export default function DownloadCatalog() {
    const [isGenerating, setIsGenerating] = useState(false);

    const generatePDF = () => {
        setIsGenerating(true);
        
        setTimeout(() => {
            try {
                const doc = new jsPDF();
                
                // Add header
                doc.setFillColor(0, 77, 153); // Primary color
                doc.rect(0, 0, 210, 40, 'F');
                
                doc.setTextColor(255, 255, 255);
                doc.setFontSize(24);
                doc.setFont('helvetica', 'bold');
                doc.text('Catálogo de Produtos NATLOU', 105, 20, { align: 'center' });
                
                doc.setFontSize(12);
                doc.setFont('helvetica', 'normal');
                doc.text('Climatização e Frio - Angola', 105, 30, { align: 'center' });
                
                // Add contact info
                doc.setTextColor(50, 50, 50);
                doc.setFontSize(10);
                doc.text('WhatsApp: +244 946 776 397', 14, 50);
                doc.text('Email: natlou.limitada@gmail.com', 14, 56);
                doc.text('Localização: Zango II, Luanda', 14, 62);
                
                // Table data
                const tableColumn = ["Produto", "Categoria", "Preço", "Prestações"];
                const tableRows = products.map(product => [
                    product.name,
                    product.category,
                    `${product.price} Kz`,
                    product.installment
                ]);
                
                autoTable(doc, {
                    head: [tableColumn],
                    body: tableRows,
                    startY: 70,
                    theme: 'striped',
                    headStyles: { fillColor: [0, 77, 153], textColor: 255, fontStyle: 'bold' },
                    styles: { font: 'helvetica', fontSize: 10, cellPadding: 5 },
                    alternateRowStyles: { fillColor: [245, 245, 245] },
                    margin: { top: 70 }
                });
                
                // Add footer
                const pageCount = (doc as any).internal.getNumberOfPages();
                for (let i = 1; i <= pageCount; i++) {
                    doc.setPage(i);
                    doc.setFontSize(8);
                    doc.setTextColor(150, 150, 150);
                    doc.text(`Página ${i} de ${pageCount}`, 105, 285, { align: 'center' });
                    doc.text('Documento gerado automaticamente - Preços sujeitos a alteração', 105, 290, { align: 'center' });
                }
                
                // Save the PDF
                doc.save('Catalogo_Natlou.pdf');
            } catch (error) {
                console.error("Error generating PDF:", error);
            } finally {
                setIsGenerating(false);
            }
        }, 100);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
            <button 
                onClick={generatePDF}
                disabled={isGenerating}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    backgroundColor: 'var(--action-color)',
                    color: '#002855',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    cursor: isGenerating ? 'wait' : 'pointer',
                    boxShadow: '0 4px 15px rgba(255, 170, 0, 0.4)',
                    transition: 'all 0.3s ease',
                    opacity: isGenerating ? 0.8 : 1
                }}
                onMouseOver={(e) => !isGenerating && (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseOut={(e) => !isGenerating && (e.currentTarget.style.transform = 'translateY(0)')}
            >
                <Download size={20} />
                {isGenerating ? 'A gerar...' : 'Descarregar Catálogo PDF'}
            </button>
        </div>
    );
}
