import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SaveButtonProps {
  onPress: () => void;
  saved?: boolean;
}

export default function SaveButton({
  onPress,
  saved = false,
}: SaveButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`absolute w-[120px] flex-row items-center justify-center self-center px-4 py-2 rounded-full ${
        saved ? "bg-blue-100" : "bg-white"
      } border border-blue-500`}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Ionicons
        name={saved ? "heart" : "heart-outline"}
        size={16}
        color="#3B82F6"
        style={{ marginRight: 4 }}
      />
      <Text className="text-blue-500 font-medium">Save</Text>
    </TouchableOpacity>
  );
}
