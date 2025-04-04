
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Iden<span className="text-xs align-super">™</span></h3>
            <p className="text-gray-600 mb-4">
              Estúdio de branding digital impulsionado por inteligência artificial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-iden-purple">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-iden-purple">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-iden-purple">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-iden-purple">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm text-gray-900">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Sobre</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Equipe</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Contato</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Carreiras</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm text-gray-900">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Blog</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Guias</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Exemplos</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm text-gray-900">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Privacidade</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Termos</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Cookies</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-iden-purple">Licenças</a></li>
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
