
import React from 'react';
import { Check, Clipboard, Layout, Palette, Pencil, Send } from 'lucide-react';

const steps = [
  {
    title: "Briefing Inicial",
    description: "Responda perguntas essenciais sobre sua marca, setor, valores e público-alvo.",
    icon: Clipboard,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Cadastro Simples",
    description: "Crie uma conta rapidamente para salvar suas preferências de marca.",
    icon: Check,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Direções de Design",
    description: "Receba três direções exclusivas de design com base no seu briefing.",
    icon: Layout,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    title: "Ajustes com IA",
    description: "Converse com nossa IA para refinar e ajustar sua identidade visual.",
    icon: Pencil,
    color: "bg-iden-purple-light text-iden-purple-dark"
  },
  {
    title: "Paleta e Tipografia",
    description: "Escolha cores e fontes que combinam perfeitamente com sua marca.",
    icon: Palette,
    color: "bg-pink-100 text-pink-600"
  },
  {
    title: "Entrega Final",
    description: "Receba todos os arquivos prontos para uso digital e impressão.",
    icon: Send,
    color: "bg-teal-100 text-teal-600"
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Como funciona a Iden™</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Um processo simples e eficiente para criar sua identidade de marca personalizada, combinando a expertise de design com a agilidade da IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`${step.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
