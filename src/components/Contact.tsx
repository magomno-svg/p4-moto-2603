import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info & Map */}
          <div>
            <div className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">
              Fale Conosco
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
              Entre em contato ou faça uma visita
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-lg text-brand-primary mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg">Localização</h4>
                  <p className="text-neutral-600">Av. Jurucê, 898 - Moema<br/>São Paulo - SP</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-lg text-brand-primary mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg">Telefones</h4>
                  <p className="text-neutral-600">(11) 5052-3563<br/>(11) 5051-4442</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-lg text-brand-primary mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg">E-mail</h4>
                  <p className="text-neutral-600">coopstar_express@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* Map placeholder/iframe */}
            <div className="w-full h-64 bg-neutral-200 rounded-2xl overflow-hidden shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.096350711929!2d-46.66627092367623!3d-23.600913863038622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a0ba34fa5ef%3A0xc3f605cf5f375080!2sAv.%20Juruc%C3%AA%2C%20898%20-%20Indian%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004080-012!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-neutral-100">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Envie uma mensagem</h3>
            
            {/* Action can be replaced with the actual Formspree endpoint */}
            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                    placeholder="(11) 90000-0000"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Mensagem</label>
                <textarea 
                  name="message" 
                  required
                  rows={4}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-hover text-white font-bold text-lg rounded-xl px-4 py-4 flex items-center justify-center gap-2 transition-all shadow-md shadow-red-500/20"
              >
                Enviar Mensagem
                <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
