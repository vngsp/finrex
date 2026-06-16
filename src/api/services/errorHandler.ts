// Axios Error Interceptor

type ErrorMessage = string | Array<{ campo: string; mensagem: string }> | null;

let ErrorHandler: ((msg: ErrorMessage) => void) | null = null;

export const registerErrorHandler = (handler: (msg: ErrorMessage) => void) => {
	ErrorHandler = handler;
};

export const handleError = (msg: ErrorMessage) => {
	if (ErrorHandler) {
		ErrorHandler(msg);
	} else {
		console.error('Erro capturado antes de ser registrado: ', msg);
	}
};

export const formatErrorMessage = (error: ErrorMessage): string => {
	if (!error) return 'Erro desconhecido';
	if (typeof error === 'string') return error;
	if (Array.isArray(error) && error.length > 0) {
		return error[0].mensagem || 'Erro de validação';
	}
	return 'Erro desconhecido';
};
