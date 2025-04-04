
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, ChevronRight, Lock, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Plans from '@/components/Plans';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DesignEditor } from '@/components/DesignEditor';

const BrandPresentation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('essentials');
  const [activeItem, setActiveItem] = useState('logo');
  
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

  // Organized brand materials by category
  const materialCategories = [
    {
      id: 'essentials',
      name: 'Essenciais',
      items: [
        { id: 'logo', name: 'Logo', free: true },
        { id: 'business-card', name: 'Cartão de Visita', free: true },
        { id: 'letterhead', name: 'Papel Timbrado', free: false },
        { id: 'envelopes', name: 'Envelopes', free: false },
      ]
    },
    {
      id: 'digital',
      name: 'Digital',
      items: [
        { id: 'social-media', name: 'Redes Sociais', free: true },
        { id: 'email-signature', name: 'Assinatura de Email', free: true },
        { id: 'website-favicon', name: 'Favicon', free: false },
        { id: 'social-banners', name: 'Banners para Redes', free: false },
      ]
    },
    {
      id: 'print',
      name: 'Impressos',
      items: [
        { id: 'folder', name: 'Folder', free: false },
        { id: 'flyer', name: 'Flyer', free: false },
        { id: 'brochure', name: 'Brochura', free: false },
        { id: 'stickers', name: 'Adesivos', free: false },
      ]
    },
    {
      id: 'corporate',
      name: 'Corporativo',
      items: [
        { id: 'presentation', name: 'Apresentação', free: false },
        { id: 'brand-book', name: 'Manual de Marca', free: false },
        { id: 'invoice', name: 'Nota Fiscal', free: false },
        { id: 'id-card', name: 'Crachá', free: false },
      ]
    },
    {
      id: 'merchandise',
      name: 'Brindes',
      items: [
        { id: 'tshirt', name: 'Camiseta', free: false },
        { id: 'mug', name: 'Caneca', free: false },
        { id: 'pen', name: 'Caneta', free: false },
        { id: 'tote-bag', name: 'Sacola', free: false },
      ]
    }
  ];
  
  // Simulating brand colors from the customization
  const brandColors = designCustomization?.colors || {
    primary: '#9b87f5',
    secondary: '#ffffff',
    accent: '#333333'
  };
  
  const handleDownload = (materialId) => {
    const allItems = materialCategories.flatMap(category => category.items);
    const material = allItems.find(m => m.id === materialId);
    
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

  const findCategoryForItem = (itemId) => {
    return materialCategories.find(category => 
      category.items.some(item => item.id === itemId)
    )?.id || 'essentials';
  };

  // Navigation between items within a category
  const getNextAndPrevious = (currentItemId) => {
    const currentCategory = materialCategories.find(category => 
      category.id === activeTab
    );
    
    if (!currentCategory) return { prev: null, next: null };
    
    const currentIndex = currentCategory.items.findIndex(item => item.id === currentItemId);
    if (currentIndex === -1) return { prev: null, next: null };
    
    const prev = currentIndex > 0 ? currentCategory.items[currentIndex - 1] : null;
    const next = currentIndex < currentCategory.items.length - 1 ? currentCategory.items[currentIndex + 1] : null;
    
    return { prev, next };
  };

  const { prev, next } = getNextAndPrevious(activeItem);

  // Handle tab change to select first item in the new category
  const handleTabChange = (value) => {
    setActiveTab(value);
    // Select the first item in the new category
    const firstItemInCategory = materialCategories.find(cat => cat.id === value)?.items[0]?.id;
    if (firstItemInCategory) {
      setActiveItem(firstItemInCategory);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
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
        
        {/* Presentation section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-6xl mx-auto">
            {/* Tabs for material categories */}
            <Tabs defaultValue="essentials" value={activeTab} onValueChange={handleTabChange} className="w-full mb-12">
              <div className="flex justify-center mb-6">
                <TabsList className="bg-gray-100">
                  {materialCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="px-4 py-2 data-[state=active]:bg-iden-purple data-[state=active]:text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {/* Content for each tab */}
              {materialCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {category.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveItem(item.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative
                          ${activeItem === item.id 
                            ? 'bg-iden-purple text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        {item.name}
                        {!item.free && (
                          <Lock size={12} className="ml-1 inline-block" />
                        )}
                      </button>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            {/* Material preview area */}
            <div className="bg-gray-50 border rounded-xl p-6 mb-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {materialCategories
                    .find(category => category.id === activeTab)?.items
                    .find(item => item.id === activeItem)?.name || "Material"}
                </h3>
                
                {/* Material navigation */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => prev && setActiveItem(prev.id)}
                    disabled={!prev}
                    className="text-gray-600"
                  >
                    <ArrowLeft size={16} className="mr-1" />
                    Anterior
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => next && setActiveItem(next.id)}
                    disabled={!next}
                    className="text-gray-600"
                  >
                    Próximo
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
              
              {/* Material preview content */}
              <div className="aspect-[16/9] bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                {/* Logo preview */}
                {activeItem === 'logo' && (
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
                
                {/* Business card preview */}
                {activeItem === 'business-card' && (
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
                      <div>contato@{briefingData?.brandName?.toLowerCase().replace(/\s+/g, '') || "suamarca"}.com</div>
                      <div>+55 11 99999-9999</div>
                      <div>www.{briefingData?.brandName?.toLowerCase().replace(/\s+/g, '') || "suamarca"}.com</div>
                    </div>
                  </div>
                )}
                
                {/* Social media preview */}
                {activeItem === 'social-media' && (
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
                
                {/* Email signature preview */}
                {activeItem === 'email-signature' && (
                  <div className="w-full max-w-xl p-6 border rounded">
                    <table className="w-full max-w-md text-left" style={{color: brandColors.accent}}>
                      <tbody>
                        <tr>
                          <td rowSpan={4} className="pr-4" style={{verticalAlign: 'top'}}>
                            <div 
                              className="w-16 h-16 rounded-full"
                              style={{backgroundColor: brandColors.primary}}
                            >
                              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                                {briefingData?.brandName?.charAt(0) || "B"}
                              </div>
                            </div>
                          </td>
                          <td className="pb-1 font-bold" style={{color: brandColors.primary}}>
                            Seu Nome
                          </td>
                        </tr>
                        <tr>
                          <td className="pb-1 text-sm">
                            Cargo | {briefingData?.brandName || "Sua Marca"}
                          </td>
                        </tr>
                        <tr>
                          <td className="pb-1 text-sm">
                            +55 11 99999-9999
                          </td>
                        </tr>
                        <tr>
                          <td className="text-sm">
                            www.{briefingData?.brandName?.toLowerCase().replace(/\s+/g, '') || "suamarca"}.com
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                
                {/* Letterhead preview */}
                {activeItem === 'letterhead' && (
                  <div className="relative w-full max-w-xl aspect-[1/1.414] bg-white border shadow-sm p-8">
                    <div className="absolute top-8 left-8 flex items-center">
                      <div 
                        className="w-12 h-12 rounded-full mr-3"
                        style={{backgroundColor: brandColors.primary}}
                      >
                        <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
                          {briefingData?.brandName?.charAt(0) || "B"}
                        </div>
                      </div>
                      <div className="text-xl font-bold" style={{color: brandColors.primary}}>
                        {briefingData?.brandName || "Sua Marca"}
                      </div>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 text-xs" style={{color: brandColors.accent}}>
                      <div className="w-full h-px mb-4" style={{backgroundColor: brandColors.accent}}></div>
                      <div className="flex justify-between">
                        <div>www.{briefingData?.brandName?.toLowerCase().replace(/\s+/g, '') || "suamarca"}.com</div>
                        <div>contato@{briefingData?.brandName?.toLowerCase().replace(/\s+/g, '') || "suamarca"}.com</div>
                        <div>+55 11 99999-9999</div>
                      </div>
                    </div>
                    <div className="absolute top-8 right-8 text-xs text-right" style={{color: brandColors.accent}}>
                      <div>São Paulo, {new Date().toLocaleDateString('pt-BR')}</div>
                    </div>
                    <div className="absolute top-1/3 left-8 right-8">
                      <div className="h-px w-full bg-gray-200"></div>
                      <div className="text-center text-gray-300 text-xs py-2">[Conteúdo da carta]</div>
                      <div className="h-px w-full bg-gray-200"></div>
                    </div>
                  </div>
                )}
                
                {/* Presentation slide preview */}
                {activeItem === 'presentation' && (
                  <div className="relative w-full max-w-xl aspect-[16/9] bg-white border shadow-sm p-8">
                    <div className="absolute top-8 left-8" style={{color: brandColors.primary}}>
                      <div className="text-2xl font-bold">
                        {briefingData?.brandName || "Sua Marca"}
                      </div>
                      <div className="text-sm" style={{color: brandColors.accent}}>
                        {briefingData?.industry || "Seu Negócio"}
                      </div>
                    </div>
                    <div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"
                      style={{backgroundColor: brandColors.primary}}
                    >
                      <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
                        {briefingData?.brandName?.charAt(0) || "B"}
                      </div>
                    </div>
                    <div className="absolute bottom-8 right-8 text-xs" style={{color: brandColors.accent}}>
                      <div>Apresentação Institucional | {new Date().getFullYear()}</div>
                    </div>
                  </div>
                )}
                
                {/* Generic premium material preview */}
                {(activeItem !== 'logo' && 
                  activeItem !== 'business-card' && 
                  activeItem !== 'social-media' && 
                  activeItem !== 'email-signature' && 
                  activeItem !== 'letterhead' && 
                  activeItem !== 'presentation') && (
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
                  onClick={() => handleDownload(activeItem)}
                  className={`${materialCategories
                    .find(category => category.id === activeTab)?.items
                    .find(item => item.id === activeItem)?.free 
                    ? 'bg-iden-purple hover:bg-iden-purple-dark text-white' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  disabled={!materialCategories
                    .find(category => category.id === activeTab)?.items
                    .find(item => item.id === activeItem)?.free}
                >
                  <Download size={18} className="mr-2" />
                  {materialCategories
                    .find(category => category.id === activeTab)?.items
                    .find(item => item.id === activeItem)?.free 
                    ? "Download Gratuito" 
                    : "Material Premium"}
                </Button>
              </div>
            </div>
            
            {/* Material specs and description */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Especificações técnicas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Formato: <span className="text-gray-800 font-medium">PDF, PNG, SVG</span></li>
                    <li>• Resolução: <span className="text-gray-800 font-medium">300 DPI</span></li>
                    <li>• Cores: <span className="text-gray-800 font-medium">CMYK e RGB</span></li>
                    <li>• Edição: <span className="text-gray-800 font-medium">Arquivos editáveis disponíveis nos planos pagos</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Como usar</h3>
                  <p className="text-gray-600 mb-4">
                    Sua identidade visual foi desenvolvida para representar os valores da sua marca. 
                    Use estes materiais em suas comunicações para manter a consistência visual.
                  </p>
                  <p className="text-gray-600">
                    Para orientações completas sobre como utilizar cada elemento, 
                    acesse o Manual de Marca disponível nos planos pagos.
                  </p>
                </div>
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
