import { IOrderRepository } from '@domain/repositories/IOrderRepository';
import { CreateOrderRequest, ApiResponse, OrderResponse } from '@domain/models/Order';
import { IOrderApiClient } from '../clients/IOrderApiClient';

/**
 * Order repository implementation
 * Handles data access operations for orders
 */
export class OrderRepository implements IOrderRepository {
  constructor(private readonly apiClient: IOrderApiClient) {}

  /**
   * Creates a new order by calling the API client
   * @param request - The order creation request
   * @returns Promise with API response containing the created order
   */
  async createOrder(request: CreateOrderRequest): Promise<ApiResponse<OrderResponse>> {
    return await this.apiClient.createOrder(request);
  }
}

