import { Tabs } from "expo-router"
const { Screen } = Tabs

export default function Layout() {
  return (<Tabs screenOptions={{}}>
    <Screen name="index" />
    <Screen name="sing-up" />
  </Tabs>)
}