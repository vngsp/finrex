import { registerErrorHandler } from '@/shared/lib/api/services/errorHandler';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const ErrorHandlerInitializer = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    registerErrorHandler(message => {
      console.error('Erro global tratado:', message);
    });
  }, [queryClient]);

  return null; // Este componente não renderiza nada
};

export default ErrorHandlerInitializer;
