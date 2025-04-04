
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, ChevronRight, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Plans from '@/components/Plans';

const BrandPresentation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeMaterial, setActiveMaterial] = useState('logo');
  
  // Data from previous steps
  const briefingData = state?.briefingData;
  const designDirection = state?.designDirection;
  const designCustomization = state?.designCustomization;
  
  useEffect(() => {
    if (!briefingData || !designDirection) {
      toast({
        title: "Informações incompletas",
        description: "Precisamos das informações anteriores para exibir sua marca.",
        variant: "destructive"
      });
      navigate('/briefing');
    }
  }, [briefingData, designDirection, navigate, toast]);

  const materials = [
    { id: 'logo', name: 'Logo', free: true },
    { id: 'business-card', name: 'Cartão de Visita', free: true },
    { id: 'letterhead', name: 'Papel Timbrado', free: false },
    { id: 'social-media', name: 'Redes Sociais', free: true },
    { id: 'presentation', name: 'Apresentação', free: false },
    { id: 'brand-book', name: 'Manual de Marca', free: false }
  ];
  
  // Simulating brand colors from the customization
  const brandColors = designCustomization?.colors || {
    primary: '#9b87f5',
    secondary: '#ffffff',
    accent: '#333333'
  };
  
  const handleDownload = (materialId) => {
    const material = materials.find(m => m.id === materialId);
    
    if (material?.free) {
      toast({
        title: "Download iniciado",
        description: `Seu arquivo ${material.name} está sendo preparado para download.`
      });
    } else {
      toast({
        title: "Material premium",
        description: "Este material está disponível apenas nos planos pagos.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero section for the final presentation */}
        <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="container max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Sua marca está pronta
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              Criamos uma identidade visual profissional e única para {briefingData?.brandName || "sua marca"}. 
              Explore os materiais abaixo e escolha seu plano para começar a utilizar.
            </p>
          </div>
        </section>
        
        {/* Brand showcase section */}
        <section className="py-12 px-4 bg-white">
          <div className="container max-w-6xl mx-auto">
            {/* Showcase navigation */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {materials.map((material) => (
                <button
                  key={material.id}
                  onClick={() => setActiveMaterial(material.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative
                    ${activeMaterial === material.id 
                      ? 'bg-iden-purple text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {material.name}
                  {!material.free && (
                    <Lock size={12} className="ml-1 inline-block" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Preview area */}
            <div className="bg-gray-50 border rounded-xl p-6 mb-12">
              <div className="aspect-[16/9] bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                {activeMaterial === 'logo' && (
                  <div className="p-12 flex flex-col items-center justify-center" style={{backgroundColor: brandColors.secondary}}>
                    <div className="w-32 h-32 rounded-full mb-4" style={{backgroundColor: brandColors.primary}}>
                      <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                        {briefingData?.brandName?.charAt(0) || "B"}
                      </div>
                    </div>
                    <div className="text-2xl font-bold" style={{color: brandColors.accent}}>
                      {briefingData?.brandName || "Sua Marca"}
                    </div>
                    <div className="text-sm mt-1" style={{color: brandColors.accent}}>
                      {briefingData?.industry || "Seu Negócio"}
                    </div>
                  </div>
                )}
                
                {activeMaterial === 'business-card' && (
                  <div className="relative w-80 h-48 rounded shadow-md p-6" style={{backgroundColor: brandColors.secondary}}>
                    <div className="absolute top-6 left-6">
                      <div className="w-10 h-10 rounded-full mb-2" style={{backgroundColor: brandColors.primary}}>
                        <div className="w-full h-full flex items-center justify-center text-white font-bold">
                          {briefingData?.brandName?.charAt(0) || "B"}
                        </div>
                      </div>
                      <div className="text-lg font-bold" style={{color: brandColors.primary}}>
                        {briefingData?.brandName || "Sua Marca"}
                      </div>
                      <div className="text-xs" style={{color: brandColors.accent}}>
                        {briefingData?.industry || "Seu Negócio"}
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-6 text-right text-xs" style={{color: brandColors.accent}}>
                      <div>contato@{briefingData?.brandName?.toLowerCase() || "suamarca"}.com</div>
                      <div>+55 11 99999-9999</div>
                      <div>www.{briefingData?.brandName?.toLowerCase() || "suamarca"}.com</div>
                    </div>
                  </div>
                )}
                
                {activeMaterial === 'social-media' && (
                  <div className="w-full max-w-md aspect-square relative overflow-hidden">
                    <div 
                      className="absolute inset-0" 
                      style={{backgroundColor: brandColors.secondary}}
                    ></div>
                    <div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                    >
                      <div 
                        className="w-24 h-24 rounded-full mb-4 mx-auto"
                        style={{backgroundColor: brandColors.primary}}
                      >
                        <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                          {briefingData?.brandName?.charAt(0) || "B"}
                        </div>
                      </div>
                      <div 
                        className="text-xl font-bold" 
                        style={{color: brandColors.accent}}
                      >
                        {briefingData?.brandName || "Sua Marca"}
                      </div>
                      <div 
                        className="text-sm mt-1" 
                        style={{color: brandColors.accent}}
                      >
                        {briefingData?.industry || "Seu Negócio"}
                      </div>
                    </div>
                  </div>
                )}
                
                {(activeMaterial === 'letterhead' || activeMaterial === 'presentation' || activeMaterial === 'brand-book') && (
                  <div className="flex flex-col items-center justify-center text-center p-8">
                    <Lock size={48} className="text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold text-gray-700">Material Premium</h3>
                    <p className="text-gray-500 max-w-md mt-2">
                      Este material está disponível apenas nos planos pagos. 
                      Escolha um plano abaixo para ter acesso a todos os materiais da sua marca.
                    </p>
                  </div>
                )}
              </div>
              
              {/* Download button for current material */}
              <div className="flex justify-center mt-6">
                <Button 
                  onClick={() => handleDownload(activeMaterial)}
                  className={`${materials.find(m => m.id === activeMaterial)?.free 
                    ? 'bg-iden-purple hover:bg-iden-purple-dark text-white' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  disabled={!materials.find(m => m.id === activeMaterial)?.free}
                >
                  <Download size={18} className="mr-2" />
                  {materials.find(m => m.id === activeMaterial)?.free 
                    ? "Download Gratuito" 
                    : "Material Premium"}
                </Button>
              </div>
            </div>
            
            {/* Further actions */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-serif font-bold mb-4">Quer acesso a todos os materiais?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Escolha um plano para baixar todos os materiais em alta resolução e formatos editáveis.
              </p>
              <Button 
                className="bg-iden-purple hover:bg-iden-purple-dark text-white"
                onClick={() => document.getElementById('planos')?.scrollIntoView({behavior: 'smooth'})}
              >
                Ver planos disponíveis
                <ChevronRight size={18} className="ml-1" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Plans section */}
        <Plans />
      </main>
      <Footer />
    </div>
  );
};

export default BrandPresentation;
