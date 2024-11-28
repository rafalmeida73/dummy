import { Stack } from "expo-router"
const { Screen } = Stack

export default function Layout() {
  return (
    <Stack screenOptions={{}}>
      <Screen name="index" />
      <Screen name="sing-up" />
      <Screen name="(auth)" options={{
        headerShown: false
      }} />
    </Stack>
  )
}