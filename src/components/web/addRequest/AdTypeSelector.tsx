import React from "react";
import { View, Text, Pressable } from "react-native";

type AdTypeSelectorProps = {
  adType: string;
  setAdType: (type: string) => void;
};

export default function AdTypeSelector({
  adType,
  setAdType,
}: AdTypeSelectorProps) {
  return (
    <View className="mb-4">
      <Text className="mb-2 font-medium">Select Ad Type</Text>
      <View className="flex-row">
        <Pressable
          onPress={() => setAdType("Request")}
          className={`flex-1 py-2 rounded-l-full ${
            adType === "Request" ? "bg-blue-100" : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-center ${
              adType === "Request" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Request
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setAdType("Inventory")}
          className={`flex-1 py-2 rounded-r-full ${
            adType === "Inventory" ? "bg-blue-100" : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-center ${
              adType === "Inventory" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Inventory
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
