
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Essencial",
    description: "Perfeito para pequenos negócios e startups",
    price: "99",
    period: "trimestral",
    color: "bg-gray-50",
    buttonVariant: "outline" as const,
    features: [
      "Logo personalizado",
      "Paleta de cores básica",
      "2 tipografias",
      "1 revisão de design",
      "Arquivos digitais básicos",
      "Suporte por e-mail"
    ]
  },
  {
    name: "Profissional",
    description: "A escolha ideal para negócios em crescimento",
    price: "249",
    period: "trimestral",
    color: "bg-iden-purple text-white",
    isPrimary: true,
    buttonVariant: "default" as const,
    buttonColor: "bg-white text-iden-purple hover:bg-gray-100",
    features: [
      "Logo personalizado",
      "Paleta de cores completa",
      "3 tipografias",
      "3 revisões de design",
      "Manual de marca básico",
      "Mockups de aplicação",
      "Arquivos para mídia social",
      "Suporte prioritário"
    ]
  },
  {
    name: "Empresarial",
    description: "Solução completa para empresas estabelecidas",
    price: "499",
    period: "trimestral",
    color: "bg-gray-50",
    buttonVariant: "outline" as const,
    features: [
      "Logo personalizado premium",
      "Sistema de identidade visual",
      "Paleta de cores avançada",
      "Sistema tipográfico completo",
      "Revisões ilimitadas",
      "Manual de marca completo",
      "Mockups personalizados",
      "Kit completo para mídias sociais",
      "Suporte dedicado 24/7"
    ]
  }
];

const Plans = () => {
  return (
    <section id="planos" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Planos e Preços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Escolha o plano ideal para as necessidades do seu negócio. Todos incluem nossa tecnologia de IA de ponta.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${plan.color} p-6 md:p-8 rounded-xl ${plan.isPrimary ? 'shadow-xl ring-2 ring-iden-purple' : 'border border-gray-200 shadow-sm'}`}
            >
              <div className="mb-6">
                <h3 className={`text-2xl font-serif font-bold ${plan.isPrimary ? 'text-white' : ''}`}>{plan.name}</h3>
                <p className={`mt-1 ${plan.isPrimary ? 'text-white/80' : 'text-gray-500'}`}>{plan.description}</p>
              </div>
              
              <div className="flex items-end mb-6">
                <span className={`text-4xl font-bold ${plan.isPrimary ? 'text-white' : ''}`}>R${plan.price}</span>
                <span className={`ml-1 mb-1 ${plan.isPrimary ? 'text-white/80' : 'text-gray-500'}`}>/{plan.period}</span>
              </div>
              
              <Button 
                className={`w-full mb-8 ${plan.buttonColor || ''}`} 
                variant={plan.buttonVariant}
                size="lg"
              >
                Escolher plano
              </Button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check 
                      size={18} 
                      className={`mr-2 mt-0.5 flex-shrink-0 ${plan.isPrimary ? 'text-white' : 'text-iden-purple'}`} 
                    />
                    <span className={`${plan.isPrimary ? 'text-white/90' : 'text-gray-600'} text-sm`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
