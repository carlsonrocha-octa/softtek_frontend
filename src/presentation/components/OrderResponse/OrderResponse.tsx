import { ApiResponse, OrderResponse } from '@domain/models/Order';
import './OrderResponse.css';

interface OrderResponseProps {
  response: ApiResponse<OrderResponse> | null;
  onReset: () => void;
}

/**
 * Order response component
 * Displays the result of order creation (success or error)
 */
export const OrderResponseDisplay = ({ response, onReset }: OrderResponseProps) => {
  if (!response) {
    return null;
  }

  const isSuccess = response.success;
  const order = response.data;

  return (
    <div className={`order-response ${isSuccess ? 'success' : 'error'}`}>
      <div className="response-header">
        <h3>{isSuccess ? 'Pedido Criado com Sucesso!' : 'Erro ao Criar Pedido'}</h3>
        <button onClick={onReset} className="close-button">
          ×
        </button>
      </div>

      {response.message && (
        <div className="response-message">
          <strong>Mensagem:</strong> {response.message}
        </div>
      )}

      {isSuccess && order && (
        <div className="order-details">
          <h4>Detalhes do Pedido:</h4>
          <div className="detail-row">
            <span className="detail-label">ID:</span>
            <span className="detail-value">{order.id}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Branch ID:</span>
            <span className="detail-value">{order.branchId}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Item ID:</span>
            <span className="detail-value">{order.itemId}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Quantidade:</span>
            <span className="detail-value">{order.quantity}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Status:</span>
            <span className="detail-value">{order.status}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Data de Criação:</span>
            <span className="detail-value">
              {new Date(order.createdAt).toLocaleString('pt-BR')}
            </span>
          </div>
        </div>
      )}

      {!isSuccess && response.errors && response.errors.length > 0 && (
        <div className="error-list">
          <h4>Erros:</h4>
          <ul>
            {response.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

