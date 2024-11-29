import { TextInputProps } from 'react-native'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface InputProps extends TextInputProps {
  rightIcon?: 'eye' | 'eye-off' ;
  rightIconOnPress?: () => void;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<never>>;
  label?: string;
}

export interface InputRef {
  focus(): void;
}
