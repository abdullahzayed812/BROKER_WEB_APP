import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Tab = "Requests" | "Inventory";

export function MyAdsTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Requests");
  const [searchQuery, setSearchQuery] = useState("");
  const [requestCount, setRequestCount] = useState(45);

  const handleTabPress = (tab: Tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    // Implement search logic here
  };

  const handleFilter = () => {
    console.log("Opening filter options...");
    // Implement filter logic here
  };

  const handleSort = () => {
    console.log("Sorting requests...");
    // Implement sorting logic here
  };

  return (
    <SafeAreaView className="md:hidden flex flex-1 bg-white">
      <View className="flex-row border-b border-gray-200">
        <TouchableOpacity
          className={`flex-1 py-4 items-center justify-center ${
            activeTab === "Requests" ? "border-b-2 border-blue-500" : ""
          }`}
          onPress={() => handleTabPress("Requests")}
        >
          <Text
            className={`${
              activeTab === "Requests"
                ? "text-blue-500 font-semibold"
                : "text-gray-400"
            }`}
          >
            My Requests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-4 items-center justify-center ${
            activeTab === "Inventory" ? "border-b-2 border-blue-500" : ""
          }`}
          onPress={() => handleTabPress("Inventory")}
        >
          <Text
            className={`${
              activeTab === "Inventory"
                ? "text-blue-500 font-semibold"
                : "text-gray-400"
            }`}
          >
            My Inventory
          </Text>
        </TouchableOpacity>
      </View>
      <View className="p-4">
        <View className="flex-row items-center bg-gray-100 rounded-lg">
          <View className="p-2">
            <Ionicons name="search-outline" size={20} color="#9CA3AF" />
          </View>
          <TextInput
            className="flex-1 py-2 px-3"
            placeholder="Search Requests"
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <TouchableOpacity
            className="p-2 bg-blue-500 rounded-lg mr-1"
            onPress={handleFilter}
          >
            <Ionicons name="options-outline" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row justify-between items-center px-4 py-2">
        <Text className="text-sm text-gray-600">{requestCount} Requests</Text>
        <TouchableOpacity onPress={handleSort} className="p-2">
          <Ionicons name="swap-vertical-outline" size={18} color="#4B5563" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
