import { Package, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="bg-neutral-800 p-2 rounded-lg text-white">
              <Package size={20} />
            </div>
            <span className="font-black text-xl tracking-tight text-white">
              Coopstar<span className="text-brand-primary">Express</span>
            </span>
          </div>

          <div className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados.
          </div>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-neutral-800 hover:bg-brand-primary text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
