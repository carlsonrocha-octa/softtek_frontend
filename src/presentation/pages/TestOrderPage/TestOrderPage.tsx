import { useCreateOrder } from '../../hooks/useCreateOrder';
import { OrderForm } from '../../components/OrderForm/OrderForm';
import { OrderResponseDisplay } from '../../components/OrderResponse/OrderResponse';
import { CreateOrderRequest } from '@domain/models/Order';
import { OrderRepository } from '@data/repositories/OrderRepository';
import { OrderApiClient } from '@data/clients/OrderApiClient';
import './TestOrderPage.css';

/**
 * Test Order Page component
 * Main page for testing order creation functionality
 */
export const TestOrderPage = () => {
  // Dependency injection: creating instances following Dependency Inversion Principle
  const apiClient = new OrderApiClient();
  const orderRepository = new OrderRepository(apiClient);
  const { createOrder, isLoading, response, reset } = useCreateOrder(orderRepository);

  /**
   * Handles order form submission
   * @param request - The order creation request from the form
   */
  const handleSubmit = (request: CreateOrderRequest) => {
    createOrder(request);
  };

  return (
    <div className="test-order-page">
      <div className="page-container">
        <h1>Portal de Pedidos de Insumos</h1>
        <h2>Teste de Criação de Pedido</h2>
        
        <div className="content-section">
          <OrderForm onSubmit={handleSubmit} isLoading={isLoading} />
          <OrderResponseDisplay response={response} onReset={reset} />
        </div>
      </div>
    </div>
  );
};

