
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DesignCustomization = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const briefingData = state?.briefingData;
  const designDirection = state?.designDirection;

  React.useEffect(() => {
    if (!briefingData || !designDirection) {
      toast({
        title: "Informações incompletas",
        description: "Precisamos das informações anteriores para personalizar seu design.",
        variant: "destructive"
      });
      navigate('/briefing');
    } else {
      console.log("Dados recebidos:", { briefingData, designDirection });
    }
  }, [briefingData, designDirection, navigate, toast]);

  const handleBack = () => {
    navigate('/design-directions', { state: { briefingData } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Personalize Seu Design</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ajuste os elementos da sua marca para atender perfeitamente às suas necessidades.
            </p>
          </div>

          {designDirection && (
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Estilo {designDirection.name}
              </h2>

              <div className="aspect-video bg-gray-100 rounded-md mb-6 overflow-hidden">
                <img 
                  src={designDirection.previewImage} 
                  alt={`Design ${designDirection.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Em uma implementação real, aqui teríamos controles para personalização */}
              <div className="p-6 bg-gray-50 rounded-lg mb-6">
                <p className="text-center text-gray-500">
                  (Aqui seriam exibidos controles para personalizar cores, fontes, layouts, etc.)
                </p>
              </div>

              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handleBack}
                >
                  <ChevronLeft size={18} className="mr-1" />
                  Voltar
                </Button>
                <Button 
                  className="bg-iden-purple hover:bg-iden-purple-dark text-white"
                >
                  Finalizar
                  <ChevronRight size={18} className="ml-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesignCustomization;
