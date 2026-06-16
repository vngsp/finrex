import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface Palette {
		yellow: { main: string };
		purple: { main: string };
		orange: { main: string };
	}
	interface PaletteOptions {
		yellow?: { main: string };
		purple?: { main: string };
		orange?: { main: string };
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: '#5dbc75',
			dark: '#418f60',
			light: '#87d9a0',
		},
		error: {
			main: '#e05a5a',
		},
		warning: {
			main: '#f7a14d',
		},
		text: {
			primary: '#333',
			secondary: '#bdc5ce',
			disabled: '#d1d8e0',
		},
		background: {
			default: '#ffffff',
			paper: '#f5f7f9',
		},
		yellow: { main: '#f2d77d' },
		purple: { main: '#a25bae' },
		orange: { main: '#f7a14d' },
	},
	typography: {
		fontFamily: 'inherit',
	},
});
