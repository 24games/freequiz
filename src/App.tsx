function App() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 font-sans">
          Landing Page - Vazamento de Dados
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Projeto React + Vite configurado com sucesso! 🚀
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-card rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Deploy na Vercel</h2>
            <p className="text-muted-foreground">
              Este projeto está configurado para deploy na Vercel com:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
              <li>✅ Vercel Analytics habilitado</li>
              <li>✅ Vercel Speed Insights habilitado</li>
            </ul>
          </div>
          <div className="p-4 bg-card rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Tecnologias</h2>
            <p className="text-muted-foreground">
              React + Vite + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

