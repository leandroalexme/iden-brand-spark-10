
import React from 'react';
import { Card } from "@/components/ui/card";
import { ArrowRight, Clipboard, Layout, Palette, Send } from 'lucide-react';

const processoItems = [
  {
    id: 1,
    icon: Clipboard,
    title: "Briefing Simplificado",
    description: "Responda algumas perguntas essenciais sobre sua marca em um processo rápido e intuitivo."
  },
  {
    id: 2,
    icon: Layout,
    title: "Direções de Design",
    description: "Receba três conceitos únicos baseados no seu briefing, criados pela nossa IA."
  },
  {
    id: 3,
    icon: Palette,
    title: "Personalização",
    description: "Ajuste cores, tipografia e elementos da sua marca até ela ficar exatamente como você deseja."
  },
  {
    id: 4,
    icon: Send,
    title: "Entrega Completa",
    description: "Receba todos os arquivos de sua marca otimizados para uso em diversas plataformas."
  }
];

const ProcessSection = () => {
  return (
    <section id="processo" className="presentation-section bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Um processo simples e eficiente</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Da ideia à implementação em quatro etapas simples
          </p>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {processoItems.map((item, index) => (
            <Card key={item.id} className="presentation-card border-none relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-16 h-16 bg-iden-purple/10 rounded-br-3xl flex items-center justify-center">
                <item.icon className="text-iden-purple" size={24} />
              </div>
              <span className="absolute top-6 right-6 text-7xl font-bold text-gray-100 transition-all duration-300 group-hover:text-iden-purple/10">
                {index + 1}
              </span>
              <div className="pt-16 pb-4 px-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="absolute bottom-6 right-6 text-iden-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight size={20} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
