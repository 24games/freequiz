import { Drawer } from 'vaul'
import { Button } from './button'
import { Menu } from 'lucide-react'

/**
 * Exemplo de uso do Vaul para drawers (gavetas mobile)
 */
export function DrawerExample() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline">
          <Menu className="w-4 h-4 mr-2" />
          Abrir Drawer
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-background flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-muted rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 bg-muted-foreground/20 rounded-full mb-8" />
            <Drawer.Title className="text-2xl font-bold mb-4">
              Drawer Example
            </Drawer.Title>
            <p className="text-muted-foreground mb-4">
              Este é um exemplo de drawer usando Vaul. Perfeito para mobile!
            </p>
            <Drawer.Close asChild>
              <Button>Fechar</Button>
            </Drawer.Close>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}




