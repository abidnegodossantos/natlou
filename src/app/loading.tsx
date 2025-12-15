export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'var(--bg-color)',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999
        }}>
            <div style={{ textAlign: 'center' }}>
                {/* Logo Breathing Animation */}
                <div className="animate-breathe" style={{ marginBottom: '2rem' }}>
                    {/* Replace with actual logo or simplified version, using text for now if image not ideal for simple loader, but user asked for logo */}
                    <span className="logo-text" style={{ fontSize: '4rem' }}>NATLOU</span>
                </div>

                {/* Optional Spinner below */}
                <div className="animate-spin" style={{
                    width: '40px',
                    height: '40px',
                    border: '4px solid #f3f3f3',
                    borderTop: '4px solid var(--secondary-color)',
                    borderRadius: '50%',
                    margin: '0 auto'
                }}></div>
                <p style={{ marginTop: '1rem', color: '#666', fontFamily: 'var(--font-open-sans)' }}>Carregando...</p>
            </div>
        </div>
    );
}
