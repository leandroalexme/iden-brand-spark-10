
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Lock, Check, ChevronLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import BrandTextMaterials from '@/components/BrandTextMaterials';

const BrandPresentation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  
  const briefingData = state?.briefingData;
  const designDirection = state?.designDirection;
  const designCustomization = state?.designCustomization;
  
  useEffect(() => {
    if (!briefingData || !designDirection) {
      toast({
        title: "Informações incompletas",
        description: "Precisamos das informações do briefing e design para gerar sua apresentação.",
        variant: "destructive"
      });
      navigate('/briefing');
      return;
    }
    
    // Simular carregamento dos materiais
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [briefingData, designDirection, navigate, toast]);
  
  const handleDownload = (material: string, isPremium: boolean = false) => {
    if (isPremium) {
      toast({
        title: "Material Premium",
        description: "Faça upgrade para baixar este material.",
      });
    } else {
      toast({
        title: "Download Iniciado",
        description: `O arquivo ${material} está sendo baixado.`,
      });
    }
  };
  
  const handleBack = () => {
    navigate('/customization', { state: { briefingData, designDirection } });
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-12 px-4 bg-gray-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-iden-purple border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold mb-2">Preparando sua identidade visual</h2>
            <p className="text-gray-600">Estamos gerando todos os materiais para sua marca...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="container max-w-7xl mx-auto">
          {/* Cabeçalho da Apresentação */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {briefingData?.brandName || "Sua Marca"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Identidade visual completa para {briefingData?.industry || "seu negócio"}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="sm" variant="outline" onClick={handleBack}>
                <ChevronLeft size={16} className="mr-1" />
                Voltar
              </Button>
              <Button 
                size="sm"
                onClick={() => {
                  toast({
                    title: "Parabéns!",
                    description: "Sua identidade visual está pronta para uso!",
                  });
                }}
              >
                <Check size={16} className="mr-1" />
                Finalizar Projeto
              </Button>
            </div>
          </div>
          
          {/* Conteúdo Principal */}
          <div className="space-y-12">
            {/* Seção de Materiais Visuais */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 text-center">
                Materiais Visuais
              </h2>
              
              <Tabs defaultValue="logo" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-6">
                  <TabsTrigger value="logo">Logo</TabsTrigger>
                  <TabsTrigger value="business-card">Cartão de Visita</TabsTrigger>
                  <TabsTrigger value="letterhead">Papel Timbrado</TabsTrigger>
                  <TabsTrigger value="social">Mídias Sociais</TabsTrigger>
                  <TabsTrigger value="stickers">Adesivos</TabsTrigger>
                  <TabsTrigger value="presentation">Apresentações</TabsTrigger>
                </TabsList>
                
                {/* Logo Tab */}
                <TabsContent value="logo" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-white p-12 flex items-center justify-center">
                          <div 
                            className="w-40 h-40 rounded-full flex items-center justify-center"
                            style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                          >
                            <span 
                              className="text-white text-5xl font-bold"
                              style={{fontFamily: designCustomization?.font || "Montserrat"}}
                            >
                              {briefingData?.brandName?.charAt(0) || "A"}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-medium">Logo Principal</span>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleDownload("Logo Principal")}
                          >
                            <Download size={16} className="mr-1" />
                            PNG
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-slate-100 p-12 flex items-center justify-center">
                          <div className="text-center">
                            <div 
                              className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                              style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                            >
                              <span 
                                className="text-white text-3xl font-bold"
                                style={{fontFamily: designCustomization?.font || "Montserrat"}}
                              >
                                {briefingData?.brandName?.charAt(0) || "A"}
                              </span>
                            </div>
                            <h3 
                              className="text-2xl font-bold"
                              style={{
                                color: designCustomization?.colors?.accent || "#333333",
                                fontFamily: designCustomization?.font || "Montserrat"
                              }}
                            >
                              {briefingData?.brandName || "Sua Marca"}
                            </h3>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-medium">Logo com Nome</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownload("Logo com Nome", true)}
                          >
                            <Lock size={16} className="mr-1" />
                            Premium
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                {/* Business Card Tab */}
                <TabsContent value="business-card" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-white p-8 flex items-center justify-center">
                          <div 
                            className="w-full h-full rounded shadow border p-6 flex flex-col justify-between"
                            style={{borderColor: designCustomization?.colors?.primary || "#9b87f5"}}
                          >
                            <div>
                              <div className="flex items-center gap-3 mb-3">
                                <div 
                                  className="w-10 h-10 rounded-full flex items-center justify-center"
                                  style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                                >
                                  <span className="text-white font-bold">
                                    {briefingData?.brandName?.charAt(0) || "A"}
                                  </span>
                                </div>
                                <h3 
                                  className="text-xl font-bold"
                                  style={{
                                    color: designCustomization?.colors?.accent || "#333333",
                                    fontFamily: designCustomization?.font || "Montserrat"
                                  }}
                                >
                                  {briefingData?.brandName || "Sua Marca"}
                                </h3>
                              </div>
                              <p className="text-sm text-gray-600">{briefingData?.industry || "Seu Setor"}</p>
                            </div>
                            <div>
                              <p className="text-sm">contato@{briefingData?.brandName?.toLowerCase().replace(/\s+/g, '') || "suamarca"}.com</p>
                              <p className="text-sm">+55 11 99999-9999</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-medium">Cartão Frente</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownload("Cartão Frente")}
                          >
                            <Download size={16} className="mr-1" />
                            PDF
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-white p-8 flex items-center justify-center">
                          <div 
                            className="w-full h-full rounded flex items-center justify-center"
                            style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                          >
                            <div 
                              className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
                            >
                              <span 
                                className="text-3xl font-bold"
                                style={{color: designCustomization?.colors?.primary || "#9b87f5"}}
                              >
                                {briefingData?.brandName?.charAt(0) || "A"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-medium">Cartão Verso</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownload("Cartão Verso", true)}
                          >
                            <Lock size={16} className="mr-1" />
                            Premium
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                {/* Letterhead Tab */}
                <TabsContent value="letterhead" className="space-y-6">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-[3/4] bg-white p-8 flex items-center justify-center">
                        <div className="w-full h-full border rounded shadow p-8 flex flex-col">
                          <div className="flex items-center gap-3 mb-16 pb-4 border-b" style={{borderColor: designCustomization?.colors?.primary || "#9b87f5"}}>
                            <div 
                              className="w-12 h-12 rounded-full flex items-center justify-center"
                              style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                            >
                              <span className="text-white font-bold text-xl">
                                {briefingData?.brandName?.charAt(0) || "A"}
                              </span>
                            </div>
                            <div>
                              <h3 
                                className="text-xl font-bold"
                                style={{
                                  color: designCustomization?.colors?.accent || "#333333",
                                  fontFamily: designCustomization?.font || "Montserrat"
                                }}
                              >
                                {briefingData?.brandName || "Sua Marca"}
                              </h3>
                              <p className="text-sm text-gray-600">{briefingData?.industry || "Seu Setor"}</p>
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6 mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
                            
                            <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6 mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                          </div>
                          
                          <div className="pt-4 mt-8 border-t text-sm text-gray-500" style={{borderColor: designCustomization?.colors?.primary || "#9b87f5"}}>
                            <p>contato@{briefingData?.brandName?.toLowerCase().replace(/\s+/g, '') || "suamarca"}.com | +55 11 99999-9999</p>
                            <p>www.{briefingData?.brandName?.toLowerCase().replace(/\s+/g, '') || "suamarca"}.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <span className="font-medium">Papel Timbrado</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDownload("Papel Timbrado", true)}
                        >
                          <Lock size={16} className="mr-1" />
                          Premium
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Social Media Tab */}
                <TabsContent value="social" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-white p-4 flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full rounded-lg overflow-hidden relative">
                            <div 
                              className="absolute inset-0"
                              style={{backgroundColor: designCustomization?.colors?.secondary || "#ffffff"}}
                            ></div>
                            <div 
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center"
                              style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                            >
                              <span 
                                className="text-white text-5xl font-bold"
                                style={{fontFamily: designCustomization?.font || "Montserrat"}}
                              >
                                {briefingData?.brandName?.charAt(0) || "A"}
                              </span>
                            </div>
                            <div 
                              className="absolute bottom-8 left-0 right-0 text-center"
                              style={{
                                color: designCustomization?.colors?.accent || "#333333",
                                fontFamily: designCustomization?.font || "Montserrat"
                              }}
                            >
                              <h3 className="text-xl font-bold">
                                {briefingData?.brandName || "Sua Marca"}
                              </h3>
                              <p className="text-sm">
                                {briefingData?.industry || "Seu Setor"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-medium">Perfil Instagram</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownload("Perfil Instagram")}
                          >
                            <Download size={16} className="mr-1" />
                            PNG
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-[16/9] bg-white p-4 flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full rounded-lg overflow-hidden relative">
                            <div 
                              className="absolute inset-0"
                              style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                            ></div>
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white/90 flex items-center p-6">
                              <div className="flex items-center gap-4">
                                <div 
                                  className="w-12 h-12 rounded-full flex items-center justify-center"
                                  style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                                >
                                  <span className="text-white font-bold">
                                    {briefingData?.brandName?.charAt(0) || "A"}
                                  </span>
                                </div>
                                <div>
                                  <h3 
                                    className="text-lg font-bold"
                                    style={{
                                      color: designCustomization?.colors?.accent || "#333333",
                                      fontFamily: designCustomization?.font || "Montserrat"
                                    }}
                                  >
                                    {briefingData?.brandName || "Sua Marca"}
                                  </h3>
                                  <p className="text-sm">
                                    {briefingData?.industry || "Seu Setor"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-medium">Capa LinkedIn</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownload("Capa LinkedIn", true)}
                          >
                            <Lock size={16} className="mr-1" />
                            Premium
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                {/* Stickers Tab */}
                <TabsContent value="stickers" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-slate-100 p-8 flex items-center justify-center">
                          <div 
                            className="w-32 h-32 rounded-full flex items-center justify-center"
                            style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                          >
                            <span 
                              className="text-white text-4xl font-bold"
                              style={{fontFamily: designCustomization?.font || "Montserrat"}}
                            >
                              {briefingData?.brandName?.charAt(0) || "A"}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-medium">Adesivo Circular</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownload("Adesivo Circular", true)}
                          >
                            <Lock size={16} className="mr-1" />
                            Premium
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-slate-100 p-8 flex items-center justify-center">
                          <div 
                            className="w-32 h-32 rounded-lg flex flex-col items-center justify-center p-4 text-center"
                            style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                          >
                            <span 
                              className="text-white text-3xl font-bold mb-1"
                              style={{fontFamily: designCustomization?.font || "Montserrat"}}
                            >
                              {briefingData?.brandName || "Marca"}
                            </span>
                            <span className="text-white text-xs opacity-90">
                              {briefingData?.industry || "Seu Setor"}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-medium">Adesivo Quadrado</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownload("Adesivo Quadrado", true)}
                          >
                            <Lock size={16} className="mr-1" />
                            Premium
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-slate-100 p-8 flex items-center justify-center">
                          <div 
                            className="w-48 h-20 rounded-full flex items-center justify-center gap-3 px-4"
                            style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                          >
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                              <span 
                                className="text-xl font-bold"
                                style={{color: designCustomization?.colors?.primary || "#9b87f5"}}
                              >
                                {briefingData?.brandName?.charAt(0) || "A"}
                              </span>
                            </div>
                            <span 
                              className="text-white text-lg font-bold"
                              style={{fontFamily: designCustomization?.font || "Montserrat"}}
                            >
                              {briefingData?.brandName || "Sua Marca"}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-medium">Adesivo Formato Especial</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownload("Adesivo Formato Especial", true)}
                          >
                            <Lock size={16} className="mr-1" />
                            Premium
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                {/* Presentation Tab */}
                <TabsContent value="presentation" className="space-y-6">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-white p-6 flex items-center justify-center">
                        <div className="w-full h-full border rounded shadow overflow-hidden flex flex-col">
                          <div 
                            className="p-8 flex items-center"
                            style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                <span 
                                  className="text-2xl font-bold"
                                  style={{color: designCustomization?.colors?.primary || "#9b87f5"}}
                                >
                                  {briefingData?.brandName?.charAt(0) || "A"}
                                </span>
                              </div>
                              <h2 
                                className="text-2xl font-bold text-white"
                                style={{fontFamily: designCustomization?.font || "Montserrat"}}
                              >
                                {briefingData?.brandName || "Sua Marca"}
                              </h2>
                            </div>
                          </div>
                          
                          <div className="flex-grow p-8 flex flex-col gap-4">
                            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                            
                            <div className="flex-grow grid grid-cols-2 gap-4">
                              <div className="flex flex-col gap-2">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <span className="font-medium">Template de Apresentação</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDownload("Template de Apresentação", true)}
                        >
                          <Lock size={16} className="mr-1" />
                          Premium
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Identidade da Marca */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-4">Identidade Visual</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Paleta de Cores</h4>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="space-y-2">
                            <div 
                              className="w-full aspect-square rounded-md shadow-sm"
                              style={{backgroundColor: designCustomization?.colors?.primary || "#9b87f5"}}
                            ></div>
                            <p className="text-xs text-center font-mono uppercase">{designCustomization?.colors?.primary || "#9b87f5"}</p>
                          </div>
                          <div className="space-y-2">
                            <div 
                              className="w-full aspect-square rounded-md shadow-sm border"
                              style={{backgroundColor: designCustomization?.colors?.secondary || "#ffffff"}}
                            ></div>
                            <p className="text-xs text-center font-mono uppercase">{designCustomization?.colors?.secondary || "#ffffff"}</p>
                          </div>
                          <div className="space-y-2">
                            <div 
                              className="w-full aspect-square rounded-md shadow-sm"
                              style={{backgroundColor: designCustomization?.colors?.accent || "#333333"}}
                            ></div>
                            <p className="text-xs text-center font-mono uppercase">{designCustomization?.colors?.accent || "#333333"}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Tipografia</h4>
                        <div 
                          className="p-4 border rounded-md"
                          style={{fontFamily: designCustomization?.font || "Montserrat"}}
                        >
                          <p className="text-2xl font-bold mb-2">{designCustomization?.font || "Montserrat"}</p>
                          <p className="text-sm mb-1">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                          <p className="text-sm">abcdefghijklmnopqrstuvwxyz</p>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          className="w-full"
                          onClick={() => handleDownload("Manual de Marca", true)}
                        >
                          <Lock size={16} className="mr-2" />
                          Manual de Marca Completo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                {/* Brand Text Materials Component */}
                <BrandTextMaterials 
                  brandName={briefingData?.brandName || "Sua Marca"}
                  industry={briefingData?.industry || "Seu Setor"}
                  brandValues={briefingData?.brandValues || "inovação, qualidade, confiança"}
                  targetAudience={briefingData?.targetAudience || "Profissionais entre 25-45 anos"}
                />
              </div>
            </div>
            
            {/* CTA para planos */}
            <div className="mt-12 bg-slate-50 border rounded-lg p-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-serif font-bold mb-4">
                  Acesse todos os materiais da sua marca
                </h2>
                <p className="text-gray-600 mb-6">
                  Faça o upgrade para o plano Premium e tenha acesso ilimitado a todos os materiais, 
                  incluindo formatos editáveis e direitos comerciais completos.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      toast({
                        title: "Download Básico",
                        description: "Os materiais básicos foram enviados para seu e-mail."
                      });
                    }}
                  >
                    Plano Básico (Gratuito)
                  </Button>
                  <Button 
                    className="bg-iden-purple hover:bg-iden-purple-dark text-white"
                    onClick={() => {
                      toast({
                        title: "Acesso Premium",
                        description: "Redirecionando para a página de pagamento..."
                      });
                    }}
                  >
                    Obter Plano Premium
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrandPresentation;
