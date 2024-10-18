import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HeaderWeb: React.FC = () => {
  return (
    <View className="flex-row items-center">
      {/* Logo */}
      <Logo />
      {/* Nav Links */}
      {/* Nav Settings */}
    </View>
  );
};

export const Logo: React.FC = () => {
  return (
    <View>
      <Ionicons name="home-outline" size={16} color="gray" />
      <Text>Side-by-Side</Text>
    </View>
  );
};
