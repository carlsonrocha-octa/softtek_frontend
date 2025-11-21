import { IOrderApiClient } from './IOrderApiClient';
import { CreateOrderRequest, ApiResponse, OrderResponse } from '@domain/models/Order';
import axios, { AxiosInstance, AxiosError } from 'axios';

/**
 * Order API client implementation using Axios
 * Handles HTTP communication with the backend REST API
 */
export class OrderApiClient implements IOrderApiClient {
  private readonly client: AxiosInstance;

  constructor(baseURL: string = '/api') {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });
  }

  /**
   * Creates a new order by sending POST request to /api/orders
   * @param request - The order creation request
   * @returns Promise with API response containing the created order
   */
  async createOrder(request: CreateOrderRequest): Promise<ApiResponse<OrderResponse>> {
    try {
      const response = await this.client.post<ApiResponse<OrderResponse>>('/orders', request);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Handles API errors and converts them to ApiResponse format
   * @param error - The error from axios
   * @returns ApiResponse with error information
   */
  private handleError(error: unknown): ApiResponse<OrderResponse> {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiResponse<OrderResponse>>;
      
      if (axiosError.response) {
        // Server responded with error status
        return {
          success: false,
          message: axiosError.response.data?.message || 'Erro ao processar a requisição',
          errors: axiosError.response.data?.errors || ['Erro desconhecido'],
        };
      } else if (axiosError.request) {
        // Request was made but no response received
        return {
          success: false,
          message: 'Não foi possível conectar ao servidor',
          errors: ['Erro de conexão'],
        };
      }
    }

    // Unknown error
    return {
      success: false,
      message: 'Ocorreu um erro inesperado',
      errors: ['Erro desconhecido'],
    };
  }
}

