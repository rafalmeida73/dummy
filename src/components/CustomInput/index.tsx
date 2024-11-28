import React, { useImperativeHandle, useRef, useState } from "react";
import { InputProps, InputRef } from "./types";
import { Input, InputField, InputIcon, InputSlot } from "../ui/input";
import { Info } from 'lucide-react-native';
import { TextInput } from "react-native";
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { Icon } from "../ui/icon";

export const CustomInput = React.forwardRef<InputRef, InputProps>(
  (
    {
      rightIcon = null,
      rightIconOnPress,
      error,
      ...rest
    },
    ref,
  ) => {

    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
      focus() {
        inputRef?.current?.focus();
      },
    }));

    return (
      <>
        <Input className="text-center">
          <InputField ref={inputRef as React.RefObject<any>}   {...rest} />

          {rightIcon && (
            <InputSlot className="pr-3" onPress={rightIconOnPress}>
              <InputIcon
                as={() => (
                  <Icon as={Info} className="text-typography-500 m-2 w-4 h-4" />
                )}
              />
            </InputSlot>
          )
          }
        </Input>

        {!!error && (
          <Box className="flex-row h-11">
            <Icon as={Info} className="text-red-600" size="lg" />
            <Text className="text-red-600">{error.toString()}</Text>
          </Box>
        )}

      </>
    );
  },
);


