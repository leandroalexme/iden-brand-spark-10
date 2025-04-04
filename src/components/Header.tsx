
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="w-full py-6 px-6 md:px-12 bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-iden-purple">Iden<span className="text-xs align-super">™</span></span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#showcase" className="text-sm font-medium hover:text-iden-purple transition-colors">
            Showcase
          </a>
          <a href="#processo" className="text-sm font-medium hover:text-iden-purple transition-colors">
            Processo
          </a>
          <a href="#funcionalidades" className="text-sm font-medium hover:text-iden-purple transition-colors">
            Funcionalidades
          </a>
          <Link to="/briefing">
            <Button size="sm" className="bg-iden-purple hover:bg-iden-purple-dark text-white">
              Criar Marca
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
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
            href="#showcase" 
            className="text-lg font-medium hover:text-iden-purple transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Showcase
          </a>
          <a 
            href="#processo" 
            className="text-lg font-medium hover:text-iden-purple transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Processo
          </a>
          <a 
            href="#funcionalidades" 
            className="text-lg font-medium hover:text-iden-purple transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Funcionalidades
          </a>
          <Link 
            to="/briefing" 
            className="mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="w-full bg-iden-purple hover:bg-iden-purple-dark text-white">
              Criar Marca
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
