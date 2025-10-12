import { useAlertError } from '@/app/(realApp)/insights/contexts/AlertErrorContext';
import { useEffect } from 'react';

const ErrorAlert = ({ message }: { message?: string }) => {
  const { error, setError } = useAlertError();

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError(undefined);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error, setError]);

  if (!message) return null;

  return (
    <div
      className={
        'absolute top-100 left-160 h-12 w-auto min-w-[200px] bg-[var(--red-theme)]' +
        ' z-40 flex items-center justify-center rounded-md border px-4 py-2 text-center text-nowrap'
      }
    >
      {message}
    </div>
  );
};

export default ErrorAlert;
