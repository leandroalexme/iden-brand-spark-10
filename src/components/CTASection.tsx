
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-iden-purple-light">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Pronto para transformar sua marca?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Junte-se a milhares de empresas que elevaram suas marcas com a Iden™. 
          Nossa IA está pronta para criar uma identidade única e memorável para o seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-iden-purple hover:bg-iden-purple-dark text-white">
            Começar agora
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline">
            Agendar demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
