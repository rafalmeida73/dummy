import { Box } from '@/components/ui/box'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAddOrUpdateProductModel } from './model'
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button';
import { CustomModal } from '@/components/CustomModal';
import { CustomInput } from '@/components/CustomInput';
import { useRef } from 'react';
import { TextInput } from 'react-native';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { ChevronLeft } from 'lucide-react-native';
import { Heading } from '@/components/ui/heading';

export const AddOrUpdateProductView = ({
  product,
  handleGoBack,
  handleOpenCloseModal,
  showModal,
  hasProduct,
  form,
  handleChangeText,
  handleSubmitForm,
}: ReturnType<typeof useAddOrUpdateProductModel>) => {
  const nameInputRef = useRef<TextInput>(null)
  const descriptionInputRef = useRef<TextInput>(null)
  const priceInputRef = useRef<TextInput>(null)
  const discountInputRef = useRef<TextInput>(null)
  const imageInputRef = useRef<TextInput>(null)

  const insets = useSafeAreaInsets()

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    clearErrors,
  } = form

  return (
    <>
      <Box className="flex-1 justify-between" style={{ paddingTop: insets.top }}>
        <Box className='px-5'>
          <Box className='mb-8 '>
            <HStack space='md' className="items-center">
              <Pressable
                onPress={handleGoBack}
              >
                <Icon as={ChevronLeft} className="text-primary-950" size="xl" />
              </Pressable>
              <Heading size='2xl'>
                {hasProduct ? "Editar produto" : "Adicionar produto"}
              </Heading>
            </HStack>
          </Box>

          <Box className="mb-6">
            <CustomInput
              ref={nameInputRef}
              label="Nome"
              returnKeyType="next"
              error={errors.title?.message}
              onChangeText={(text) => {
                clearErrors('title')
                handleChangeText('title', text)
              }}
              defaultValue={product?.title}
              onSubmitEditing={() => {
                descriptionInputRef!.current!.focus()
              }}
            />
          </Box>

          <Box className="mb-6">
            <CustomInput
              ref={descriptionInputRef}
              label="Descrição"
              returnKeyType="next"
              error={errors.description?.message}
              onChangeText={(text) => {
                clearErrors('description')
                handleChangeText('description', text)
              }}
              defaultValue={product?.description}
              onSubmitEditing={() => {
                priceInputRef!.current!.focus()
              }}
            />
          </Box>

          <Box className="mb-6">
            <CustomInput
              ref={priceInputRef}
              label="Preço (R$)"
              returnKeyType="next"
              error={errors.price?.message}
              onChangeText={(text) => {
                clearErrors('price')
                handleChangeText('price', text)
              }}
              keyboardType='numeric'
              defaultValue={product?.price?.toString?.()}
              onSubmitEditing={() => {
                discountInputRef!.current!.focus()
              }}
            />
          </Box>

          <Box className="mb-6">
            <CustomInput
              ref={discountInputRef}
              label="Desconto (%)"
              returnKeyType="next"
              error={errors.discountPercentage?.message}
              onChangeText={(text) => {
                clearErrors('discountPercentage')
                handleChangeText('discountPercentage', text)
              }}
              keyboardType='numeric'
              defaultValue={(product?.discountPercentage)?.toString?.()}
              onSubmitEditing={() => {
                imageInputRef!.current!.focus()
              }}
            />
          </Box>

          <Box className="mb-6">
            <CustomInput
              ref={imageInputRef}
              label="URL da imagem"
              returnKeyType="send"
              error={errors.image?.message}
              onChangeText={(text) => {
                clearErrors('image')
                handleChangeText('image', text)
              }}
              defaultValue={product?.images?.[0]}
              onSubmitEditing={handleSubmit(handleSubmitForm)}
            />
          </Box>
        </Box>

        <Box className="px-5">
          <Button
            size="lg"
            variant="solid"
            action="primary"
            className="bg-info-700 mb-7"
            onPress={handleOpenCloseModal}
          >
            <ButtonText className="font-bold">Salvar</ButtonText>
          </Button>
        </Box>
      </Box>

      <CustomModal handleClose={handleOpenCloseModal} showModal={showModal} title="Editar produto" footer={
        <Box>
          <HStack space='md'>
            <Button
              size="lg"
              variant="outline"
              action="primary"
              onPress={handleOpenCloseModal}
            >
              <ButtonText className="font-bold">Cancelar</ButtonText>
            </Button>

            <Button
              size="lg"
              variant="solid"
              action="primary"
              className="bg-info-700"
              onPress={handleSubmit(handleSubmitForm)}
            >
              {isSubmitting ?
                (
                  <ButtonSpinner />
                )
                :
                (
                  <ButtonText className="font-bold">Editar</ButtonText>
                )
              }
              <ButtonText className="font-bold">Editar</ButtonText>
            </Button>
          </HStack>
        </Box>
      }>
        <Text size='lg' numberOfLines={15} className='mt-3'>
          Você tem certeza que deseja editar esse produto? Essa ação não poderá ser desfeita.
        </Text>
      </CustomModal>

    </>
  )
}

