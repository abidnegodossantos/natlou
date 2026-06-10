export interface Product {
    id: number;
    name: string;
    slug: string; // for url
    category: string;
    price: string;
    rawPrice: number; // useful for calculations
    installment: string; // e.g. "2x de 155.000 Kz"
    description: string;
    shortDescription: string;
    badges: { text: string; color: string; bg: string }[];
    image: string;
    hoverImage: string; // Image to show on hover (context/installed)
    featured: boolean;
    technicalSpecs: {
        btuRange: string;
        idealFor: string;
        area: string;
    };
    included: string[];
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Split Mural 9.000 BTUs',
        slug: 'split-mural-9000-btus',
        category: '9.000 BTUs',
        price: '260.000',
        rawPrice: 260000,
        installment: '2x de 130.000 Kz',
        shortDescription: 'Ideal para quartos pequenos. Silencioso.',
        description: 'Ideal para quartos pequenos e escritórios individuais. O Split Mural de 9.000 BTUs oferece conforto térmico com baixo consumo de energia.',
        badges: [
            { text: 'Montagem Grátis', color: '#155724', bg: '#d4edda' },
            { text: 'Entrega Grátis', color: '#004085', bg: '#cce5ff' },
            { text: 'Inverter Eco', color: '#004085', bg: '#e8f0fe' }
        ],
        image: '/ac-9000-btu.png',
        hoverImage: '/services-concept.jpg',
        featured: false,
        technicalSpecs: {
            btuRange: '9.000 BTU',
            idealFor: 'Quartos Pequenos',
            area: 'até 15m²'
        },
        included: [
            'Aparelho de Ar Condicionado (Novo na Caixa)',
            'Kit de Instalação Profissional',
            'Mão de Obra de Montagem (Grátis)',
            'Transporte (Grátis para Luanda/Benguela/Bengo)',
            '1ª Manutenção Preventiva (Oferta)'
        ]
    },
    {
        id: 2,
        name: 'Split Haier/TCL 12.000 BTU',
        slug: 'split-mural-12000-btus',
        category: '12.000 BTUs',
        price: '310.000',
        rawPrice: 310000,
        installment: '2x de 155.000 Kz',
        shortDescription: 'O Campeão de Vendas. Ideal para Quartos e Escritórios.',
        description: 'O equilíbrio perfeito para o seu conforto. Ideal para quartos de casal e escritórios, garantindo climatização rápida e eficiente. Inclui montagem e entrega.',
        badges: [
            { text: 'Montagem Grátis', color: '#155724', bg: '#d4edda' },
            { text: 'Entrega Grátis', color: '#004085', bg: '#cce5ff' },
            { text: 'Mais Vendido', color: '#856404', bg: '#fff3cd' },
            { text: 'Inverter - Classe A++', color: '#155724', bg: '#e8f5e9' }
        ],
        image: '/ac-12000-btu-v2.jpg',
        hoverImage: '/installation-team-v2.jpg',
        featured: true,
        technicalSpecs: {
            btuRange: '12.000 BTU',
            idealFor: 'Quartos / Escritórios',
            area: 'até 20m²'
        },
        included: [
            'Aparelho de Ar Condicionado (Novo na Caixa)',
            'Kit de Instalação Profissional',
            'Mão de Obra de Montagem (Grátis)',
            'Transporte (Grátis para Luanda/Benguela/Bengo)',
            '1ª Manutenção Preventiva (Oferta)'
        ]
    },
    {
        id: 3,
        name: 'Split Haier/TCL 18.000 BTU',
        slug: 'split-mural-18000-btus',
        category: '18.000 BTUs',
        price: '360.000',
        rawPrice: 360000,
        installment: '2x de 180.000 Kz',
        shortDescription: 'Potência Máxima. Ideal para Salas de Estar.',
        description: 'Potência superior para ambientes amplos. Garante refrigeração rápida mesmo nos dias mais quentes. Perfeito para salas de estar e espaços abertos.',
        badges: [
            { text: 'Montagem Grátis', color: '#155724', bg: '#d4edda' },
            { text: 'Entrega Grátis', color: '#004085', bg: '#cce5ff' },
            { text: 'Inverter - Economia Pro', color: '#311b92', bg: '#ede7f6' }
        ],
        image: '/ac-18000-btu-v2.jpg',
        hoverImage: '/services-concept.jpg',
        featured: false,
        technicalSpecs: {
            btuRange: '18.000 BTU',
            idealFor: 'Salas Amplas',
            area: '20-35m²'
        },
        included: [
            'Aparelho de Ar Condicionado (Novo na Caixa)',
            'Kit de Instalação Profissional',
            'Mão de Obra de Montagem (Grátis)',
            'Transporte (Grátis para Luanda/Benguela/Bengo)',
            '1ª Manutenção Preventiva (Oferta)'
        ]
    },
    {
        id: 4,
        name: 'Cassete 24.000 BTUs',
        slug: 'cassete-24000-btus',
        category: 'Comercial',
        price: '650.000',
        rawPrice: 650000,
        installment: 'Negociável',
        shortDescription: 'Solução discreta e potente para empresas.',
        description: 'Design elegante para tecto falso. Distribuição de ar uniforme em 360 graus, perfeito para lojas e ambientes corporativos de médio porte.',
        badges: [
            { text: 'Montagem Incluída', color: '#155724', bg: '#d4edda' },
            { text: 'Garantia Pro', color: '#004085', bg: '#cce5ff' },
            { text: 'Inverter Smart', color: '#0d47a1', bg: '#e3f2fd' }
        ],
        image: '/ac-cassette-v2.jpg',
        hoverImage: '/stock-infrastructure.jpg',
        featured: false,
        technicalSpecs: {
            btuRange: '24.000 BTU',
            idealFor: 'Lojas e Escritórios',
            area: '30-50m²'
        },
        included: [
            'Unidade Cassete (Nova)',
            'Painel Decorativo',
            'Comando Sem Fio',
            'Instalação Certificada',
            'Garantia de 1 Ano'
        ]
    }
];
