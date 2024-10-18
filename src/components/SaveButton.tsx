import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SaveButton: React.FC = () => {
  return (
    <TouchableOpacity className="absolute bottom-20 left-1/2 -ml-16 bg-white rounded-full py-2 px-8 flex-row items-center justify-center shadow-md">
      <Ionicons name="heart-outline" size={20} color="#007AFF" />
      <Text className="text-primary font-semibold ml-2">Save</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;
