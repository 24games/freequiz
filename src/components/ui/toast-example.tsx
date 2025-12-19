import { Button } from './button'
import { toast } from 'sonner'
import { Copy, CheckCircle, AlertCircle, Info } from 'lucide-react'

/**
 * Exemplo de uso do Sonner para toasts
 */
export function ToastExamples() {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold mb-2">Exemplos de Toasts (Sonner)</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => toast.success('Link copiado com sucesso!', {
            icon: <CheckCircle className="w-4 h-4" />,
          })}
        >
          <Copy className="w-4 h-4 mr-2" />
          Copiar Link
        </Button>
        
        <Button
          variant="destructive"
          onClick={() => toast.error('Erro ao processar dados!', {
            icon: <AlertCircle className="w-4 h-4" />,
          })}
        >
          <AlertCircle className="w-4 h-4 mr-2" />
          Erro
        </Button>
        
        <Button
          variant="outline"
          onClick={() => toast.info('Informação importante', {
            icon: <Info className="w-4 h-4" />,
          })}
        >
          <Info className="w-4 h-4 mr-2" />
          Info
        </Button>
      </div>
    </div>
  )
}




