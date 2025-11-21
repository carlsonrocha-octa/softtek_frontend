import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TestOrderPage } from './presentation/pages/TestOrderPage/TestOrderPage';
import './App.css';

/**
 * Main App component
 * Sets up routing for the application
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test/order" element={<TestOrderPage />} />
        <Route path="/" element={<TestOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

