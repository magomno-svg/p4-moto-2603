import { motion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-red-50 blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-red-100 blur-3xl opacity-30 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-brand-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Plantão 24 Horas
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 leading-tight mb-6">
              Entregas Rápidas e Seguras para o seu <span className="text-brand-primary">Negócio</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
              Soluções logísticas inteligentes em São Paulo e Grande SP. Agilidade, segurança e compromisso com o seu prazo há mais de 9 anos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contato" 
                className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-red-500/30 transform hover:-translate-y-1"
              >
                Solicitar Cotação
                <ArrowRight size={20} />
              </a>
              <a 
                href="#servicos" 
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-neutral-200 hover:border-neutral-300 text-neutral-700 hover:text-neutral-900 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Conheça os Serviços
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-neutral-500 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="text-brand-primary" size={20} />
                <span>Agendamento Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-primary" size={20} />
                <span>Carga Segura</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/hero_illustration.png" 
                alt="Entregador de moto dinâmico" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-neutral-100 flex items-center gap-4"
            >
              <div className="bg-red-100 p-3 rounded-full text-brand-primary">
                <span className="font-black text-xl">+9</span>
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">Anos de</p>
                <p className="text-xs text-neutral-500">Experiência no mercado</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
