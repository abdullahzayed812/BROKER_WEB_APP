import React from "react";
import { View, Text, Pressable } from "react-native";

interface RadioButtonProps {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  isSelected,
  onSelect,
}) => (
  <Pressable onPress={onSelect} className="flex-row items-center mb-4">
    <View
      className={`w-6 h-6 rounded-full border-2 ${
        isSelected ? "border-blue-500" : "border-gray-300"
      } mr-2 items-center justify-center`}
    >
      {isSelected && <View className="w-4 h-4 rounded-full bg-blue-500" />}
    </View>
    <Text>{label}</Text>
  </Pressable>
);
