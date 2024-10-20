import React from "react";
import { View, Text, Pressable } from "react-native";

interface ToggleButtonProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  options,
  selectedOption,
  onSelect,
}) => (
  <View className="flex-row bg-gray-100 rounded-full p-1">
    {options.map((option) => (
      <Pressable
        key={option}
        onPress={() => onSelect(option)}
        className={`flex-1 py-2 px-4 rounded-full ${
          selectedOption === option ? "bg-white" : ""
        }`}
      >
        <Text
          className={`text-center ${
            selectedOption === option
              ? "text-blue-500 font-bold"
              : "text-gray-500"
          }`}
        >
          {option}
        </Text>
      </Pressable>
    ))}
  </View>
);
