import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const knowledge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/knowledge' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['pillar', 'cluster']),
    pillar: z.string().optional(),
    order: z.number().default(99),
    updated: z.coerce.date(),
    readingTime: z.number().optional(),
    keywords: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    keyTakeaways: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    heroImage: z.string().optional(),
  }),
});

export const collections = { knowledge };
