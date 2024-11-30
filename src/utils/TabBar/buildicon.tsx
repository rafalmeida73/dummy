import { Box } from "@/components/ui/box";
import { House } from 'lucide-react-native';
import { Settings } from 'lucide-react-native';
import {  TabBarIconLabel } from "./enum";

export const buildIcon = (
  focused: boolean,
  tabName: keyof typeof TabBarIconLabel,
) => {
  const isfocused = focused ? "#1a73e8" : "#5f6368";

  return (
    <Box className="w-full">
      {tabName === 'product' ? <House color={isfocused}/> : <Settings color={isfocused}/>}
    </Box>
  );
}
