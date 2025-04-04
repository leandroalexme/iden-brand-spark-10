
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Header from "@/components/Header";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Clean and Apple-inspired */}
        <section className="py-20 px-4 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Identidade visual em minutos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Nossa IA cria uma identidade visual profissional e exclusiva instantaneamente,
              sem conhecimentos em design.
            </p>
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
        </section>
        
        {/* Visual showcase */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Identidade visual completa
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Todos os materiais que sua marca precisa, gerados em segundos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-square bg-iden-purple/10 flex items-center justify-center p-8">
                  <div className="w-24 h-24 rounded-full bg-iden-purple flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">A</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Logo Profissional</h3>
                  <p className="text-gray-600">Logotipos exclusivos que representam sua marca e seus valores</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-square bg-iden-purple/10 flex items-center justify-center p-8">
                  <div className="w-48 h-32 bg-white rounded shadow-sm flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-iden-purple mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold">B</span>
                      </div>
                      <div className="text-sm font-bold">Sua Marca</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Papelaria Completa</h3>
                  <p className="text-gray-600">Cartões, papel timbrado, envelopes e outros materiais essenciais</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-square bg-iden-purple/10 flex items-center justify-center p-8">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="w-12 h-12 rounded-full bg-iden-purple/80"></div>
                    <div className="w-12 h-12 rounded-full bg-iden-purple/60"></div>
                    <div className="w-12 h-12 rounded-full bg-iden-purple/40"></div>
                    <div className="w-12 h-12 rounded-full bg-white border"></div>
                    <div className="w-12 h-12 rounded-full bg-gray-800"></div>
                    <div className="w-12 h-12 rounded-full bg-gray-500"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Identidade Completa</h3>
                  <p className="text-gray-600">Paletas de cores, tipografia e elementos para uma marca consistente</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process section */}
        <ProcessSection />
        
        {/* Simple CTA */}
        <section className="py-16 px-4 bg-iden-purple text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Sua marca, pronta para o mundo
            </h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto mb-8">
              Em poucos minutos, você terá uma identidade visual profissional para usar onde quiser.
            </p>
            <Link to="/briefing">
              <Button 
                size="lg" 
                className="bg-white text-iden-purple hover:bg-gray-100"
              >
                Criar minha marca
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
