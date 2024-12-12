import type { SimulationForm } from '../types/loan';

interface ApiResponse {
  success: boolean;
  message: string;
}

export const submitFormData = async (formData: SimulationForm): Promise<ApiResponse> => {
  try {
    const response = await fetch('https://0c56-191-254-95-235.ngrok-free.app/api/form/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cpf: formData.cpf,
        id: 1,
        phone: formData.phone,
        email: "cliente@example.com",
        restricaoCpf: false,
        origin: "SiteParceiro",
        amount: 10000,
        installments: 12
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Failed to submit form data',
    };
  }
};