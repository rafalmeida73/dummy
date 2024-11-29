import { Stack } from 'expo-router'
const { Screen } = Stack

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="product"
      />
    </Stack>
  )
}
