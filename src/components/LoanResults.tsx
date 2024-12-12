import React from 'react';
import { Shield, Check } from 'lucide-react';
import type { LoanOffer } from '../types/loan';

interface LoanResultsProps {
  offers: LoanOffer[];
}

export const LoanResults = ({ offers }: LoanResultsProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Encontramos {offers.length} ofertas para você
        </h3>
        <div className="flex items-center space-x-2 text-blue-600">
          <Shield size={20} />
          <span>Todas as ofertas são de parceiros verificados</span>
        </div>
      </div>

      <div className="space-y-4">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between">
              <div>
                <img
                  src={offer.logo}
                  alt={offer.provider}
                  className="h-12 object-contain mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {offer.provider}
                </h4>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Taxa de juros</p>
                <p className="text-2xl font-bold text-blue-600">
                  {offer.interestRate}% a.m.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Parcela mensal</p>
                <p className="text-lg font-semibold">
                  R$ {offer.monthlyPayment.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total a pagar</p>
                <p className="text-lg font-semibold">
                  R$ {offer.totalAmount.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Prazo</p>
                <p className="text-lg font-semibold">{offer.term} meses</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Requisitos:</p>
              <ul className="space-y-1">
                {offer.requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check size={16} className="text-green-500" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Solicitar empréstimo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};