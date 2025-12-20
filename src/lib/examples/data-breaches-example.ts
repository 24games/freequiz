import type { DataBreach } from '../schemas/data-breach'
import { dataBreachSchema } from '../schemas/data-breach'

/**
 * Exemplo de dados de vazamento validados com Zod
 */
export const exampleBreaches: DataBreach[] = [
  {
    id: '1',
    name: 'Casa de Apostas A',
    logo: 'https://via.placeholder.com/64',
    description: 'Vazamento de dados pessoais e financeiros',
    riskLevel: 'critical',
    leakedData: ['Emails', 'Senhas', 'CPF', 'Cartões de Crédito'],
    date: new Date('2024-01-15').toISOString(),
    affectedUsers: 500000,
    source: 'https://example.com/breach-1',
  },
  {
    id: '2',
    name: 'Casa de Apostas B',
    logo: 'https://via.placeholder.com/64',
    description: 'Exposição de dados de cadastro',
    riskLevel: 'high',
    leakedData: ['Emails', 'Nomes', 'Telefones'],
    date: new Date('2024-02-20').toISOString(),
    affectedUsers: 250000,
  },
  {
    id: '3',
    name: 'Casa de Apostas C',
    logo: 'https://via.placeholder.com/64',
    riskLevel: 'medium',
    leakedData: ['Emails'],
    date: new Date('2024-03-10').toISOString(),
    affectedUsers: 100000,
  },
  {
    id: '4',
    name: 'Casa de Apostas D',
    logo: 'https://via.placeholder.com/64',
    riskLevel: 'low',
    leakedData: ['Nomes públicos'],
    date: new Date('2024-04-05').toISOString(),
  },
]

// Validar os dados com Zod
export const validatedBreaches = exampleBreaches.map(breach => {
  return dataBreachSchema.parse(breach)
})







