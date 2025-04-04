
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const showcaseItems = [
  {
    id: 1,
    title: "Café Artesanal",
    category: "Identidade de Restaurante",
    description: "Projeto de branding para cafeteria artesanal com foco em design retrô e orgânico.",
    color: "from-amber-500 to-orange-500",
    letter: "C"
  },
  {
    id: 2,
    title: "Tech Solutions",
    category: "Identidade Tecnológica",
    description: "Marca minimalista criada para startup de desenvolvimento de software.",
    color: "from-blue-500 to-cyan-500",
    letter: "T"
  },
  {
    id: 3,
    title: "Natural Beauty",
    category: "Identidade de Cosméticos",
    description: "Sistema visual para marca de cosméticos naturais e sustentáveis.",
    color: "from-green-500 to-emerald-500",
    letter: "N"
  }
];

const Showcase = () => {
  return (
    <section id="showcase" className="presentation-section bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Showcase de Projetos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Uma seleção de identidades visuais criadas pela Iden™
          </p>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <Card key={item.id} className="presentation-card overflow-hidden border-none">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-72 bg-gradient-to-br overflow-hidden relative flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-4xl`}>
                      {item.letter}
                    </div>
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-iden-purple font-medium">{item.category}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <div className="presentation-image">
            <div className="aspect-video bg-white rounded-xl shadow-lg p-8 flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-md mx-auto">
                <div className="bg-gradient-to-br from-iden-purple/10 to-blue-500/10 p-6 rounded-xl">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-iden-purple to-blue-500 flex items-center justify-center text-white font-bold text-2xl">E</div>
                    <div>
                      <h3 className="text-xl font-bold">EcoVida</h3>
                      <p className="text-gray-600 text-sm">Produtos Sustentáveis</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500"></div>
                    <div className="w-6 h-6 rounded-full bg-teal-400"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="font-medium text-gray-800 font-serif">EcoVida</p>
                    <p className="text-xs text-gray-500">Poppins • Montserrat</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="caption-text text-center">Paleta de cores e tipografia da marca EcoVida</p>
          </div>
          
          <div className="presentation-image">
            <div className="aspect-video bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
              <div className="w-full max-w-md mx-auto">
                <div className="flex flex-col gap-4">
                  <div className="bg-gradient-to-r from-iden-purple/10 to-iden-purple-dark/10 h-24 rounded-xl flex items-center justify-center">
                    <p className="text-2xl font-serif font-bold gradient-text">Harmonia Spa</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-iden-purple"></div>
                    </div>
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-400"></div>
                    </div>
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="caption-text text-center">Aplicações de marca para Harmonia Spa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
