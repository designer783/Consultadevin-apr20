import { Menu, X, ChevronDown, User } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Consulta VIN
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            <a
              href="#consulta-vin"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
            >
              Consulta VIN
            </a>
            <a
              href="#checar-vin"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
            >
              Checar VIN
            </a>
            <a
              href="#checar-placas"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
            >
              Checar Placas
            </a>
            <a
              href="#window-sticker"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
            >
              Window Sticker
            </a>
            <a
              href="#checar-titulo"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
            >
              Checar Titulo
            </a>

            {/* Herramientas Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm flex items-center gap-1"
              >
                Herramientas
                <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-3 w-56 bg-white rounded-lg shadow-lg border border-border/40 py-1"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <a
                    href="#checar-carro-robado"
                    className="block px-4 py-2.5 text-foreground/80 hover:bg-muted/40 hover:text-foreground transition-colors text-sm"
                  >
                    Checar carro robado
                  </a>
                  <a
                    href="#verificar-recalls"
                    className="block px-4 py-2.5 text-foreground/80 hover:bg-muted/40 hover:text-foreground transition-colors text-sm"
                  >
                    Verificar recalls
                  </a>
                  <a
                    href="#vin-carros-clasicos"
                    className="block px-4 py-2.5 text-foreground/80 hover:bg-muted/40 hover:text-foreground transition-colors text-sm"
                  >
                    VIN Carros Clásicos
                  </a>
                  <a
                    href="#reportes-muestra"
                    className="block px-4 py-2.5 text-foreground/80 hover:bg-muted/40 hover:text-foreground transition-colors text-sm"
                  >
                    Reportes de muestra
                  </a>
                  <a
                    href="#decreto-autos-chocolate"
                    className="block px-4 py-2.5 text-foreground/80 hover:bg-muted/40 hover:text-foreground transition-colors text-sm"
                  >
                    Decreto Autos Chocolate
                  </a>
                </div>
              )}
            </div>

            <Button variant="primary" size="sm">
              <User size={16} />
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-6 space-y-1">
            <a
              href="#consulta-vin"
              className="block text-foreground hover:text-primary transition-colors font-semibold py-3 px-4 rounded-lg hover:bg-muted/50"
              onClick={() => setIsMobileOpen(false)}
            >
              Consulta VIN
            </a>
            <a
              href="#checar-vin"
              className="block text-foreground hover:text-primary transition-colors font-semibold py-3 px-4 rounded-lg hover:bg-muted/50"
              onClick={() => setIsMobileOpen(false)}
            >
              Checar VIN
            </a>
            <a
              href="#checar-placas"
              className="block text-foreground hover:text-primary transition-colors font-semibold py-3 px-4 rounded-lg hover:bg-muted/50"
              onClick={() => setIsMobileOpen(false)}
            >
              Checar Placas
            </a>
            <a
              href="#window-sticker"
              className="block text-foreground hover:text-primary transition-colors font-semibold py-3 px-4 rounded-lg hover:bg-muted/50"
              onClick={() => setIsMobileOpen(false)}
            >
              Window Sticker
            </a>
            <a
              href="#checar-titulo"
              className="block text-primary hover:text-accent transition-colors font-semibold py-3 px-4 rounded-lg hover:bg-muted/50"
              onClick={() => setIsMobileOpen(false)}
            >
              Checar Titulo
            </a>

            {/* Mobile Herramientas */}
            <div className="pt-2">
              <div className="text-muted-foreground font-bold text-xs uppercase tracking-wider px-4 py-2">
                Herramientas
              </div>
              <a
                href="#checar-carro-robado"
                className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMobileOpen(false)}
              >
                Checar carro robado
              </a>
              <a
                href="#verificar-recalls"
                className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMobileOpen(false)}
              >
                Verificar recalls
              </a>
              <a
                href="#vin-carros-clasicos"
                className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMobileOpen(false)}
              >
                VIN Carros Clásicos
              </a>
              <a
                href="#reportes-muestra"
                className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMobileOpen(false)}
              >
                Reportes de muestra
              </a>
              <a
                href="#decreto-autos-chocolate"
                className="block text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMobileOpen(false)}
              >
                Decreto Autos Chocolate
              </a>
            </div>

            <div className="pt-4">
              <Button variant="primary" className="w-full">
                <User size={18} />
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
