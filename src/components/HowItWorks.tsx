import { motion } from 'framer-motion';
import { PhoneCall, Map, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <PhoneCall className="w-8 h-8" />,
      title: "1. Contato",
      description: "Ligue para nós ou mande uma mensagem detalhando o que precisa ser entregue ou retirado."
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "2. Coleta",
      description: "Um de nossos motoboys parceiros vai até o local no horário agendado para retirar a encomenda."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "3. Entrega",
      description: "Sua encomenda chega ao destino com segurança e no prazo combinado."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">
            Processo Simples
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
            Como Funciona?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-red-100 -translate-y-1/2 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-3xl"
            >
              <div className="w-20 h-20 bg-white border-4 border-red-50 rounded-full flex items-center justify-center text-brand-primary mb-6 shadow-xl shadow-red-500/10">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
