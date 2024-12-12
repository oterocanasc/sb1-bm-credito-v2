import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calculator, DollarSign, Clock } from 'lucide-react';

const simulationSchema = z.object({
  amount: z.number().min(500).max(100000),
  term: z.number().min(1).max(72),
  purpose: z.string().min(1),
  income: z.number().min(0),
  hasRestrictions: z.boolean(),
});

type SimulationForm = z.infer<typeof simulationSchema>;

export const LoanSimulator = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SimulationForm>({
    resolver: zodResolver(simulationSchema),
  });

  const onSubmit = (data: SimulationForm) => {
    console.log(data);
    // Handle simulation logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Simule seu empréstimo</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Quanto você precisa?
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" />
              <input
                type="number"
                {...register('amount', { valueAsNumber: true })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite o valor"
              />
            </div>
            {errors.amount && (
              <p className="text-red-500 text-sm mt-1">Valor inválido</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Em quantos meses?
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="number"
                {...register('term', { valueAsNumber: true })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Número de meses"
              />
            </div>
            {errors.term && (
              <p className="text-red-500 text-sm mt-1">Prazo inválido</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Finalidade do empréstimo
            </label>
            <select
              {...register('purpose')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Selecione a finalidade</option>
              <option value="debt">Quitar dívidas</option>
              <option value="business">Investir no negócio</option>
              <option value="personal">Uso pessoal</option>
              <option value="vehicle">Comprar veículo</option>
              <option value="home">Reforma da casa</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Qual sua renda mensal?
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" />
              <input
                type="number"
                {...register('income', { valueAsNumber: true })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite sua renda"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              {...register('hasRestrictions')}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="text-gray-700">
              Possuo restrições no nome (SPC/Serasa)
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center space-x-2"
        >
          <Calculator size={20} />
          <span>Simular agora</span>
        </button>
      </form>
    </div>
  );
};