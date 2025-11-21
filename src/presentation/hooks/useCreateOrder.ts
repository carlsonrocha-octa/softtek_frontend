import { useState } from 'react';
import { IOrderRepository } from '@domain/repositories/IOrderRepository';
import { CreateOrderRequest, ApiResponse, OrderResponse } from '@domain/models/Order';

/**
 * Custom hook for creating orders
 * Manages the state and logic for order creation
 */
export const useCreateOrder = (repository: IOrderRepository) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse<OrderResponse> | null>(null);

  /**
   * Creates a new order
   * @param request - The order creation request
   */
  const createOrder = async (request: CreateOrderRequest) => {
    setIsLoading(true);
    setResponse(null);

    try {
      const result = await repository.createOrder(request);
      setResponse(result);
    } catch (error) {
      setResponse({
        success: false,
        message: 'Erro ao criar pedido',
        errors: ['Erro inesperado'],
      });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Resets the response state
   */
  const reset = () => {
    setResponse(null);
  };

  return {
    createOrder,
    isLoading,
    response,
    reset,
  };
};

