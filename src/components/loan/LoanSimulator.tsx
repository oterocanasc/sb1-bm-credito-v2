import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calculator, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { submitFormData } from '../../services/api';
import { AmountField } from './form/AmountField';
import { TermField } from './form/TermField';
import { FormField } from './form/FormField';
import { MaskedInput } from './form/MaskedInput';
import type { SimulationForm } from '../../types/loan';

const simulationSchema = z.object({
  amount: z.number().min(1000).max(100000),
  term: z.number().min(3).max(72),
  purpose: z.string().min(1, 'Selecione a finalidade do empréstimo'),
  fullName: z.string().min(3, 'Nome completo é obrigatório'),
  income: z.number().min(500, 'A renda mínima deve ser R$ 500,00'),
  cpf: z.string().min(11, 'CPF é obrigatório'),
  phone: z.string().min(11, 'Telefone é obrigatório'),
  hasRestrictions: z.boolean(),
});

interface LoanSimulatorProps {
  onSimulationComplete: (data: SimulationForm) => void;
}

export const LoanSimulator = ({ onSimulationComplete }: LoanSimulatorProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SimulationForm>({
    resolver: zodResolver(simulationSchema),
    defaultValues: {
      amount: 5000,
      term: 12,
      hasRestrictions: false,
      purpose: '',
      fullName: '',
      cpf: '',
      phone: '',
      income: 0,
    },
  });

  const onSubmit = async (data: SimulationForm) => {
    try {
      await submitFormData(data);
      onSimulationComplete(data);

      setTimeout(() => {
        const resultsSection = document.getElementById('results-section');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (error) {
      console.error('Error processing form submission:', error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <AmountField control={control} error={errors.amount} />
            <TermField control={control} error={errors.term} />

            <FormField label="Finalidade do empréstimo" error={errors.purpose}>
              <select
                {...register('purpose')}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecione a finalidade</option>
                <option value="debt">Quitar dívidas</option>
                <option value="business">Investir no negócio</option>
                <option value="personal">Uso pessoal</option>
                <option value="vehicle">Comprar veículo</option>
                <option value="home">Reforma da casa</option>
              </select>
            </FormField>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            <FormField label="CPF" error={errors.cpf}>
              <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                  <MaskedInput
                    mask="999.999.999-99"
                    value={field.value}
                    onChange={field.onChange}
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Digite seu CPF"
                  />
                )}
              />
            </FormField>

            {/* Mobile Name Field */}
            <div className="block md:hidden">
              <FormField label="Nome Completo" error={errors.fullName}>
                <input
                  type="text"
                  {...register('fullName')}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite seu nome completo"
                />
              </FormField>
            </div>

            <FormField label="Celular" error={errors.phone}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <MaskedInput
                    mask="(99) 99999-9999"
                    value={field.value}
                    onChange={field.onChange}
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Digite seu celular"
                  />
                )}
              />
            </FormField>

            <FormField label="Renda mensal" error={errors.income}>
              <div className="relative">
                <DollarSign
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={24}
                />
                <input
                  type="number"
                  {...register('income', { valueAsNumber: true })}
                  className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite sua renda"
                />
              </div>
            </FormField>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                {...register('hasRestrictions')}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-gray-700">
                Possuo restrições no nome (SPC/Serasa)
              </label>
            </div>
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-xl transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg flex items-center justify-center space-x-3 relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></span>
          <Calculator size={28} className="relative z-10" />
          <span className="relative z-10">Ver ofertas disponíveis</span>
        </motion.button>

        <p className="text-center text-sm text-gray-500">
          Ao continuar, você concorda com nossos Termos de Uso e Política de
          Privacidade
        </p>
      </form>
    </div>
  );
};
