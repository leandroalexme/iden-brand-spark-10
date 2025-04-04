
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

// Mock design directions (em produção, seriam geradas com base no briefing)
const mockDesignDirections = [
  {
    id: 1,
    name: 'Contemporâneo',
    description: 'Design moderno e minimalista com formas geométricas e tipografia clean.',
    previewImage: '/placeholder.svg',
    colors: ['#9b87f5', '#ffffff', '#333333', '#f5f5f5'],
    fonts: ['Montserrat', 'Open Sans']
  },
  {
    id: 2,
    name: 'Clássico',
    description: 'Design elegante e atemporal com elementos tradicionais e sofisticados.',
    previewImage: '/placeholder.svg',
    colors: ['#8B5CF6', '#000000', '#e6e6e6', '#f0f0f0'],
    fonts: ['Playfair Display', 'Lato']
  },
  {
    id: 3,
    name: 'Expressivo',
    description: 'Design vibrante e dinâmico com elementos gráficos marcantes e cores intensas.',
    previewImage: '/placeholder.svg',
    colors: ['#6E59A5', '#FEC6A1', '#E5DEFF', '#222222'],
    fonts: ['Poppins', 'Roboto']
  }
];

const DesignDirections = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const briefingData = state?.briefingData;
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);

  // Verificar se temos os dados do briefing
  React.useEffect(() => {
    if (!briefingData) {
      toast({
        title: "Dados do briefing não encontrados",
        description: "Precisamos das informações do seu briefing para gerar as direções de design.",
        variant: "destructive"
      });
      navigate('/briefing');
    } else {
      console.log("Dados do briefing recebidos:", briefingData);
    }
  }, [briefingData, navigate, toast]);

  const handleSelectDesign = (id: number) => {
    setSelectedDesign(id);
  };

  const handleContinue = () => {
    if (!selectedDesign) {
      toast({
        title: "Selecione uma direção de design",
        description: "Por favor, escolha uma das direções de design para continuar.",
      });
      return;
    }

    const selectedDirectionData = mockDesignDirections.find(dir => dir.id === selectedDesign);
    navigate('/customization', { 
      state: { 
        briefingData, 
        designDirection: selectedDirectionData 
      } 
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Direções de Design</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Com base nas suas informações, nossa IA gerou três direções de design para sua marca. 
              Escolha a que melhor representa sua visão.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {mockDesignDirections.map((direction) => (
              <div 
                key={direction.id}
                className={cn(
                  "bg-white p-6 rounded-xl shadow-sm border-2 transition-all cursor-pointer hover:shadow-md",
                  selectedDesign === direction.id ? "border-iden-purple" : "border-transparent"
                )}
                onClick={() => handleSelectDesign(direction.id)}
              >
                <div className="aspect-video bg-gray-100 rounded-md mb-4 overflow-hidden">
                  <img 
                    src={direction.previewImage} 
                    alt={`Design ${direction.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">{direction.name}</h3>
                  {selectedDesign === direction.id && (
                    <div className="bg-iden-purple text-white rounded-full p-1">
                      <Check size={16} />
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{direction.description}</p>
                
                <div className="mb-3">
                  <div className="text-xs text-gray-500 mb-1">Paleta de Cores</div>
                  <div className="flex gap-2">
                    {direction.colors.map((color, idx) => (
                      <div 
                        key={idx}
                        className="w-6 h-6 rounded-full border border-gray-200" 
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-500 mb-1">Fontes</div>
                  <div className="flex gap-2 flex-wrap">
                    {direction.fonts.map((font, idx) => (
                      <span key={idx} className="text-sm bg-gray-100 px-2 py-1 rounded">
                        {font}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleContinue}
              className="bg-iden-purple hover:bg-iden-purple-dark text-white"
              size="lg"
              disabled={!selectedDesign}
            >
              Continuar
              <ChevronRight size={18} className="ml-1" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesignDirections;
