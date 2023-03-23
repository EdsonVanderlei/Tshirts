import { z } from "zod"


export type Team = z.infer<typeof schema>

export const schema = z.object({
  nome: z.string(),
  kit: z.string(),
  made: z.string(),
  about: z.string(),
  camiseta: z.string(),
  logo: z.string(),
  video: z.string(),
  background: z.string(),
  preview: z.object({
    kit: z.string(),
    nome: z.string(),
    camiseta: z.string(),
    color: z.string()
  })
})
