import { ProductCard } from '@/components/ProductCard'
import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useProductListModel } from './model'
import { Spinner } from '@/components/ui/spinner'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'

const ProductsListView = ({
  productsData,
  handleChageCategory,
  selectedCategory,
  isRefetching
}: ReturnType<typeof useProductListModel>) => {
  const insets = useSafeAreaInsets()

  return (
    <Box
      className="flex-1 bg-secondary-0" style={{ paddingTop: insets.top }}
    >
      <StatusBar style="dark" />

      <Box className="flex-row">
        <Button
          size="lg"
          variant="solid"
          action="primary"
          className="bg-secondary-0 border-info-700 border-r-0 w-1/2"
          style={{ borderBottomWidth: selectedCategory === 'men' ? 3 : 0 }}
          onPress={() => {
            handleChageCategory("men")
          }}
        >
          <ButtonText size="md" className="text-primary-950 font-bold">
            Produtos Masculinos
          </ButtonText>
        </Button>

        <Button
          size="lg"
          variant="solid"
          action="primary"
          className="bg-secondary-0 border-info-700 border-r-0 w-1/2"
          style={{ borderBottomWidth: selectedCategory !== 'men' ? 3 : 0 }}
          onPress={() => {
            handleChageCategory("woman")
          }}
        >
          <ButtonText size="md" className="text-primary-950 font-bold">
            Produtos Femininos
          </ButtonText>
        </Button>
      </Box>

      {isRefetching ? (
        <Box className="flex-1 h-screen justify-center items-center" >
          <HStack space="sm">
            <Spinner />
          </HStack>
        </Box>
      ) : (
        <FlatList
          keyExtractor={(item) => item?.id?.toString()}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={productsData?.products}
          numColumns={2}
          renderItem={({ item }) => {
            const priceWithDiscount = item.price - (item.price * item?.discountPercentage || 0) / 100

            return (
              <ProductCard priceWithDiscount={priceWithDiscount} {...item} />
            )
          }}
          ItemSeparatorComponent={() => (
            <Box className="h-5" />
          )}
          contentContainerStyle={{
            padding: 30,
          }}
          ListEmptyComponent={() => (
            <Box className="flex-1 h-screen justify-center items-center" >
              <HStack space="sm">
                <Text size="md">Nenhum produto encontrado</Text>
              </HStack>
            </Box>
          )}
          style={{
            flex: 1,
            height: '100%',
          }}
          showsVerticalScrollIndicator={false}
        />
      )}



    </Box>
  )
}

export default ProductsListView
