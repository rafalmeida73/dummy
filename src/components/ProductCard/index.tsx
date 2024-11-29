import { Link } from 'expo-router'
import { Box } from '../ui/box'
import { Heading } from '../ui/heading'
import { Image } from '../ui/image'
import { Text } from '../ui/text'
import { IProductCategoryProps } from './types'
import { formatedPrice } from '@/utils/intl/formatMoney'

export const ProductCard = ({ title, images, description, price, discountPercentage, priceWithDiscount }: IProductCategoryProps) => {
  return (
    <Link
      href="/(signIn)"
      style={{
        width: '48%',
      }}
    >
      <Box className="border-2 border-primary-0 rounded-lg ">
        <Image
          source={{
            uri: `${images[0]}`,
          }}
          alt="Logo"
          size="none"
          className="aspect-[320/200] w-full border-b-2 border-primary-0 "
          resizeMode="contain"

        />
        <Box className="p-5">
          <Heading size="md" numberOfLines={2} className="text-primary-950 font-bold mb-3 h-16">
            {title}
          </Heading>

          <Text numberOfLines={15} className='h-64'>
            {description}
          </Text>

          <Box className="flex-row items-center mt-5 flex-wrap h-10">
            <Heading size="sm" className="text-primary-950 font-bold mr-2">
              {formatedPrice(priceWithDiscount)}
            </Heading>

            {discountPercentage > 0 && (
              <Text size="xs" className="line-through">
                {formatedPrice(price)}
              </Text>
            )}
          </Box>
        </Box>
      </Box>
    </Link>
  )
}
