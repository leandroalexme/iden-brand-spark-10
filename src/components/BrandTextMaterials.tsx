
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BrandTextMaterialsProps {
  brandName: string;
  industry: string;
  brandValues: string;
  targetAudience: string;
}

const BrandTextMaterials = ({ 
  brandName, 
  industry, 
  brandValues, 
  targetAudience 
}: BrandTextMaterialsProps) => {
  const { toast } = useToast();

  // Split brand values into an array
  const valuesArray = brandValues
    .split(',')
    .map(value => value.trim())
    .filter(value => value.length > 0);

  // Generate manifesto based on brand values and industry
  const generateManifesto = () => {
    const manifestoIntro = [
      `No coração da ${industry}, ${brandName} ergue-se como um farol de inovação e excelência.`,
      `${brandName} nasceu da visão de transformar a maneira como a ${industry} conecta-se com as pessoas.`,
      `Em um mundo em constante mudança, ${brandName} permanece firme em seus valores e compromissos.`
    ];
    
    const manifestoBody = [
      `Acreditamos que cada interação é uma oportunidade para demonstrar quem somos e o que valorizamos.`,
      `Nossa jornada é guiada pela busca incessante da excelência e pela coragem de desafiar o convencional.`,
      `Enxergamos além das limitações atuais, buscando constantemente novos horizontes para nossa marca e nossos clientes.`
    ];
    
    const manifestoValues = valuesArray.map(value => 
      `${value.charAt(0).toUpperCase() + value.slice(1)} não é apenas uma palavra para nós, é um compromisso diário.`
    );
    
    const manifestoClosing = [
      `Este é o nosso compromisso. Esta é nossa essência. Este é ${brandName}.`,
      `Juntos, construímos mais que uma marca - criamos um legado que ressoa com nossos valores mais profundos.`,
      `O futuro é construído hoje, com cada decisão que tomamos e cada valor que defendemos.`
    ];
    
    // Select random elements from each array for variety
    const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
    
    return [
      getRandomItem(manifestoIntro),
      getRandomItem(manifestoBody),
      ...manifestoValues,
      getRandomItem(manifestoClosing)
    ].join('\n\n');
  };

  // Generate brand voice characteristics
  const generateVoiceTraits = () => {
    const traitOptions = {
      profissional: ["Linguagem precisa", "Termos técnicos apropriados", "Tom confiante e informativo"],
      amigável: ["Conversacional e acessível", "Uso de linguagem inclusiva", "Tom caloroso e acolhedor"],
      inovador: ["Vocabulário contemporâneo", "Referências a tendências e inovações", "Tom entusiasmado e inspirador"],
      exclusivo: ["Linguagem sofisticada", "Termos que evocam prestígio", "Tom distinto e refinado"],
      confiável: ["Linguagem direta e transparente", "Comprometimento nas afirmações", "Tom consistente e seguro"]
    };
    
    // Select traits based on brand values
    const traits: Record<string, string[]> = {};
    
    if (valuesArray.some(v => ['inovação', 'tecnologia', 'moderno'].includes(v.toLowerCase()))) {
      traits.inovador = traitOptions.inovador;
    }
    
    if (valuesArray.some(v => ['confiança', 'segurança', 'integridade'].includes(v.toLowerCase()))) {
      traits.confiável = traitOptions.confiável;
    }
    
    if (valuesArray.some(v => ['amigável', 'acessível', 'humano'].includes(v.toLowerCase()))) {
      traits.amigável = traitOptions.amigável;
    }
    
    // Always include professional as default
    if (!Object.keys(traits).length || valuesArray.some(v => ['profissional', 'qualidade'].includes(v.toLowerCase()))) {
      traits.profissional = traitOptions.profissional;
    }
    
    return traits;
  };

  // Generate sample slogans
  const generateSlogans = () => {
    const industryKeywords: Record<string, string[]> = {
      'tecnologia': ['inovação', 'futuro', 'soluções', 'transformação', 'digital'],
      'saúde': ['bem-estar', 'cuidado', 'vida', 'saúde', 'qualidade'],
      'educação': ['conhecimento', 'futuro', 'aprendizado', 'potencial', 'crescimento'],
      'alimentação': ['sabor', 'qualidade', 'experiência', 'satisfação', 'nutrição'],
      'moda': ['estilo', 'autenticidade', 'expressão', 'tendência', 'personalidade'],
      'finanças': ['segurança', 'crescimento', 'futuro', 'planejamento', 'sucesso']
    };

    const templates = [
      `${brandName}. %s para um futuro melhor.`,
      `${brandName}: Redefina sua ideia de %s.`,
      `%s que transforma. ${brandName}.`,
      `${brandName}. %s que inspira.`,
      `Sua jornada de %s começa com ${brandName}.`
    ];
    
    // Find relevant keywords based on industry or use generic ones
    const keywords = Object.keys(industryKeywords).some(key => 
      industry.toLowerCase().includes(key)
    ) 
      ? industryKeywords[Object.keys(industryKeywords).find(key => 
          industry.toLowerCase().includes(key)
        ) as string]
      : ['qualidade', 'excelência', 'inovação', 'confiança', 'experiência'];
    
    // Generate 3 slogan options
    return Array(3).fill(0).map(() => {
      const template = templates[Math.floor(Math.random() * templates.length)];
      const keyword = keywords[Math.floor(Math.random() * keywords.length)];
      return template.replace('%s', keyword);
    });
  };

  // Generate business strategies
  const generateStrategies = () => {
    // Parse target audience for keywords
    const audienceStr = targetAudience.toLowerCase();
    const isYoung = audienceStr.includes('jovem') || audienceStr.includes('jovens');
    const isProfessional = audienceStr.includes('profission') || audienceStr.includes('executiv');
    const isFamily = audienceStr.includes('famíli') || audienceStr.includes('pais') || audienceStr.includes('mães');
    
    const strategies = [
      {
        title: "Posicionamento de Marca",
        description: `Posicionar ${brandName} como ${valuesArray[0] || 'referência'} em ${industry}, destacando ${valuesArray[1] || 'qualidade'} como diferencial competitivo.`,
        tactics: [
          "Comunicação consistente dos valores essenciais da marca",
          "Desenvolvimento de conteúdo especializado para estabelecer autoridade",
          "Parcerias estratégicas com líderes do setor"
        ]
      },
      {
        title: `Estratégia de Comunicação para ${isYoung ? 'Público Jovem' : isProfessional ? 'Profissionais' : isFamily ? 'Famílias' : 'Público-Alvo'}`,
        description: `Desenvolver mensagens específicas que ressoem com ${targetAudience.split(',')[0]}, utilizando linguagem e canais apropriados.`,
        tactics: [
          isYoung ? "Presença ativa em plataformas digitais e redes sociais emergentes" :
          isProfessional ? "Conteúdo técnico e especializado em plataformas B2B" :
          "Comunicação multimídia em canais relevantes para o segmento",
          "Storytelling alinhado com as expectativas e aspirações do público",
          `Campanhas que destacam como ${brandName} soluciona problemas específicos do público`
        ]
      },
      {
        title: "Expansão e Crescimento",
        description: `Plano estratégico para ampliar a presença de ${brandName} no mercado, mantendo a consistência nos valores da marca.`,
        tactics: [
          "Identificação de segmentos de mercado complementares",
          "Desenvolvimento de produtos/serviços alinhados à identidade da marca",
          "Estratégia de crescimento orgânico baseada na fidelização e referências"
        ]
      }
    ];
    
    return strategies;
  };

  // Generate brand voice examples
  const generateVoiceExamples = () => {
    const voiceTraits = generateVoiceTraits();
    
    const examplesByTrait: Record<string, {formal: string, casual: string}> = {
      profissional: {
        formal: `A ${brandName} oferece soluções otimizadas que garantem resultados mensuráveis e sustentáveis para sua operação.`,
        casual: `Nossa equipe desenvolve ferramentas que realmente funcionam e trazem resultados que você pode acompanhar.`
      },
      amigável: {
        formal: `Na ${brandName}, acreditamos que cada cliente merece uma experiência personalizada que atenda suas necessidades específicas.`,
        casual: `A gente adora conhecer você melhor para oferecer exatamente o que você precisa. Conte com a gente!`
      },
      inovador: {
        formal: `${brandName} está redefinindo os paradigmas do setor através de tecnologias disruptivas e abordagens visionárias.`,
        casual: `Estamos quebrando as regras do jogo e criando novas possibilidades que ninguém pensou antes. É o futuro, hoje!`
      },
      confiável: {
        formal: `Com ${brandName}, você obtém a garantia de qualidade e consistência que apenas anos de experiência comprovada podem oferecer.`,
        casual: `Pode confiar na gente. Fazemos o que prometemos, sempre, e isso faz toda a diferença.`
      }
    };
    
    // Create examples for the selected traits
    const examples: Record<string, {formal: string, casual: string}> = {};
    for (const trait in voiceTraits) {
      if (examplesByTrait[trait]) {
        examples[trait] = examplesByTrait[trait];
      }
    }
    
    return examples;
  };

  // Generate manifesto
  const manifesto = generateManifesto();
  
  // Generate voice characteristics
  const voiceTraits = generateVoiceTraits();
  
  // Generate slogans
  const slogans = generateSlogans();
  
  // Generate business strategies
  const strategies = generateStrategies();
  
  // Generate voice examples
  const voiceExamples = generateVoiceExamples();

  const handleDownload = (premium: boolean) => {
    if (premium) {
      toast({
        title: "Conteúdo Premium",
        description: "Faça upgrade para baixar este material.",
      });
    } else {
      toast({
        title: "Download Iniciado",
        description: "O material está sendo baixado.",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Materiais de Texto para sua Marca</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="manifesto" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="manifesto">Manifesto</TabsTrigger>
            <TabsTrigger value="verbal">Identidade Verbal</TabsTrigger>
            <TabsTrigger value="slogans">Slogans</TabsTrigger>
            <TabsTrigger value="strategy">Estratégias</TabsTrigger>
          </TabsList>
          
          {/* Manifesto Tab */}
          <TabsContent value="manifesto" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-medium">Manifesto da Marca</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 p-6 rounded-lg border text-lg whitespace-pre-line font-serif">
                  {manifesto}
                </div>
                <div className="flex justify-end mt-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => handleDownload(false)}
                  >
                    <Download size={16} />
                    Baixar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Verbal Identity Tab */}
          <TabsContent value="verbal" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-medium">Tom de Voz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(voiceTraits).map(([trait, characteristics]) => (
                    <div key={trait} className="space-y-2">
                      <h3 className="text-lg font-medium capitalize">{trait}</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {characteristics.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Exemplos de Aplicação</h3>
                  
                  <div className="space-y-4 mb-4">
                    {Object.entries(voiceExamples).map(([trait, examples]) => (
                      <Card key={trait} className="border border-muted">
                        <CardHeader className="py-3">
                          <CardTitle className="text-base capitalize">{trait}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 pt-0">
                          <div>
                            <div className="text-sm font-medium text-muted-foreground mb-1">Comunicação Formal:</div>
                            <p className="italic">"{examples.formal}"</p>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-muted-foreground mb-1">Comunicação Casual:</div>
                            <p className="italic">"{examples.casual}"</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => handleDownload(true)}
                    >
                      <Lock size={16} />
                      Premium
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Slogans Tab */}
          <TabsContent value="slogans" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-medium">Opções de Slogans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {slogans.map((slogan, index) => (
                    <div key={index} className="p-6 bg-slate-50 rounded-lg border text-center">
                      <p className="text-xl font-medium font-serif">{slogan}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => handleDownload(false)}
                  >
                    <Download size={16} />
                    Baixar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Business Strategy Tab */}
          <TabsContent value="strategy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-medium">Estratégias de Negócio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {strategies.map((strategy, index) => (
                    <Card key={index} className="border border-muted">
                      <CardHeader className="py-4">
                        <CardTitle className="text-lg">{strategy.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 space-y-4">
                        <p>{strategy.description}</p>
                        <div>
                          <h4 className="font-medium mb-2">Táticas Recomendadas:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {strategy.tactics.map((tactic, index) => (
                              <li key={index}>{tactic}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-end mt-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => handleDownload(true)}
                  >
                    <Lock size={16} />
                    Premium
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BrandTextMaterials;
