import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useRef, useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { StatusBar } from 'expo-status-bar';
import { CustomInput } from '@/components/CustomInput';
import { TextInput } from 'react-native';

export const SignInView = () => {
  const userInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [showPassword, setShowPassword] = useState(false)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  return (
    <>
      <StatusBar style="light" />

      <Box className="flex-1 relative">
        <Box className="absolute top-0 left-0 bg-info-700  h-1/2 w-full" />

        <Box className="justify-center items-center h-full p-5 mb-2">
          <Heading size={'4xl'} className="text-typography-0 mb-3">Bem-vindo de volta!</Heading>
          <Text size='2xl' className="text-typography-0">Insira seus dados para entrar na sua conta.</Text>

          <Box className="shadow-hard-2 bg-secondary-0 rounded-2xl w-full py-14 px-8 mt-8">
            <CustomInput
              ref={userInputRef}
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef!.current!.focus();
              }}
              error="fdf"
            />

            <CustomInput
              ref={passwordInputRef}
              returnKeyType="send"
            />

            <Button size="lg" variant="solid" action="primary" className='bg-info-700 mt-7' >
              <ButtonText className="font-bold">Entrar</ButtonText>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

