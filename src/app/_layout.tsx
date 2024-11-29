import { Stack } from 'expo-router'
import '@/global.css'
const { Screen } = Stack
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider'

export default function Layout() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode="light">
        <Stack screenOptions={{
          headerShown: false,
        }}
        >
          <Screen name="(signIn)" />
          <Screen
            name="(auth)"
          />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  )
}
