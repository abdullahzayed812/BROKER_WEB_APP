import React, { useState } from "react";
import { View, Text, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

import FilterTabs from "@/components/FilterTabs";
import PropertyList from "@/components/PropertyList";
import SearchBar from "@/components/SearchBar";

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState("Inventory");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Header />
      <ScrollView className="flex-1">
        <View className="px-4 py-2">
          <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
          <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <PropertyList />
        </View>
      </ScrollView>
      {Platform.OS !== "web" && <View className="h-16" />}
    </SafeAreaView>
  );
}
