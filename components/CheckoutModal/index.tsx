import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@immu/@/components/ui/button';
import PixQRCode from '../PixQRCode';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  amount: number; // valor da compra
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, amount }) => {
  const [copied, setCopied] = useState(false);
  const pixKey = '46865616000126';
  const name = 'Instituto Manancial Maos Unidas';
  const city = 'Serra';

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative shadow-lg">
        <button
          onClick={() => onClose(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
          Finalize seu Pagamento
        </h2>

        <p className="text-center text-gray-700 mb-4">
          Escaneie o QR Code Pix abaixo para pagar <strong>R$ {amount.toFixed(2)}</strong>
        </p>

        <PixQRCode
          pixKey={pixKey}
          name={name}
          city={city}
          amount={amount}
          className="mb-4"
        />

        <div className="bg-green-50 p-3 rounded-lg mb-4 text-center">
          <p className="font-semibold text-green-700">Chave Pix:</p>
          <p className="font-mono text-sm break-all mb-2">{pixKey}</p>
          <button
            onClick={handleCopyPixKey}
            className="text-sm text-green-700 underline hover:text-green-900"
          >
            {copied ? 'Copiado!' : 'Copiar chave Pix'}
          </button>
        </div>

        <div className="mt-4 text-center">
          <Button onClick={() => onClose(false)}>Fechar</Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
