import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Vocês funcionam de final de semana?",
      answer: "Sim! Funcionamos 24 horas, de segunda a segunda-feira. Porém, para serviços fora do horário comercial, é necessário realizar agendamento com hora marcada previamente."
    },
    {
      question: "Quais as áreas de atendimento?",
      answer: "Nosso foco principal é em São Paulo (Capital) e Grande São Paulo. Também realizamos serviços para o interior e fora da capital sob consulta prévia."
    },
    {
      question: "Como funciona para restaurantes e farmácias?",
      answer: "Temos planos de terceirização de frota (Delivery Integrado). Disponibilizamos motoboys exclusivos para o seu estabelecimento, o que reduz seus custos trabalhistas e melhora a eficiência."
    },
    {
      question: "Quais as formas de pagamento aceitas?",
      answer: "Trabalhamos com faturamento mensal para empresas cadastradas (boleto bancário). Para avulsos, aceitamos PIX e dinheiro."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">
            Dúvidas Comuns
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold text-neutral-900 text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`text-brand-primary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-neutral-600 border-t border-neutral-100 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
