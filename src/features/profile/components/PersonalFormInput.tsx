import { TextField } from '@mui/material';
import { type UseControllerProps, useController } from 'react-hook-form';
import type { ProfileFormValues } from '@/features/profile/schemas/profileSchema';

type profileInputProps = UseControllerProps<ProfileFormValues> & {
	placeholder: string;
	isNumeric?: boolean;
};

const PersonalFormInput = (props: profileInputProps) => {
	const { isNumeric, ...controllerProps } = props;

	const { field, fieldState } = useController({
		...controllerProps,
		defaultValue: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value: string | number | null = e.target.value;

		if (isNumeric) {
			const numValue = parseFloat(value);
			value = Number.isNaN(numValue) ? null : numValue;
		}

		field.onChange(value);
	};

	return (
		<TextField
			onChange={handleChange}
			onBlur={field.onBlur}
			name={field.name}
			inputRef={field.ref}
			value={field.value ?? ''}
			type={isNumeric ? 'number' : 'text'}
			placeholder={props.placeholder}
			error={fieldState.invalid}
			size="small"
			sx={{
				mb: 1.75,
				width: '80%',
				maxWidth: 'lg',
				'& .MuiOutlinedInput-root fieldset': {
					borderColor: fieldState.invalid ? 'error.main' : 'primary.main',
				},
				'& input': { fontWeight: 'bold', color: 'text.primary' },
				'& input::placeholder': { color: 'text.disabled', opacity: 1 },
				'& input[type=number]': {
					MozAppearance: 'textfield',
				},
				'& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
					{
						WebkitAppearance: 'none',
						margin: 0,
					},
			}}
		/>
	);
};

export default PersonalFormInput;
