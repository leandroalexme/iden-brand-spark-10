
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="w-full py-4 px-4 md:px-6 lg:px-8 bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-iden-purple">Iden<span className="text-xs align-super">™</span></span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#como-funciona" className="text-sm font-medium hover:text-iden-purple transition-colors">
            Como Funciona
          </a>
          <a href="#planos" className="text-sm font-medium hover:text-iden-purple transition-colors">
            Planos
          </a>
          <a href="#marketplace" className="text-sm font-medium hover:text-iden-purple transition-colors">
            Marketplace
          </a>
          <Button variant="outline" size="sm" className="ml-2">
            Entrar
          </Button>
          <Button size="sm" className="bg-iden-purple hover:bg-iden-purple-dark text-white">
            Criar Minha Marca
          </Button>
        </nav>
        
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className={cn(
        "fixed inset-0 bg-white z-40 p-6 flex flex-col md:hidden transition-transform duration-300 ease-in-out transform",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-8">
          <span className="text-2xl font-serif font-bold text-iden-purple">Iden<span className="text-xs align-super">™</span></span>
          <button onClick={toggleMobileMenu}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex flex-col gap-6">
          <a 
            href="#como-funciona" 
            className="text-lg font-medium hover:text-iden-purple transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Como Funciona
          </a>
          <a 
            href="#planos" 
            className="text-lg font-medium hover:text-iden-purple transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Planos
          </a>
          <a 
            href="#marketplace" 
            className="text-lg font-medium hover:text-iden-purple transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Marketplace
          </a>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" className="w-full">
              Entrar
            </Button>
            <Button className="w-full bg-iden-purple hover:bg-iden-purple-dark text-white">
              Criar Minha Marca
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
