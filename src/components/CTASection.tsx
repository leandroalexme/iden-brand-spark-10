
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-iden-purple text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Sua marca profissional em minutos
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Identidade visual e verbal completa, gerada por IA e pronta para uso.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/briefing">
              <Button 
                size="lg" 
                className="bg-white text-iden-purple hover:bg-gray-100"
              >
                Criar minha marca
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Explorar modelos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
