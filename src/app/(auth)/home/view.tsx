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

export const ProductsListView = ({
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

    </Box>
  )
}

