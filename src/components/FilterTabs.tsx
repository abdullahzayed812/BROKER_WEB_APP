import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

interface FilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = ["All", "For you", "Urgent", "Resale"];

  return (
    <View className="mb-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-2"
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabChange(tab)}
            className={`px-4 py-2 mr-2 rounded-full ${
              activeTab === tab ? "bg-gray-200" : "bg-transparent"
            }`}
          >
            <Text
              className={`${
                activeTab === tab ? "text-black" : "text-gray-600"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View className="flex-row justify-between items-center">
        <Text className="text-gray-600">3,488 Properties</Text>
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Text className="text-blue-500 mr-2">Saved Searches</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-blue-500">Sort</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FilterTabs;
