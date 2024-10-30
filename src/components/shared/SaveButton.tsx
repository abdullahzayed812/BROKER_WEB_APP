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
      className={`md:hidden flex absolute bottom-[90px] w-[120px] flex-row items-center justify-center self-center py-3 rounded-full border border-primary_500 bg-primary_50`}
      style={{
        gap: 12,
      }}
    >
      <Ionicons
        name={saved ? "heart" : "heart-outline"}
        size={18}
        color="#0078FF"
      />
      <Text className="text-primary_500 font-semibold">Save</Text>
    </TouchableOpacity>
  );
}
