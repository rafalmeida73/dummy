import { TextInputProps } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export interface InputProps extends TextInputProps {
  rightIcon?: keyof typeof Feather.glyphMap;
  rightIconOnPress?: () => void;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export interface InputRef {
  focus(): void;
}
