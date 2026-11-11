import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every .md file in src/content/projects becomes a portfolio item.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(), // path inside public/, e.g. /images/projects/crm.png
    tech: z.array(z.string()).default([]),
    demo: z.string().url().optional(),
    repo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100), // lower numbers show first
    date: z.coerce.date().optional(),

    // Shows a green "online" dot on the card.
    live: z.boolean().default(false),

    // "How it's built" flow. Names with icons: Frontend, API, Backend, Database, Hosting.
    layers: z
      .array(z.object({ name: z.string(), detail: z.string() }))
      .default([]),

    // Optional sample API call; adds a UI / API toggle to the card.
    api: z
      .object({
        method: z.string().default('GET'),
        path: z.string(),
        response: z.string(),
      })
      .optional(),
  }),
});

export const collections = { projects };
