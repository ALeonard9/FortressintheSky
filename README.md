# Fortress in the Sky

AWS Cloud Security tips, tutorials, and short-form video content.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Adding Content

### Blog posts

Create a `.md` file in `src/content/blog/` with frontmatter:

```yaml
---
title: 'Post title'
date: 2024-01-15
description: 'Short description'
tags: ['AWS', 'Security']
---
```

### Videos

Edit `src/data/videos.json`:

```json
{
  "id": "YOUTUBE_VIDEO_ID",
  "title": "Video title",
  "description": "Short description"
}
```

## Deployment

Push to `main` — GitHub Actions builds and deploys to GitHub Pages automatically.
