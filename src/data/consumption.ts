export type ConsumptionItem = {
    id: string;
    title: string;
    type: 'film' | 'book' | 'music' | 'album' | 'song';
    creator: string; // director, author, artist
    year?: number;
    rating?: number; // 1-5 or 1-10
    genre?: string;
    description?: string;
    coverImage?: string;
    dateConsumed?: string; // YYYY-MM-DD format
    status: 'completed' | 'currently-consuming' | 'want-to-consume';
    notes?: string;
};

export const consumptionData: ConsumptionItem[] = [
    // Films
    {
        id: 'film-1',
        title: 'Dune: Part Two',
        type: 'film',
        creator: 'Denis Villeneuve',
        year: 2024,
        rating: 9,
        genre: 'Sci-Fi',
        description: 'Epic continuation of Paul Atreides\' journey',
        dateConsumed: '2024-03-15',
        status: 'completed',
        notes: 'Incredible visuals and Hans Zimmer\'s score'
    },
    {
        id: 'film-2',
        title: 'Oppenheimer',
        type: 'film',
        creator: 'Christopher Nolan',
        year: 2023,
        rating: 8,
        genre: 'Biography/Drama',
        description: 'The story of J. Robert Oppenheimer',
        dateConsumed: '2023-07-21',
        status: 'completed',
        notes: 'Mind-bending narrative structure'
    },

    // Books
    {
        id: 'book-1',
        title: 'The Pragmatic Programmer',
        type: 'book',
        creator: 'David Thomas & Andrew Hunt',
        year: 1999,
        rating: 9,
        genre: 'Technology',
        description: 'Your journey to mastery',
        dateConsumed: '2024-01-15',
        status: 'completed',
        notes: 'Essential for any developer'
    },
    {
        id: 'book-2',
        title: 'Atomic Habits',
        type: 'book',
        creator: 'James Clear',
        year: 2018,
        rating: 8,
        genre: 'Self-Help',
        description: 'Tiny changes, remarkable results',
        status: 'currently-consuming',
        notes: 'Great insights on habit formation'
    },

    // Music
    {
        id: 'album-1',
        title: 'After Hours',
        type: 'album',
        creator: 'The Weeknd',
        year: 2020,
        rating: 8,
        genre: 'R&B/Pop',
        description: 'Dark and atmospheric album',
        dateConsumed: '2020-03-20',
        status: 'completed',
        notes: 'Perfect late-night listening'
    },
    {
        id: 'song-1',
        title: 'Bohemian Rhapsody',
        type: 'song',
        creator: 'Queen',
        year: 1975,
        rating: 10,
        genre: 'Rock',
        description: 'Epic rock opera masterpiece',
        status: 'completed',
        notes: 'Timeless classic - never gets old'
    },
    {
        id: 'album-2',
        title: 'Random Access Memories',
        type: 'album',
        creator: 'Daft Punk',
        year: 2013,
        rating: 9,
        genre: 'Electronic',
        description: 'Their final masterpiece',
        status: 'completed',
        notes: 'Perfect blend of electronic and disco'
    }
];

// Helper functions for easy filtering
export const getItemsByType = (type: ConsumptionItem['type']) =>
    consumptionData.filter(item => item.type === type);

export const getItemsByStatus = (status: ConsumptionItem['status']) =>
    consumptionData.filter(item => item.status === status);

export const getRecentItems = (limit: number = 10) =>
    consumptionData
        .filter(item => item.dateConsumed)
        .sort((a, b) => new Date(b.dateConsumed!).getTime() - new Date(a.dateConsumed!).getTime())
        .slice(0, limit);