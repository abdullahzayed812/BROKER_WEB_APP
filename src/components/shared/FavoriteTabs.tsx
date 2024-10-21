import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesRequestSummary } from "./FavoritesRequestSummary";

type Tab = "Requests" | "Inventory";

export function FavoritesTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Requests");
  const [requestCount, setRequestCount] = useState(45);

  const handleTabPress = (tab: Tab) => {
    setActiveTab(tab);
  };

  const handleSort = () => {
    console.log("Sorting requests...");
    // Implement sorting logic here
  };

  return (
    <View className="w-full max-w-md mx-auto">
      <View className="flex-row border-b border-gray-200">
        <TouchableOpacity
          className={`flex-1 py-2 px-4 items-center justify-center ${
            activeTab === "Requests" ? "border-b-2 border-blue-500" : ""
          }`}
          onPress={() => handleTabPress("Requests")}
        >
          <Text
            className={`${
              activeTab === "Requests"
                ? "text-blue-500 font-medium"
                : "text-gray-500"
            }`}
          >
            Requests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-2 px-4 items-center justify-center ${
            activeTab === "Inventory" ? "border-b-2 border-blue-500" : ""
          }`}
          onPress={() => handleTabPress("Inventory")}
        >
          <Text
            className={`${
              activeTab === "Inventory"
                ? "text-blue-500 font-medium"
                : "text-gray-500"
            }`}
          >
            Inventory
          </Text>
        </TouchableOpacity>
      </View>

      <FavoritesRequestSummary
        requestCount={requestCount}
        handleSort={handleSort}
      />
    </View>
  );
}
