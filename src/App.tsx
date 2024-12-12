import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoanSimulator } from './components/loan/LoanSimulator';
import { LoanResults } from './components/loan/LoanResults';
import { AdvantagesSection } from './components/advantages/AdvantagesSection';
import type { SimulationForm } from './types/loan';

const sampleOffers = [
  {
    id: '1',
    provider: 'Creditas',
    interestRate: 1.99,
    monthlyPayment: 450.32,
    totalAmount: 5403.84,
    term: 12,
    requirements: [
      'Renda mínima de R$ 1.500',
      'Score acima de 600',
      'Sem restrições',
    ],
    logo: 'https://cdn2.easycredito.com.br/assets/main/partners/lp_lenders_logos/creditas-2b217d48622601230a2b3868e4cde79acd2d4edd8c93afd70b8b73b1f764bf76.png',
  },
  {
    id: '2',
    provider: 'Banco Pan',
    interestRate: 1.99,
    monthlyPayment: 450.32,
    totalAmount: 5403.84,
    term: 12,
    requirements: [
      'Renda mínima de R$ 1.500',
      'Score acima de 600',
      'Sem restrições',
    ],
    logo: 'https://cdn2.easycredito.com.br/assets/main/partners/bancopan-cartao-de-credito-a40916354cc04ec126348683df03b65f4ce8a56c0a97d6d48c42386a731b95c5.png',
  },
  {
    id: '3',
    provider: 'Sim',
    interestRate: 1.99,
    monthlyPayment: 450.32,
    totalAmount: 5403.84,
    term: 12,
    requirements: [
      'Renda mínima de R$ 1.500',
      'Score acima de 600',
      'Sem restrições',
    ],
    logo: 'https://cdn2.easycredito.com.br/assets/main/partners/emprestimo-pessoal-sim-046ef4ce113084726d55763b58ee60ac1dbbad8bd2fd186e1c2118137396f4c6.png',
  },
  {
    id: '4',
    provider: 'Provu',
    interestRate: 1.99,
    monthlyPayment: 450.32,
    totalAmount: 5403.84,
    term: 12,
    requirements: [
      'Renda mínima de R$ 1.500',
      'Score acima de 600',
      'Sem restrições',
    ],
    logo: 'https://cdn2.easycredito.com.br/assets/main/partners/lp_lenders_logos/provu-3bd639983dd5a781c5e872296eff87ab0210be463e06bbc13ecd86b54cfd0270.png',
  }
];

function App() {
  const [showResults, setShowResults] = useState(false);
  const [simulationData, setSimulationData] = useState<SimulationForm | null>(
    null
  );

  const handleSimulationComplete = (data: SimulationForm) => {
    setSimulationData(data);
    setShowResults(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <main className="flex-grow">
          <div className="relative">
            {/* Hero Section with Background */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 pt-16 pb-32">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center text-white space-y-6">
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    Encontre o empréstimo perfeito para você, com rapidez e sem burocracia!
                  </h1>
                  <p className="text-lg md:text-xl text-blue-100">
                    Análise gratuita e sem compromisso em diversas instituições financeiras de uma só vez
                  </p>
                </div>
              </div>
            </div>

            {/* Loan Simulator Card - Positioned to overlap */}
            <div className="container mx-auto px-4">
              <div className="relative -mt-24 mb-16">
                <LoanSimulator onSimulationComplete={handleSimulationComplete} />
              </div>
            </div>
          </div>

          {/* Results and Other Sections */}
          <div className="container mx-auto px-4 space-y-16">
            {showResults && simulationData && (
              <div id="results-section" className="scroll-mt-24">
                <LoanResults offers={sampleOffers} />
              </div>
            )}
            <AdvantagesSection />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;