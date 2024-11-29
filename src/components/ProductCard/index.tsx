import { Link } from 'expo-router'
import { Box } from '../ui/box'
import { Heading } from '../ui/heading'
import { Image } from '../ui/image'
import { Text } from '../ui/text'

export const ProductCard = () => {
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
            uri: 'https://gluestack.github.io/public-blog-video-assets/mountains.png',
          }}
          alt="Logo"
          size="none"
          className="aspect-[320/200] w-full  border-b-2"
          resizeMode="cover"
        />
        <Box className="p-5">
          <Heading size="md" className="text-primary-950 font-bold mb-3">
            Título
          </Heading>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          </Text>

          <Box className="flex-row items-center mt-5">
            <Heading size="sm" className="text-primary-950 font-bold mr-2">
              R$ 100,00
            </Heading>
            <Text size="xs" className="line-through">
              R$ 150,00
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}
