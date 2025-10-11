import { useController, UseControllerProps } from 'react-hook-form';
import { useState } from 'react';
import HideIcon from './icons/HideIcon.svg';
import ShowIcon from './icons/ShowIcon.svg';
import { loginSchemaType } from '@/features/login/schemas/loginSchema';

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

  const toggleHide = () => {
    setIsHidden(prevState => !prevState);
  };

  return (
    <div>
      <label htmlFor="email" className={'text-lg font-bold'}>
        {props.label}
      </label>
      <div className={'relative flex items-center'}>
        <input
          type={isHidden ? 'password' : 'text'}
          {...field}
          placeholder={props.placeholder}
          className={'mb-6 w-full max-w-sm rounded-md border border-[var(--green-theme)] p-3 font-bold outline-none'}
        />
        {props.inputType === 'password' &&
          (isHidden ? (
            <HideIcon
              onClick={toggleHide}
              className={'absolute right-3 bottom-9 h-6 w-6 cursor-pointer text-[var(--lines-color)]'}
            />
          ) : (
            <ShowIcon
              onClick={toggleHide}
              className={'absolute right-3 bottom-9 h-6 w-6 cursor-pointer text-[var(--lines-color)]'}
            />
          ))}
      </div>
      {fieldState.error && <p className="-mt-6 font-semibold">{fieldState.error.message}</p>}
    </div>
  );
};
