import { Edit, Money } from '@mui/icons-material';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import {
	type FieldValues,
	type UseControllerProps,
	useController,
} from 'react-hook-form';

type DefaultInputProps<T extends FieldValues> = UseControllerProps<T> & {
	label: string;
	labelIcon?: boolean;
	legend?: string;
	inputIcon?: boolean;
};

function DefaultInput<T extends FieldValues>({
	...props
}: DefaultInputProps<T>) {
	const { field, fieldState } = useController(props);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: 94 }}>
			<Typography
				component="label"
				sx={{
					fontSize: '1.125rem',
					fontWeight: 'bold',
					color: 'text.primary',
					display: 'flex',
					alignItems: 'center',
					gap: 1,
				}}
			>
				{props.label}
				{props.labelIcon && <Edit style={{ width: 16, height: 16 }} />}
			</Typography>
			{props.legend && (
				<Typography
					variant="caption"
					sx={{ mt: -0.5, fontWeight: 300, color: 'text.secondary' }}
				>
					{props.legend}
				</Typography>
			)}
			<TextField
				type="number"
				value={field.value ?? ''}
				error={!!fieldState.error}
				helperText={fieldState.error?.message}
				onChange={(e) => {
					const val = e.target.value;
					if (val === '') {
						field.onChange(undefined);
					} else {
						const parsed = parseFloat(val.replace(',', '.'));

						field.onChange(Number.isNaN(parsed) ? undefined : parsed);
					}
				}}
				slotProps={{
					input: {
						startAdornment: props.inputIcon ? (
							<InputAdornment position="start">
								<Box
									sx={{
										color: 'text.disabled',
										display: 'flex',
									}}
								>
									<Money style={{ width: 20, height: 20 }} />
								</Box>
							</InputAdornment>
						) : undefined,
					},
				}}
				sx={{
					mb: 2,
					maxWidth: 'md',
					'& .MuiOutlinedInput-rootfieldset': { borderColor: 'primary.main' },
					'& input': { fontWeight: 'bold', color: 'text.primary' },
					'& input[type=number]': {
						MozAppearance: 'textfield',
					},
					'&input[type=number]::-webkit-outer-spin-button, &input[type=number]::-webkit-inner-spin-button':
						{
							WebkitAppearance: 'none',
							margin: 0,
						},
				}}
			/>
		</Box>
	);
}

export default DefaultInput;
