import { CreateOrderRequest, ApiResponse, OrderResponse } from '../Order';

describe('Order Domain Models', () => {
  describe('CreateOrderRequest', () => {
    it('should have correct structure', () => {
      const request: CreateOrderRequest = {
        branchId: 'BR001',
        itemId: 'ITEM001',
        quantity: 10,
      };

      expect(request).toHaveProperty('branchId');
      expect(request).toHaveProperty('itemId');
      expect(request).toHaveProperty('quantity');
      expect(typeof request.branchId).toBe('string');
      expect(typeof request.itemId).toBe('string');
      expect(typeof request.quantity).toBe('number');
    });
  });

  describe('ApiResponse', () => {
    it('should handle success response', () => {
      const response: ApiResponse<OrderResponse> = {
        success: true,
        message: 'Order created successfully',
        data: {
          id: '123',
          branchId: 'BR001',
          itemId: 'ITEM001',
          quantity: 10,
          createdAt: new Date().toISOString(),
          status: 'Pending',
        },
      };

      expect(response.success).toBe(true);
      expect(response.data).toBeDefined();
      expect(response.data?.id).toBe('123');
    });

    it('should handle error response', () => {
      const response: ApiResponse<OrderResponse> = {
        success: false,
        message: 'Validation error',
        errors: ['Branch ID is required', 'Quantity must be positive'],
      };

      expect(response.success).toBe(false);
      expect(response.errors).toHaveLength(2);
      expect(response.data).toBeUndefined();
    });
  });
});
