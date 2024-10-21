import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FavoritesRequestSummaryProps {
  requestCount: number;
  handleSort: () => void;
}

export const FavoritesRequestSummary: React.FC<
  FavoritesRequestSummaryProps
> = ({ requestCount, handleSort }) => {
  return (
    <View className="flex-row justify-between items-center py-2 px-4">
      <Text className="text-sm text-gray-600">{requestCount} Requests</Text>
      <TouchableOpacity
        onPress={handleSort}
        className="flex-row  items-center p-2"
        style={{ gap: 8 }}
        accessibilityLabel="Sort requests"
      >
        <Text>Sort</Text>
        <Ionicons name="arrow-down" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
