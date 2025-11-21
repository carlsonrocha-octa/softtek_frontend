import { useState, FormEvent } from 'react';
import { CreateOrderRequest } from '@domain/models/Order';
import './OrderForm.css';

interface OrderFormProps {
  onSubmit: (request: CreateOrderRequest) => void;
  isLoading: boolean;
}

/**
 * Order form component
 * Handles user input for creating a new order
 */
export const OrderForm = ({ onSubmit, isLoading }: OrderFormProps) => {
  const [branchId, setBranchId] = useState('');
  const [itemId, setItemId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  /**
   * Validates the form fields
   * @returns true if form is valid, false otherwise
   */
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!branchId.trim()) {
      newErrors.branchId = 'Branch ID é obrigatório';
    }

    if (!itemId.trim()) {
      newErrors.itemId = 'Item ID é obrigatório';
    }

    const quantityNum = parseInt(quantity, 10);
    if (!quantity || isNaN(quantityNum) || quantityNum <= 0) {
      newErrors.quantity = 'Quantidade deve ser um número maior que zero';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles form submission
   * @param event - Form submit event
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const request: CreateOrderRequest = {
      branchId: branchId.trim(),
      itemId: itemId.trim(),
      quantity: parseInt(quantity, 10),
    };

    onSubmit(request);
  };

  /**
   * Resets the form fields
   */
  const handleReset = () => {
    setBranchId('');
    setItemId('');
    setQuantity('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div className="form-group">
        <label htmlFor="branchId">Branch ID *</label>
        <input
          id="branchId"
          type="text"
          value={branchId}
          onChange={(e) => setBranchId(e.target.value)}
          disabled={isLoading}
          className={errors.branchId ? 'error' : ''}
        />
        {errors.branchId && <span className="error-message">{errors.branchId}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="itemId">Item ID *</label>
        <input
          id="itemId"
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          disabled={isLoading}
          className={errors.itemId ? 'error' : ''}
        />
        {errors.itemId && <span className="error-message">{errors.itemId}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="quantity">Quantidade *</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          disabled={isLoading}
          className={errors.quantity ? 'error' : ''}
        />
        {errors.quantity && <span className="error-message">{errors.quantity}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" disabled={isLoading} className="submit-button">
          {isLoading ? 'Criando...' : 'Criar Pedido'}
        </button>
        <button type="button" onClick={handleReset} disabled={isLoading} className="reset-button">
          Limpar
        </button>
      </div>
    </form>
  );
};

