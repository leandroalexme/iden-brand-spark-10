
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Esquema de validação do formulário
const briefingSchema = z.object({
  brandName: z.string().min(2, {
    message: "O nome da marca deve ter pelo menos 2 caracteres.",
  }),
  industry: z.string().min(2, {
    message: "Por favor, informe o setor de atuação.",
  }),
  targetAudience: z.string().min(10, {
    message: "Por favor, descreva seu público-alvo com mais detalhes.",
  }),
  brandValues: z.string().min(10, {
    message: "Por favor, descreva os valores da sua marca com mais detalhes.",
  }),
  competitors: z.string().optional(),
  visualPreferences: z.string().min(10, {
    message: "Por favor, descreva suas preferências visuais com mais detalhes.",
  }),
  additionalNotes: z.string().optional(),
});

type BriefingFormValues = z.infer<typeof briefingSchema>;

const BriefingForm = () => {
  const form = useForm<BriefingFormValues>({
    resolver: zodResolver(briefingSchema),
    defaultValues: {
      brandName: "",
      industry: "",
      targetAudience: "",
      brandValues: "",
      competitors: "",
      visualPreferences: "",
      additionalNotes: "",
    },
  });

  function onSubmit(data: BriefingFormValues) {
    console.log(data);
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
    // ou salvar no localStorage e redirecionar para a próxima etapa
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="container max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-serif font-bold mb-4">Briefing de Marca</h1>
              <p className="text-gray-600">
                Conte-nos sobre sua marca para que possamos criar uma identidade visual perfeita para o seu negócio.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="brandName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da Marca *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Iden" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Setor de Atuação *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Tecnologia, Restaurante, Moda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Público-Alvo *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva quem é seu cliente ideal (idade, interesses, comportamentos)" 
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="brandValues"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Valores da Marca *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Quais são os principais valores que sua marca representa?" 
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="competitors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Concorrentes</FormLabel>
                      <FormControl>
                        <Input placeholder="Quais marcas você considera como concorrentes?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="visualPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferências Visuais *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva o estilo visual que você prefere (moderno, minimalista, vintage, etc)" 
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="additionalNotes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Observações Adicionais</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Alguma informação adicional que gostaria de compartilhar?" 
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-iden-purple hover:bg-iden-purple-dark text-white" 
                    size="lg"
                  >
                    Continuar
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BriefingForm;
