
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Plus, Search } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const categories = ["Restaurante", "Tecnologia", "Moda", "Saúde", "Educação", "Serviços"];

const templates = [
  {
    name: "Café Artesanal",
    category: "Restaurante",
    thumbnail: "bg-amber-100",
    color: "bg-amber-500",
    premium: false
  },
  {
    name: "Tech Solutions",
    category: "Tecnologia",
    thumbnail: "bg-blue-100",
    color: "bg-blue-500",
    premium: false
  },
  {
    name: "Fashion Studio",
    category: "Moda",
    thumbnail: "bg-pink-100",
    color: "bg-pink-500",
    premium: true
  },
  {
    name: "Wellness Clinic",
    category: "Saúde",
    thumbnail: "bg-green-100",
    color: "bg-green-500",
    premium: true
  },
  {
    name: "Edu Academy",
    category: "Educação",
    thumbnail: "bg-purple-100",
    color: "bg-purple-500",
    premium: false
  },
  {
    name: "Service Pro",
    category: "Serviços",
    thumbnail: "bg-gray-100",
    color: "bg-gray-500",
    premium: false
  }
];

const Marketplace = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [myTemplates, setMyTemplates] = useState<any[]>([]);
  
  // Filter templates based on category and search query
  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = activeCategory === "all" || template.category === activeCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Handle category selection
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === activeCategory ? "all" : category);
  };
  
  // Handle template upload
  const handleTemplateUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    // Simulate template upload
    const newTemplates = Array.from(files).map((file, index) => ({
      id: `my-template-${myTemplates.length + index + 1}`,
      name: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension
      category: "Personalizado",
      thumbnail: "bg-gray-100",
      color: "bg-indigo-500",
      premium: false,
      isCustom: true
    }));
    
    setMyTemplates([...myTemplates, ...newTemplates]);
    
    toast({
      title: "Templates enviados com sucesso",
      description: `${files.length} ${files.length === 1 ? 'template foi adicionado' : 'templates foram adicionados'} à sua biblioteca.`,
    });
    
    // Reset file input
    event.target.value = "";
  };
  
  // Handle template creation
  const handleCreateTemplate = () => {
    toast({
      title: "Novo template",
      description: "Redirecionando para o editor de templates...",
    });
  };
  
  return (
    <section id="marketplace" className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Marketplace de Marcas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Encontre identidades visuais prontas criadas por designers profissionais, personalizáveis para o seu negócio.
          </p>
          
          <Tabs defaultValue="browse" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="browse">Explorar Templates</TabsTrigger>
              <TabsTrigger value="my-templates">Meus Templates</TabsTrigger>
            </TabsList>
            
            <TabsContent value="browse" className="mt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    type="text" 
                    placeholder="Buscar templates..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button onClick={handleCreateTemplate}>
                  <Plus size={18} className="mr-2" />
                  Criar Novo
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center mb-10">
                <Button 
                  variant={activeCategory === "all" ? "default" : "outline"} 
                  className="rounded-full"
                  onClick={() => handleCategoryClick("all")}
                >
                  Todos
                </Button>
                {categories.map((category, index) => (
                  <Button 
                    key={index} 
                    variant={activeCategory === category ? "default" : "outline"} 
                    className="rounded-full"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {filteredTemplates.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTemplates.map((template, index) => (
                    <Card key={index} className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className={`${template.thumbnail} aspect-video flex items-center justify-center relative`}>
                        <div className={`${template.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                          {template.name.charAt(0)}
                        </div>
                        {template.premium && (
                          <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                            Premium
                          </div>
                        )}
                      </div>
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-serif font-bold">{template.name}</h3>
                            <p className="text-sm text-gray-500">{template.category}</p>
                          </div>
                          <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded-md">
                            {template.premium ? "R$249" : "R$149"}
                          </span>
                        </div>
                        <Button variant="ghost" className="w-full flex justify-between items-center">
                          <span>Ver detalhes</span>
                          <ArrowRight size={16} />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">Nenhum template encontrado para esta pesquisa.</p>
                </div>
              )}
              
              <div className="mt-12 text-center">
                <Button size="lg" variant="outline">
                  Ver mais modelos
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="my-templates" className="mt-6">
              <div className="flex items-center gap-4 mb-8">
                <Button variant="outline" className="relative overflow-hidden">
                  <Upload size={18} className="mr-2" />
                  Enviar Template
                  <input 
                    type="file" 
                    className="absolute inset-0 opacity-0 cursor-pointer" 
                    onChange={handleTemplateUpload}
                    multiple
                    accept=".json,.zip,.ai,.psd"
                  />
                </Button>
                <Button onClick={handleCreateTemplate}>
                  <Plus size={18} className="mr-2" />
                  Criar Novo
                </Button>
              </div>
              
              {myTemplates.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myTemplates.map((template, index) => (
                    <Card key={index} className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className={`${template.thumbnail} aspect-video flex items-center justify-center relative`}>
                        <div className={`${template.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                          {template.name.charAt(0)}
                        </div>
                        <div className="absolute top-3 right-3 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                          Personalizado
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-serif font-bold">{template.name}</h3>
                            <p className="text-sm text-gray-500">{template.category}</p>
                          </div>
                          <Button variant="outline" size="sm">Editar</Button>
                        </div>
                        <Button variant="ghost" className="w-full flex justify-between items-center">
                          <span>Aplicar</span>
                          <ArrowRight size={16} />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-lg">
                  <Upload size={40} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Nenhum template personalizado</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Envie seus próprios templates ou crie novos para personalizar a experiência do usuário
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button variant="outline" className="relative overflow-hidden">
                      <Upload size={18} className="mr-2" />
                      Enviar Template
                      <input 
                        type="file" 
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                        onChange={handleTemplateUpload}
                        multiple
                        accept=".json,.zip,.ai,.psd"
                      />
                    </Button>
                    <Button onClick={handleCreateTemplate}>
                      <Plus size={18} className="mr-2" />
                      Criar Novo
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
