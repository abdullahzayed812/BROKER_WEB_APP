import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CheckAuthSectionProps {
  description: string;
}

export const CheckAuthSection: React.FC<CheckAuthSectionProps> = ({
  description,
}) => {
  return (
    <View className="bg-primary_50 p-6 rounded-lg my-4">
      <Text className="text-[14px] font-semibold text-gray_700 mb-4">
        Sign in or register to {description}
      </Text>

      <View className="flex-row items-center self-center" style={{ gap: 18 }}>
        <TouchableOpacity
          className="flex-row items-center bg-primary_500 px-6 py-2 rounded-lg"
          style={{ gap: 8 }}
          onPress={() => {}}
        >
          <FontAwesome name="sign-in" size={20} color="white" />
          <Text className={`text-center font-semibold text-white`}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center bg-white px-6 py-2 rounded-lg"
          style={{ gap: 8 }}
          onPress={() => {}}
        >
          <Ionicons name="person-add" size={24} color="#0078FF" />
          <Text className={`text-center font-semibold text-primary_500`}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
