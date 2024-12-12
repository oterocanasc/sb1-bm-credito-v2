export interface LoanOffer {
  id: string;
  provider: string;
  interestRate: number;
  monthlyPayment: number;
  totalAmount: number;
  term: number;
  requirements: string[];
  logo: string;
}

export interface SimulationForm {
  amount: number;
  term: number;
  purpose: string;
  income: number;
  cpf: string;
  phone: string;
  hasRestrictions: boolean;
}

export interface LoanSimulationParams {
  amount: number;
  term: number;
  purpose: string;
  income: number;
  hasRestrictions: boolean;
}