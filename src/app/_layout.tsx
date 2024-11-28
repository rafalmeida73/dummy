import { Stack } from 'expo-router'
import '@/global.css'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
const { Screen } = Stack
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export default function Layout() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode="light">
        <Stack>
          <Screen name="index" />
          <Screen
            name="(auth)" options={{
              headerShown: false,
            }}
          />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  )
}
