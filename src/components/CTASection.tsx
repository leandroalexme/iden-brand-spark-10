
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-iden-purple"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500 opacity-30 blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-iden-purple opacity-30 blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Pronto para transformar sua marca?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Crie uma identidade visual única e memorável com a Iden™. 
            O processo é simples, rápido e o resultado é profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/briefing">
              <Button 
                size="lg" 
                className="bg-iden-purple hover:bg-iden-purple-dark text-white"
              >
                Começar agora
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
