import { motion } from 'framer-motion';
import { Bike, Store, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Serviços Moto Frete",
      description: "Entregas rápidas de documentos e pequenos volumes de um ponto a outro da cidade incluindo serviços bancários, cartórios e despachos e retiradas em aeroportos.",
      delay: 0.1
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Delivery Integrado",
      description: "Implantação de serviço de delivery com o melhor custo-benefício para empresas com grande volume de entregas. Ideal para Farmácias, Pizzarias, Restaurantes e Auto Peças.",
      delay: 0.2
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Fora da Capital",
      description: "Precisou enviar para longe? Atendemos o interior e outras regiões com rapidez e segurança. Consulte nossa tabela de preços para serviços fora da capital.",
      delay: 0.3
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-neutral-50 relative border-t border-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3"
          >
            Nossas Soluções
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-neutral-900 mb-6"
          >
            Serviços <span className="text-brand-primary">Sob Medida</span> para Você
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-600"
          >
            Da entrega simples ao gerenciamento logístico da sua loja. Conheça o que podemos fazer pelo seu negócio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl hover:border-red-200 transition-all group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 ease-in-out duration-700 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-red-100 text-brand-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
