import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import {  TabBarIconLabel } from "./enum";

export const buildLabel = (
  focused: boolean,
  tabName: keyof typeof TabBarIconLabel,
) => {
  const isfocused = "text-info-700";

  return (
    
    <Box className="w-full ">
      <Text className={`w-full text-center ${focused && isfocused}`}>{TabBarIconLabel[tabName]}</Text>
    </Box>
  );
}
