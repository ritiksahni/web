# Consumption Data Management

## Quick Guide to Adding New Items

To add new films, books, or music to your consumption page, simply edit the `consumptionData` array in `/src/data/consumption.ts`.

### Adding a New Item

1. Open `/src/data/consumption.ts`
2. Add a new object to the `consumptionData` array
3. Save the file - your changes will be reflected immediately!

### Item Template

```typescript
{
    id: 'unique-id-here',           // e.g., 'film-3', 'book-5', 'album-7'
    title: 'Title Here',            // Name of the film/book/album/song
    type: 'film',                   // 'film', 'book', 'album', or 'song'
    creator: 'Creator Name',        // Director, Author, or Artist
    year: 2024,                     // Optional: Release year
    rating: 8,                      // Optional: Your rating (1-10)
    genre: 'Genre',                 // Optional: Genre
    description: 'Brief description', // Optional: Brief description
    dateConsumed: '2024-01-15',     // Optional: When you consumed it (YYYY-MM-DD)
    status: 'completed',            // 'completed', 'currently-consuming', or 'want-to-consume'
    notes: 'Your thoughts'          // Optional: Personal notes
}
```

### Status Options
- `completed` - You've finished it (green indicator)
- `currently-consuming` - You're currently reading/watching/listening (yellow indicator)
- `want-to-consume` - On your wishlist (blue indicator)

### Quick Examples

**Adding a Film:**
```typescript
{
    id: 'film-new',
    title: 'Blade Runner 2049',
    type: 'film',
    creator: 'Denis Villeneuve',
    year: 2017,
    rating: 9,
    genre: 'Sci-Fi',
    description: 'Stunning sequel to the original',
    dateConsumed: '2024-01-20',
    status: 'completed',
    notes: 'Roger Deakins cinematography is incredible'
}
```

**Adding a Book:**
```typescript
{
    id: 'book-new',
    title: 'Clean Code',
    type: 'book',
    creator: 'Robert C. Martin',
    year: 2008,
    rating: 8,
    genre: 'Technology',
    status: 'currently-consuming',
    notes: 'Essential coding principles'
}
```

**Adding Music:**
```typescript
{
    id: 'album-new',
    title: 'OK Computer',
    type: 'album',
    creator: 'Radiohead',
    year: 1997,
    rating: 10,
    genre: 'Alternative Rock',
    status: 'completed',
    notes: 'Masterpiece of the 90s'
}
```

### Pro Tips

1. **Unique IDs**: Make sure each `id` is unique. I recommend using a pattern like `film-1`, `book-1`, `album-1`, etc.

2. **Quick Updates**: You only need to fill in the required fields (`id`, `title`, `type`, `creator`, `status`). Everything else is optional.

3. **Batch Adding**: You can add multiple items at once by copying and pasting the template multiple times.

4. **Dating**: Use the `dateConsumed` field to track when you experienced something. This helps with chronological sorting.

5. **Notes**: Use the `notes` field for quick thoughts, quotes, or anything you want to remember about the item.

### The Result

Each item will appear as a beautiful 3D card with:
- **Front**: Title, creator, year, and type icon
- **Back**: Detailed information (rating, genre, description, notes, date)
- **Hover Effect**: Cards flip and reveal details with smooth 3D animations
- **Scroll Effects**: Items animate in with staggered timing and parallax effects

The page automatically organizes items by type (Films, Books, Music) and applies cool dimensionality reduction effects as you scroll!