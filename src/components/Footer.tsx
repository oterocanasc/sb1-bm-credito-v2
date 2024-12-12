import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Wallet size={32} className="text-white" />
              <span className="text-2xl font-bold text-white">Busca Meu Crédito</span>
            </Link>
            <p className="text-sm">
              A Busca Meu Crédito é uma plataforma de comparação de empréstimos que ajuda você a 
              encontrar as melhores ofertas do mercado. Não somos uma instituição financeira e não 
              realizamos operações de crédito diretamente.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition">
                  Parceiros
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contato@buscameucredito.com.br" className="hover:text-white transition">
                  contato@buscameucredito.com.br
                </a>
              </li>
              <li>
                <p>Segunda a Sexta: 9h às 18h</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-400 space-y-4">
            <p>
              © {new Date().getFullYear()} Busca Meu Crédito. Todos os direitos reservados.
            </p>
            <p>
              A Busca Meu Crédito atua como correspondente bancário e está em conformidade com a 
              Resolução nº 3.954 do Banco Central do Brasil.
            </p>
            <p>
              As taxas de juros, CET (Custo Efetivo Total) e demais condições apresentadas são 
              meramente informativas e podem variar de acordo com a análise de crédito realizada 
              pela instituição financeira. Todas as condições de empréstimo devem ser consultadas 
              diretamente com a instituição financeira no momento da contratação.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};