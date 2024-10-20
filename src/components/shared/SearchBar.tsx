import React, { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TabSelector from "./TabSelector";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("Requests");

  return (
    <View className="md:flex hidden">
      <View className="flex-1 flex-row mb-8">
        <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />

        <View className="flex-1 flex-row ml-4  items-center pl-3 bg-white mr-8 rounded-lg border border-gray-300">
          <Ionicons name="search" size={20} color="#000" />
          <TextInput
            placeholder="Search Location"
            className="flex-1 ml-2 py-2"
          />
        </View>
        <Pressable className="bg-gray-200 px-8 py-2  rounded-lg border border-gray-300 flex-row items-center">
          <Text className="mr-2">Filters</Text>
          <Ionicons name="chevron-down" size={20} color="#000" />
        </Pressable>
      </View>
    </View>
  );
}
