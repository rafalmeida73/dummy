import { Tabs } from 'expo-router'
const { Screen } = Tabs

export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
    }}
    >
      <Screen
        name="products_list"
      />
    </Tabs>
  )
}
