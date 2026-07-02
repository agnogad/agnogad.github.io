import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    canonicalURL: z.string().optional(),
    categories: z.array(z.string()).default([]),
    author: z.string().optional(),
  }),
});

export const collections = { posts };
