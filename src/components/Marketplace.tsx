
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const categories = ["Restaurante", "Tecnologia", "Moda", "Saúde", "Educação", "Serviços"];

const templates = [
  {
    name: "Café Artesanal",
    category: "Restaurante",
    thumbnail: "bg-amber-100",
    color: "bg-amber-500"
  },
  {
    name: "Tech Solutions",
    category: "Tecnologia",
    thumbnail: "bg-blue-100",
    color: "bg-blue-500"
  },
  {
    name: "Fashion Studio",
    category: "Moda",
    thumbnail: "bg-pink-100",
    color: "bg-pink-500"
  },
  {
    name: "Wellness Clinic",
    category: "Saúde",
    thumbnail: "bg-green-100",
    color: "bg-green-500"
  },
  {
    name: "Edu Academy",
    category: "Educação",
    thumbnail: "bg-purple-100",
    color: "bg-purple-500"
  },
  {
    name: "Service Pro",
    category: "Serviços",
    thumbnail: "bg-gray-100",
    color: "bg-gray-500"
  }
];

const Marketplace = () => {
  return (
    <section id="marketplace" className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Marketplace de Marcas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Encontre identidades visuais prontas criadas por designers profissionais, personalizáveis para o seu negócio.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <Button variant="outline" className="rounded-full">
            Todos
          </Button>
          {categories.map((category, index) => (
            <Button key={index} variant="outline" className="rounded-full">
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className={`${template.thumbnail} aspect-video flex items-center justify-center`}>
                <div className={`${template.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                  {template.name.charAt(0)}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-serif font-bold">{template.name}</h3>
                    <p className="text-sm text-gray-500">{template.category}</p>
                  </div>
                  <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded-md">R$149</span>
                </div>
                <Button variant="ghost" className="w-full flex justify-between items-center">
                  <span>Ver detalhes</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Ver mais modelos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
