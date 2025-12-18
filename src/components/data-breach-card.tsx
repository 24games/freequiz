import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { AlertTriangle, Shield, ShieldAlert, ShieldCheck } from 'lucide-react'
import type { DataBreach } from '@/lib/schemas/data-breach'

/**
 * Variantes de card usando CVA (Class Variance Authority)
 * Diferentes estilos para diferentes níveis de risco
 */
const cardVariants = cva(
  "transition-all duration-300 hover:shadow-lg",
  {
    variants: {
      riskLevel: {
        low: "border-green-500/50 bg-green-500/5 hover:bg-green-500/10",
        medium: "border-yellow-500/50 bg-yellow-500/5 hover:bg-yellow-500/10",
        high: "border-orange-500/50 bg-orange-500/5 hover:bg-orange-500/10",
        critical: "border-red-500/50 bg-red-500/5 hover:bg-red-500/10",
      },
    },
    defaultVariants: {
      riskLevel: "medium",
    },
  }
)

const iconMap = {
  low: ShieldCheck,
  medium: Shield,
  high: ShieldAlert,
  critical: AlertTriangle,
}

const riskLabels = {
  low: "Baixo",
  medium: "Médio",
  high: "Alto",
  critical: "Crítico",
}

interface DataBreachCardProps extends VariantProps<typeof cardVariants> {
  breach: DataBreach
}

/**
 * Componente de Card para exibir vazamentos de dados
 * Usa CVA para variantes de risco
 */
export function DataBreachCard({ breach, riskLevel = breach.riskLevel }: DataBreachCardProps) {
  const Icon = iconMap[riskLevel || breach.riskLevel]
  
  return (
    <Card className={cn(cardVariants({ riskLevel: riskLevel || breach.riskLevel }))}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {breach.logo && (
              <img 
                src={breach.logo} 
                alt={breach.name}
                className="w-8 h-8 rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            )}
            {breach.name}
          </CardTitle>
          <div className="flex items-center gap-1 text-sm">
            <Icon className="w-4 h-4" />
            <span className="font-mono">{riskLabels[breach.riskLevel]}</span>
          </div>
        </div>
        {breach.description && (
          <CardDescription className="prose prose-sm max-w-none">
            {breach.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-semibold mb-1">Dados vazados:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {breach.leakedData.map((data, index) => (
                <li key={index} className="font-mono text-xs">{data}</li>
              ))}
            </ul>
          </div>
          {breach.affectedUsers && (
            <p className="text-sm font-mono">
              <span className="font-semibold">Usuários afetados:</span>{' '}
              {breach.affectedUsers.toLocaleString('pt-BR')}
            </p>
          )}
          <p className="text-xs text-muted-foreground font-mono">
            Data: {new Date(breach.date).toLocaleDateString('pt-BR')}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}


