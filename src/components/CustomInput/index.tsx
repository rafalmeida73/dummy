import React, { useImperativeHandle, useRef } from 'react'
import { InputProps, InputRef } from './types'
import { Input, InputField, InputIcon, InputSlot } from '../ui/input'
import { Info } from 'lucide-react-native'
import { TextInput } from 'react-native'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import { Icon } from '../ui/icon'
import { Eye } from 'lucide-react-native'
import { EyeOff } from 'lucide-react-native'

export const CustomInput = React.forwardRef<InputRef, InputProps>(
  (
    {
      rightIcon,
      rightIconOnPress,
      error,
      label,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef<TextInput>(null)

    useImperativeHandle(ref, () => ({
      focus() {
        inputRef?.current?.focus()
      },
    }))

    return (
      <>
        {label && (
          <Text size="lg" className="mb-1 font-bold">{label}</Text>
        )}

        <Input className="text-center" isInvalid={!!error}>
          <InputField ref={inputRef as React.RefObject<never>} {...rest} />

          {rightIcon && (
            <InputSlot className="pr-3" onPress={rightIconOnPress}>
              <InputIcon
                as={() => (
                  <Icon
                    as={rightIcon === 'eye'
                      ? Eye
                      : EyeOff} className="text-typography-500 m-2 w-4 h-4"
                  />
                )}
              />
            </InputSlot>
          )}
        </Input>

        {!!error && (
          <Box className="flex-row h-11 mt-1 items-center">
            <Icon as={Info} className="text-red-700 mr-2" size="lg" />
            <Text size="lg" className="text-red-700">{error.toString()}</Text>
          </Box>
        )}

      </>
    )
  },
)
