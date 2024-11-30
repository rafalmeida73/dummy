import { buildIcon } from '@/utils/TabBar/buildicon'
import { buildLabel } from '@/utils/TabBar/buildLabel'
import { TabBarIconLabel } from '@/utils/TabBar/enum'
import { Tabs } from 'expo-router'
const { Screen } = Tabs

export default function Layout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        width: '100%',
      },
      tabBarIcon: ({ focused, color }) => {
        return buildIcon(focused, route.name as keyof typeof TabBarIconLabel)
      },
      tabBarLabel: ({ focused, color }) => {
        return buildLabel(focused, route.name as keyof typeof TabBarIconLabel)
      },
    })}
    >
      <Screen
        name="product"
      />
      <Screen
        name="home"
      />
    </Tabs>
  )
}
