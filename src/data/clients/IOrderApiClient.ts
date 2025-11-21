import { CreateOrderRequest, ApiResponse, OrderResponse } from '@domain/models/Order';

/**
 * API client interface for order operations
 * Abstracts HTTP communication with the backend
 */
export interface IOrderApiClient {
  /**
   * Sends a POST request to create a new order
   * @param request - The order creation request
   * @returns Promise with API response containing the created order
   */
  createOrder(request: CreateOrderRequest): Promise<ApiResponse<OrderResponse>>;
}

