import { OrderRepository } from '../OrderRepository';
import { IOrderApiClient } from '../../clients/IOrderApiClient';
import { CreateOrderRequest, ApiResponse, OrderResponse } from '@domain/models/Order';

// Mock API Client
class MockOrderApiClient implements IOrderApiClient {
  async createOrder(request: CreateOrderRequest): Promise<ApiResponse<OrderResponse>> {
    return {
      success: true,
      message: 'Order created successfully',
      data: {
        id: 'mock-id-123',
        branchId: request.branchId,
        itemId: request.itemId,
        quantity: request.quantity,
        createdAt: new Date().toISOString(),
        status: 'Pending',
      },
    };
  }
}

describe('OrderRepository', () => {
  let repository: OrderRepository;
  let mockApiClient: IOrderApiClient;

  beforeEach(() => {
    mockApiClient = new MockOrderApiClient();
    repository = new OrderRepository(mockApiClient);
  });

  it('should create order successfully', async () => {
    const request: CreateOrderRequest = {
      branchId: 'BR001',
      itemId: 'ITEM001',
      quantity: 5,
    };

    const response = await repository.createOrder(request);

    expect(response.success).toBe(true);
    expect(response.data).toBeDefined();
    expect(response.data?.branchId).toBe('BR001');
    expect(response.data?.itemId).toBe('ITEM001');
    expect(response.data?.quantity).toBe(5);
  });

  it('should call api client with correct parameters', async () => {
    const createOrderSpy = jest.spyOn(mockApiClient, 'createOrder');
    
    const request: CreateOrderRequest = {
      branchId: 'BR002',
      itemId: 'ITEM002',
      quantity: 10,
    };

    await repository.createOrder(request);

    expect(createOrderSpy).toHaveBeenCalledWith(request);
    expect(createOrderSpy).toHaveBeenCalledTimes(1);
  });
});
