export interface Work {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: 'Instalação' | 'Manutenção' | 'Reparação';
}

export const works: Work[] = [
    {
        id: '1',
        title: 'Instalação AC 12.000 BTUs',
        description: 'Instalação completa e limpa num apartamento em Talatona.',
        imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop',
        category: 'Instalação'
    },
    {
        id: '2',
        title: 'Manutenção Condomínio',
        description: 'Manutenção preventiva de 15 máquinas num condomínio em Luanda Sul.',
        imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
        category: 'Manutenção'
    },
    {
        id: '3',
        title: 'Reparação de Fuga de Gás',
        description: 'Deteção e reparação de fuga de gás com recarga completa.',
        imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1000&auto=format&fit=crop',
        category: 'Reparação'
    },
    {
        id: '4',
        title: 'Climatização de Escritório',
        description: 'Projeto de instalação de ACs de 24.000 BTUs para espaço open-space.',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
        category: 'Instalação'
    },
    {
        id: '5',
        title: 'Limpeza Profunda',
        description: 'Higienização e desinfeção profunda de filtros e serpentina.',
        imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492d0072c?q=80&w=1000&auto=format&fit=crop',
        category: 'Manutenção'
    },
    {
        id: '6',
        title: 'Instalação em Moradia',
        description: 'Instalação de múltiplos equipamentos TCL numa moradia no Patriota.',
        imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop',
        category: 'Instalação'
    }
];
