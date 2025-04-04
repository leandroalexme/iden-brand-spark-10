
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-pattern min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="text-left flex flex-col gap-6 animate-fade-in">
          <div className="inline-flex items-center bg-iden-purple-light text-iden-purple-dark px-4 py-1.5 rounded-full text-sm font-medium mb-2">
            <Sparkles size={16} className="mr-2" />
            <span>Identidade Visual Otimizada por IA</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Transforme sua <span className="gradient-text">marca</span> com inteligência artificial
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-lg">
            Iden™ é um estúdio de branding digital impulsionado por IA que cria identidades visuais exclusivas para 
            o seu negócio em questão de minutos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="bg-iden-purple hover:bg-iden-purple-dark text-white">
              Comece a criar sua marca
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Ver exemplos
            </Button>
          </div>
          
          <div className="flex items-center gap-3 mt-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-iden-purple border-2 border-white flex items-center justify-center text-xs font-semibold text-white">+</div>
            </div>
            <p className="text-sm text-gray-600">
              Mais de <span className="font-semibold">5.000 marcas</span> criadas com Iden™
            </p>
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="w-full max-w-md aspect-square bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 animate-float">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="font-serif font-bold text-lg">Exemplos de Marcas</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6">
              <div className="aspect-square rounded-lg bg-iden-purple-light flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-iden-purple to-blue-500 flex items-center justify-center text-white font-bold text-xl">A</div>
              </div>
              <div className="aspect-square rounded-lg bg-blue-100 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">B</div>
              </div>
              <div className="aspect-square rounded-lg bg-yellow-100 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">C</div>
              </div>
              <div className="aspect-square rounded-lg bg-green-100 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">D</div>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 w-full max-w-md aspect-square rounded-xl bg-gradient-to-br from-iden-purple to-blue-500 blur-3xl opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
