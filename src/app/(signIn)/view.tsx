import { Box } from '@/components/ui/box'
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { CustomInput } from '@/components/CustomInput'
import { TextInput } from 'react-native'
import { useSignInModel } from './model'

export const SignInView = ({
  showPassword,
  handleSubmitLogin,
  form,
  handlePressEye,
  handleChangeText,
  invalidUser,
}: ReturnType<typeof useSignInModel>) => {
  const userInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    clearErrors,
  } = form

  return (
    <>
      <StatusBar style="light" />

      <Box className="flex-1 relative">
        <Box className="absolute top-0 left-0 bg-info-700  h-1/2 w-full" />

        <Box className="justify-center items-center h-full p-5 mb-2">
          <Heading size="3xl" className="text-typography-0 mb-3">
            Bem-vindo de volta!
          </Heading>
          <Text size="lg" className="text-typography-0">
            Insira seus dados para entrar na sua conta.
          </Text>

          <Box
            className="
              shadow-hard-2
              bg-secondary-0
              rounded-2xl
              w-full
              py-14
              px-8
              mt-8
            "
          >
            {invalidUser && (
              <Text size="2xl" className="text-red-700 text-center mb-4">
                Username ou senha inválidos
              </Text>
            )}

            <Box className="mb-6">
              <CustomInput
                ref={userInputRef}
                label="Username"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef!.current!.focus()
                }}
                autoCapitalize="none"
                autoCorrect={false}
                error={errors.username?.message}
                onChangeText={(text) => {
                  clearErrors('username')
                  handleChangeText('username', text)
                }}
              />
            </Box>

            <CustomInput
              ref={passwordInputRef}
              label="Senha"
              rightIcon={
                showPassword
                  ? 'eye-off'
                  : 'eye'
              }
              secureTextEntry={!showPassword}
              rightIconOnPress={handlePressEye}
              onSubmitEditing={handleSubmit(handleSubmitLogin)}
              error={errors.password?.message}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => {
                clearErrors('password')
                handleChangeText('password', text)
              }}
              returnKeyType="send"
            />

            <Button
              size="lg"
              variant="solid"
              action="primary"
              className="bg-info-700 mt-7"
              onPress={handleSubmit(handleSubmitLogin)}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? (
                  <ButtonSpinner />
                )
                :
                (
                  <ButtonText className="font-bold">Entrar</ButtonText>
                )
              }
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
