import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-brand-primary" />,
      title: "Foco no Cliente",
      description: "Agilizamos seus serviços com uma equipe dedicada e focada no êxito do seu negócio."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-primary" />,
      title: "Equipe Especializada",
      description: "Profissionais treinados para entregas seguras e pontuais em toda região."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-primary" />,
      title: "Resultados",
      description: "Desempenhamos uma função estratégica para destacar a sua empresa no mercado."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Quem Somos</div>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              Mais de <span className="text-brand-primary">9 anos</span> entregando compromisso e agilidade
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              A Coopstar Express é uma empresa especializada no serviço de entregas e coletas. Oferecemos excelentes serviços e desempenhamos uma função vital para nossos clientes: <strong className="text-neutral-900">agilizar processos e reduzir distâncias</strong>, tornando-nos uma empresa de destaque neste segmento.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Atendemos em <strong className="text-neutral-900">São Paulo (Capital) e Grande São Paulo</strong>. Funcionamos 24 horas, de segunda a segunda-feira (agendamento com hora marcada).
            </p>
            
            <a href="#contato" className="inline-flex items-center gap-2 font-bold text-brand-primary hover:text-brand-hover transition-colors group">
              Faça já seu cadastro ou solicite um representante
              <span className="w-8 h-px bg-brand-primary transition-all group-hover:w-12"></span>
            </a>
          </motion.div>

          <div className="lg:w-1/2 w-full">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-neutral-50 p-6 rounded-2xl border border-neutral-100 hover:shadow-lg hover:border-red-100 transition-all ${idx === 2 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
