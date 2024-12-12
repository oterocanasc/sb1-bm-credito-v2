import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ShieldCheck, 
  Clock, 
  Percent,
  Building2,
  CheckCircle2
} from 'lucide-react';

const advantages = [
  {
    icon: Search,
    title: 'Compare ofertas',
    description: 'Encontre as melhores taxas do mercado em um só lugar'
  },
  {
    icon: ShieldCheck,
    title: '100% Seguro',
    description: 'Seus dados estão protegidos com a mais alta segurança'
  },
  {
    icon: Clock,
    title: 'Rápido e fácil',
    description: 'Receba ofertas em poucos minutos após sua solicitação'
  }
];

const features = [
  {
    icon: Percent,
    title: 'Melhores taxas',
    description: 'Comparamos as taxas de diversas instituições para você conseguir o melhor negócio'
  },
  {
    icon: Building2,
    title: '+30 Parceiros',
    description: 'Trabalhamos com os principais bancos e financeiras do mercado'
  },
  {
    icon: CheckCircle2,
    title: 'Sem compromisso',
    description: 'Faça sua simulação gratuitamente e decida se quer contratar'
  }
];

export const AdvantagesSection = () => {
  return (
    <div className="py-16 space-y-20">
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Por que escolher nossa plataforma?
          </h2>
          <p className="text-gray-600 text-lg">
            Facilitamos sua busca pelo empréstimo ideal com as melhores condições do mercado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <advantage.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como funciona?
            </h2>
            <p className="text-gray-600 text-lg">
              Processo simples e transparente para você conseguir seu empréstimo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};