
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { DesignEditor } from '@/components/DesignEditor';
import { ColorPicker } from '@/components/ColorPicker';

const DesignCustomization = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const briefingData = state?.briefingData;
  const designDirection = state?.designDirection;
  
  const [primaryColor, setPrimaryColor] = useState(designDirection?.colors?.[0] || "#9b87f5");
  const [secondaryColor, setSecondaryColor] = useState(designDirection?.colors?.[1] || "#ffffff");
  const [accentColor, setAccentColor] = useState(designDirection?.colors?.[2] || "#333333");
  const [selectedFont, setSelectedFont] = useState(designDirection?.fonts?.[0] || "Montserrat");

  useEffect(() => {
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

  const handleFinalize = () => {
    // Collect customization data
    const customizationData = {
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
      },
      font: selectedFont
    };
    
    // Navigate to presentation page with all the data
    navigate('/presentation', { 
      state: { 
        briefingData, 
        designDirection,
        designCustomization: customizationData
      } 
    });
    
    toast({
      title: "Design finalizado!",
      description: "Sua identidade visual foi gerada com sucesso.",
    });
  };

  const handleReset = () => {
    setPrimaryColor(designDirection?.colors?.[0] || "#9b87f5");
    setSecondaryColor(designDirection?.colors?.[1] || "#ffffff");
    setAccentColor(designDirection?.colors?.[2] || "#333333");
    setSelectedFont(designDirection?.fonts?.[0] || "Montserrat");
    
    toast({
      title: "Cores e fontes redefinidas",
      description: "As configurações originais foram restauradas.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Personalize Seu Design</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ajuste os elementos da sua marca para atender perfeitamente às suas necessidades.
            </p>
          </div>

          {designDirection && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Painel de Edição */}
              <div className="lg:col-span-1">
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Opções de Personalização</h2>
                    
                    <div className="space-y-6">
                      {/* Seleção de Cores */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Cores</h3>
                        
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="primaryColor" className="block mb-2">Cor Primária</Label>
                            <ColorPicker 
                              id="primaryColor"
                              color={primaryColor} 
                              onChange={setPrimaryColor}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="secondaryColor" className="block mb-2">Cor Secundária</Label>
                            <ColorPicker 
                              id="secondaryColor"
                              color={secondaryColor} 
                              onChange={setSecondaryColor}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="accentColor" className="block mb-2">Cor de Destaque</Label>
                            <ColorPicker 
                              id="accentColor"
                              color={accentColor} 
                              onChange={setAccentColor}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Seleção de Fontes */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Tipografia</h3>
                        
                        <div className="space-y-2">
                          <div className="grid grid-cols-1 gap-2">
                            <label className="flex items-center space-x-2">
                              <Checkbox 
                                id="fontMontserrat" 
                                checked={selectedFont === "Montserrat"} 
                                onCheckedChange={() => setSelectedFont("Montserrat")}
                              />
                              <span className="font-['Montserrat'] text-lg">Montserrat</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <Checkbox 
                                id="fontPlayfair" 
                                checked={selectedFont === "Playfair Display"} 
                                onCheckedChange={() => setSelectedFont("Playfair Display")}
                              />
                              <span className="font-serif text-lg">Playfair Display</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <Checkbox 
                                id="fontRoboto" 
                                checked={selectedFont === "Roboto"} 
                                onCheckedChange={() => setSelectedFont("Roboto")}
                              />
                              <span className="text-lg">Roboto</span>
                            </label>
                            
                            <label className="flex items-center space-x-2">
                              <Checkbox 
                                id="fontOpenSans" 
                                checked={selectedFont === "Open Sans"} 
                                onCheckedChange={() => setSelectedFont("Open Sans")}
                              />
                              <span className="text-lg" style={{fontFamily: 'Open Sans'}}>Open Sans</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          variant="outline" 
                          onClick={handleReset} 
                          className="w-full flex justify-center"
                        >
                          <RotateCcw size={18} className="mr-2" />
                          Redefinir Configurações
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Área de Preview */}
              <div className="lg:col-span-2">
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-between items-center">
                      <h2 className="text-xl font-semibold">
                        Estilo {designDirection.name}
                      </h2>
                      <Button variant="outline" onClick={handleReset} className="text-sm">
                        <RotateCcw size={14} className="mr-1" /> Redefinir
                      </Button>
                    </div>
                    
                    <div className="bg-white rounded-lg border overflow-hidden mb-6">
                      <DesignEditor 
                        brandName={briefingData?.brandName || "Sua Marca"}
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                        accentColor={accentColor}
                        selectedFont={selectedFont}
                        designTemplate={designDirection.name}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Cartão de Visita</h3>
                        <div className="aspect-video bg-white rounded shadow-sm flex items-center justify-center overflow-hidden">
                          {/* Aqui seria um preview do cartão de visita */}
                          <div className="p-4 w-full" style={{fontFamily: selectedFont}}>
                            <div 
                              className="font-bold text-xl mb-1" 
                              style={{color: primaryColor}}
                            >
                              {briefingData?.brandName || "Sua Marca"}
                            </div>
                            <div 
                              className="text-xs" 
                              style={{color: accentColor}}
                            >
                              {briefingData?.industry || "Seu Setor"}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Perfil de Mídias Sociais</h3>
                        <div className="aspect-video bg-white rounded shadow-sm flex items-center justify-center overflow-hidden">
                          {/* Aqui seria um preview do perfil de mídias sociais */}
                          <div className="h-full w-full relative">
                            <div 
                              className="absolute top-0 left-0 right-0 h-1/2"
                              style={{backgroundColor: secondaryColor}}
                            ></div>
                            <div 
                              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-16 h-16 flex items-center justify-center"
                              style={{backgroundColor: primaryColor}}
                            >
                              <span className="text-white font-bold text-xl">
                                {briefingData?.brandName?.charAt(0) || "M"}
                              </span>
                            </div>
                            <div 
                              className="absolute bottom-4 left-0 right-0 text-center"
                              style={{color: accentColor, fontFamily: selectedFont}}
                            >
                              <div className="font-bold">
                                {briefingData?.brandName || "Sua Marca"}
                              </div>
                              <div className="text-xs">
                                {briefingData?.industry || "Seu Setor"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                        onClick={handleFinalize}
                      >
                        Finalizar
                        <ChevronRight size={18} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
