
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section id="funcionalidades" className="presentation-section bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Recursos e funcionalidades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ferramentas avançadas para criar a identidade visual perfeita
          </p>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-20">
          <div className="presentation-image order-2 md:order-1">
            <div className="aspect-square rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-full bg-white p-6">
                <div className="h-full grid grid-cols-2 gap-3 bg-iden-purple/5 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="h-24 rounded-lg bg-white shadow-sm flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-iden-purple flex items-center justify-center text-white font-bold text-2xl">A</div>
                    </div>
                    <div className="h-24 rounded-lg bg-white shadow-sm"></div>
                    <div className="h-24 rounded-lg bg-white shadow-sm"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-24 rounded-lg bg-white shadow-sm flex flex-col items-center justify-center p-2">
                      <div className="flex space-x-1 mb-1">
                        <div className="w-4 h-4 rounded-full bg-iden-purple"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                        <div className="w-4 h-4 rounded-full bg-green-400"></div>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full"></div>
                      <div className="w-full h-3 bg-gray-200 rounded-full mt-1"></div>
                    </div>
                    <div className="h-52 rounded-lg bg-white shadow-sm flex items-center justify-center p-3">
                      <div className="w-full h-full border-2 border-dashed border-gray-200 rounded flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                          <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="caption-text text-center mt-3">Painel de personalização de marca</p>
          </div>
          
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">Personalização completa</h3>
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-iden-purple/10 flex items-center justify-center text-iden-purple shrink-0">1</div>
                <div>
                  <h4 className="font-medium text-lg">Paleta de cores personalizável</h4>
                  <p className="text-gray-600">Ajuste cada cor até encontrar a combinação perfeita que representa sua marca.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-iden-purple/10 flex items-center justify-center text-iden-purple shrink-0">2</div>
                <div>
                  <h4 className="font-medium text-lg">Sistema tipográfico completo</h4>
                  <p className="text-gray-600">Escolha entre várias famílias tipográficas e ajuste pesos e estilos.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-iden-purple/10 flex items-center justify-center text-iden-purple shrink-0">3</div>
                <div>
                  <h4 className="font-medium text-lg">Visualização em tempo real</h4>
                  <p className="text-gray-600">Veja as mudanças sendo aplicadas instantaneamente em vários formatos.</p>
                </div>
              </div>
            </div>
            
            <Link to="/briefing">
              <Button size="lg" className="bg-iden-purple hover:bg-iden-purple-dark text-white">
                Experimentar agora
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
