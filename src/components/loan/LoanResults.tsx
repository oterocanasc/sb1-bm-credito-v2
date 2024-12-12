import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, Star } from 'lucide-react';
import type { LoanOffer } from '../../types/loan';
import { formatCurrency } from '../../utils/format';

interface LoanResultsProps {
  offers: LoanOffer[];
}

export const LoanResults = ({ offers }: LoanResultsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="text-blue-600" size={24} />
          <h3 className="text-2xl font-bold text-gray-800">
            Encontramos {offers.length} ofertas para você
          </h3>
        </div>
        <p className="text-gray-600">
          Todas as ofertas são de parceiros verificados e confiáveis
        </p>
      </div>

      <div className="space-y-4">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={offer.logo}
                  alt={offer.provider}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {offer.provider}
                  </h4>
                  <div className="flex items-center space-x-1 text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Taxa de juros</p>
                <p className="text-3xl font-bold text-blue-600">
                  {offer.interestRate}% <span className="text-sm">a.m.</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-500">Parcela mensal</p>
                <p className="text-lg font-bold text-gray-800">
                  {formatCurrency(offer.monthlyPayment)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total a pagar</p>
                <p className="text-lg font-bold text-gray-800">
                  {formatCurrency(offer.totalAmount)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Prazo</p>
                <p className="text-lg font-bold text-gray-800">{offer.term} meses</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Requisitos:</p>
              <ul className="grid grid-cols-2 gap-3">
                {offer.requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check size={16} className="text-green-500 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
              Contratar agora
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};