export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-10" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 text-center">
          {/* Links Legales */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-zinc-500 hover:text-white text-xs sm:text-sm transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault()
                // Agregar link real cuando esté disponible
              }}
            >
              Términos de Uso
            </a>
            <span className="text-zinc-600">•</span>
            <a
              href="#"
              className="text-zinc-500 hover:text-white text-xs sm:text-sm transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault()
                // Agregar link real cuando esté disponible
              }}
            >
              Política de Privacidad
            </a>
          </div>

          {/* Aviso de Responsabilidad con ícono 18+ */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-zinc-500 text-[10px] sm:text-xs leading-relaxed">
              Juega con responsabilidad. Prohibido para menores de 18 años.
            </span>
            <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-zinc-800 border border-zinc-700 rounded text-zinc-400 text-[10px] sm:text-xs font-bold">
              18+
            </span>
          </div>

          {/* Copyright */}
          <p className="text-zinc-500 text-xs sm:text-sm">
            © 2024 Vicente Tips. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

