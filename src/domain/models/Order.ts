/**
 * Order domain model
 * Represents an order entity in the domain layer
 */
export interface Order {
  id: string;
  branchId: string;
  itemId: string;
  quantity: number;
  createdAt: Date;
  status: string;
}

/**
 * Request model for creating a new order
 */
export interface CreateOrderRequest {
  branchId: string;
  itemId: string;
  quantity: number;
}

/**
 * Response model from the API
 */
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: string[];
}

/**
 * Order response model from the API
 */
export interface OrderResponse {
  id: string;
  branchId: string;
  itemId: string;
  quantity: number;
  createdAt: string;
  status: string;
}

