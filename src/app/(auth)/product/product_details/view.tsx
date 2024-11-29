import { Box } from '@/components/ui/box'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useProductsDetailsModel } from './model'
import { Icon } from '@/components/ui/icon'
import { ChevronLeft } from 'lucide-react-native';
import { Pressable } from '@/components/ui/pressable';
import { Image } from '@/components/ui/image';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { formatedPrice } from '@/utils/intl/formatMoney';
import { Text } from '@/components/ui/text';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Trash } from 'lucide-react-native';
import { Pencil } from 'lucide-react-native';
import { CustomModal } from '@/components/CustomModal';

export const ProductsDetailsView = ({
  product,
  handleGoBack,
  priceWithDiscount,
  handleOpenCloseModal,
  showModal,
  handleRedirectToEditProduct,
  handleDeleteProduct
}: ReturnType<typeof useProductsDetailsModel>) => {
  const insets = useSafeAreaInsets()

  return (
    <>
      <Box className="flex-1 justify-between" style={{ paddingTop: insets.top }}>
        <Box>
          <Box className="px-5" >
            <Pressable

              onPress={handleGoBack}
            >
              <Icon as={ChevronLeft} className="text-primary-950" size="xl" />
            </Pressable>
          </Box>

          <Image
            source={{
              uri: `${product.images[0]}`,
            }}
            alt={product.thumbnail}
            size="none"
            className="aspect-[320/200] w-full"
            resizeMode="contain"

          />

          <Box className="mt-3 px-5" >
            <Heading size="3xl" className="text-primary-950 font-bold mt-5">
              {product.title}
            </Heading>

            <HStack space="sm" className="mt-4 items-center ">
              <Heading size="lg" className="text-red-700 font-bold ">
                {formatedPrice(priceWithDiscount)}
              </Heading>

              {product?.discountPercentage > 0 && (
                <Text size="md" className="line-through font-bold">
                  {formatedPrice(product.price)}
                </Text>
              )}
            </HStack>

            <Text size='md' numberOfLines={15} className='h-64 mt-3'>
              {product.description}
            </Text>
          </Box>
        </Box>

        <Box className="px-5">
          <Button
            size="lg"
            variant="solid"
            action="primary"
            className="bg-info-700 mb-7"
            onPress={handleRedirectToEditProduct}
          >
            <ButtonText className="font-bold">Editar</ButtonText>
            <ButtonIcon as={Pencil} />
          </Button>

          <Button
            size="lg"
            variant="solid"
            action="primary"
            className="bg-red-500 mb-5"
            onPress={handleOpenCloseModal}
          >
            <ButtonText className="font-bold">Excluir</ButtonText>
            <ButtonIcon as={Trash} />
          </Button>
        </Box>
      </Box>

      <CustomModal handleClose={handleOpenCloseModal} showModal={showModal} title="Excluir produto" footer={
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
              className="bg-red-500"
              onPress={handleDeleteProduct}
            >
              <ButtonText className="font-bold">Excluir</ButtonText>
            </Button>
          </HStack>
        </Box>
      }>
        <Text size='lg' numberOfLines={15} className=' mt-3'>
          Você tem certeza que deseja excluir esse produto? Essa ação não poderá ser desfeita.
        </Text>
      </CustomModal>

    </>
  )
}

