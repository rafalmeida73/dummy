import { Tabs } from 'expo-router'
const { Screen } = Tabs

export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'red',
        borderTopWidth: 0,
      },
    }}
    >
      <Screen
        name="products_list"
      />
    </Tabs>
  )
}
