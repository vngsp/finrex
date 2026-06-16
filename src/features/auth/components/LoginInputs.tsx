import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { type UseControllerProps, useController } from 'react-hook-form';
import type { loginSchemaType } from '@/features/auth/schemas/loginSchema';
import HideIcon from './icons/HideIcon.svg';
import ShowIcon from './icons/ShowIcon.svg';

type LoginInputProps = UseControllerProps<loginSchemaType> & {
	label: string;
	placeholder: string;
	inputType: 'text' | 'password';
};

export const LoginInputs = (props: LoginInputProps) => {
	const { field, fieldState } = useController({
		...props,
		defaultValue: '',
	});

	const [isHidden, setIsHidden] = useState(props.inputType === 'password');

	return (
		<TextField
			{...field}
			label={props.label}
			placeholder={props.placeholder}
			type={isHidden ? 'password' : 'text'}
			fullWidth
			error={!!fieldState.error}
			helperText={fieldState.error?.message}
			sx={{ mb: 3 }}
			slotProps={{
				input: {
					endAdornment: props.inputType === 'password' && (
						<InputAdornment position={'end'}>
							<IconButton
								onClick={() => setIsHidden((prev) => !prev)}
								edge="end"
							>
								{isHidden ? (
									<HideIcon
										style={{ height: 24, width: 24, color: '#bdc5ce' }}
									/>
								) : (
									<ShowIcon
										style={{ height: 24, width: 24, color: '#bdc5ce' }}
									/>
								)}
							</IconButton>
						</InputAdornment>
					),
				},
			}}
		/>
	);
};
