import { ProductCard } from '@/components/ProductCard'
import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ProductsList = () => {
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
          style={{ borderBottomWidth: 3 }}
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
          style={{ borderBottomWidth: 0 }}
        >
          <ButtonText size="md" className="text-primary-950 font-bold">
            Produtos Femininos
          </ButtonText>
        </Button>
      </Box>

      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={[1, 2, 3]}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <ProductCard />
          )
        }}
        ItemSeparatorComponent={() => (
          <Box className="h-5" />
        )}
        contentContainerStyle={{
          padding: 30,
        }}
        style={{
          flex: 1,
          height: '100%',
        }}
        showsVerticalScrollIndicator={false}
      />

    </Box>
  )
}

export default ProductsList
