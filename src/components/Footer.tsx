
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 border-t border-gray-100">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Iden<span className="text-xs align-super">™</span></h3>
            <p className="text-gray-600 mb-4">
              Estúdio de branding digital impulsionado por inteligência artificial, criando identidades de marca únicas e memoráveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-iden-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-iden-purple">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-iden-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-iden-purple">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-iden-purple">Início</a></li>
              <li><a href="#como-funciona" className="text-gray-600 hover:text-iden-purple">Como Funciona</a></li>
              <li><a href="#planos" className="text-gray-600 hover:text-iden-purple">Planos</a></li>
              <li><a href="#marketplace" className="text-gray-600 hover:text-iden-purple">Marketplace</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-iden-purple">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-iden-purple">Guias de Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-iden-purple">Ferramentas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-iden-purple">Exemplos de Marcas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-iden-purple">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-iden-purple">Contato</a></li>
              <li><a href="#" className="text-gray-600 hover:text-iden-purple">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-600 hover:text-iden-purple">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Iden™. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
