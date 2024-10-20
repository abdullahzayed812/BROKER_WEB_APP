import React from "react";
import { Text, Pressable } from "react-native";

interface TagButtonProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

export const TagButton: React.FC<TagButtonProps> = ({
  label,
  isSelected,
  onPress,
}) => (
  <Pressable
    onPress={onPress}
    className={`py-2 px-4 rounded-full mr-2 mb-2 ${
      isSelected ? "bg-blue-100" : "bg-gray-100"
    }`}
  >
    <Text className={isSelected ? "text-blue-500" : "text-gray-500"}>
      {label}
    </Text>
  </Pressable>
);
