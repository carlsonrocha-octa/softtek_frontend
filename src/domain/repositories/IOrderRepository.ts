import { CreateOrderRequest, ApiResponse, OrderResponse } from '../models/Order';

/**
 * Repository interface for order operations
 * Follows Repository pattern from Domain-Driven Design
 */
export interface IOrderRepository {
  /**
   * Creates a new order
   * @param request - The order creation request
   * @returns Promise with API response containing the created order
   */
  createOrder(request: CreateOrderRequest): Promise<ApiResponse<OrderResponse>>;
}

