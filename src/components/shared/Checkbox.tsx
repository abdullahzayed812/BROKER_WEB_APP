import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  isChecked,
  onToggle,
}) => (
  <Pressable onPress={onToggle} className="flex-row items-center mb-4">
    <View
      className={`w-6 h-6 rounded border-2 ${
        isChecked ? "bg-blue-500 border-blue-500" : "border-gray-300"
      } mr-2 items-center justify-center`}
    >
      {isChecked && <Ionicons name="checkmark" size={18} color="white" />}
    </View>
    <Text>{label}</Text>
  </Pressable>
);