
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-white px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left flex flex-col gap-6 animate-reveal-right">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Identidade visual <span className="gradient-text">potencializada</span> por IA
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl">
              Crie uma identidade de marca profissional e única para o seu negócio em questão de minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/briefing">
                <Button size="lg" className="bg-iden-purple hover:bg-iden-purple-dark text-white">
                  Iniciar projeto
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="#showcase">
                <Button size="lg" variant="outline">
                  Ver exemplos
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl animate-float">
              <div className="grid grid-cols-2 gap-4 h-full bg-white p-8">
                <div className="aspect-square rounded-lg bg-iden-purple-light flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-iden-purple to-blue-500 flex items-center justify-center text-white font-bold text-2xl">A</div>
                </div>
                <div className="aspect-square rounded-lg bg-blue-100 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold text-2xl">B</div>
                </div>
                <div className="aspect-square rounded-lg bg-yellow-100 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-2xl">C</div>
                </div>
                <div className="aspect-square rounded-lg bg-green-100 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-2xl">D</div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 w-full h-full top-4 left-4 rounded-2xl bg-gradient-to-br from-iden-purple/30 to-blue-500/30 blur-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
