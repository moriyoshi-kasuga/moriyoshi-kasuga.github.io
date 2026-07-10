import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      createdAt: z.coerce.date(),
      genre: z.string(),
      github: z.string().url().optional(),
      site: z.string().url().optional(),
      technology: z.array(z.string()),
      objective: z.string(),
      background: z.string(),
      commitment: z.string(),
      gallery: z.array(image()).min(1),
      pin: z.boolean().default(false),
    }),
});

const skills = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/skills" }),
  schema: z.object({
    title: z.string(),
    favorite: z.number().int().min(1).max(5),
  }),
});

export const collections = { projects, skills };
