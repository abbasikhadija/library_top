# 📚 My Library

A small personal library tracker where you can add books, mark them as read or unread, and see your collection displayed as a shelf of book-styled cards — spines, page edges, and all.

## Features

- **Add books** with title, author, page count, and read status via a modal form
- **Book-styled cards** — each entry renders like an actual hardcover: a colored spine, embossed spine line, stacked page-edge shadow on the right, and a serif title/author (Georgia)
- **Rotating cover palette** — 9 muted "hardback" tones (oxblood, forest, navy, plum, etc.) cycle automatically so the shelf doesn't look uniform
- **Read / Not read badge** — pill-style status button on each card
- **Parchment-style add form** — index-card look with italic serif labels and underline-style inputs instead of boxed fields, to match the library aesthetic
- **Wooden shelf backdrop** behind the card grid

## Tech stack

- HTML — structure and modal markup
- CSS — all styling, using CSS custom properties (`:root` variables) for colors, spacing, radii, and shadows so the theme can be re-skinned easily
- Vanilla JavaScript — `book` constructor, `myLibrary` array, DOM rendering, and modal show/hide logic (no frameworks or build step)

## File structure

```
├── index.html      # page markup + modal form
├── style.css       # all styling (book cards, shelf, form, buttons)
└── script.js       # book constructor, add/save/cancel logic, render loop
```

## Running it

No build step required — it's plain HTML/CSS/JS.

1. Make sure all three files (`index.html`, `style.css`, `script.js`) are in the same folder
2. Open `index.html` in a browser (or serve the folder with any static server, e.g. `npx serve .` or the VS Code "Live Server" extension)

## How it works

- Clicking **Add book** opens a modal over a dimmed overlay and reveals the form
- **Save** reads the form values, creates a new `book` object, pushes it into the `myLibrary` array, re-renders the shelf, clears the form, and closes the modal
- **Cancel** clears the form and closes the modal without saving
- `displayBooks()` wipes and rebuilds the `#library` grid from `myLibrary` on every change — each card's cover/spine color comes from its position in the array via `nth-child` CSS rules

## Customization

Most of the visual language lives in the `:root` CSS variables at the top of `style.css`:

| Variable | Controls |
|---|---|
| `--primary` / `--primary-hover` | Add/Save button color (currently brass/leather brown) |
| `--paper` / `--paper-line` | Add-book form background and border tones |
| `--shelf-wood` | The wooden strip behind the card grid |
| `--card-width` | Minimum width of each book card in the grid |
| `--radius-md`, `--radius-pill` | Corner rounding for cards and badges |

Cover colors for the book spines/covers are set separately, in the `.book-card:nth-child(9n+N)` rules near the bottom of `style.css` — edit or add more to expand the palette.

## Known limitations / ideas for later

- Books aren't persisted (no `localStorage` or backend) — the library resets on page reload, currently just seeded with two starter books in `script.js`
- No delete or edit functionality yet — only add
- No form validation (empty fields or non-numeric page counts are currently accepted)
- Read status is stored as `1`/`0` rather than a boolean, which works but isn't the cleanest — could be refactored