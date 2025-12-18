import { z } from "zod"

export const dataBreachSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Nome é obrigatório"),
  logo: z.string().url("Logo deve ser uma URL válida"),
  description: z.string().optional(),
  riskLevel: z.enum(["low", "medium", "high", "critical"]),
  leakedData: z.array(z.string()),
  date: z.string().datetime(),
  affectedUsers: z.number().int().positive().optional(),
  source: z.string().url().optional(),
})

export type DataBreach = z.infer<typeof dataBreachSchema>

export const dataBreachListSchema = z.array(dataBreachSchema)

export type DataBreachList = z.infer<typeof dataBreachListSchema>

